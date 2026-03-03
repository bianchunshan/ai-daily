# 飞书推送配置指南

## 概述

本推送脚本用于将「前沿科技日报」网站的新闻内容推送到飞书，支持以下功能：

1. **突发新闻实时推送** - 推送最近几小时的重大新闻
2. **每日早报汇总推送** - 推送当日新闻汇总
3. **按板块分类推送** - 按科技板块分类推送新闻

## 环境配置

### 1. 获取飞书 Webhook URL

#### 方法一：使用飞书群机器人（推荐）

1. 打开飞书群聊，点击右上角「设置」
2. 选择「群机器人」→「添加机器人」
3. 选择「自定义机器人」
4. 设置机器人名称和头像
5. 复制生成的 Webhook 地址

#### 方法二：使用飞书自建应用（高级）

如需更高级功能（如@用户、富文本等），可创建自建应用：

1. 访问 [飞书开放平台](https://open.feishu.cn/)
2. 创建企业自建应用
3. 获取 App ID 和 App Secret
4. 开通「机器人」权限

### 2. 配置环境变量

```bash
# 必需：Webhook URL
export FEISHU_WEBHOOK_URL="https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxx"

# 可选：如使用自建应用
export FEISHU_APP_ID="cli_xxxxxxxx"
export FEISHU_APP_SECRET="xxxxxxxx"
```

## 使用方法

### 基本命令

```bash
# 突发新闻推送
python feishu_push.py --mode breaking

# 每日早报推送
python feishu_push.py --mode daily

# 所有板块分类推送
python feishu_push.py --mode category

# 指定板块推送
python feishu_push.py --mode category --category 人工智能

# 测试模式（不实际推送，仅输出内容）
python feishu_push.py --mode daily --test

# 指定 Webhook 推送
python feishu_push.py --mode daily --webhook "https://open.feishu.cn/..."
```

### 支持的板块

| 板块 | 图标 |
|------|------|
| 人工智能 | 🤖 |
| 半导体 | 💻 |
| 新能源 | 🔋 |
| 生物医药 | 💊 |
| 商业航天 | 🚀 |
| 游戏 | 🎮 |
| 数字货币 | ₿ |
| 核聚变 | ⚛️ |
| 量子计算 | 🔮 |
| 机器人 | 🦾 |
| 国际局势 | 🌍 |
| 消费电子 | 📱 |

## 定时任务配置

### 使用 Cron 设置定时推送

```bash
# 编辑 crontab
crontab -e

# 每日早报：每天早上 8:00 推送
0 8 * * * cd /root/.openclaw/workspace && python feishu_push.py --mode daily

# 突发新闻：每 2 小时检查一次
0 */2 * * * cd /root/.openclaw/workspace && python feishu_push.py --mode breaking

# 板块汇总：每天晚上 18:00 推送
0 18 * * * cd /root/.openclaw/workspace && python feishu_push.py --mode category
```

### 使用 systemd Timer（Linux）

创建服务文件 `/etc/systemd/system/feishu-daily.service`：

```ini
[Unit]
Description=Feishu Daily News Push

[Service]
Type=oneshot
WorkingDirectory=/root/.openclaw/workspace
Environment=FEISHU_WEBHOOK_URL=https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxx
ExecStart=/usr/bin/python3 /root/.openclaw/workspace/feishu_push.py --mode daily
```

创建定时器文件 `/etc/systemd/system/feishu-daily.timer`：

```ini
[Unit]
Description=Run Feishu Daily News Push every day at 8:00

[Timer]
OnCalendar=*-*-* 8:00:00
Persistent=true

[Install]
WantedBy=timers.target
```

启用定时器：

```bash
sudo systemctl daemon-reload
sudo systemctl enable feishu-daily.timer
sudo systemctl start feishu-daily.timer
```

## 消息格式

推送消息采用飞书交互式卡片格式，包含：

- **标题**：新闻标题
- **摘要**：新闻内容摘要（120字以内）
- **板块**：新闻所属板块
- **标签**：重磅/财报/前沿等标签
- **相关股票**：关联的股票代码
- **来源**：原文链接
- **时间**：发布时间

## 测试

在正式使用前，建议先使用测试模式验证配置：

```bash
# 测试突发新闻推送
python feishu_push.py --mode breaking --test

# 测试每日早报
python feishu_push.py --mode daily --test

# 测试板块推送
python feishu_push.py --mode category --test
```

## 故障排查

### 常见问题

1. **推送失败，提示 Webhook URL 未配置**
   - 检查环境变量 `FEISHU_WEBHOOK_URL` 是否设置
   - 或使用 `--webhook` 参数指定

2. **消息发送成功但飞书未收到**
   - 检查 Webhook URL 是否正确
   - 确认机器人是否在群聊中
   - 检查机器人是否被禁言

3. **新闻数据为空**
   - 确认 `news-data.json` 和 `realtime-news.json` 文件存在
   - 检查文件内容格式是否正确

### 日志查看

```bash
# 手动运行查看详细输出
python feishu_push.py --mode daily --test

# 查看 cron 日志（Ubuntu/Debian）
grep CRON /var/log/syslog

# 查看 systemd 日志
journalctl -u feishu-daily.service
```

## 文件说明

| 文件 | 说明 |
|------|------|
| `feishu_push.py` | 推送脚本主文件 |
| `news-data.json` | 主要新闻数据 |
| `realtime-news.json` | 实时新闻数据（按板块分类） |
| `all-news-data.json` | 完整新闻数据 |
| `FEISHU_SETUP.md` | 本配置文档 |

## 更新日志

### v1.0.0
- 初始版本
- 支持突发新闻、每日早报、板块分类三种推送模式
- 支持飞书交互式卡片消息
- 支持测试模式

## 联系方式

如有问题，请联系管理员。
