const fs = require('fs-extra');
const path = require('path');
const { readLatestProcessedData, formatDate } = require('./utils');

const OUTPUT_DIR = path.join(__dirname, '..', 'output');

/**
 * 生成HTML页面
 */
function generateHTML(data) {
  const { generatedAt, totalArticles, categories, latestArticles, articlesByCategory } = data;
  
  const generateTime = formatDate(generatedAt);
  
  // 生成分类导航
  const categoryNav = categories.map(cat => 
    `<a href="#${cat}" class="category-link">${cat}</a>`
  ).join('');
  
  // 生成最新文章列表
  const latestArticlesHTML = latestArticles.slice(0, 10).map(article => `
    <article class="news-item">
      <h3><a href="${article.link}" target="_blank">${escapeHtml(article.title)}</a></h3>
      <p class="news-meta">
        <span class="source">${article.source}</span>
        <span class="time">${article.formattedDate}</span>
      </p>
      <p class="news-summary">${escapeHtml(article.summary)}</p>
      <div class="news-tags">
        ${article.categories.map(cat => `<span class="tag">${cat}</span>`).join('')}
      </div>
    </article>
  `).join('');
  
  // 生成分类文章列表
  let categorySections = '';
  for (const [category, articles] of Object.entries(articlesByCategory)) {
    const articlesHTML = articles.slice(0, 15).map(article => `
      <article class="news-item">
        <h4><a href="${article.link}" target="_blank">${escapeHtml(article.title)}</a></h4>
        <p class="news-meta">
          <span class="source">${article.source}</span>
          <span class="time">${article.formattedDate}</span>
        </p>
        <p class="news-summary">${escapeHtml(article.summary)}</p>
      </article>
    `).join('');
    
    categorySections += `
      <section id="${category}" class="category-section">
        &lt;h2 class="category-title"&gt;${category}&lt;/h2&gt;
        &lt;div class="news-list"&gt;
          ${articlesHTML}
        &lt;/div&gt;
      &lt;/section&gt;
    `;
  }
  
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>前沿科技日报</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 20px;
      text-align: center;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    
    header h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    
    header p {
      opacity: 0.9;
    }
    
    .stats {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-top: 20px;
      flex-wrap: wrap;
    }
    
    .stat-item {
      text-align: center;
    }
    
    .stat-value {
      font-size: 2em;
      font-weight: bold;
    }
    
    .stat-label {
      font-size: 0.9em;
      opacity: 0.8;
    }
    
    .category-nav {
      background: white;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .category-nav h3 {
      margin-bottom: 15px;
      color: #667eea;
    }
    
    .category-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .category-link {
      display: inline-block;
      padding: 8px 16px;
      background: #f0f0f0;
      color: #333;
      text-decoration: none;
      border-radius: 20px;
      transition: all 0.3s;
    }
    
    .category-link:hover {
      background: #667eea;
      color: white;
    }
    
    .latest-section {
      background: white;
      padding: 30px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .latest-section h2 {
      color: #667eea;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #667eea;
    }
    
    .news-item {
      padding: 20px 0;
      border-bottom: 1px solid #eee;
    }
    
    .news-item:last-child {
      border-bottom: none;
    }
    
    .news-item h3, .news-item h4 {
      margin-bottom: 10px;
    }
    
    .news-item a {
      color: #333;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .news-item a:hover {
      color: #667eea;
    }
    
    .news-meta {
      color: #999;
      font-size: 0.9em;
      margin-bottom: 10px;
    }
    
    .news-meta .source {
      margin-right: 15px;
      color: #667eea;
    }
    
    .news-summary {
      color: #666;
      line-height: 1.8;
    }
    
    .news-tags {
      margin-top: 10px;
    }
    
    .tag {
      display: inline-block;
      padding: 4px 10px;
      background: #e3f2fd;
      color: #1976d2;
      font-size: 0.8em;
      border-radius: 12px;
      margin-right: 8px;
    }
    
    .category-section {
      background: white;
      padding: 30px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .category-title {
      color: #667eea;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #667eea;
    }
    
    footer {
      text-align: center;
      padding: 30px;
      color: #999;
      background: white;
      border-radius: 10px;
    }
    
    @media (max-width: 768px) {
      header h1 {
        font-size: 1.8em;
      }
      
      .container {
        padding: 10px;
      }
      
      .latest-section, .category-section {
        padding: 20px;
      }
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;header&gt;
      &lt;h1&gt;前沿科技日报&lt;/h1&gt;
      &lt;p&gt;聚合最新科技资讯，洞察行业趋势&lt;/p&gt;
      &lt;div class="stats"&gt;
        &lt;div class="stat-item"&gt;
          &lt;div class="stat-value"&gt;${totalArticles}&lt;/div&gt;
          &lt;div class="stat-label"&gt;今日文章&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="stat-item"&gt;
          &lt;div class="stat-value"&gt;${categories.length}&lt;/div&gt;
          &lt;div class="stat-label"&gt;分类&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="stat-item"&gt;
          &lt;div class="stat-label"&gt;更新时间&lt;/div&gt;
          &lt;div class="stat-value" style="font-size: 1em;"&gt;${generateTime}&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/header&gt;
    
    &lt;nav class="category-nav"&gt;
      &lt;h3&gt;📑 分类导航&lt;/h3&gt;
      &lt;div class="category-links"&gt;
        ${categoryNav}
      &lt;/div&gt;
    &lt;/nav&gt;
    
    &lt;section class="latest-section"&gt;
      &lt;h2&gt;🔥 最新资讯&lt;/h2&gt;
      ${latestArticlesHTML}
    &lt;/section&gt;
    
    ${categorySections}
    
    &lt;footer&gt;
      &lt;p&gt;前沿科技日报 - 自动生成于 ${generateTime}&lt;/p&gt;
      &lt;p&gt;数据来源：新浪财经、36氪、财新、华尔街见闻等&lt;/p&gt;
    &lt;/footer&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;`;
}

/**
 * HTML转义
 */
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * 主函数
 */
async function main() {
  console.log('========================================');
  console.log('[生成] 开始生成HTML页面');
  console.log(`[生成] 时间: ${new Date().toLocaleString('zh-CN')}`);
  console.log('========================================');
  
  // 确保输出目录存在
  await fs.ensureDir(OUTPUT_DIR);
  
  // 读取处理后的数据
  const data = await readLatestProcessedData();
  
  if (!data) {
    console.error('[生成] 没有找到处理后的数据，请先运行 processor.js');
    process.exit(1);
  }
  
  console.log(`[生成] 读取到 ${data.totalArticles} 篇文章`);
  
  // 生成HTML
  const html = generateHTML(data);
  
  // 保存HTML文件
  const outputPath = path.join(OUTPUT_DIR, 'index.html');
  await fs.writeFile(outputPath, html, 'utf-8');
  
  console.log(`[生成] HTML页面已保存: ${outputPath}`);
  
  // 同时保存一份数据JSON供其他用途
  const jsonPath = path.join(OUTPUT_DIR, 'data.json');
  await fs.writeJson(jsonPath, data, { spaces: 2 });
  
  console.log(`[生成] JSON数据已保存: ${jsonPath}`);
  
  console.log('========================================');
  console.log('[生成] 页面生成完成');
  console.log('========================================');
  
  return outputPath;
}

// 如果直接运行此脚本
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, generateHTML };
