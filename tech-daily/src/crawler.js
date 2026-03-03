const axios = require('axios');
const Parser = require('rss-parser');
const fs = require('fs-extra');
const path = require('path');
const { ensureDirs, saveRawData, sleep, generateId } = require('./utils');

const rssParser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  },
  timeout: 10000
});

/**
 * 从RSS源抓取新闻
 */
async function fetchFromRSS(source) {
  try {
    console.log(`[爬虫] 正在抓取: ${source.name}`);
    
    const feed = await rssParser.parseURL(source.url);
    const articles = feed.items.slice(0, 20).map(item => ({
      id: generateId(),
      title: item.title || '',
      link: item.link || '',
      content: item.contentSnippet || item.content || '',
      pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
      source: source.name,
      sourceId: source.id,
      category: source.category || '综合',
      fetchedAt: new Date().toISOString()
    }));
    
    console.log(`[爬虫] ${source.name}: 抓取到 ${articles.length} 篇文章`);
    return articles;
  } catch (error) {
    console.error(`[爬虫] ${source.name} 抓取失败:`, error.message);
    return [];
  }
}

/**
 * 从网页抓取新闻（备用方案）
 */
async function fetchFromWeb(source) {
  try {
    console.log(`[爬虫] 尝试网页抓取: ${source.name}`);
    
    const response = await axios.get(source.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
      },
      timeout: 15000
    });
    
    // 这里可以添加网页解析逻辑
    // 由于各网站结构不同，建议使用RSS作为主要抓取方式
    
    return [];
  } catch (error) {
    console.error(`[爬虫] ${source.name} 网页抓取失败:`, error.message);
    return [];
  }
}

/**
 * 抓取单个源
 */
async function fetchSource(source) {
  if (!source.enabled) {
    console.log(`[爬虫] 跳过禁用源: ${source.name}`);
    return [];
  }
  
  let articles = [];
  
  if (source.type === 'rss') {
    articles = await fetchFromRSS(source);
  } else if (source.type === 'web') {
    articles = await fetchFromWeb(source);
  }
  
  // 添加延迟，避免请求过快
  await sleep(1000);
  
  return articles;
}

/**
 * 主函数
 */
async function main() {
  console.log('========================================');
  console.log('[爬虫] 开始抓取科技新闻');
  console.log(`[爬虫] 时间: ${new Date().toLocaleString('zh-CN')}`);
  console.log('========================================');
  
  // 确保目录存在
  await ensureDirs();
  
  // 读取配置
  const configPath = path.join(__dirname, '..', 'config', 'sources.json');
  const config = await fs.readJson(configPath);
  
  const allArticles = [];
  
  // 遍历所有源
  for (const source of config.sources) {
    const articles = await fetchSource(source);
    allArticles.push(...articles);
    
    // 保存每个源的原始数据
    if (articles.length > 0) {
      await saveRawData(source.id, articles);
    }
  }
  
  console.log('========================================');
  console.log(`[爬虫] 总共抓取: ${allArticles.length} 篇文章`);
  console.log('[爬虫] 抓取完成');
  console.log('========================================');
  
  return allArticles;
}

// 如果直接运行此脚本
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, fetchSource };
