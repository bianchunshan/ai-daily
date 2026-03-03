const fs = require('fs-extra');
const path = require('path');
const { readAllRawData, saveProcessedData, formatDate } = require('./utils');

/**
 * 加载分类配置
 */
async function loadCategories() {
  const configPath = path.join(__dirname, '..', 'config', 'sources.json');
  const config = await fs.readJson(configPath);
  return config.categories || {};
}

/**
 * 基于关键词自动分类
 */
function autoCategorize(article, categories) {
  const text = `${article.title} ${article.content}`.toLowerCase();
  const matchedCategories = [];
  
  for (const [category, keywords] of Object.entries(categories)) {
    for (const keyword of keywords) {
      if (text.includes(keyword.toLowerCase())) {
        matchedCategories.push(category);
        break;
      }
    }
  }
  
  return matchedCategories.length > 0 ? matchedCategories : ['综合科技'];
}

/**
 * 提取关键信息
 */
function extractKeyInfo(article) {
  // 生成摘要（如果内容过长）
  let summary = article.content || '';
  if (summary.length > 200) {
    summary = summary.substring(0, 200) + '...';
  }
  
  // 提取关键词（简单实现）
  const keywords = [];
  const commonKeywords = ['AI', '人工智能', '芯片', '5G', '元宇宙', '区块链', '新能源', '电动车', '苹果', '华为', '腾讯', '阿里'];
  const text = `${article.title} ${article.content}`;
  
  for (const kw of commonKeywords) {
    if (text.includes(kw)) {
      keywords.push(kw);
    }
  }
  
  return {
    ...article,
    summary,
    keywords: keywords.slice(0, 5),
    formattedDate: formatDate(article.pubDate)
  };
}

/**
 * 去重处理
 */
function deduplicate(articles) {
  const seen = new Set();
  const unique = [];
  
  for (const article of articles) {
    // 基于标题相似度去重
    const key = article.title.trim().toLowerCase().substring(0, 30);
    
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(article);
    }
  }
  
  return unique;
}

/**
 * 按时间排序
 */
function sortByDate(articles) {
  return articles.sort((a, b) => {
    const dateA = new Date(a.pubDate || 0);
    const dateB = new Date(b.pubDate || 0);
    return dateB - dateA;
  });
}

/**
 * 按分类组织文章
 */
function organizeByCategory(articles) {
  const organized = {};
  
  for (const article of articles) {
    const categories = article.categories || ['综合科技'];
    
    for (const category of categories) {
      if (!organized[category]) {
        organized[category] = [];
      }
      organized[category].push(article);
    }
  }
  
  // 对每个分类内的文章按时间排序
  for (const category in organized) {
    organized[category] = sortByDate(organized[category]).slice(0, 20);
  }
  
  return organized;
}

/**
 * 主函数
 */
async function main() {
  console.log('========================================');
  console.log('[处理] 开始处理新闻数据');
  console.log(`[处理] 时间: ${new Date().toLocaleString('zh-CN')}`);
  console.log('========================================');
  
  // 读取所有原始数据
  const rawArticles = await readAllRawData();
  console.log(`[处理] 读取到 ${rawArticles.length} 篇原始文章`);
  
  if (rawArticles.length === 0) {
    console.log('[处理] 没有原始数据需要处理');
    return null;
  }
  
  // 加载分类配置
  const categories = await loadCategories();
  
  // 处理每篇文章
  let processedArticles = rawArticles.map(article => {
    // 提取关键信息
    const processed = extractKeyInfo(article);
    
    // 自动分类
    processed.categories = autoCategorize(article, categories);
    
    return processed;
  });
  
  // 去重
  processedArticles = deduplicate(processedArticles);
  console.log(`[处理] 去重后: ${processedArticles.length} 篇文章`);
  
  // 按时间排序
  processedArticles = sortByDate(processedArticles);
  
  // 按分类组织
  const organized = organizeByCategory(processedArticles);
  console.log(`[处理] 分类数量: ${Object.keys(organized).length} 个`);
  
  // 构建最终数据结构
  const result = {
    generatedAt: new Date().toISOString(),
    totalArticles: processedArticles.length,
    categories: Object.keys(organized),
    latestArticles: processedArticles.slice(0, 50),
    articlesByCategory: organized
  };
  
  // 保存处理后的数据
  await saveProcessedData(result);
  
  console.log('========================================');
  console.log('[处理] 数据处理完成');
  console.log('========================================');
  
  return result;
}

// 如果直接运行此脚本
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, autoCategorize, extractKeyInfo };
