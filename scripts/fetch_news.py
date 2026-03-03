#!/usr/bin/env python3
"""
前沿科技日报 - RSS资讯抓取脚本
用于自动抓取最新科技资讯
"""

import feedparser
import json
import hashlib
from datetime import datetime
import requests
from bs4 import BeautifulSoup
import re

# RSS源配置
RSS_SOURCES = {
    "人工智能": [
        "https://36kr.com/feed-tech",
        "https://www.leiphone.com/feed",
    ],
    "半导体": [
        "https://www.eet-china.com/rss/",
    ],
    "新能源": [
        "https://www.evpartner.com/rss/",
    ],
    "国际局势": [
        "https://www.caixin.com/rss/",
    ]
}

def fetch_rss(url, category):
    """抓取RSS feed"""
    try:
        feed = feedparser.parse(url)
        articles = []
        
        for entry in feed.entries[:10]:  # 每个源取前10条
            article = {
                "id": hashlib.md5(entry.link.encode()).hexdigest()[:8],
                "title": entry.title,
                "link": entry.link,
                "summary": entry.get('summary', '')[:200] + '...' if len(entry.get('summary', '')) > 200 else entry.get('summary', ''),
                "published": entry.get('published', datetime.now().isoformat()),
                "category": category,
                "source": feed.feed.title if hasattr(feed.feed, 'title') else url
            }
            articles.append(article)
        
        return articles
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []

def fetch_all_news():
    """抓取所有资讯"""
    all_news = []
    
    for category, urls in RSS_SOURCES.items():
        for url in urls:
            news = fetch_rss(url, category)
            all_news.extend(news)
    
    # 按时间排序
    all_news.sort(key=lambda x: x['published'], reverse=True)
    
    return all_news

def save_news(news, output_file='data/news.json'):
    """保存资讯到文件"""
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(news, f, ensure_ascii=False, indent=2)
    print(f"Saved {len(news)} articles to {output_file}")

if __name__ == '__main__':
    print(f"[{datetime.now()}] Starting news fetch...")
    news = fetch_all_news()
    save_news(news)
    print(f"[{datetime.now()}] Done!")
