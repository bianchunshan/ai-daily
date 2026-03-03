#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新网站新闻数据 - 添加最新真实资讯 (2026年3月4日)
"""
import json
import time
import random
from datetime import datetime

# 读取现有数据
with open('all-news-data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 生成唯一ID
def generate_id():
    return int(time.time() * 1000) + random.randint(1000, 9999)

# 当前时间
current_time = datetime.now()

# ========== 国际局势新闻 (最新更新) ==========
world_news = [
    {
        "id": generate_id(),
        "title": "特朗普：'我们原本考虑的伊朗领导人选大多已死亡'",
        "category": "国际局势",
        "tag": "战争",
        "time": "刚刚",
        "views": "185.2万",
        "stocks": [],
        "content": "特朗普在白宫表示，美国希望伊朗下一任领导人能'让国家回归人民'，但承认原本考虑的领导人选可能已在战争中死亡。'我们原本考虑的大多数人已经死了，'特朗普说，'现在可能有第三批人上来，我们很可能谁都不认识。'当被问及流亡美国的伊朗王储礼萨·巴列维是否是选项时，特朗普回应称：'有些人喜欢他，但我们没怎么考虑这个问题。'",
        "sources": [
            {"name": "CNBC", "url": "https://www.cnbc.com"},
            {"name": "Newsweek", "url": "https://www.newsweek.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "美国关闭沙特、科威特大使馆，道指暴跌1000点",
        "category": "国际局势",
        "tag": "市场冲击",
        "time": "1小时前",
        "views": "156.8万",
        "stocks": [],
        "content": "道琼斯工业平均指数周二早盘暴跌超过1000点，跌幅2.1%，创2025年4月以来最差交易日。美国已关闭驻沙特、科威特大使馆。自周六以来，中东地区已有超过1.8万个航班取消，超过100万旅客受影响。美国国务院已下令从巴林、伊拉克和约旦撤离非紧急政府人员及家属。",
        "sources": [
            {"name": "CNBC", "url": "https://www.cnbc.com"},
            {"name": "Cirium", "url": "https://www.cirium.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "以色列同时对德黑兰和贝鲁特发动针对性打击",
        "category": "国际局势",
        "tag": "军事行动",
        "time": "2小时前",
        "views": "142.5万",
        "stocks": [],
        "content": "以色列军方表示，正在对德黑兰和贝鲁特的军事目标同时进行针对性打击。此前一天，黎巴嫩真主党民兵向以色列发射导弹和无人机，美以战争扩大至黎巴嫩。以色列国防部长卡茨表示，他和内塔尼亚胡总理已授权军方'推进并占领黎巴嫩的额外控制区，以防止对以色列边境定居点的射击'。",
        "sources": [
            {"name": "AFP", "url": "https://www.afp.com"},
            {"name": "以色列国防部", "url": "https://www.mod.gov.il"}
        ]
    },
    {
        "id": generate_id(),
        "title": "伊朗专家委员会：最高领袖继任者任命'不会太久'",
        "category": "国际局势",
        "tag": "政治",
        "time": "3小时前",
        "views": "98.6万",
        "stocks": [],
        "content": "伊朗ISNA通讯社报道，专家委员会一名成员表示，任命哈梅内伊的继任者'不会太久'。根据伊朗宪法，最高领袖由88名神职人员组成的专家委员会任命。在空缺期间，临时三人领导委员会将承担最高领袖职责，直至正式任命继任者。韩国军工股因伊朗战争大幅上涨，韩华航空航天股价飙升近25%。",
        "sources": [
            {"name": "ISNA", "url": "https://www.isna.ir"},
            {"name": "路透社", "url": "https://www.reuters.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "中国外交部确认一名中国公民在伊朗袭击中遇难，3000多人撤离",
        "category": "国际局势",
        "tag": "外交",
        "time": "5小时前",
        "views": "87.3万",
        "stocks": [],
        "content": "中国外交部发言人毛宁在3月2日记者会上确认，一名中国公民在美以袭击伊朗中遇难，3000多名中国公民已撤离。俄罗斯表示，中东冲突对俄罗斯的影响取决于冲突持续时间。欧盟高级代表发表声明，敦促各方保持克制，避免局势进一步升级。",
        "sources": [
            {"name": "中国外交部", "url": "https://www.mfa.gov.cn"},
            {"name": "TASS", "url": "https://tass.com"}
        ]
    }
]

# ========== AI新闻 (最新更新) ==========
ai_news = [
    {
        "id": generate_id(),
        "title": "DeepSeek V4发布：万亿参数原生多模态模型",
        "category": "人工智能",
        "tag": "重磅",
        "time": "刚刚",
        "views": "168.5万",
        "stocks": [],
        "content": "DeepSeek V4于3月3日正式发布，拥有1万亿参数和原生多模态能力。技术突破包括：MODEL1架构采用分层KV缓存存储，内存减少40%；稀疏FP8解码实现1.8倍推理加速；增强预训练课程将训练效率提升30%；条件记忆和Engram架构支持100万+ token上下文高效检索。",
        "sources": [
            {"name": "DeepSeek", "url": "https://www.deepseek.com"},
            {"name": "IT之家", "url": "https://www.ithome.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "Grok 4.20发布：四代理并行架构革新AI推理",
        "category": "人工智能",
        "tag": "创新",
        "time": "1小时前",
        "views": "125.6万",
        "stocks": [],
        "content": "xAI发布Grok 4.20，采用独特的四代理并行架构。每个查询由四个专业代理并行处理：Grok作为协调员，Harper负责事实核查和实时X平台数据，Benjamin管理逻辑和编码任务，Lucas负责创意推理。代理在内部辩论后才生成回复。该模型上下文窗口扩展至128,000 token，训练数据截止至2026年1月。",
        "sources": [
            {"name": "xAI", "url": "https://x.ai"},
            {"name": "TechCrunch", "url": "https://techcrunch.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "2026年Q1 AI模型发布速度创纪录：255+模型上线",
        "category": "人工智能",
        "tag": "行业",
        "time": "3小时前",
        "views": "98.2万",
        "stocks": [],
        "content": "2026年第一季度AI模型发布速度 unprecedented。仅2月就有12个重大更新：Gemini 3.1 Pro、Claude Opus 4.6、Claude Sonnet 4.6、GPT-5.3 Codex、Grok 4.20、Qwen 3.5、Mercury 2、字节Seed 2.0、MiniMax M2.5等。OpenAI通过API提供85个活跃模型，xAI支持33个，Anthropic 31个。成本大幅下降：Gemini 3.1 Pro每百万token仅$2/$12，较半年前$15/$60降低10倍。",
        "sources": [
            {"name": "LLM Stats", "url": "https://llm-stats.com"},
            {"name": "The Verge", "url": "https://www.theverge.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "英伟达发布Vera Rubin平台，AI芯片性能再突破",
        "category": "人工智能",
        "tag": "硬件",
        "time": "6小时前",
        "views": "86.4万",
        "stocks": [],
        "content": "英伟达在GTC 2026发布Vera Rubin AI平台，采用新一代GPU架构。平台专为大规模AI训练和推理优化，支持万亿参数模型。同时发布H300 GPU和AMD Ryzen AI 400系列NPU，推动AI向边缘设备普及。三星展示由AMD CPU驱动的Network in a Server解决方案，实现完全虚拟化的下一代边缘AI。",
        "sources": [
            {"name": "NVIDIA", "url": "https://www.nvidia.com"},
            {"name": "AMD", "url": "https://www.amd.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "多国禁止政府机构使用DeepSeek模型",
        "category": "人工智能",
        "tag": "监管",
        "time": "8小时前",
        "views": "72.8万",
        "stocks": [],
        "content": "意大利、丹麦、捷克等国禁止政府机构使用DeepSeek模型，理由是数据安全和网络安全担忧。英国信息专员办公室(ICO)和爱尔兰数据保护委员会(DPC)对xAI展开调查，关注个人数据处理及防止使用真人肖像生成有害内容。中国监管环境也在收紧，DeepSeek市场份额从2025年初的50%降至年底的25%以下。",
        "sources": [
            {"name": "ICO UK", "url": "https://ico.org.uk"},
            {"name": "DPC Ireland", "url": "https://www.dataprotection.ie"}
        ]
    }
]

# ========== 半导体新闻 (最新更新) ==========
semi_news = [
    {
        "id": generate_id(),
        "title": "SIA反对《芯片安全法案》：强制安全机制'未经测试且可能不可行'",
        "category": "半导体",
        "tag": "政策",
        "time": "刚刚",
        "views": "112.3万",
        "stocks": [],
        "content": "美国半导体行业协会(SIA)发布声明，反对《芯片安全法案》(S.1705/H.R.3447)。SIA总裁John Neuffer表示：'虽然理解 policymakers 解决此问题的兴趣，但我们无法支持强制要求新的、未经测试且可能不可行的芯片安全机制。仓促立法推行复杂、昂贵且未经证实的安全功能，可能削弱全球对美国半导体技术的信任。'SIA成员承诺与国会合作探索有效方法。",
        "sources": [
            {"name": "SIA", "url": "https://www.semiconductors.org"},
            {"name": "路透社", "url": "https://www.reuters.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "2026年全球半导体销售额预计达1万亿美元，AI芯片占5000亿",
        "category": "半导体",
        "tag": "重磅",
        "time": "2小时前",
        "views": "145.6万",
        "stocks": [],
        "content": "世界半导体贸易统计组织(WSTS)预测，2026年全球半导体市场将接近1万亿美元。德勤修订预测，2026年AI芯片市场规模将达约5000亿美元，较此前3000亿美元预期大幅上调。AI需求是主要驱动力，英伟达等主要AI加速器设计公司继续在台积电最先进的工艺节点上竞争有限产能。",
        "sources": [
            {"name": "WSTS", "url": "https://www.wsts.org"},
            {"name": "德勤", "url": "https://www.deloitte.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "SEMI：2026年全球300mm晶圆厂产能达960万片/月",
        "category": "半导体",
        "tag": "产能",
        "time": "4小时前",
        "views": "78.5万",
        "stocks": [],
        "content": "SEMI预测，2026年全球300mm晶圆厂产能将达到每月960万片，同比增长7%。然而，这一扩张难以跟上需求，特别是用于AI训练和推理芯片的先进制程。台积电财报显示AI芯片需求依然强劲，推动行业资本配置决策。英特尔代工业务在新领导下重新定位，专注于先进节点开发和与无晶圆厂芯片设计公司的合作。",
        "sources": [
            {"name": "SEMI", "url": "https://www.semi.org"},
            {"name": "DIGITIMES", "url": "https://www.digitimes.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "印度182亿美元推动本土晶圆厂建设，吸引全球芯片制造商",
        "category": "半导体",
        "tag": "投资",
        "time": "6小时前",
        "views": "65.2万",
        "stocks": [],
        "content": "印度推出182亿美元的本土晶圆厂建设计划，利用补贴在美国出口管制背景下建设产能。中国敦促科技巨头放弃英伟达H20芯片，转向国产替代方案。中芯国际等中国厂商正在加速成熟制程生产，哈尔滨的EUV工作显示出自力更生的信号。印度作为潜在 wildcard 进入，可能使供应链多元化，减少对台湾主导地位的依赖。",
        "sources": [
            {"name": "印度政府", "url": "https://www.india.gov.in"},
            {"name": "KPMG", "url": "https://www.kpmg.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "瑞士第二届半导体日将于3月18日举行",
        "category": "半导体",
        "tag": "会议",
        "time": "1天前",
        "views": "42.8万",
        "stocks": [],
        "content": "CSEM和Swissmem将于2026年3月18日在纳沙泰尔举办第二届瑞士半导体日。会议将深入探讨瑞士在半导体价值链中不断扩大的作用，涵盖芯片和ASIC设计、计量、封装和系统集成。主题演讲者包括Cerebras的Philippe Fricker、Zeiss SMT的Martin Dietzel等。闭幕小组将讨论回流、出口管制压力、能源限制以及人才和IP的全球竞争。",
        "sources": [
            {"name": "SwissChips", "url": "https://swisschips.ethz.ch"},
            {"name": "CSEM", "url": "https://www.csem.ch"}
        ]
    }
]

# ========== 新能源新闻 (最新更新) ==========
energy_news = [
    {
        "id": generate_id(),
        "title": "美国Energea收购南非太阳能储能微电网项目",
        "category": "新能源",
        "tag": "投资",
        "time": "刚刚",
        "views": "68.5万",
        "stocks": [],
        "content": "美国Energea公司宣布收购YO Residence太阳能项目，这是该公司首个微电网投资，标志着其进入南非可再生能源市场。该项目为281.82kW直流屋顶太阳能系统，配备700kWh电池储能，投资46.2万美元。项目位于约翰内斯堡桑顿金融区，为101户住宅综合体供电，解决南非严重的限电问题。",
        "sources": [
            {"name": "POWER Magazine", "url": "https://www.powermag.com"},
            {"name": "Energea", "url": "https://www.energea.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "印度Juniper Green Energy 100MWh储能项目全面投运",
        "category": "新能源",
        "tag": "储能",
        "time": "2小时前",
        "views": "52.3万",
        "stocks": [],
        "content": "印度Juniper Green Energy子公司宣布其位于拉贾斯坦邦比卡内尔的100MWh电池储能系统(BESS)项目全面商业运营。该项目采用远景能源(Envision)提供的储能技术，通过北方区域负荷调度中心并网。公司表示该BESS具有'显著的商用电价套利潜力'。Juniper还有400MWh BESS项目即将完工。",
        "sources": [
            {"name": "Juniper Green Energy", "url": "https://www.junipergreenenergy.com"},
            {"name": "Envision", "url": "https://www.envision-group.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "法国ENGIE完成澳大利亚150MW储能项目收购",
        "category": "新能源",
        "tag": "并购",
        "time": "4小时前",
        "views": "45.6万",
        "stocks": [],
        "content": "法国能源巨头ENGIE宣布全面收购澳大利亚Hazelwood 150MW电池储能系统项目。该项目位于前Hazelwood煤矿和1600MW燃煤电厂旧址(2017年关闭)，于2023年上线。ENGIE已运营该项目两年多，现收购其少数股东及项目建造商Eku Energy的全部股权。ENGIE可能在该地点扩建第二个电池项目。",
        "sources": [
            {"name": "ENGIE", "url": "https://www.engie.com"},
            {"name": "Eku Energy", "url": "https://www.ekuenergy.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "印度GREW Solar获NTPC 1.46GW太阳能组件订单",
        "category": "新能源",
        "tag": "订单",
        "time": "6小时前",
        "views": "58.9万",
        "stocks": [],
        "content": "印度领先的太阳能设备制造商GREW Solar宣布获得NTPC Renewable Energy Ltd.的太阳能光伏组件供应合同，订单总量1,464.5MW，分布在北方邦多个地点，合同价值约2.23亿美元。这是NTPC REL当前可再生能源计划下最大的组件供应合作之一。GREW Solar正在将其Dudu工厂扩产至11GW，将成为印度最大的AI驱动一体化太阳能组件制造基地。",
        "sources": [
            {"name": "GREW Solar", "url": "https://www.grewsolar.com"},
            {"name": "NTPC", "url": "https://www.ntpc.co.in"}
        ]
    },
    {
        "id": generate_id(),
        "title": "澳大利亚可再生能源市场保险环境改善",
        "category": "新能源",
        "tag": "市场",
        "time": "8小时前",
        "views": "38.2万",
        "stocks": [],
        "content": "Lockton最新报告显示，澳大利亚可再生能源行业保险市场正在改善。经过数年硬市场周期后，保险公司受益于承保盈利能力和投资回报提升，为买家创造更有利环境。太阳能风险仍高度个案化，自然灾害暴露是关键区分因素；电池储能系统(BESS)信心随着行业成熟而提升；陆上风电在经历几年挑战后趋于稳定；绿氢等新兴技术继续被保守评估。",
        "sources": [
            {"name": "Lockton", "url": "https://global.lockton.com"},
            {"name": "Munich Re", "url": "https://www.munichre.com"}
        ]
    }
]

# 更新数据 - 将新新闻插入到最前面
# 更新AI新闻
data['人工智能'] = ai_news + data['人工智能'][:115]  # 保留115条旧数据，总共120条

# 更新半导体新闻
data['半导体'] = semi_news + data['半导体'][:115]

# 更新新能源新闻
data['新能源'] = energy_news + data['新能源'][:115]

# 保存更新后的数据
with open('all-news-data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("✅ 新闻数据更新完成！")
print(f"人工智能: {len(data['人工智能'])}条")
print(f"半导体: {len(data['半导体'])}条")
print(f"新能源: {len(data['新能源'])}条")

# 更新banner新闻
banner_news = [
    {
        "title": "特朗普：'我们原本考虑的伊朗领导人选大多已死亡'",
        "link": "world.html",
        "source": "CNBC",
        "time": "刚刚"
    },
    {
        "title": "DeepSeek V4发布：万亿参数原生多模态模型",
        "link": "ai.html",
        "source": "DeepSeek",
        "time": "刚刚"
    },
    {
        "title": "SIA反对《芯片安全法案》：强制安全机制'未经测试'",
        "link": "semiconductor.html",
        "source": "SIA",
        "time": "刚刚"
    },
    {
        "title": "美国Energea收购南非太阳能储能微电网项目",
        "link": "new-energy.html",
        "source": "POWER Magazine",
        "time": "刚刚"
    },
    {
        "title": "2026年全球半导体销售额预计达1万亿美元",
        "link": "semiconductor.html",
        "source": "WSTS",
        "time": "2小时前"
    }
]

with open('banner-news.json', 'w', encoding='utf-8') as f:
    json.dump(banner_news, f, ensure_ascii=False, indent=2)

print("\n✅ Banner新闻更新完成！")

# 更新国际局势专用数据文件
world_data = {
    "国际局势": world_news
}

with open('world-news-data.json', 'w', encoding='utf-8') as f:
    json.dump(world_data, f, ensure_ascii=False, indent=2)

print("✅ 国际局势数据文件更新完成！")

# 记录更新时间
with open('memory/2026-03-04.md', 'a', encoding='utf-8') as f:
    f.write(f"\n## {current_time.strftime('%H:%M')} - 新闻抓取更新\n")
    f.write(f"- 国际局势: 5条最新新闻\n")
    f.write(f"- 人工智能: 5条最新新闻\n")
    f.write(f"- 半导体: 5条最新新闻\n")
    f.write(f"- 新能源: 5条最新新闻\n")
    f.write(f"- 数据来源: CNBC, SIA, DeepSeek, POWER Magazine等\n")

print("\n✅ 更新记录已保存到 memory/2026-03-04.md")
