# 前沿科技日报 - 自动化内容更新系统

## 项目结构

```
tech-daily/
├── src/
│   ├── crawler.js      # 爬虫脚本 - 抓取新闻源
│   ├── processor.js    # 数据处理 - AI整理分类
│   ├── generator.js    # 页面生成 - 生成HTML
│   ├── deploy.js       # 部署脚本 - 推送到GitHub Pages
│   └── utils.js        # 工具函数
├── config/
│   └── sources.json    # 新闻源配置
├── data/
│   ├── raw/            # 原始抓取数据
│   └── processed/      # 处理后数据
├── output/             # 生成的HTML文件
├── .env                # 环境变量配置
├── package.json
└── README.md
```

## 安装与配置

### 1. 安装依赖

```bash
cd tech-daily
npm install
```

### 2. 配置环境变量

复制 `.env.example` 到 `.env` 并填写配置：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```env
# GitHub配置（用于推送到GitHub Pages）
GITHUB_TOKEN=your_github_token_here
GITHUB_REPO=your_username/your_repo_name

# 可选：AI API配置（用于内容整理）
# OPENAI_API_KEY=your_openai_key
# OPENAI_BASE_URL=https://api.openai.com/v1
```

### 3. 配置GitHub Pages

1. 在GitHub创建一个新的仓库（如 `tech-daily`）
2. 在仓库设置中启用 GitHub Pages
3. 生成 GitHub Personal Access Token（需要 `repo` 权限）

## 使用方法

### 手动运行完整流程

```bash
npm run full
```

### 分步运行

```bash
# 1. 抓取新闻
npm run crawl

# 2. 处理数据（AI分类整理）
npm run process

# 3. 生成HTML页面
npm run generate

# 4. 部署到GitHub Pages
npm run deploy
```

### 设置定时任务（Linux/Mac）

使用 crontab 每小时运行一次：

```bash
# 编辑 crontab
crontab -e

# 添加以下行（每小时运行一次）
0 * * * * cd /path/to/tech-daily && npm run full >> /var/log/tech-daily.log 2>&1
```

### 使用 GitHub Actions 自动运行

项目包含 `.github/workflows/auto-update.yml`，可以在GitHub上每小时自动运行。

## 数据源

系统默认抓取以下新闻源：

- 新浪财经科技板块
- 36氪
- 财新网
- 华尔街见闻
- 虎嗅网
- 钛媒体

## 自定义配置

编辑 `config/sources.json` 可以添加或修改新闻源。

## 输出格式

生成的HTML页面包含：

- 按分类组织的新闻列表
- 每篇新闻的标题、摘要、来源、发布时间
- 响应式设计，支持移动端

## 注意事项

1. 请遵守各网站的 robots.txt 和爬虫协议
2. 建议添加适当的请求延迟，避免对目标网站造成压力
3. 内容仅供个人学习使用，请遵守相关版权规定
