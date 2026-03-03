# 前沿科技日报 - 自动化内容更新系统

## 已实现功能

### 1. 爬虫系统 (src/crawler.js)
- **RSS源抓取**: 支持从多个RSS源抓取新闻
- **多源支持**: 新浪财经科技、36氪、财新、华尔街见闻、虎嗅、钛媒体等
- **数据保存**: 自动保存原始数据到 data/raw/ 目录
- **错误处理**: 单源失败不影响其他源

### 2. 数据处理系统 (src/processor.js)
- **自动分类**: 基于关键词自动分类（AI、半导体、新能源、互联网等）
- **去重处理**: 基于标题相似度自动去重
- **摘要生成**: 自动提取文章摘要
- **关键词提取**: 识别文章中的关键主题
- **时间排序**: 按发布时间排序

### 3. 页面生成系统 (src/generator.js)
- **响应式设计**: 支持桌面和移动端
- **分类导航**: 快速跳转到不同分类
- **最新资讯**: 突出显示最新文章
- **统计信息**: 显示文章数量和更新时间
- **美观界面**: 渐变色头部、卡片式布局

### 4. 部署系统 (src/deploy.js)
- **GitHub Pages**: 自动推送到gh-pages分支
- **本地部署**: 支持部署到本地目录
- **增量更新**: 只提交变更的文件

### 5. 定时任务配置
- **GitHub Actions**: `.github/workflows/auto-update.yml`
- **每小时运行**: 自动抓取、处理、生成、部署
- **手动触发**: 支持手动运行工作流

## 项目结构

```
tech-daily/
├── src/
│   ├── crawler.js      # 爬虫脚本
│   ├── processor.js    # 数据处理
│   ├── generator.js    # 页面生成
│   ├── deploy.js       # 部署脚本
│   ├── utils.js        # 工具函数
│   └── index.js        # 完整流程入口
├── config/
│   └── sources.json    # 新闻源配置
├── data/
│   ├── raw/            # 原始数据
│   └── processed/      # 处理后数据
├── output/             # 生成的HTML
├── .github/workflows/  # GitHub Actions
├── .env.example        # 环境变量示例
├── package.json
└── README.md
```

## 快速开始

### 1. 安装依赖
```bash
cd tech-daily
npm install
```

### 2. 配置环境变量
```bash
cp .env.example .env
# 编辑 .env 文件，添加 GitHub Token
```

### 3. 运行完整流程
```bash
npm run full
```

### 4. 或分步运行
```bash
npm run crawl      # 抓取新闻
npm run process    # 处理数据
npm run generate   # 生成页面
npm run deploy     # 部署
```

## GitHub Actions 自动部署

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages（选择 gh-pages 分支）
3. 系统会自动每小时更新一次
4. 也可以手动触发工作流

## 自定义配置

编辑 `config/sources.json` 可以：
- 添加/删除新闻源
- 修改分类关键词
- 启用/禁用特定源

## 注意事项

1. 请遵守各网站的爬虫协议
2. 建议添加适当的请求延迟
3. 内容仅供个人学习使用
