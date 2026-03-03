const { main: crawl } = require('./crawler');
const { main: process } = require('./processor');
const { main: generate } = require('./generator');
const { main: deploy } = require('./deploy');

/**
 * 完整流程
 */
async function fullPipeline() {
  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║         前沿科技日报 - 自动化更新系统                   ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log('\n');
  
  const startTime = Date.now();
  
  try {
    // 1. 抓取新闻
    console.log('▶ 步骤 1/4: 抓取新闻...\n');
    await crawl();
    
    // 2. 处理数据
    console.log('\n▶ 步骤 2/4: 处理数据...\n');
    await process();
    
    // 3. 生成页面
    console.log('\n▶ 步骤 3/4: 生成页面...\n');
    await generate();
    
    // 4. 部署
    console.log('\n▶ 步骤 4/4: 部署...\n');
    await deploy();
    
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    console.log('\n');
    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║                    ✅ 全部完成！                        ║');
    console.log(`║              耗时: ${duration} 秒                          ║`);
    console.log('╚════════════════════════════════════════════════════════╝');
    console.log('\n');
    
  } catch (error) {
    console.error('\n❌ 流程执行失败:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  fullPipeline();
}

module.exports = { fullPipeline };
