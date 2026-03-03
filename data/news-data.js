// 前沿科技日报 - 统一数据源
// 所有页面共享此数据，确保一致性

const NEWS_DATA = {
    // 人工智能
    "人工智能": [
        {
            id: "ai-001",
            title: "OpenAI发布GPT-4.5研究预览版",
            summary: "OpenAI发布最新大模型GPT-4.5，号称是迄今为止规模最大、聊天效果最好的模型。",
            content: "当地时间2月27日，OpenAI发布最新大模型GPT-4.5，号称是迄今为止规模最大、聊天效果最好的模型。GPT-4.5在扩展预训练与后训练方面又向前迈出了一步。",
            category: "人工智能",
            tag: "重磅",
            time: "2026-02-27",
            source: "OpenAI官网",
            sourceUrl: "https://openai.com",
            stocks: ["OPENAI"]
        },
        {
            id: "ai-002", 
            title: "英伟达Q4营收393亿美元同比增78%",
            summary: "英伟达公布2025财年第四财季及全年财报，业绩超预期。",
            content: "2月27日，英伟达公布2025财年第四财季及全年财报。第四财季营收393.31亿美元，同比增78%；净利润220.91亿美元，同比增80%。全年营收1304.97亿美元。",
            category: "人工智能",
            tag: "财报",
            time: "2026-02-27",
            source: "新浪财经",
            sourceUrl: "https://sina.com.cn",
            stocks: ["NVDA"]
        }
    ],
    
    // 半导体
    "半导体": [
        {
            id: "semi-001",
            title: "台积电2nm制程2025年底量产",
            summary: "台积电N2工艺良率达60%，预计2025年底月产能达5万片。",
            content: "2025年初台积电已在宝山厂区使用N2（2nm）工艺完成约5000片晶圆风险试产，良率达60%，预计2025年底月产能达5万片。",
            category: "半导体",
            tag: "制程",
            time: "2026-02-20",
            source: "EET-China",
            sourceUrl: "https://www.eet-china.com",
            stocks: ["TSM"]
        }
    ],
    
    // 新能源
    "新能源": [
        {
            id: "ne-001",
            title: "中国2026年新增风电光伏装机2亿千瓦以上",
            summary: "国家能源局部署全年新增风电、太阳能发电装机目标。",
            content: "2026年全国能源工作会议部署，全年新增风电、太阳能发电装机2亿千瓦以上。2025年风电光伏新增装机约3.7亿千瓦，利用率保持94%以上。",
            category: "新能源",
            tag: "政策",
            time: "2026-03-01",
            source: "国家能源局",
            sourceUrl: "http://www.nea.gov.cn",
            stocks: []
        }
    ],
    
    // 国际局势
    "国际局势": [
        {
            id: "world-001",
            title: "美以联合空袭伊朗，哈梅内伊身亡",
            summary: "代号'史诗怒火'的军事袭击重创伊朗，86岁最高领袖遇袭身亡。",
            content: "当地时间2026年2月28日上午，美国和以色列军方代号'史诗怒火'的军事袭击重创伊朗。86岁的伊朗最高领袖哈梅内伊遇袭身亡，这是自1989年以来伊朗首次失去最高领袖。",
            category: "国际局势",
            tag: "突发",
            time: "2026-02-28",
            source: "新华社",
            sourceUrl: "http://www.xinhuanet.com",
            stocks: []
        }
    ],
    
    // 其他板块...
    "生物医药": [],
    "机器人": [],
    "商业航天": [],
    "核聚变": [],
    "量子计算": [],
    "数字货币": [],
    "游戏": []
};

// 获取所有资讯（按时间排序）
function getAllNews() {
    let all = [];
    for (let category in NEWS_DATA) {
        all = all.concat(NEWS_DATA[category]);
    }
    return all.sort((a, b) => new Date(b.time) - new Date(a.time));
}

// 按板块获取资讯
function getNewsByCategory(category) {
    return NEWS_DATA[category] || [];
}

// 按ID获取单条资讯
function getNewsById(id) {
    const all = getAllNews();
    return all.find(n => n.id === id);
}

// 可靠信息源配置
const TRUSTED_SOURCES = {
    "国内官方": [
        { name: "新华社", url: "http://www.xinhuanet.com", type: "官方媒体" },
        { name: "央视新闻", url: "https://www.cctv.com", type: "官方媒体" },
        { name: "国家能源局", url: "http://www.nea.gov.cn", type: "政府机构" },
        { name: "工信部", url: "https://www.miit.gov.cn", type: "政府机构" }
    ],
    "财经媒体": [
        { name: "财新网", url: "https://www.caixin.com", type: "专业财经" },
        { name: "新浪财经", url: "https://finance.sina.com.cn", type: "综合财经" },
        { name: "华尔街见闻", url: "https://wallstreetcn.com", type: "国际财经" },
        { name: "第一财经", url: "https://www.yicai.com", type: "专业财经" }
    ],
    "科技媒体": [
        { name: "36氪", url: "https://36kr.com", type: "科技创投" },
        { name: "虎嗅", url: "https://www.huxiu.com", type: "商业科技" },
        { name: "钛媒体", url: "https://www.tmtpost.com", type: "TMT资讯" },
        { name: "极客公园", url: "https://www.geekpark.net", type: "极客资讯" }
    ],
    "国际源": [
        { name: "OpenAI", url: "https://openai.com", type: "公司官方" },
        { name: "NVIDIA", url: "https://nvidia.com", type: "公司官方" },
        { name: "Reuters", url: "https://www.reuters.com", type: "国际通讯社" },
        { name: "Bloomberg", url: "https://www.bloomberg.com", type: "国际财经" }
    ]
};

// 导出（如果是模块环境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NEWS_DATA, getAllNews, getNewsByCategory, getNewsById, TRUSTED_SOURCES };
}
