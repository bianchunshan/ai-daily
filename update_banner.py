#!/usr/bin/env python3
"""
前沿科技日报 - RSS 自动抓取脚本
每小时更新 Banner
每10分钟抓取新资讯
"""

import json
import re
import time
import random
import requests
import xml.etree.ElementTree as ET
from datetime import datetime
from pathlib import Path

# RSS 源配置
RSS_SOURCES = {
    "sina": {
        "name": "新浪财经",
        "url": "https://rss.sina.com.cn/roll/finance/hot_roll.xml",
        "category": "财经"
    },
    "36kr": {
        "name": "36氪",
        "url": "https://36kr.com/feed",
        "category": "科技"
    },
    "huxiu": {
        "name": "虎嗅",
        "url": "https://www.huxiu.com/rss/0.xml",
        "category": "科技商业"
    },
    "ithome": {
        "name": "IT之家",
        "url": "https://www.ithome.com/rss/",
        "category": "科技"
    },
    "wallstreetcn": {
        "name": "华尔街见闻",
        "url": "https://wallstreetcn.com/rss.xml",
        "category": "财经"
    },
    "thepaper": {
        "name": "澎湃新闻",
        "url": "https://www.thepaper.cn/rss.xml",
        "category": "新闻"
    },
    "xinhua": {
        "name": "新华社",
        "url": "http://www.xinhuanet.com/rss/rss.xml",
        "category": "官方"
    },
    "techcrunch": {
        "name": "TechCrunch",
        "url": "https://techcrunch.com/feed/",
        "category": "科技英文"
    },
    "theverge": {
        "name": "The Verge",
        "url": "https://www.theverge.com/rss/index.xml",
        "category": "科技英文"
    },
    "reuters": {
        "name": "Reuters",
        "url": "https://www.reutersagency.com/feed/?taxonomy=markets&post_type=reuters-best",
        "category": "国际财经"
    }
}

# 科技关键词过滤
TECH_KEYWORDS = [
    "AI", "人工智能", "芯片", "半导体", "GPU", "英伟达", "AMD", "台积电",
    "特斯拉", "马斯克", "机器人", "新能源", "电池", "宁德时代", "比亚迪",
    "OpenAI", "ChatGPT", "大模型", "算力", "储能", "光伏", "量子计算",
    "脑机接口", "SpaceX", "星链", "苹果", "iPhone", "微软", "谷歌", "Meta",
    "比特币", "以太坊", "区块链", "数字货币", "加密货币", "BTC", "ETH", "Web3",
    "挖矿", "矿机", "DeFi", "NFT", "元宇宙", "稳定币", "央行数字货币"
]

def log(msg):
    """记录日志"""
    print(f"[{datetime.now()}] {msg}")

def fetch_rss(url, name):
    """抓取 RSS 内容"""
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        response = requests.get(url, headers=headers, timeout=15)
        response.encoding = 'utf-8'
        
        root = ET.fromstring(response.text)
        items = root.findall('.//item')
        
        news_list = []
        for item in items[:10]:  # 取前10条
            title = item.find('title')
            link = item.find('link')
            pub_date = item.find('pubDate')
            
            if title is not None:
                title_text = title.text or ""
                # 过滤科技相关资讯
                if any(keyword in title_text for keyword in TECH_KEYWORDS):
                    news_list.append({
                        "title": title_text,
                        "link": link.text if link is not None else "",
                        "source": name,
                        "time": "刚刚"
                    })
        
        return news_list
    except Exception as e:
        log(f"抓取 {name} 失败: {e}")
        return []

def fetch_all_news():
    """从所有源抓取资讯"""
    all_news = []
    for key, source in RSS_SOURCES.items():
        news = fetch_rss(source["url"], source["name"])
        all_news.extend(news)
        log(f"从 {source['name']} 抓取到 {len(news)} 条")
    
    return all_news

def update_banner():
    """更新首页 Banner"""
    log("开始更新 Banner...")
    
    # 抓取最新资讯
    all_news = fetch_all_news()
    
    if len(all_news) < 5:
        log("抓取到的资讯不足5条，跳过更新")
        return
    
    # 随机选择5条作为 Banner
    banner_news = random.sample(all_news, 5)
    
    # 读取 index.html
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 这里简化处理，实际应该精确替换 Banner 内容
    log(f"已选择 {len(banner_news)} 条资讯作为 Banner")
    for i, news in enumerate(banner_news):
        log(f"  Banner {i+1}: {news['title'][:30]}...")
    
    # 保存到 JSON 供后续使用
    with open('banner-news.json', 'w', encoding='utf-8') as f:
        json.dump(banner_news, f, ensure_ascii=False, indent=2)

def main():
    log("=" * 50)
    log("开始 RSS 自动抓取")
    log("=" * 50)
    
    update_banner()
    
    log("=" * 50)
    log("更新完成")
    log("=" * 50)

if __name__ == "__main__":
    main()
