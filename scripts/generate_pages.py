#!/usr/bin/env python3
"""
前沿科技日报 - 页面生成脚本
根据数据生成静态HTML页面
"""

import json
import os
from datetime import datetime

WORK_DIR = "/root/.openclaw/workspace"
DATA_DIR = os.path.join(WORK_DIR, "data")

# HTML模板
PAGE_TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - 前沿科技日报</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="main-nav">
        <a href="index.html">首页</a>
        <a href="world.html">国际局势</a>
        <a href="ai.html">人工智能</a>
        <a href="semiconductor.html">半导体</a>
        <a href="new-energy.html">新能源</a>
        <a href="biotech.html">生物医药</a>
        <a href="robotics.html">机器人</a>
        <a href="space.html">商业航天</a>
        <a href="fusion.html">核聚变</a>
        <a href="quantum.html">量子计算</a>
        <a href="crypto.html">数字货币</a>
        <a href="game.html">游戏</a>
        <a href="search.html">🔍 搜索</a>
    </nav>
    
    <main>
        <h1>{title}</h1>
        <div class="news-list">
            {news_items}
        </div>
    </main>
    
    <footer>
        <p>前沿科技日报 | 最后更新: {update_time}</p>
    </footer>
    
    <script src="data/news-data.js"></script>
    <script src="scripts/app.js"></script>
</body>
</html>
'''

def generate_news_item(news):
    """生成单条新闻HTML"""
    return f'''
    <article class="news-item" data-id="{news['id']}">
        <h2><a href="news-detail.html?id={news['id']}">{news['title']}</a></h2>
        <p class="summary">{news.get('summary', '')}</p>
        <div class="meta">
            <span class="category">{news['category']}</span>
            <span class="time">{news['time']}</span>
            <span class="source">来源: {news['source']}</span>
        </div>
    </article>
    '''

def generate_page(category, title, news_list):
    """生成单个页面"""
    news_items = "\n".join([generate_news_item(n) for n in news_list])
    update_time = datetime.now().strftime('%Y-%m-%d %H:%M')
    
    html = PAGE_TEMPLATE.format(
        title=title,
        news_items=news_items,
        update_time=update_time
    )
    
    return html

def main():
    """主函数"""
    print("Generating pages...")
    
    # 这里应该读取实际数据并生成页面
    # 目前使用模板示例
    
    pages = {
        "index.html": ("首页", []),
        "ai.html": ("人工智能", []),
        "semiconductor.html": ("半导体", []),
        "new-energy.html": ("新能源", []),
        "world.html": ("国际局势", []),
    }
    
    for filename, (title, news) in pages.items():
        filepath = os.path.join(WORK_DIR, filename)
        html = generate_page(title, title, news)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Generated: {filename}")
    
    print("Done!")

if __name__ == "__main__":
    main()
