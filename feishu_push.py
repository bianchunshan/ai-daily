#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
飞书推送脚本 - 前沿科技日报
支持：
1. 突发新闻实时推送
2. 每日早报汇总推送
3. 按板块分类推送
4. 推送内容包含标题、摘要、来源、链接

使用方法:
    python feishu_push.py --mode breaking     # 突发新闻推送
    python feishu_push.py --mode daily        # 每日早报推送
    python feishu_push.py --mode category     # 按板块分类推送
    python feishu_push.py --mode category --category 人工智能  # 指定板块推送
"""

import json
import argparse
import requests
import os
from datetime import datetime, timedelta
from typing import List, Dict, Optional
from dataclasses import dataclass, asdict
from pathlib import Path

# 配置
FEISHU_WEBHOOK_URL = os.getenv("FEISHU_WEBHOOK_URL", "")
FEISHU_APP_ID = os.getenv("FEISHU_APP_ID", "")
FEISHU_APP_SECRET = os.getenv("FEISHU_APP_SECRET", "")

# 新闻数据文件路径
NEWS_DATA_FILE = Path(__file__).parent / "news-data.json"
REALTIME_NEWS_FILE = Path(__file__).parent / "realtime-news.json"
ALL_NEWS_DATA_FILE = Path(__file__).parent / "all-news-data.json"

# 板块配置
CATEGORIES = {
    "人工智能": {"icon": "🤖", "color": "blue"},
    "半导体": {"icon": "💻", "color": "blue"},
    "新能源": {"icon": "🔋", "color": "green"},
    "生物医药": {"icon": "💊", "color": "green"},
    "商业航天": {"icon": "🚀", "color": "purple"},
    "游戏": {"icon": "🎮", "color": "orange"},
    "数字货币": {"icon": "₿", "color": "orange"},
    "核聚变": {"icon": "⚛️", "color": "red"},
    "量子计算": {"icon": "🔮", "color": "purple"},
    "机器人": {"icon": "🦾", "color": "blue"},
    "国际局势": {"icon": "🌍", "color": "red"},
    "消费电子": {"icon": "📱", "color": "blue"},
}


@dataclass
class NewsItem:
    """新闻条目"""
    id: int
    title: str
    category: str
    tag: str
    time: str
    content: str
    stocks: List[str]
    sources: List[Dict[str, str]]
    views: str = ""
    
    def to_dict(self):
        return asdict(self)


class FeishuPusher:
    """飞书推送器"""
    
    def __init__(self, webhook_url: str = None):
        self.webhook_url = webhook_url or FEISHU_WEBHOOK_URL
        self.access_token = None
        
    def _get_access_token(self) -> str:
        """获取飞书访问令牌 (用于API方式)"""
        if not FEISHU_APP_ID or not FEISHU_APP_SECRET:
            return None
            
        url = "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal"
        headers = {"Content-Type": "application/json"}
        data = {
            "app_id": FEISHU_APP_ID,
            "app_secret": FEISHU_APP_SECRET
        }
        
        try:
            response = requests.post(url, headers=headers, json=data, timeout=10)
            result = response.json()
            if result.get("code") == 0:
                self.access_token = result.get("tenant_access_token")
                return self.access_token
        except Exception as e:
            print(f"获取access_token失败: {e}")
        return None
    
    def send_webhook(self, message: Dict) -> bool:
        """通过Webhook发送消息"""
        if not self.webhook_url:
            print("错误: 未配置飞书Webhook URL")
            print("请设置环境变量: FEISHU_WEBHOOK_URL")
            return False
        
        try:
            headers = {"Content-Type": "application/json"}
            response = requests.post(
                self.webhook_url, 
                headers=headers, 
                json=message, 
                timeout=10
            )
            result = response.json()
            
            if result.get("code") == 0:
                print("✅ 消息推送成功")
                return True
            else:
                print(f"❌ 推送失败: {result.get('msg')}")
                return False
                
        except Exception as e:
            print(f"❌ 推送异常: {e}")
            return False
    
    def build_text_message(self, content: str, title: str = None) -> Dict:
        """构建文本消息"""
        if title:
            content = f"**{title}**\n\n{content}"
        return {
            "msg_type": "text",
            "content": {
                "text": content
            }
        }
    
    def build_rich_text_message(self, title: str, content: List[Dict]) -> Dict:
        """构建富文本消息"""
        return {
            "msg_type": "post",
            "content": {
                "post": {
                    "zh_cn": {
                        "title": title,
                        "content": content
                    }
                }
            }
        }
    
    def build_interactive_message(self, card: Dict) -> Dict:
        """构建交互式卡片消息"""
        return {
            "msg_type": "interactive",
            "card": card
        }


class NewsFetcher:
    """新闻获取器"""
    
    @staticmethod
    def load_json_file(file_path: Path) -> Dict:
        """加载JSON文件"""
        try:
            if file_path.exists():
                with open(file_path, 'r', encoding='utf-8') as f:
                    return json.load(f)
        except Exception as e:
            print(f"加载文件失败 {file_path}: {e}")
        return {}
    
    @staticmethod
    def parse_news_item(item: Dict) -> NewsItem:
        """解析新闻条目"""
        return NewsItem(
            id=item.get("id", 0),
            title=item.get("title", ""),
            category=item.get("category", ""),
            tag=item.get("tag", ""),
            time=item.get("time", ""),
            content=item.get("content", ""),
            stocks=item.get("stocks", []),
            sources=item.get("sources", []),
            views=item.get("views", "")
        )
    
    def get_breaking_news(self, hours: int = 4) -> List[NewsItem]:
        """获取突发新闻 (最近N小时)"""
        news_list = []
        
        # 从realtime-news.json获取实时新闻
        data = self.load_json_file(REALTIME_NEWS_FILE)
        
        for category, items in data.items():
            for item in items:
                news = self.parse_news_item(item)
                # 检查时间 (简单判断：包含"小时前"且数字小于指定小时数)
                time_str = news.time
                if "小时前" in time_str:
                    try:
                        hours_ago = int(time_str.replace("小时前", "").strip())
                        if hours_ago <= hours:
                            news_list.append(news)
                    except:
                        pass
                elif "分钟前" in time_str:
                    news_list.append(news)
        
        # 按时间排序
        return sorted(news_list, key=lambda x: x.id, reverse=True)[:10]
    
    def get_daily_news(self) -> List[NewsItem]:
        """获取每日新闻汇总"""
        news_list = []
        
        # 从news-data.json获取主要新闻
        data = self.load_json_file(NEWS_DATA_FILE)
        for item in data.get("news", []):
            news_list.append(self.parse_news_item(item))
        
        return news_list
    
    def get_category_news(self, category: str = None) -> Dict[str, List[NewsItem]]:
        """按板块获取新闻"""
        result = {}
        
        # 从realtime-news.json获取分类新闻
        data = self.load_json_file(REALTIME_NEWS_FILE)
        
        if category:
            # 获取指定板块
            items = data.get(category, [])
            result[category] = [self.parse_news_item(item) for item in items]
        else:
            # 获取所有板块
            for cat, items in data.items():
                result[cat] = [self.parse_news_item(item) for item in items]
        
        return result


class PushService:
    """推送服务"""
    
    def __init__(self):
        self.pusher = FeishuPusher()
        self.fetcher = NewsFetcher()
    
    def _build_news_card(self, news: NewsItem, index: int = 1) -> Dict:
        """构建单条新闻卡片元素"""
        cat_config = CATEGORIES.get(news.category, {"icon": "📰", "color": "default"})
        icon = cat_config["icon"]
        
        # 构建来源链接
        source_links = []
        for source in news.sources[:2]:  # 最多显示2个来源
            source_links.append({
                "tag": "a",
                "text": source.get("name", "来源"),
                "href": source.get("url", "#")
            })
            source_links.append({"tag": "text", "text": " | "})
        
        if source_links:
            source_links.pop()  # 移除最后一个分隔符
        
        # 摘要 (限制长度)
        summary = news.content[:120] + "..." if len(news.content) > 120 else news.content
        
        return {
            "tag": "div",
            "elements": [
                {
                    "tag": "div",
                    "elements": [
                        {"tag": "text", "text": f"{icon} ", "style": {"bold": True}},
                        {"tag": "text", "text": f"[{news.category}]", "style": {"bold": True, "color": "blue"}},
                        {"tag": "text", "text": f" {news.tag}" if news.tag else "", "style": {"color": "red"}},
                    ]
                },
                {
                    "tag": "div",
                    "elements": [
                        {"tag": "text", "text": f"{index}. {news.title}", "style": {"bold": True, "font_size": 16}}
                    ],
                    "style": {"margin_top": "8px", "margin_bottom": "8px"}
                },
                {
                    "tag": "div",
                    "elements": [
                        {"tag": "text", "text": summary, "style": {"color": "grey"}}
                    ],
                    "style": {"margin_bottom": "8px"}
                },
                {
                    "tag": "div",
                    "elements": [
                        {"tag": "text", "text": "📊 相关: ", "style": {"bold": True}},
                        {"tag": "text", "text": ", ".join(news.stocks) if news.stocks else "无"},
                        {"tag": "text", "text": f"  ·  {news.time}" if news.time else "", "style": {"color": "grey"}}
                    ]
                },
                {
                    "tag": "div",
                    "elements": [
                        {"tag": "text", "text": "🔗 来源: "},
                        *source_links
                    ],
                    "style": {"margin_top": "4px"}
                }
            ],
            "style": {
                "background_color": "white",
                "padding": "12px",
                "border_radius": "8px",
                "margin_bottom": "12px"
            }
        }
    
    def push_breaking_news(self, test_mode: bool = False) -> bool:
        """推送突发新闻"""
        print("📰 正在获取突发新闻...")
        news_list = self.fetcher.get_breaking_news(hours=4)
        
        if not news_list:
            print("暂无突发新闻")
            return True
        
        print(f"找到 {len(news_list)} 条突发新闻")
        
        # 构建卡片
        elements = []
        for i, news in enumerate(news_list[:5], 1):  # 最多推送5条
            elements.append(self._build_news_card(news, i))
        
        card = {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {
                    "tag": "plain_text",
                    "content": "🚨 突发新闻"
                },
                "subtitle": {
                    "tag": "plain_text",
                    "content": f"{datetime.now().strftime('%Y-%m-%d %H:%M')} | 共 {len(news_list)} 条"
                },
                "template": "red"
            },
            "elements": elements
        }
        
        message = self.pusher.build_interactive_message(card)
        
        if test_mode:
            print("\n=== 测试模式：消息内容 ===")
            print(json.dumps(message, ensure_ascii=False, indent=2))
            return True
        
        return self.pusher.send_webhook(message)
    
    def push_daily_report(self, test_mode: bool = False) -> bool:
        """推送每日早报"""
        print("📰 正在生成每日早报...")
        news_list = self.fetcher.get_daily_news()
        
        if not news_list:
            print("暂无新闻数据")
            return False
        
        # 按板块分组
        category_groups = {}
        for news in news_list:
            cat = news.category or "其他"
            if cat not in category_groups:
                category_groups[cat] = []
            category_groups[cat].append(news)
        
        # 构建早报内容
        today = datetime.now().strftime('%Y年%m月%d日')
        elements = []
        
        # 头条新闻 (第一条)
        if news_list:
            headline = news_list[0]
            elements.append({
                "tag": "div",
                "elements": [
                    {"tag": "text", "text": "🔥 今日头条", "style": {"bold": True, "font_size": 18, "color": "red"}},
                    {"tag": "div", "elements": [{"tag": "text", "text": ""}], "style": {"margin_top": "8px"}},
                    self._build_news_card(headline, 1)
                ]
            })
        
        # 各板块精选
        elements.append({
            "tag": "div",
            "elements": [
                {"tag": "text", "text": "📋 板块精选", "style": {"bold": True, "font_size": 16}},
            ],
            "style": {"margin_top": "16px", "margin_bottom": "12px"}
        })
        
        for category, items in list(category_groups.items())[:6]:  # 最多6个板块
            cat_config = CATEGORIES.get(category, {"icon": "📰"})
            icon = cat_config["icon"]
            
            # 板块标题
            elements.append({
                "tag": "div",
                "elements": [
                    {"tag": "text", "text": f"{icon} {category}", "style": {"bold": True, "color": "blue"}}
                ],
                "style": {"margin_top": "12px", "margin_bottom": "8px"}
            })
            
            # 该板块前3条新闻
            for i, news in enumerate(items[:3], 1):
                elements.append({
                    "tag": "div",
                    "elements": [
                        {"tag": "text", "text": f"  {i}. {news.title}", "style": {"font_size": 14}}
                    ],
                    "style": {"margin_bottom": "4px"}
                })
        
        # 统计信息
        total_news = len(news_list)
        elements.append({
            "tag": "div",
            "elements": [
                {"tag": "hr"},
                {"tag": "text", "text": f"📊 今日共收录 {total_news} 条新闻，覆盖 {len(category_groups)} 个板块", "style": {"color": "grey", "font_size": 12}}
            ],
            "style": {"margin_top": "16px"}
        })
        
        card = {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {
                    "tag": "plain_text",
                    "content": f"📰 前沿科技日报 - {today}"
                },
                "subtitle": {
                    "tag": "plain_text",
                    "content": "每日科技资讯早报"
                },
                "template": "blue"
            },
            "elements": elements
        }
        
        message = self.pusher.build_interactive_message(card)
        
        if test_mode:
            print("\n=== 测试模式：消息内容 ===")
            print(json.dumps(message, ensure_ascii=False, indent=2))
            return True
        
        return self.pusher.send_webhook(message)
    
    def push_category_news(self, category: str = None, test_mode: bool = False) -> bool:
        """推送板块新闻"""
        print(f"📰 正在获取{'指定' if category else '各'}板块新闻...")
        
        category_news = self.fetcher.get_category_news(category)
        
        if not category_news:
            print("暂无板块新闻数据")
            return False
        
        success = True
        for cat, news_list in category_news.items():
            if not news_list:
                continue
            
            cat_config = CATEGORIES.get(cat, {"icon": "📰", "color": "default"})
            icon = cat_config["icon"]
            
            print(f"  {icon} {cat}: {len(news_list)} 条")
            
            # 构建板块卡片
            elements = []
            for i, news in enumerate(news_list[:5], 1):  # 每个板块最多5条
                elements.append(self._build_news_card(news, i))
            
            card = {
                "config": {"wide_screen_mode": True},
                "header": {
                    "title": {
                        "tag": "plain_text",
                        "content": f"{icon} {cat}"
                    },
                    "subtitle": {
                        "tag": "plain_text",
                        "content": f"共 {len(news_list)} 条相关新闻"
                    },
                    "template": "blue"
                },
                "elements": elements
            }
            
            message = self.pusher.build_interactive_message(card)
            
            if test_mode:
                print(f"\n=== 测试模式：{cat} 消息内容 ===")
                print(json.dumps(message, ensure_ascii=False, indent=2))
                continue
            
            if not self.pusher.send_webhook(message):
                success = False
        
        return success


def main():
    parser = argparse.ArgumentParser(description="前沿科技日报 - 飞书推送脚本")
    parser.add_argument(
        "--mode", "-m",
        choices=["breaking", "daily", "category"],
        default="daily",
        help="推送模式: breaking=突发新闻, daily=每日早报, category=板块分类"
    )
    parser.add_argument(
        "--category", "-c",
        help="指定板块名称 (仅category模式有效)"
    )
    parser.add_argument(
        "--test", "-t",
        action="store_true",
        help="测试模式：仅输出消息内容，不实际推送"
    )
    parser.add_argument(
        "--webhook",
        help="飞书Webhook URL (覆盖环境变量)"
    )
    
    args = parser.parse_args()
    
    # 初始化服务
    service = PushService()
    
    # 设置Webhook
    if args.webhook:
        service.pusher.webhook_url = args.webhook
    
    print("=" * 50)
    print("🚀 前沿科技日报 - 飞书推送服务")
    print("=" * 50)
    print(f"模式: {args.mode}")
    print(f"时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("-" * 50)
    
    # 执行推送
    success = False
    if args.mode == "breaking":
        success = service.push_breaking_news(test_mode=args.test)
    elif args.mode == "daily":
        success = service.push_daily_report(test_mode=args.test)
    elif args.mode == "category":
        success = service.push_category_news(category=args.category, test_mode=args.test)
    
    print("-" * 50)
    if success:
        print("✅ 推送任务完成")
    else:
        print("❌ 推送任务失败")
    print("=" * 50)
    
    return 0 if success else 1


if __name__ == "__main__":
    exit(main())
