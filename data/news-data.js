// 前沿科技日报 - 统一数据源
// 所有页面共享此数据，确保一致性

const NEWS_DATA = {
    // 人工智能
    "人工智能": [
        {
            id: "ai-000",
            title: "【最新】中国人形机器人频频破圈，具身智能迈入应用时代",
            summary: "2026年伊始，中国自主研发的人形机器人频频破圈，多家企业的产品和应用引发热议。",
            content: "2026年伊始，从美国拉斯维加斯消费电子展（CES）到中国春晚，中国自主研发的人形机器人频频破圈。具身智能全球市场规模2025年约为44.4亿美元，预计2030年将达230亿美元。中国具身智能产业市场规模有望在2035年突破万亿元。",
            category: "人工智能",
            tag: "重磅",
            time: "2026-02-28",
            source: "光明日报",
            sourceUrl: "https://news.gmw.cn/2026-02/28/content_38616652.htm",
            stocks: []
        },
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
        },
        {
            id: "ai-003",
            title: "2026人工智能发展趋势：全球市场规模将突破9000亿美元",
            summary: "2025年全球AI市场规模达7575.8亿美元，同比增18.7%，预计2026年超9000亿美元。",
            content: "2025年全球AI市场规模达7575.8亿美元，同比增18.7%，预计2026年超9000亿美元。中国AI核心产业规模突破1.2万亿元，企业数量超6000家，成为AI专利最大拥有国。",
            category: "人工智能",
            tag: "重磅",
            time: "2026-02-27",
            source: "新浪财经",
            sourceUrl: "https://finance.sina.com.cn/roll/2026-02-27/doc-inhphcxh3612916.shtml",
            stocks: []
        },
        {
            id: "ai-004",
            title: "2026年中国AI发展趋势前瞻：从'聊天'走向'做事'",
            summary: "行业专家形成共识：以对话为核心的'Chat'范式已告终结，AI竞争转向'能办事'的智能体时代。",
            content: "行业专家形成共识：以对话为核心的'Chat'范式已告终结，AI竞争转向'能办事'的智能体时代。DeepSeek标志着中国AI技术路线分化突破的出现。",
            category: "人工智能",
            tag: "趋势",
            time: "2026-01-28",
            source: "新华网",
            sourceUrl: "http://www.xinhuanet.com/20260128/037b1159b26645dea4648c535571ca3e/c.html",
            stocks: []
        },
        {
            id: "ai-005",
            title: "展望全球人工智能2026年演进新局：智能体日益普及",
            summary: "高德纳预测，2026年40%的企业应用将嵌入任务型AI智能体。",
            content: "高德纳预测，2026年40%的企业应用将嵌入任务型AI智能体，而这一比例在2025年还不足5%。微软Office智能体已能自动创建电子表格和文档。",
            category: "人工智能",
            tag: "预测",
            time: "2026-01-20",
            source: "新华网",
            sourceUrl: "https://www.news.cn/tech/20260120/5c20c6f7ba864526b6e674acaea53e25/c.html",
            stocks: []
        },
        {
            id: "ai-006",
            title: "港府拨款5000万推出全民AI培训，提升就业竞争力",
            summary: "香港特区政府宣布拨款5000万港元推行全民人工智能培训计划。",
            content: "香港特区政府宣布拨款5000万港元推行全民人工智能培训计划，在社会各层面普及对AI的认知和应用。8所公立高校将新增27个与STEAM相关的学士学位课程。",
            category: "人工智能",
            tag: "政策",
            time: "2026-02-25",
            source: "财新网",
            sourceUrl: "https://china.caixin.com/2026-02-25/102416891.html",
            stocks: []
        },
        {
            id: "ai-007",
            title: "小鹏汽车：完全自动驾驶有望在三年内实现",
            summary: "小鹏汽车董事长表示，VLA是'端到端2.0'新方向，系统具备类似'大脑'的思维和推理能力。",
            content: "小鹏汽车董事长表示，VLA（视觉语言动作模型）是'端到端2.0'新方向，系统具备类似'大脑'的思维和推理能力。第二代VLA即将于2026年3月下旬推送上车。",
            category: "人工智能",
            tag: "自动驾驶",
            time: "2026-03-03",
            source: "财新网",
            sourceUrl: "https://www.caixin.com/2026-03-03/102418989.html",
            stocks: ["XPEV"]
        },
        {
            id: "ai-008",
            title: "2026年AI技术趋势：联邦式AI与代理式AI的兴起",
            summary: "Zoom领导力洞察：步入2026年，人工智能将持续重塑办公、沟通和互联模式。",
            content: "Zoom领导力洞察：步入2026年，人工智能将持续重塑办公、沟通和互联模式。从联邦式AI战略到代理式自动化技术，AI将在企业运营中实现更复杂的集成。",
            category: "人工智能",
            tag: "技术",
            time: "2026-01-13",
            source: "Zoom",
            sourceUrl: "https://www.zoom.com/zh-cn/blog/ai-technology-trends-2026/",
            stocks: ["ZM"]
        },
        {
            id: "ai-009",
            title: "美的'美拉'人形机器人全球首秀，正式进军家庭场景",
            summary: "在2025世界人工智能大会上，美的集团家用人形机器人'美拉'完成全球首次公开亮相。",
            content: "在2025世界人工智能大会上，美的集团家用人形机器人'美拉'完成全球首次公开亮相。支持语音指令控制家电、环境感知及个性化服务，2026年将加速场景落地。",
            category: "人工智能",
            tag: "机器人",
            time: "2025-09-01",
            source: "微信",
            sourceUrl: "http://mp.weixin.qq.com/s?__biz=MzUyMzM3NzMxOA==",
            stocks: ["000333"]
        },
        {
            id: "ai-010",
            title: "OpenAI发布开源模型gpt-oss-120b和gpt-oss-20b",
            summary: "OpenAI时隔五年首次发布开源模型，采用Apache 2.0许可，允许企业免费商用。",
            content: "OpenAI时隔五年首次发布开源模型，采用Apache 2.0许可，允许企业免费商用。支持复杂推理、工具使用和云端查询。",
            category: "人工智能",
            tag: "开源",
            time: "2025-08",
            source: "微信",
            sourceUrl: "http://mp.weixin.qq.com/s?__biz=MzU2NzczOTI5Ng==",
            stocks: ["OPENAI"]
        }
    ],
    
    // 半导体
    "半导体": [
        {
            id: "semi-000",
            title: "【最新】A股半导体涨价潮来袭，最高涨幅达80%",
            summary: "进入2026年，半导体行业迎来新一轮涨价潮，从存储扩散至功率器件、晶圆代工、封测等多个环节。",
            content: "进入2026年，半导体行业迎来新一轮涨价潮。本轮涨价从存储开始，逐渐扩散至功率器件、晶圆代工、封测等多个环节。A股多家产业链公司发出涨价函，涨价幅度普遍在10%~20%，幅度大的甚至达50%~80%。",
            category: "半导体",
            tag: "涨价",
            time: "2026-03-03",
            source: "21世纪经济报道",
            sourceUrl: "https://www.21jingji.com/article/20260303/herald/4a03378d67e35c4e1a391b02f4bd6e40.html",
            stocks: []
        },
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
        },
        {
            id: "semi-002",
            title: "2026年半导体行业展望：增长但极不均匀，AI驱动与内存短缺并存",
            summary: "2025年全球半导体市场规模接近7920亿美元，增长25.6%。2026年预计增长26%突破1万亿美元。",
            content: "2025年全球半导体市场规模接近7920亿美元，增长25.6%。2026年预计增长26%突破1万亿美元。AI需求持续扩张，但内存短缺引发结构性挤出效应，PC和智能手机市场面临逆风。",
            category: "半导体",
            tag: "重磅",
            time: "2026-03-03",
            source: "新浪财经",
            sourceUrl: "https://finance.sina.com.cn/cj/2026-03-03/doc-inhpsicr4046519.shtml",
            stocks: []
        },
        {
            id: "semi-003",
            title: "超150家半导体公司业绩揭晓，涨价潮为2026再添变量",
            summary: "截至2月28日，申万半导体行业173家上市公司中152家披露2025年业绩。",
            content: "截至2月28日，申万半导体行业173家上市公司中152家披露2025年业绩。涨价效应已从存储芯片传导至功率、模拟、MCU等非存储领域，涨幅10%至80%不等。",
            category: "半导体",
            tag: "财报",
            time: "2026-03-01",
            source: "中国能源网",
            sourceUrl: "https://www.cnenergynews.cn/article/4QZBKxb12vw",
            stocks: []
        },
        {
            id: "semi-004",
            title: "全球半导体最新展望：2026年销售额将达9750亿美元",
            summary: "德勤预测2026年生成式AI芯片收入接近5000亿美元，约占全球芯片销售额一半。",
            content: "德勤预测2026年生成式AI芯片收入接近5000亿美元，约占全球芯片销售额一半。尽管AI芯片贡献约一半收入，但其销量占比不到0.2%。",
            category: "半导体",
            tag: "预测",
            time: "2026-02-18",
            source: "腾讯新闻",
            sourceUrl: "https://news.qq.com/rain/a/20260218A01X9I00",
            stocks: []
        },
        {
            id: "semi-005",
            title: "Omdia：2026年全球半导体营收将突破1万亿美元大关",
            summary: "Omdia最新分析显示，2026年半导体营收增长源于高度集中的AI相关需求。",
            content: "Omdia最新分析显示，2026年半导体营收增长源于高度集中的AI相关需求。若剔除内存和逻辑IC，半导体整体营收增长率将从30.7%降至仅8%。",
            category: "半导体",
            tag: "里程碑",
            time: "2026-01",
            source: "万业企业",
            sourceUrl: "https://www.600641.com.cn/index.php?m=content&c=index&a=show&catid=63&id=450",
            stocks: []
        },
        {
            id: "semi-006",
            title: "美光18亿美元收购力积电铜锣晶圆厂",
            summary: "美光科技将以总价18亿美元现金收购力积电位于中国台湾省苗栗县铜锣的P5晶圆厂。",
            content: "美光科技将以总价18亿美元现金收购力积电位于中国台湾省苗栗县铜锣的P5晶圆厂。交易预计2026年第二季度完成，美光将从2027年下半年开始显著提高DRAM晶圆产量。",
            category: "半导体",
            tag: "并购",
            time: "2026-01-17",
            source: "万业企业",
            sourceUrl: "https://www.600641.com.cn/index.php?m=content&c=index&a=show&catid=63&id=450",
            stocks: ["MU"]
        },
        {
            id: "semi-007",
            title: "2026年半导体产业十大看点：RISC-V加速进军数据中心",
            summary: "中国半导体行业协会发布2026年产业看点：ASIC渗透率将达40%。",
            content: "中国半导体行业协会发布2026年产业看点：ASIC渗透率将达40%，端侧SoC持续受益于AI终端创新，卫星通信开辟半导体增量空间，存储芯片产能吃紧态势延续。",
            category: "半导体",
            tag: "趋势",
            time: "2026-01-16",
            source: "CSIA",
            sourceUrl: "https://web.csia.net.cn/newsinfo/10945896.html",
            stocks: []
        },
        {
            id: "semi-008",
            title: "TrendForce：8英寸晶圆代工价格涨幅最高达20%",
            summary: "随着台积电、三星降低8英寸晶圆代工产能，2026年全球8英寸晶圆代工总产能将减少2.4%。",
            content: "随着台积电、三星降低8英寸晶圆代工产能，2026年全球8英寸晶圆代工总产能将减少2.4%。AI驱动的电源管理芯片需求强劲，部分晶圆厂已通知客户将调涨代工价5%至20%。",
            category: "半导体",
            tag: "涨价",
            time: "2026-01-14",
            source: "万业企业",
            sourceUrl: "https://www.600641.com.cn/index.php?m=content&c=index&a=show&catid=63&id=450",
            stocks: []
        },
        {
            id: "semi-009",
            title: "SEMI：未来两年半导体制造设备销售额将继续增长",
            summary: "预计2025年全球半导体设备销售额达1330亿美元，同比增长13.7%。",
            content: "预计2025年全球半导体设备销售额达1330亿美元，同比增长13.7%。2026年和2027年分别达到1450亿美元和1560亿美元，主要得益于AI相关投资推动。",
            category: "半导体",
            tag: "设备",
            time: "2026-01",
            source: "万业企业",
            sourceUrl: "https://www.600641.com.cn/index.php?m=content&c=index&a=show&catid=63&id=450",
            stocks: []
        },
        {
            id: "semi-010",
            title: "粤芯半导体四期项目启动，总投资252亿元",
            summary: "粤芯半导体四期项目总投资约252亿元，将建设月产4万片的12英寸数模混合特色工艺生产线。",
            content: "粤芯半导体四期项目总投资约252亿元，将建设月产4万片的12英寸数模混合特色工艺生产线，工艺技术节点覆盖65nm至22nm，预计2029年底建成。",
            category: "半导体",
            tag: "投资",
            time: "2026-01-22",
            source: "万业企业",
            sourceUrl: "https://www.600641.com.cn/index.php?m=content&c=index&a=show&catid=63&id=450",
            stocks: []
        }
    ],
    
    // 新能源
    "新能源": [
        {
            id: "ne-000",
            title: "【最新】比亚迪击败特斯拉夺得2025年BEV销冠，2026年全球新能源车销量预估2340万辆",
            summary: "TrendForce预估2026年全球新能源车销量为2340万辆，成长幅度将缩减至14%。",
            content: "根据TrendForce集邦咨询最新调查，2025年全球新能源车合计销量达2053万辆，年增26%。预估2026年全球销量为2340万辆，成长幅度将缩减至14%。比亚迪年成长约25%，取代特斯拉成为2025年BEV销售冠军。",
            category: "新能源",
            tag: "重磅",
            time: "2026-03-03",
            source: "TrendForce",
            sourceUrl: "https://finance.sina.com.cn/stock/t/2026-03-02/doc-inhpqvan8235297.shtml",
            stocks: ["BYD", "TSLA"]
        },
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
        },
        {
            id: "ne-002",
            title: "我国建成全球最大的可再生能源体系，每用10度电就有近4度是绿电",
            summary: "国家能源局数据显示，截至2025年底，我国可再生能源总装机达23.4亿千瓦。",
            content: "国家能源局数据显示，截至2025年底，我国可再生能源总装机达23.4亿千瓦。风电光伏合计装机历史性超过火电，由2020年的5.3亿千瓦增加到2025年的18.4亿千瓦。",
            category: "新能源",
            tag: "重磅",
            time: "2026-03-02",
            source: "人民日报",
            sourceUrl: "https://paper.people.com.cn/rmrb/pc/content/202603/02/content_30142959.html",
            stocks: []
        },
        {
            id: "ne-003",
            title: "2026年新能源发电展望：光伏、风电现状及趋势",
            summary: "2025年我国光伏新增装机预计达270-300GW，占全球比重超53%。",
            content: "2025年我国光伏新增装机预计达270-300GW，占全球比重超53%，累计装机突破10亿千瓦，首次超越火电成为第一大电源。N型TOPCon电池市占率达71.1%，效率提升至27%。",
            category: "新能源",
            tag: "趋势",
            time: "2025-08",
            source: "紫荆新能源",
            sourceUrl: "http://mp.weixin.qq.com/s?__biz=MzkzODY1Mjk1OQ==",
            stocks: []
        },
        {
            id: "ne-004",
            title: "新型储能装机历史性突破1亿千瓦大关，占全球比重超40%",
            summary: "'十四五'时期，我国建成全球最大、发展最快的可再生能源体系。",
            content: "'十四五'时期，我国建成全球最大、发展最快的可再生能源体系。新型储能装机历史性突破1亿千瓦大关，'巨型充电宝'让风光发电更稳定。",
            category: "新能源",
            tag: "储能",
            time: "2026-03-01",
            source: "央广网",
            sourceUrl: "https://www.cnr.cn/newscenter/native/gd/20260303/t20260303_527541580.shtml",
            stocks: []
        },
        {
            id: "ne-005",
            title: "光伏反内卷成效几何？终端为何涨价难？",
            summary: "多晶硅市场交投清淡，硅料企业多处于大幅减产甚至停产状态。",
            content: "多晶硅市场交投清淡，硅料企业多处于大幅减产甚至停产状态。南网能源宣布2026年不再新增持有光伏等智慧绿电项目，五大发电集团也在不同程度收紧光伏电站项目投资。",
            category: "新能源",
            tag: "分析",
            time: "2026-02-21",
            source: "财新网",
            sourceUrl: "https://database.caixin.com/2026-02-21/102415974.html",
            stocks: []
        },
        {
            id: "ne-006",
            title: "匈牙利计划建设499MW风电项目，2030年投入运营",
            summary: "绿色能源投资公司宣布将在匈牙利建设大型风能项目，安装70台风力发电机。",
            content: "绿色能源投资公司宣布将在匈牙利建设大型风能项目，安装70台风力发电机，总装机容量499兆瓦。首座风力发电机塔筒预计将于2028年初竖立，2030年初使整个风电场投入运营。",
            category: "新能源",
            tag: "海外",
            time: "2026-03-01",
            source: "国际风力发电网",
            sourceUrl: "https://wind.in-en.com/html/wind-2465677.shtml",
            stocks: []
        },
        {
            id: "ne-007",
            title: "希腊为可再生能源提供4亿欧元国家援助",
            summary: "欧盟委员会批准希腊一项价值4亿欧元的国家援助计划。",
            content: "欧盟委员会批准希腊一项价值4亿欧元的国家援助计划，旨在通过直接拨款和税收优惠促进清洁技术投资，涵盖电动汽车电池、光伏、风力发电机组、热泵、绿色氢气生产等领域。",
            category: "新能源",
            tag: "政策",
            time: "2026-03-01",
            source: "国际风力发电网",
            sourceUrl: "https://wind.in-en.com/html/wind-2465677.shtml",
            stocks: []
        },
        {
            id: "ne-008",
            title: "海关总署：2025年锂电池、风力发电机组出口分别增长26.2%、48.7%",
            summary: "在绿色能源领域，2025年锂电池、风力发电机组出口分别增长26.2%、48.7%。",
            content: "海关总署表示，在绿色能源领域，2025年锂电池、风力发电机组出口分别增长26.2%、48.7%；在绿色出行领域，电动摩托车及脚踏车出口增长18.1%。",
            category: "新能源",
            tag: "贸易",
            time: "2026-01-14",
            source: "清华大学能源互联网",
            sourceUrl: "http://www.ceia.eea.tsinghua.edu.cn/hyzx/d897074d22204e38ba21f027b4d574b3.htm",
            stocks: []
        },
        {
            id: "ne-009",
            title: "中国新能源汽车、光伏等全球领先，引领世界绿色转型",
            summary: "世界经济论坛2026年年会报告显示，全球绿色经济已成长为价值5万亿美元的巨大市场。",
            content: "世界经济论坛2026年年会报告显示，全球绿色经济已成长为价值5万亿美元的巨大市场。中国生产全球约80%太阳能电池，2025年全球电动汽车销量2070万辆，中国达1290万辆。",
            category: "新能源",
            tag: "全球",
            time: "2026-01-24",
            source: "新浪财经",
            sourceUrl: "https://finance.sina.com.cn/jjxw/2026-01-24/doc-inhikesz5808602.shtml",
            stocks: []
        },
        {
            id: "ne-010",
            title: "河北发布2025-2026年新政：启动新能源竞价，风电光伏分类型出清",
            summary: "河北省发改委发布通知，开展对应年度增量新能源项目机制电价竞价工作。",
            content: "河北省发改委发布通知，开展对应年度增量新能源项目机制电价竞价工作，要求按风电、光伏类型分别组织竞价与出清，推动新能源上网电量全面进入市场。",
            category: "新能源",
            tag: "政策",
            time: "2025-10",
            source: "碳管理师",
            sourceUrl: "http://tanguanli.org.cn/tanyunzixun/13887.html",
            stocks: []
        }
    ],
    
    // 国际局势
    "国际局势": [
        {
            id: "world-000",
            title: "【最新】卡塔尔能源遇袭停产，欧亚气价飙涨",
            summary: "全球最大LNG生产商卡塔尔能源遇袭停产，霍尔木兹海峡通行几近清零。",
            content: "全球最大LNG生产商卡塔尔能源遇袭停产，欧亚气价飙涨。2025年卡塔尔LNG出口量超过8000万吨，约占全球总供应量20%。霍尔木兹海峡通行已几乎清零，经该海峡运输的原油、LNG分别占全球贸易量31%、19.3%。",
            category: "国际局势",
            tag: "能源危机",
            time: "2026-03-03",
            source: "财新网",
            sourceUrl: "https://www.caixin.com/2026-03-03/102418841.html",
            stocks: []
        },
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
        },
        {
            id: "world-002",
            title: "【突发】美以联合打击伊朗进入第三天，哈梅内伊遇害",
            summary: "3月2日，美以对伊朗的联合军事打击进入第三天，已有48名伊朗高层人员被击毙。",
            content: "3月2日，美以对伊朗的联合军事打击进入第三天。伊朗最高领袖哈梅内伊遇害、大量伊朗领导层人物被清除后，美以并未收手。特朗普表示军事行动可能持续四周，已有48名伊朗高层人员被击毙。",
            category: "国际局势",
            tag: "战争",
            time: "2026-03-03",
            source: "上观新闻",
            sourceUrl: "https://iis.fudan.edu.cn/c1/26/c6893a770342/page.htm",
            stocks: []
        },
        {
            id: "world-003",
            title: "伊朗禁航霍尔木兹海峡，大量油轮滞留波斯湾扰动油市",
            summary: "能源分析机构Vortexa指出，霍尔木兹海峡是局势升级的核心压力点。",
            content: "能源分析机构Vortexa指出，霍尔木兹海峡是局势升级的核心压力点。当地时间2月28日，美国和以色列对伊朗多地发动'先发制人的打击'后，伊朗宣布禁航霍尔木兹海峡，全球石油运输量30%受影响。",
            category: "国际局势",
            tag: "能源",
            time: "2026-03-01",
            source: "财新网",
            sourceUrl: "https://www.caixin.com/2026-03-01/102418077.html",
            stocks: []
        },
        {
            id: "world-004",
            title: "美伊70余载恩怨博弈：从1953年政变到2026年战争",
            summary: "新华社回顾美伊关系演变：1953年美国策动政变推翻伊朗民选首相。",
            content: "新华社回顾美伊关系演变：1953年美国策动政变推翻伊朗民选首相，2025年6月美国对伊朗核设施发动'午夜之锤'打击，2026年2月28日美以联合打击伊朗，哈梅内伊身亡。",
            category: "国际局势",
            tag: "历史",
            time: "2026-03-02",
            source: "新华网",
            sourceUrl: "https://www.news.cn/world/20260302/e86fc26733b3469997bf725895b22d77/c.html",
            stocks: []
        },
        {
            id: "world-005",
            title: "战火升级！本轮美伊冲突五大疑问待解",
            summary: "与去年的'12日战争'相比，本轮冲突规模几何、将持续多久？",
            content: "与去年的'12日战争'相比，本轮冲突规模几何、将持续多久？美以此次动手意图达成哪些目标？美伊核谈判还有重启可能吗？中东局势会否陷入失控的螺旋？",
            category: "国际局势",
            tag: "分析",
            time: "2026-03-01",
            source: "中国新闻网",
            sourceUrl: "https://www.chinanews.com.cn/gj/2026/03-01/10578620.shtml",
            stocks: []
        },
        {
            id: "world-006",
            title: "中东战火冲击中国汽车出海，影响波及欧洲市场",
            summary: "美以伊战火之下，中东作为中国汽车出口的关键市场受冲击。",
            content: "美以伊战火之下，中东作为中国汽车出口的关键市场受冲击。国有车企伊朗业务已停滞，到欧洲航线只能绕行好望角，时间要多出10到15天。",
            category: "国际局势",
            tag: "贸易",
            time: "2026-03-03",
            source: "财新网",
            sourceUrl: "https://companies.caixin.com/2026-03-03/102418983.html",
            stocks: []
        },
        {
            id: "world-007",
            title: "2026年中东局势展望：冲突仍是主线，形势不容乐观",
            summary: "2025年中东地区多类冲突持续交织，安全局势动荡难以止息。",
            content: "2025年中东地区多类冲突持续交织，安全局势动荡难以止息。巴以双方达成脆弱停火，伊朗全境爆发大规模民众抗议，美以多次释放动武威胁。",
            category: "国际局势",
            tag: "展望",
            time: "2026-01-16",
            source: "新华网",
            sourceUrl: "https://www.news.cn/world/20260116/69665461532148da9a1ad561339ee8b2/c.html",
            stocks: []
        },
        {
            id: "world-008",
            title: "中东多国正被卷入美国与伊朗的战争",
            summary: "据伊朗红新月会数据，自美以联合打击开始以来，伊朗境内已有至少555人死亡。",
            content: "据伊朗红新月会数据，自美以联合打击开始以来，伊朗境内已有至少555人死亡。德黑兰在整个地区展开报复性打击，袭击了沙特、卡塔尔、科威特、阿联酋和巴林等国的美国军事基地。",
            category: "国际局势",
            tag: "扩散",
            time: "2026-03-02",
            source: "网易",
            sourceUrl: "https://www.163.com/dy/article/KN1P67UN05568W0A.html",
            stocks: []
        }
    ],
    
    // 生物医药
    "生物医药": [
        {
            id: "bio-001",
            title: "礼来替尔泊肽减重版国内获批上市",
            summary: "礼来中国宣布替尔泊肽减重适应症获国家药监局批准，成为国内第二款获批的GLP-1减重药。",
            content: "礼来中国宣布替尔泊肽减重适应症获国家药监局批准，成为国内第二款获批的GLP-1减重药。",
            category: "生物医药",
            tag: "重磅",
            time: "2026-03-03",
            source: "礼来",
            sourceUrl: "#",
            stocks: ["LLY"]
        },
        {
            id: "bio-002",
            title: "诺和诺德司美格鲁肽中国专利即将到期",
            summary: "司美格鲁肽中国核心专利将于2026年到期，国内已有超过10家企业布局仿制药。",
            content: "司美格鲁肽中国核心专利将于2026年到期，国内已有超过10家企业布局仿制药。",
            category: "生物医药",
            tag: "",
            time: "2026-03-03",
            source: "医药魔方",
            sourceUrl: "#",
            stocks: ["NVO"]
        },
        {
            id: "bio-003",
            title: "Moderna癌症疫苗临床数据积极，股价大涨",
            summary: "Moderna公布个性化癌症疫苗mRNA-4157二期临床数据，显著降低黑色素瘤复发风险。",
            content: "Moderna公布个性化癌症疫苗mRNA-4157二期临床数据，显著降低黑色素瘤复发风险。",
            category: "生物医药",
            tag: "",
            time: "2026-03-03",
            source: "Moderna",
            sourceUrl: "#",
            stocks: ["MRNA"]
        },
        {
            id: "bio-004",
            title: "药明康德Q4业绩超预期，在手订单增长30%",
            summary: "药明康德发布Q4财报，营收和利润均超预期，在手订单同比增长30%。",
            content: "药明康德发布Q4财报，营收和利润均超预期，在手订单同比增长30%，生物业务强劲增长。",
            category: "生物医药",
            tag: "",
            time: "2026-03-03",
            source: "药明康德",
            sourceUrl: "#",
            stocks: ["WUXI"]
        },
        {
            id: "bio-005",
            title: "百济神州泽布替尼全球销售额破20亿美元",
            summary: "百济神州宣布BTK抑制剂泽布替尼2024年全球销售额突破20亿美元。",
            content: "百济神州宣布BTK抑制剂泽布替尼2024年全球销售额突破20亿美元，成为国产创新药出海标杆。",
            category: "生物医药",
            tag: "",
            time: "2026-03-03",
            source: "百济神州",
            sourceUrl: "#",
            stocks: ["BGNE"]
        }
    ],
    
    // 机器人
    "机器人": [
        {
            id: "robo-001",
            title: "特斯拉Optimus二代进厂测试，可搬运电池",
            summary: "特斯拉Optimus二代人形机器人进入工厂测试，可完成电池搬运等简单任务。",
            content: "特斯拉Optimus二代人形机器人进入工厂测试，可完成电池搬运等简单任务，效率提升30%。",
            category: "机器人",
            tag: "重磅",
            time: "2026-03-03",
            source: "特斯拉",
            sourceUrl: "#",
            stocks: ["TSLA"]
        },
        {
            id: "robo-002",
            title: "波士顿动力Atlas全电动版发布",
            summary: "波士顿动力发布全电动版Atlas机器人，完全舍弃液压系统。",
            content: "波士顿动力发布全电动版Atlas机器人，完全舍弃液压系统，动作更加流畅自然。",
            category: "机器人",
            tag: "",
            time: "2026-03-03",
            source: "波士顿动力",
            sourceUrl: "#",
            stocks: ["现代汽车"]
        },
        {
            id: "robo-003",
            title: "Figure AI与宝马合作，人形机器人进工厂",
            summary: "Figure AI宣布与宝马达成合作，其人形机器人Figure 01将进入宝马工厂进行试点应用。",
            content: "Figure AI宣布与宝马达成合作，其人形机器人Figure 01将进入宝马工厂进行试点应用。",
            category: "机器人",
            tag: "",
            time: "2026-03-03",
            source: "Figure AI",
            sourceUrl: "#",
            stocks: ["Figure"]
        },
        {
            id: "robo-004",
            title: "宇树科技H1人形机器人量产，售价9万美元",
            summary: "中国宇树科技宣布H1人形机器人开始量产，售价9万美元。",
            content: "中国宇树科技宣布H1人形机器人开始量产，售价9万美元，主要面向科研和教育市场。",
            category: "机器人",
            tag: "",
            time: "2026-03-03",
            source: "宇树科技",
            sourceUrl: "#",
            stocks: ["宇树科技"]
        },
        {
            id: "robo-005",
            title: "智元机器人远征A2发布，具备灵巧手",
            summary: "智元机器人发布远征A2人形机器人，配备自主研发的高自由度灵巧手。",
            content: "智元机器人发布远征A2人形机器人，配备自主研发的高自由度灵巧手，可完成精细操作。",
            category: "机器人",
            tag: "",
            time: "2026-03-03",
            source: "智元机器人",
            sourceUrl: "#",
            stocks: ["智元机器人"]
        }
    ],
    
    // 商业航天
    "商业航天": [
        {
            id: "space-001",
            title: "SpaceX星舰第八次试飞成功，助推器回收",
            summary: "SpaceX星舰第八次综合飞行测试成功，超重型助推器完成回收。",
            content: "SpaceX星舰第八次综合飞行测试成功，超重型助推器完成回收，飞船进入预定轨道。",
            category: "商业航天",
            tag: "重磅",
            time: "2026-03-03",
            source: "SpaceX",
            sourceUrl: "#",
            stocks: ["SPACE"]
        },
        {
            id: "space-002",
            title: "中国商业航天公司天兵科技完成数亿元融资",
            summary: "天兵科技完成新一轮数亿元融资，用于天龙三号火箭研制和发射能力建设。",
            content: "天兵科技完成新一轮数亿元融资，用于天龙三号火箭研制和发射能力建设。",
            category: "商业航天",
            tag: "",
            time: "2026-03-03",
            source: "36氪",
            sourceUrl: "#",
            stocks: ["天兵科技"]
        },
        {
            id: "space-003",
            title: "蓝色起源新格伦火箭计划3月首飞",
            summary: "贝索斯的蓝色起源宣布新格伦重型火箭计划3月进行首次轨道试飞。",
            content: "贝索斯的蓝色起源宣布新格伦重型火箭计划3月进行首次轨道试飞，挑战SpaceX。",
            category: "商业航天",
            tag: "",
            time: "2026-03-03",
            source: "蓝色起源",
            sourceUrl: "#",
            stocks: ["蓝色起源"]
        },
        {
            id: "space-004",
            title: "星链卫星突破7000颗，全球用户超500万",
            summary: "SpaceX宣布星链在轨卫星突破7000颗，全球订阅用户超过500万。",
            content: "SpaceX宣布星链在轨卫星突破7000颗，全球订阅用户超过500万，覆盖100多个国家。",
            category: "商业航天",
            tag: "",
            time: "2026-03-03",
            source: "SpaceX",
            sourceUrl: "#",
            stocks: ["星链"]
        },
        {
            id: "space-005",
            title: "中国嫦娥六号完成月球背面采样返回",
            summary: "嫦娥六号任务成功完成月球背面采样并返回地球，带回1935.3克月壤样品。",
            content: "嫦娥六号任务成功完成月球背面采样并返回地球，带回1935.3克月壤样品。",
            category: "商业航天",
            tag: "",
            time: "2026-03-03",
            source: "国家航天局",
            sourceUrl: "#",
            stocks: ["CNSA"]
        }
    ],
    
    // 核聚变
    "核聚变": [
        {
            id: "fusion-001",
            title: "ITER项目实现100秒高约束模运行",
            summary: "国际热核聚变实验堆ITER实现100秒高约束模等离子体运行，创造新纪录。",
            content: "国际热核聚变实验堆ITER实现100秒高约束模等离子体运行，创造新纪录。",
            category: "核聚变",
            tag: "重磅",
            time: "2026-03-03",
            source: "ITER",
            sourceUrl: "#",
            stocks: ["ITER"]
        },
        {
            id: "fusion-002",
            title: "中国EAST实现1000秒长脉冲高参数运行",
            summary: "中国全超导托卡马克EAST装置实现1000秒长脉冲高参数等离子体运行。",
            content: "中国全超导托卡马克EAST装置实现1000秒长脉冲高参数等离子体运行，向聚变能源迈进一步。",
            category: "核聚变",
            tag: "",
            time: "2026-03-03",
            source: "中科院",
            sourceUrl: "#",
            stocks: ["EAST"]
        },
        {
            id: "fusion-003",
            title: "Commonwealth Fusion完成8.4亿美元融资",
            summary: "美国核聚变公司Commonwealth Fusion Systems完成8.4亿美元C轮融资。",
            content: "美国核聚变公司Commonwealth Fusion Systems完成8.4亿美元C轮融资，估值超70亿美元。",
            category: "核聚变",
            tag: "",
            time: "2026-03-03",
            source: "CFS",
            sourceUrl: "#",
            stocks: ["CFS"]
        },
        {
            id: "fusion-004",
            title: "能量奇点洪荒70装置建成放电",
            summary: "中国民营核聚变公司能量奇点宣布洪荒70高温超导托卡马克装置建成并成功放电。",
            content: "中国民营核聚变公司能量奇点宣布洪荒70高温超导托卡马克装置建成并成功放电。",
            category: "核聚变",
            tag: "",
            time: "2026-03-03",
            source: "能量奇点",
            sourceUrl: "#",
            stocks: ["能量奇点"]
        },
        {
            id: "fusion-005",
            title: "Helion与微软签订购电协议，2028年供电",
            summary: "核聚变公司Helion Energy与微软签订全球首份核聚变购电协议。",
            content: "核聚变公司Helion Energy与微软签订全球首份核聚变购电协议，计划2028年开始供电。",
            category: "核聚变",
            tag: "",
            time: "2026-03-03",
            source: "Helion",
            sourceUrl: "#",
            stocks: ["Helion"]
        }
    ],
    
    // 量子计算
    "量子计算": [
        {
            id: "quantum-001",
            title: "谷歌Willow量子芯片实现纠错突破",
            summary: "谷歌发布Willow量子芯片，在量子纠错方面取得重大突破。",
            content: "谷歌发布Willow量子芯片，在量子纠错方面取得重大突破，错误率随量子比特数增加而下降。",
            category: "量子计算",
            tag: "重磅",
            time: "2026-03-03",
            source: "谷歌",
            sourceUrl: "#",
            stocks: ["GOOGL"]
        },
        {
            id: "quantum-002",
            title: "IBM发布1000+量子比特处理器Condor",
            summary: "IBM发布1121量子比特处理器Condor，并推出量子计算云平台Qiskit Runtime新功能。",
            content: "IBM发布1121量子比特处理器Condor，并推出量子计算云平台Qiskit Runtime新功能。",
            category: "量子计算",
            tag: "",
            time: "2026-03-03",
            source: "IBM",
            sourceUrl: "#",
            stocks: ["IBM"]
        },
        {
            id: "quantum-003",
            title: "本源量子72比特计算机交付使用",
            summary: "中国本源量子向金融机构交付72比特超导量子计算机。",
            content: "中国本源量子向金融机构交付72比特超导量子计算机，用于金融风控和量化交易研究。",
            category: "量子计算",
            tag: "",
            time: "2026-03-03",
            source: "本源量子",
            sourceUrl: "#",
            stocks: ["本源量子"]
        },
        {
            id: "quantum-004",
            title: "中国九章三号实现255光子计算优势",
            summary: "中国科学技术大学宣布九章三号光量子计算原型机实现255光子计算优势。",
            content: "中国科学技术大学宣布九章三号光量子计算原型机实现255光子计算优势，刷新世界纪录。",
            category: "量子计算",
            tag: "",
            time: "2026-03-03",
            source: "中科大",
            sourceUrl: "#",
            stocks: ["中科大"]
        },
        {
            id: "quantum-005",
            title: "IonQ实现36算法量子比特，保真度99.9%",
            summary: "离子阱量子计算公司IonQ宣布实现36算法量子比特。",
            content: "离子阱量子计算公司IonQ宣布实现36算法量子比特，单双量子比特门保真度达99.9%。",
            category: "量子计算",
            tag: "",
            time: "2026-03-03",
            source: "IonQ",
            sourceUrl: "#",
            stocks: ["IONQ"]
        }
    ],
    
    // 数字货币
    "数字货币": [
        {
            id: "crypto-001",
            title: "比特币价格跌破85000美元，24小时跌幅超5%",
            summary: "据CoinGecko数据，比特币价格跌破85000美元，24小时跌幅超过5%。",
            content: "据CoinGecko数据，比特币价格跌破85000美元，24小时跌幅超过5%，市场避险情绪升温。",
            category: "数字货币",
            tag: "重磅",
            time: "2026-03-03",
            source: "CoinGecko",
            sourceUrl: "#",
            stocks: ["BTC"]
        },
        {
            id: "crypto-002",
            title: "以太坊ETF资金持续流出，质押量突破3000万枚",
            summary: "尽管ETF资金持续流出，以太坊2.0质押量突破3000万枚。",
            content: "尽管ETF资金持续流出，以太坊2.0质押量突破3000万枚，占总供应量25%。",
            category: "数字货币",
            tag: "",
            time: "2026-03-03",
            source: "Dune",
            sourceUrl: "#",
            stocks: ["ETH"]
        },
        {
            id: "crypto-003",
            title: "美国SEC批准Solana现货ETF申请",
            summary: "美国SEC批准多家机构提交的Solana现货ETF申请。",
            content: "美国SEC批准多家机构提交的Solana现货ETF申请，预计2025年下半年上市交易。",
            category: "数字货币",
            tag: "",
            time: "2026-03-03",
            source: "SEC",
            sourceUrl: "#",
            stocks: ["SOL"]
        },
        {
            id: "crypto-004",
            title: "MicroStrategy比特币持仓浮亏超50亿美元",
            summary: "随着比特币价格下跌，MicroStrategy比特币持仓浮亏超过50亿美元。",
            content: "随着比特币价格下跌，MicroStrategy比特币持仓浮亏超过50亿美元，但公司表示不会出售。",
            category: "数字货币",
            tag: "",
            time: "2026-03-03",
            source: "MicroStrategy",
            sourceUrl: "#",
            stocks: ["MSTR"]
        },
        {
            id: "crypto-005",
            title: "香港批准稳定币发行牌照，首批3家公司获牌",
            summary: "香港金管局发放首批稳定币发行牌照，Circle、Tether等3家公司获批。",
            content: "香港金管局发放首批稳定币发行牌照，Circle、Tether等3家公司获批。",
            category: "数字货币",
            tag: "",
            time: "2026-03-03",
            source: "香港金管局",
            sourceUrl: "#",
            stocks: ["HK"]
        }
    ],
    
    // 游戏
    "游戏": [
        {
            id: "game-001",
            title: "《黑神话：悟空》销量突破2800万份，收入超90亿",
            summary: "国产3A大作《黑神话：悟空》全球销量突破2800万份。",
            content: "国产3A大作《黑神话：悟空》全球销量突破2800万份，总收入超过90亿元人民币。",
            category: "游戏",
            tag: "重磅",
            time: "2026-03-03",
            source: "Steam",
            sourceUrl: "#",
            stocks: ["游戏科学"]
        },
        {
            id: "game-002",
            title: "腾讯《王者荣耀》日活稳定在1亿以上",
            summary: "腾讯财报显示，《王者荣耀》日活跃用户稳定在1亿以上。",
            content: "腾讯财报显示，《王者荣耀》日活跃用户稳定在1亿以上，持续领跑全球手游市场。",
            category: "游戏",
            tag: "",
            time: "2026-03-03",
            source: "腾讯",
            sourceUrl: "#",
            stocks: ["TCEHY"]
        },
        {
            id: "game-003",
            title: "《原神》5.4版本上线，梦见月瑞希登场",
            summary: "米哈游《原神》5.4版本「梦间见月明」正式上线。",
            content: "米哈游《原神》5.4版本「梦间见月明」正式上线，新角色梦见月瑞希登场。",
            category: "游戏",
            tag: "",
            time: "2026-03-03",
            source: "米哈游",
            sourceUrl: "#",
            stocks: ["MIHOYO"]
        },
        {
            id: "game-004",
            title: "《GTA 6》延期至2026年5月发售",
            summary: "Rockstar宣布《GTA 6》发售日期从2025年秋季推迟至2026年5月。",
            content: "Rockstar宣布《GTA 6》发售日期从2025年秋季推迟至2026年5月，引发玩家热议。",
            category: "游戏",
            tag: "",
            time: "2026-03-03",
            source: "Rockstar",
            sourceUrl: "#",
            stocks: ["T2"]
        },
        {
            id: "game-005",
            title: "任天堂Switch 2发布会定档4月2日",
            summary: "任天堂宣布将于4月2日举办Switch 2专场发布会。",
            content: "任天堂宣布将于4月2日举办Switch 2专场发布会，公布新主机详细信息和首发游戏阵容。",
            category: "游戏",
            tag: "",
            time: "2026-03-03",
            source: "任天堂",
            sourceUrl: "#",
            stocks: ["NTDOY"]
        }
    ]
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
