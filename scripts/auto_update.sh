#!/bin/bash
# 前沿科技日报 - 自动更新脚本
# 每小时运行一次，抓取最新资讯并部署

cd /root/.openclaw/workspace

echo "[$(date)] Starting daily update..."

# 1. 抓取最新资讯
echo "Fetching news..."
python3 scripts/fetch_news.py

# 2. 生成静态页面
echo "Generating pages..."
python3 scripts/generate_pages.py

# 3. 提交到GitHub
echo "Deploying to GitHub Pages..."
git add -A
git commit -m "Auto update: $(date '+%Y-%m-%d %H:%M')" || echo "No changes"
git push origin gh-pages --force

echo "[$(date)] Update complete!"
