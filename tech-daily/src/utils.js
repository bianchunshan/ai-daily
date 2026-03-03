const fs = require('fs-extra');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const RAW_DIR = path.join(DATA_DIR, 'raw');
const PROCESSED_DIR = path.join(DATA_DIR, 'processed');

/**
 * 确保目录存在
 */
async function ensureDirs() {
  await fs.ensureDir(RAW_DIR);
  await fs.ensureDir(PROCESSED_DIR);
}

/**
 * 保存原始数据
 */
async function saveRawData(sourceId, data) {
  const filePath = path.join(RAW_DIR, `${sourceId}_${Date.now()}.json`);
  await fs.writeJson(filePath, data, { spaces: 2 });
  return filePath;
}

/**
 * 读取所有原始数据
 */
async function readAllRawData() {
  const files = await fs.readdir(RAW_DIR);
  const data = [];
  
  for (const file of files) {
    if (file.endsWith('.json')) {
      const filePath = path.join(RAW_DIR, file);
      const fileData = await fs.readJson(filePath);
      data.push(...(Array.isArray(fileData) ? fileData : [fileData]));
    }
  }
  
  return data;
}

/**
 * 保存处理后的数据
 */
async function saveProcessedData(data) {
  const filePath = path.join(PROCESSED_DIR, `processed_${Date.now()}.json`);
  await fs.writeJson(filePath, data, { spaces: 2 });
  return filePath;
}

/**
 * 读取最新的处理数据
 */
async function readLatestProcessedData() {
  const files = await fs.readdir(PROCESSED_DIR);
  const jsonFiles = files.filter(f => f.endsWith('.json')).sort().reverse();
  
  if (jsonFiles.length === 0) {
    return null;
  }
  
  const latestFile = path.join(PROCESSED_DIR, jsonFiles[0]);
  return await fs.readJson(latestFile);
}

/**
 * 延迟函数
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 格式化日期
 */
function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * 生成唯一ID
 */
function generateId() {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

module.exports = {
  ensureDirs,
  saveRawData,
  readAllRawData,
  saveProcessedData,
  readLatestProcessedData,
  sleep,
  formatDate,
  generateId,
  DATA_DIR,
  RAW_DIR,
  PROCESSED_DIR
};
