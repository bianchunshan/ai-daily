const fs = require('fs-extra');
const path = require('path');
const simpleGit = require('simple-git');
require('dotenv').config();

const OUTPUT_DIR = path.join(__dirname, '..', 'output');

/**
 * 部署到GitHub Pages
 */
async function deployToGitHubPages() {
  const { GITHUB_TOKEN, GITHUB_REPO } = process.env;
  
  if (!GITHUB_TOKEN || !GITHUB_REPO) {
    console.error('[部署] 错误: 缺少 GitHub 配置');
    console.error('[部署] 请设置 GITHUB_TOKEN 和 GITHUB_REPO 环境变量');
    return false;
  }
  
  const repoUrl = `https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git`;
  const tempDir = path.join(__dirname, '..', '.deploy-temp');
  
  try {
    console.log('[部署] 开始部署到 GitHub Pages...');
    
    // 清理临时目录
    await fs.remove(tempDir);
    await fs.ensureDir(tempDir);
    
    // 克隆 gh-pages 分支或创建新分支
    const git = simpleGit();
    
    console.log('[部署] 克隆仓库...');
    await git.clone(repoUrl, tempDir, ['--branch', 'gh-pages', '--single-branch'])
      .catch(async () => {
        // 如果分支不存在，克隆主分支
        console.log('[部署] gh-pages 分支不存在，创建新分支...');
        await git.clone(repoUrl, tempDir);
        const tempGit = simpleGit(tempDir);
        await tempGit.checkoutLocalBranch('gh-pages');
      });
    
    const tempGit = simpleGit(tempDir);
    
    // 清空临时目录中的文件（保留.git）
    const files = await fs.readdir(tempDir);
    for (const file of files) {
      if (file !== '.git') {
        await fs.remove(path.join(tempDir, file));
      }
    }
    
    // 复制生成的文件到临时目录
    console.log('[部署] 复制文件...');
    const outputFiles = await fs.readdir(OUTPUT_DIR);
    for (const file of outputFiles) {
      await fs.copy(path.join(OUTPUT_DIR, file), path.join(tempDir, file));
    }
    
    // 创建 .nojekyll 文件（禁用 Jekyll 处理）
    await fs.writeFile(path.join(tempDir, '.nojekyll'), '');
    
    // 配置 git
    await tempGit.addConfig('user.email', 'bot@tech-daily.local');
    await tempGit.addConfig('user.name', 'Tech Daily Bot');
    
    // 检查是否有变更
    const status = await tempGit.status();
    
    if (status.files.length === 0) {
      console.log('[部署] 没有变更需要提交');
      await fs.remove(tempDir);
      return true;
    }
    
    // 提交并推送
    console.log('[部署] 提交变更...');
    await tempGit.add('.');
    await tempGit.commit(`Update: ${new Date().toLocaleString('zh-CN')}`);
    
    console.log('[部署] 推送到 GitHub...');
    await tempGit.push('origin', 'gh-pages');
    
    // 清理临时目录
    await fs.remove(tempDir);
    
    console.log('[部署] 部署成功！');
    console.log(`[部署] 网站地址: https://${GITHUB_REPO.split('/')[0]}.github.io/${GITHUB_REPO.split('/')[1]}/`);
    
    return true;
  } catch (error) {
    console.error('[部署] 部署失败:', error.message);
    await fs.remove(tempDir).catch(() => {});
    return false;
  }
}

/**
 * 本地部署（仅复制到指定目录）
 */
async function deployLocal(targetDir) {
  try {
    console.log(`[部署] 部署到本地目录: ${targetDir}`);
    
    await fs.ensureDir(targetDir);
    await fs.copy(OUTPUT_DIR, targetDir, { overwrite: true });
    
    console.log('[部署] 本地部署完成');
    return true;
  } catch (error) {
    console.error('[部署] 本地部署失败:', error.message);
    return false;
  }
}

/**
 * 主函数
 */
async function main() {
  console.log('========================================');
  console.log('[部署] 开始部署');
  console.log(`[部署] 时间: ${new Date().toLocaleString('zh-CN')}`);
  console.log('========================================');
  
  // 检查输出目录
  const indexPath = path.join(OUTPUT_DIR, 'index.html');
  if (!await fs.pathExists(indexPath)) {
    console.error('[部署] 错误: 没有找到生成的HTML文件');
    console.error('[部署] 请先运行 generator.js');
    process.exit(1);
  }
  
  // 检查是否有 GitHub 配置
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_REPO) {
    const success = await deployToGitHubPages();
    if (!success) {
      process.exit(1);
    }
  } else {
    console.log('[部署] 没有找到 GitHub 配置，跳过 GitHub Pages 部署');
    console.log('[部署] 生成的文件位于:', OUTPUT_DIR);
  }
  
  console.log('========================================');
  console.log('[部署] 部署流程完成');
  console.log('========================================');
}

// 如果直接运行此脚本
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, deployToGitHubPages, deployLocal };
