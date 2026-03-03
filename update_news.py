#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新网站新闻数据 - 添加最新真实资讯
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

# ========== 国际局势新闻 ==========
world_news = [
    {
        "id": generate_id(),
        "title": "美以联合打击伊朗进入第三天，哈梅内伊遇害身亡",
        "category": "国际局势",
        "tag": "战争",
        "time": "刚刚",
        "views": "128.5万",
        "stocks": [],
        "content": "2026年2月28日，美国和以色列对伊朗发动大规模军事打击，伊朗最高领袖哈梅内伊在袭击中身亡。伊朗随即启动'真实承诺-4'行动进行报复，向以色列及中东多国美军基地发射导弹。特朗普称军事行动可能持续四到五周，已有48名伊朗高层人员被击毙，包括40余名高级军事指挥官和政府官员。中国外交部强烈谴责此次袭击，敦促立即停止军事行动。",
        "sources": [
            {"name": "新华社", "url": "https://www.news.cn"},
            {"name": "新京报", "url": "https://www.bjnews.com.cn"}
        ]
    },
    {
        "id": generate_id(),
        "title": "伊朗封锁霍尔木兹海峡，全球石油运输受阻",
        "category": "国际局势",
        "tag": "能源危机",
        "time": "2小时前",
        "views": "95.3万",
        "stocks": [],
        "content": "伊朗伊斯兰革命卫队海军宣布封锁霍尔木兹海峡，禁止所有船只通过。该海峡承担全球20%-30%的原油运输，封锁将导致全球能源供应紧张。能源分析机构Vortexa指出，即使是有限的航行干扰，也会推高运费、保险等航运成本，引发石油供应短缺。",
        "sources": [
            {"name": "财新网", "url": "https://www.caixin.com"},
            {"name": "网易", "url": "https://www.163.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "沙特以色列罕见结盟，共同施压美国对伊朗动武",
        "category": "国际局势",
        "tag": "地缘政治",
        "time": "5小时前",
        "views": "87.2万",
        "stocks": [],
        "content": "2026年3月2日，沙特公开放话与以色列站一边，要求美国对伊朗动手。沙特和以色列这对'老冤家'突然结盟，目标是遏制伊朗在叙利亚、也门的影响力扩张。伊朗红新月会统计，空袭已造成至少555人死亡，其中包括一所女子小学148名儿童。",
        "sources": [
            {"name": "网易", "url": "https://www.163.com"},
            {"name": "新华社", "url": "https://www.news.cn"}
        ]
    },
    {
        "id": generate_id(),
        "title": "印尼总统普拉博沃提议斡旋中东局势",
        "category": "国际局势",
        "tag": "外交",
        "time": "8小时前",
        "views": "45.6万",
        "stocks": [],
        "content": "印度尼西亚总统普拉博沃表示已做好准备前往伊朗进行调解。伊朗驻印尼大使馆对此表示赞赏，同时要求印尼官员坚决谴责美国和以色列的侵略行径。专家指出，若无成熟计划，调解美伊冲突将困难重重。",
        "sources": [
            {"name": "网易", "url": "https://www.163.com"},
            {"name": "外交部", "url": "https://www.mfa.gov.cn"}
        ]
    },
    {
        "id": generate_id(),
        "title": "英国允许美军使用其军事基地打击伊朗导弹设施",
        "category": "国际局势",
        "tag": "军事",
        "time": "12小时前",
        "views": "62.1万",
        "stocks": [],
        "content": "英国与法国表示同意与美国及其他盟友合作应对伊朗导弹袭击。英国已同意美国请求，允许美军使用其军事基地打击伊朗导弹设施。作为回应，伊朗向位于塞浦路斯的一处英国空军基地发射了无人机。卡塔尔警告称伊朗'必须付出代价'。",
        "sources": [
            {"name": "网易", "url": "https://www.163.com"},
            {"name": "环球时报", "url": "https://www.huanqiu.com"}
        ]
    }
]

# ========== AI新闻 ==========
ai_news = [
    {
        "id": generate_id(),
        "title": "中国AI用户达6.02亿人，成全球AI专利最大拥有国",
        "category": "人工智能",
        "tag": "重磅",
        "time": "刚刚",
        "views": "156.8万",
        "stocks": [],
        "content": "中国互联网络信息中心报告显示，截至2025年12月，我国生成式人工智能用户达6.02亿人，较2024年底增长141.7%。2025年我国人工智能企业数量超过6000家，核心产业规模预计突破1.2万亿元。世界知识产权组织数据显示，2025年我国已成为全球人工智能专利最大拥有国，占比高达60%。",
        "sources": [
            {"name": "科技日报", "url": "https://www.stdaily.com"},
            {"name": "IT之家", "url": "https://www.ithome.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "香港拨款5000万港元推出全民AI培训计划",
        "category": "人工智能",
        "tag": "政策",
        "time": "3小时前",
        "views": "78.5万",
        "stocks": [],
        "content": "香港特区政府在2026/27财政年度预算案中宣布，将拨款5000万港元推行全民人工智能培训计划，在社会各层面普及对AI的认知和应用。香港大学、中文大学、科技大学等8所公立高校将新增共27个与STEAM相关的学士学位课程。香港人工智能研发院将于2026年下半年投入运作。",
        "sources": [
            {"name": "财新网", "url": "https://china.caixin.com"},
            {"name": "香港政府", "url": "https://www.gov.hk"}
        ]
    },
    {
        "id": generate_id(),
        "title": "特朗普下令联邦政府停用Anthropic AI技术",
        "category": "人工智能",
        "tag": "政策",
        "time": "6小时前",
        "views": "92.3万",
        "stocks": [],
        "content": "特朗普政府与Anthropic的矛盾源于对AI军事化应用的分歧。Anthropic拒绝AI监控民众和开发全自动武器，而OpenAI则宣布已与五角大楼达成协议，将在美国国防部涉密网络中部署OpenAI的人工智能模型。美国国防部发布备忘录要求军用大模型适用于'任何合法用途'。",
        "sources": [
            {"name": "财新网", "url": "https://www.caixin.com"},
            {"name": "TechCrunch", "url": "https://techcrunch.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "字节豆包月活突破2.27亿，成国内AI应用第一",
        "category": "人工智能",
        "tag": "市场",
        "time": "10小时前",
        "views": "68.9万",
        "stocks": [],
        "content": "截至2026年2月，字节旗下AI助手豆包月活跃用户已突破2.27亿，成为国内用户量第一的AI原生应用。与此同时，DeepSeek凭借其在To B领域的深度技术优势，稳居企业级AI问答平台前列。随着AI逐步取代传统搜索引擎，一场围绕'生成引擎优化(GEO)'的新营销革命正在兴起。",
        "sources": [
            {"name": "IT之家", "url": "https://www.ithome.com"},
            {"name": "36氪", "url": "https://36kr.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "2026年全球AI治理措施加速落地",
        "category": "人工智能",
        "tag": "监管",
        "time": "1天前",
        "views": "45.2万",
        "stocks": [],
        "content": "欧盟《人工智能法案》大部分规则将于2026年8月生效。美国联邦政府预计2026年将出台更多AI监管措施。中国国务院印发的《关于深入实施'人工智能+'行动的意见》指出要完善AI法律法规、伦理准则等。高德纳预测，2026年40%的企业应用将嵌入任务型AI智能体。",
        "sources": [
            {"name": "新华社", "url": "https://www.news.cn"},
            {"name": "新华网", "url": "https://www.news.cn"}
        ]
    }
]

# ========== 半导体新闻 ==========
semi_news = [
    {
        "id": generate_id(),
        "title": "2026年全球半导体销售额将首破1万亿美元",
        "category": "半导体",
        "tag": "重磅",
        "time": "刚刚",
        "views": "112.5万",
        "stocks": [],
        "content": "美国半导体行业协会(SIA)数据显示，2025年全球半导体销售额达7917亿美元，同比增长25.6%，创历史新高。预计2026年全球销售额将达到约1万亿美元。AI需求是主要驱动力，英伟达营收飙升65%，各大存储企业集体增长近三成。但AI对内存的巨量需求正导致PC和智能手机芯片出现短缺。",
        "sources": [
            {"name": "SIA", "url": "https://www.semiconductors.org"},
            {"name": "IT之家", "url": "https://www.ithome.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "台积电连续四年调涨价格，2nm晶圆价格高达3万美元",
        "category": "半导体",
        "tag": "涨价",
        "time": "2小时前",
        "views": "89.6万",
        "stocks": [],
        "content": "台积电已告知所有客户，针对5nm、4nm、3nm、2nm四种先进技术将连续调涨价格四年。自2026年起，5nm以下制程晶圆代工价格涨幅预计在8%-10%之间，2nm价格涨幅预计达50%左右，单片2nm晶圆价格将高达30000美元。中芯国际也已对部分产能实施涨价，涨幅约10%。",
        "sources": [
            {"name": "电子工程专辑", "url": "https://www.eet-china.com"},
            {"name": "上海证券报", "url": "https://www.cnstock.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "全球8英寸晶圆代工产能利用率将升至90%",
        "category": "半导体",
        "tag": "产能",
        "time": "4小时前",
        "views": "56.3万",
        "stocks": [],
        "content": "TrendForce预估，2026年全球8寸晶圆代工厂平均产能利用率将升到85%至90%，明显优于2025年的75%至80%。部分晶圆厂已通知客户将调涨代工价5%至20%不等，此次为不分客户、不分制程平台全面性调价。国科微芯片最高涨价80%，中微半导体MCU、NOR Flash涨价15%-50%。",
        "sources": [
            {"name": "TrendForce", "url": "https://www.trendforce.com"},
            {"name": "电子工程专辑", "url": "https://www.eet-china.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "英特尔、AMD服务器CPU库存售罄，酝酿涨价15%",
        "category": "半导体",
        "tag": "涨价",
        "time": "8小时前",
        "views": "67.8万",
        "stocks": [],
        "content": "据KeyBanc估计，AMD和英特尔今年各自的服务器CPU库存都已售罄，大部分需求来自超大规模企业。AMD/英特尔都计划将服务器CPU价格提高多达15%以确保供应稳定。英特尔预计由于PC内存短缺，2026年第一季度营收将较2025年第四季度下滑11%。",
        "sources": [
            {"name": "KeyBanc", "url": "https://www.keybancapitalmarkets.com"},
            {"name": "IT之家", "url": "https://www.ithome.com"}
        ]
    },
    {
        "id": generate_id(),
        "title": "2nm竞赛白热化：台积电、三星、英特尔加速量产",
        "category": "半导体",
        "tag": "技术",
        "time": "12小时前",
        "views": "54.2万",
        "stocks": [],
        "content": "台积电N2工艺已在宝山厂区完成约5000片晶圆风险试产，良率达60%左右，预计2025年底月产能将达5万片。三星2nm GAA工艺良率已提升至40%以上，Exynos 2600将于2025年下半年全面投产。英特尔18A节点计划于2025年下半年量产，采用RibbonFET晶体管和PowerVia背面供电技术。",
        "sources": [
            {"name": "上海科学技术情报研究所", "url": "https://www.istis.sh.cn"},
            {"name": "IT之家", "url": "https://www.ithome.com"}
        ]
    }
]

# ========== 新能源新闻 ==========
energy_news = [
    {
        "id": generate_id(),
        "title": "我国建成全球最大可再生能源体系，风电光伏装机超火电",
        "category": "新能源",
        "tag": "重磅",
        "time": "刚刚",
        "views": "145.6万",
        "stocks": [],
        "content": "国家能源局数据显示，截至2025年底，我国可再生能源总装机达23.4亿千瓦，'十四五'时期建成全球最大、发展最快的可再生能源体系。风电光伏合计装机由2020年的5.3亿千瓦增加到2025年的18.4亿千瓦，历史性超过火电。新型储能装机突破1亿千瓦，占全球比重超40%。",
        "sources": [
            {"name": "国家能源局", "url": "https://www.nea.gov.cn"},
            {"name": "封面新闻", "url": "https://www.thecover.cn"}
        ]
    },
    {
        "id": generate_id(),
        "title": "2026年全球光伏新增装机将首次下行，中国预计180-240GW",
        "category": "新能源",
        "tag": "市场",
        "time": "3小时前",
        "views": "78.3万",
        "stocks": [],
        "content": "中国光伏行业协会预测，2026年全球光伏新增装机规模为500GW，较2025年下降13.79%。中国2026年新增装机量预计为180至240GW，较2025年的315.07GW有所回落。'十五五'期间全球年均光伏新增装机量为725至870GW。业内预计最早2027年恢复增长。",
        "sources": [
            {"name": "21世纪经济报道", "url": "https://www.21jingji.com"},
            {"name": "中国光伏行业协会", "url": "http://www.chinapv.org.cn"}
        ]
    },
    {
        "id": generate_id(),
        "title": "中国新能源汽车全球领先，2025年销量达1290万辆",
        "category": "新能源",
        "tag": "汽车",
        "time": "6小时前",
        "views": "92.5万",
        "stocks": [],
        "content": "世界经济论坛2026年年会报告显示，全球绿色经济已成长为价值5万亿美元的巨大市场。中国在新能源汽车、光伏、风电等领域产能与市场份额全球领先。2025年全球电动汽车销量2070万辆，中国达1290万辆，国内销量占比达50.8%。中国生产全球约80%太阳能电池。",
        "sources": [
            {"name": "新浪财经", "url": "https://finance.sina.com.cn"},
            {"name": "世界经济论坛", "url": "https://www.weforum.org"}
        ]
    },
    {
        "id": generate_id(),
        "title": "光伏行业'反内卷'成效几何？多晶硅企业大幅减产",
        "category": "新能源",
        "tag": "产业",
        "time": "10小时前",
        "views": "45.8万",
        "stocks": [],
        "content": "中国有色金属工业协会硅业分会报告显示，多晶硅市场交投清淡，硅料企业多处于大幅减产甚至停产状态。南网能源宣布2026年不再新增持有光伏等智慧绿电项目。五大发电集团也在不同程度收紧市场化光伏电站项目投资。新能源上网电价全面由市场形成，取消政府补贴。",
        "sources": [
            {"name": "财新网", "url": "https://weekly.caixin.com"},
            {"name": "中国有色金属工业协会", "url": " "}
        ]
    },
    {
        "id": generate_id(),
        "title": "2026年新能源汽车购置税减半征收政策生效",
        "category": "新能源",
        "tag": "政策",
        "time": "1天前",
        "views": "38.6万",
        "stocks": [],
        "content": "根据财政部等三部门发布的公告，对购置日期在2026年1月1日至2027年12月31日期间的新能源汽车减半征收车辆购置税，每辆新能源乘用车减税额不超过1.5万元。此前2024-2025年期间新能源汽车免征购置税。这一'两免两减'政策体现了国家对新能源汽车产业的长期支持。",
        "sources": [
            {"name": "财政部", "url": "http://www.mof.gov.cn"},
            {"name": "腾讯新闻", "url": "https://new.qq.com"}
        ]
    }
]

# 更新数据 - 将新新闻插入到最前面
# 注意：国际局势是单独的页面，需要添加到world分类或单独处理

# 更新AI新闻
data['人工智能'] = ai_news + data['人工智能'][:115]  # 保留115条旧数据，总共120条

# 更新半导体新闻
data['半导体'] = semi_news + data['半导体'][:115]

# 更新新能源新闻
data['新能源'] = energy_news + data['新能源'][:115]

# 其他分类保持原样

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
        "title": "美以联合打击伊朗进入第三天，哈梅内伊遇害身亡",
        "link": "world.html",
        "source": "新华社",
        "time": "刚刚"
    },
    {
        "title": "中国AI用户达6.02亿人，成全球AI专利最大拥有国",
        "link": "ai.html",
        "source": "科技日报",
        "time": "刚刚"
    },
    {
        "title": "2026年全球半导体销售额将首破1万亿美元",
        "link": "semiconductor.html",
        "source": "SIA",
        "time": "刚刚"
    },
    {
        "title": "我国建成全球最大可再生能源体系，风电光伏装机超火电",
        "link": "new-energy.html",
        "source": "国家能源局",
        "time": "刚刚"
    },
    {
        "title": "台积电连续四年调涨价格，2nm晶圆价格高达3万美元",
        "link": "semiconductor.html",
        "source": "电子工程专辑",
        "time": "2小时前"
    }
]

with open('banner-news.json', 'w', encoding='utf-8') as f:
    json.dump(banner_news, f, ensure_ascii=False, indent=2)

print("\n✅ Banner新闻更新完成！")

# 创建国际局势专用数据文件
world_data = {
    "国际局势": world_news
}

with open('world-news-data.json', 'w', encoding='utf-8') as f:
    json.dump(world_data, f, ensure_ascii=False, indent=2)

print("✅ 国际局势数据文件创建完成！")
