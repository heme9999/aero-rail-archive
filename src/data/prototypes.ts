import type { PrototypeInfo } from '../types';

/**
 * 🔬 原型机与试验样车权威数据库 (Prototype & Testbed Archive)
 * 涵盖全系统 106 款载具，针对每一款机型与车型家族精准配备真实首飞/下线原型档案。
 */

export const PROTOTYPE_REGISTRY: Record<string, PrototypeInfo> = {
  // =========================================================================
  // ✈️ 民航客机原型机 (Aviation Prototypes)
  // =========================================================================

  // 中国商飞 C919
  'comac-c919': {
    name: { zh: '中国商飞 C919 101架机 (首飞技术验证原型机)', en: 'COMAC C919 Prototype 101 (B-001A)' },
    codeNumber: 'B-001A (10101)',
    firstDate: { zh: '2017年5月5日 (上海浦东国际机场首飞)', en: 'May 5, 2017 (First Flight at Shanghai Pudong)' },
    testLocation: { zh: '上海浦东国际机场 / 陕西阎良国家试飞院 (CFTE)', en: 'Shanghai Pudong / Yanliang National Flight Test Base' },
    significance: {
      zh: '我国首款按照国际主流适航标准自主研发的大型干线客机首架原型机。装配机头超长迎角测试空速管、机腹尾旋锥气动遥测天线及数千个全机身应变传感器，完成了大侧风着陆、失速改出、颤振及高高原极值环境包线试飞拓展。',
      en: 'The maiden flight prototype of China first mainline commercial airliner. Equipped with a long nose test boom and trailing cone telemetry sensors to validate flutter, stall recovery, and crosswind envelopes.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/COMAC_B-001A_May_2017.jpg',
    liveryName: { zh: '中国商飞蓝绿流线首飞涂装 (尾翼带 C919 专属大标识)', en: 'COMAC Original Blue-Green House First-Flight Livery' },
    currentStatus: { zh: '中国飞行试验研究院科研试飞与工程验证中', en: 'Active in CFTE engineering & research flight testing' },
  },

  // 空客 A350-900 (机身侧面全景照片)
  'airbus-a350-900': {
    name: { zh: '空中客车 A350-900 MSN001 首飞原型机', en: 'Airbus A350-900 Prototype MSN001 (F-WXWB)' },
    codeNumber: 'MSN 001 (F-WXWB)',
    firstDate: { zh: '2013年6月14日 (法国图卢兹-布拉尼亚克机场首飞)', en: 'June 14, 2013 (First Flight at Toulouse-Blagnac)' },
    testLocation: { zh: '法国图卢兹空客飞行试验中心', en: 'Airbus Flight Test Center, Toulouse, France' },
    significance: {
      zh: '开启“Xtra Widebody”宽体新纪元的首发原型机。全机碳纤维复合材料应用比例高达 53%，配备劳斯莱斯遄达 XWB 引擎。机身侧面呈现修长典雅的机体流线与标志性墨镜侠风挡，验证了一体化机翼弯曲弧度自动气动调节与客舱压力舒适度。',
      en: 'The first flight prototype of the A350 XWB, featuring 53% composite airframe and Rolls-Royce Trent XWB turbofans, showcasing the sleek side profile and sunglasses cockpit.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Airbus_A350-941_F-WWCF_MSN002_ILA_Berlin_2016_17.jpg',
    liveryName: { zh: '空中客车碳纤维复合材料 (Carbon Fibre) 科技原厂涂装 (机身侧面特写)', en: 'Airbus Carbon Fiber House Demonstration Livery (Side Profile)' },
    currentStatus: { zh: '空中客车集团专属飞行试验平台与航展展示机', en: 'Active Airbus flight test and demonstration platform' },
  },

  // 空客 A350-1000
  'airbus-a350-1000': {
    name: { zh: '空中客车 A350-1000 MSN059 首飞原型机', en: 'Airbus A350-1000 Prototype MSN059 (F-WMIL)' },
    codeNumber: 'MSN 059 (F-WMIL)',
    firstDate: { zh: '2016年11月24日 (法国图卢兹-布拉尼亚克机场首飞)', en: 'November 24, 2016 (First Flight at Toulouse-Blagnac)' },
    testLocation: { zh: '法国图卢兹空客飞行试验中心', en: 'Airbus Flight Test Center, Toulouse, France' },
    significance: {
      zh: 'A350 家族最大延伸型号的首架原型机。机身加长 7 米，采用特制的六轮主起落架转向小车与推力提升至 97,000 磅的遄达 XWB-97 发动机，完成了极寒极热恶劣工况与最大刹车能量测试。',
      en: 'The prototype of the stretched A350-1000, testing the six-wheel main landing gear bogies, Trent XWB-97 engines, and maximum rejected takeoff braking energy.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Airbus_A350-1000_F-WMIL_4.jpg',
    liveryName: { zh: '空中客车 A350-1000 原厂蓝灰科技涂装', en: 'Airbus A350-1000 House Flight Test Livery' },
    currentStatus: { zh: '空中客车集团飞行试验现役平台', en: 'Airbus Flight Test Bed in Service' },
  },

  // 空客 A380-800 (飞机全机整体全景照片)
  'airbus-a380-800': {
    name: { zh: '空中客车 A380-800 MSN001 首飞验证机', en: 'Airbus A380-800 Prototype MSN001 (F-WWOW)' },
    codeNumber: 'MSN 001 (F-WWOW)',
    firstDate: { zh: '2005年4月27日 (法国图卢兹-布拉尼亚克机场首飞)', en: 'April 27, 2005 (First Flight at Toulouse-Blagnac)' },
    testLocation: { zh: '法国图卢兹空客飞行试验中心', en: 'Airbus Flight Test Center, Toulouse, France' },
    significance: {
      zh: '人类民航史上最大全双层宽体喷气客机首飞原型机。最大起飞重量高达 560 吨，翼展 79.75 米。整机完整展示了宏伟的双层机身、四具大涵道比涡扇引擎以及巨大的机翼构造。首架机机舱装载 22 吨遥测仪器，圆满验证了 GLARE 层压材料中央翼盒与 853 人全员紧急撤离安全包线。',
      en: 'The maiden flight prototype of the double-deck superjumbo. Shows the complete aircraft profile with its four massive turbofans, 79.75-meter wingspan, and 560-ton maximum takeoff airframe.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Airbus_A380_prototype_F-WWOW_-_Hamburg_Airport_2007.jpg',
    liveryName: { zh: '空中客车 A380 原厂蓝白首发展示涂装 (整机全貌带机身 A380 字母)', en: 'Airbus House Colors Full Aircraft First-Flight Demonstrator' },
    currentStatus: { zh: '空客技术开发中心现役 (作为 100% SAF 可持续航空燃料与氢能试验机)', en: 'Active with Airbus as 100% SAF and ZEROe hydrogen testbed' },
  },

  // 波音 787-8 / 787-9 梦想客机
  'boeing-787': {
    name: { zh: '波音 787-8 梦想客机 1号原型机 (ZA001)', en: 'Boeing 787-8 Dreamliner Prototype ZA001 (N787BA)' },
    codeNumber: 'ZA001 (N787BA)',
    firstDate: { zh: '2009年12月15日 (美国佩恩机场首飞)', en: 'December 15, 2009 (First Flight at Paine Field, Everett)' },
    testLocation: { zh: '美国西雅图佩恩机场 (Paine Field Everett)', en: 'Paine Field Everett / Boeing Field, WA' },
    significance: {
      zh: '民用航空工业史上首款以碳纤维复合材料为主体结构（占比超过 50%）的革命性宽体客机原型机。采用全电环控无引气架构、超临界锯齿消音短舱及一体成型机身桶段，大幅降低燃油消耗 20%。',
      en: 'The revolutionary prototype with over 50% composite airframe. Introduced bleedless all-electric environmental architecture and raked wingtips.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Boeing_787-8_Dreamliner_-_Prototype_N787BA_preserved_in_Nagoya_%28Flight_of_Dreams%29.jpg',
    liveryName: { zh: '波音民机集团原厂 787 Dreamliner 蓝白渐变首发涂装', en: 'Boeing Commercial Airplanes 787 Dreamliner House Livery' },
    currentStatus: { zh: '日本名古屋中部国际机场 "Flight of Dreams" 航空博物馆永久典藏', en: 'Preserved at Flight of Dreams Museum, Chubu Centrair Airport, Nagoya' },
  },

  // 波音 777-200 / 777-300ER
  'boeing-777': {
    name: { zh: '波音 777-200 1号首飞原型机 (WA001)', en: 'Boeing 777-200 Prototype WA001 (N7771)' },
    codeNumber: 'WA001 (N7771)',
    firstDate: { zh: '1994年6月12日 (美国埃弗雷特佩恩机场首飞)', en: 'June 12, 1994 (First Flight at Paine Field, Everett)' },
    testLocation: { zh: '美国西雅图波音试飞中心 (Boeing Field)', en: 'Boeing Field / Paine Field, Seattle, WA' },
    significance: {
      zh: '人类航空史上首款 100% 采用全数字三维无图纸（CATIA）计算机辅助设计的客机。装配当时民航推力最大的 GE90 / Trent 800 发动机，并在首次试飞中就成功实现了双发跨洋延程飞行 (ETOPS 180) 的基础验证。',
      en: 'The first airliner 100% digitally designed using CATIA 3D computing. Powered by giant turbofans enabling ETOPS-180 transoceanic flight.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Boeing_Boeing_777-200%3B_N7771%40GVA%3B09.09.1995_%286084007364%29.jpg',
    liveryName: { zh: '波音 777 经典原厂彩虹条带首飞试飞涂装', en: 'Boeing 777 Original Rainbow Stripe First Flight Livery' },
    currentStatus: { zh: '曾服役于国泰航空 (B-HNL)，退役后由美国亚利桑那皮马航空航天博物馆珍藏', en: 'Served with Cathay Pacific as B-HNL; preserved at Pima Air & Space Museum, AZ' },
  },

  // 波音 747-400
  'boeing-747-400': {
    name: { zh: '波音 747-400 1号首飞技术原型机 (RT001)', en: 'Boeing 747-400 Prototype RT001 (N401PW)' },
    codeNumber: 'RT001 (N401PW / Northwest 6301)',
    firstDate: { zh: '1988年4月29日 (美国埃弗雷特首飞)', en: 'April 29, 1988 (First Flight at Paine Field, Everett)' },
    testLocation: { zh: '美国西雅图波音佩恩试飞基地', en: 'Paine Field Everett, WA' },
    significance: {
      zh: '确立了现代双人制玻璃化座舱（Glass Cockpit）的空中霸主原型机。取消了机械工程师飞行席位，增加了两端 6 英尺高小翼，航程突破 13,400 公里，曾创下不经停伦敦直飞悉尼的惊人纪录。',
      en: 'The prototype that revolutionized long-haul aviation with a two-crew glass cockpit, 6-foot winglets, and unprecedented intercontinental range.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/N661US_2_B747-451_Northwest_Airlines_NRT_21MAY03_%288439823437%29.jpg',
    liveryName: { zh: '波音原厂 747-400 红白蓝测试涂装 / 西北航空涂装', en: 'Boeing 747-400 House Test Colors / Northwest Livery' },
    currentStatus: { zh: '美国亚特兰大达美航空飞行博物馆 (Delta Flight Museum) 永久典藏', en: 'Preserved at Delta Flight Museum, Atlanta, GA' },
  },

  // 波音 747-8I
  'boeing-747-8i': {
    name: { zh: '波音 747-8 洲际客机 1号首飞原型机 (RC001)', en: 'Boeing 747-8 Intercontinental Prototype RC001 (N6067E)' },
    codeNumber: 'RC001 (N6067E)',
    firstDate: { zh: '2011年3月20日 (美国佩恩机场首飞)', en: 'March 20, 2011 (First Flight at Paine Field, Everett)' },
    testLocation: { zh: '美国埃弗雷特佩恩机场 / 波音试飞中心', en: 'Paine Field / Boeing Field, Everett, WA' },
    significance: {
      zh: '波音 747 家族终极演进型号。机身加长至 76.3 米（曾为世界最长客机），引入超临界机翼与来自 787 技术的 GEnx-2B 锯齿消音引擎，大幅提升静音与燃油效率。',
      en: 'The ultimate evolution of the Queen of the Skies, with a 76.3m fuselage and GEnx chevron turbofans.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Boeing_747-8_Intercontinental_-_N6067E_%287987027290%29.jpg',
    liveryName: { zh: '波音 "Sunrise" 晨曦金红双色特别首发涂装', en: 'Boeing "Sunrise" Red-Orange Demonstration Livery' },
    currentStatus: { zh: '完成型号适航合格证试飞后交付改装', en: 'Converted after completing FAA flight test certification' },
  },

  // 协和超音速客机
  'concorde': {
    name: { zh: '协和超音速客机 001 号首飞原型机', en: 'Concorde Prototype 001 (F-WTSS)' },
    codeNumber: '001 (F-WTSS)',
    firstDate: { zh: '1969年3月2日 (法国图卢兹首飞)', en: 'March 2, 1969 (First Flight at Toulouse)' },
    testLocation: { zh: '法国图卢兹 / 英国菲尔顿 (Filton)', en: 'Toulouse, France / Filton, UK' },
    significance: {
      zh: '开启人类民用 2.04 倍音速商业飞行的工程奇迹。验证了下垂式变倾角机鼻（Droop Nose）、奥吉瓦双曲面细长三角翼以及罗·罗斯奈克玛奥林匹斯 593 涡喷发动机带加力燃烧室的超音速巡航能力。',
      en: 'The legendary Mach 2 airliner prototype. Validated ogival delta wings, drooping nose visor, and Olympus 593 afterburning supercruise.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Concorde_Air_France_Musee_du_Bourget_P1020006.JPG',
    liveryName: { zh: '英法联合研发协和 001 原厂试飞涂装', en: 'Aérospatiale / BAC Concorde 001 Flight Test Livery' },
    currentStatus: { zh: "法国巴黎勒布尔歇航空航天博物馆 (Musée de l'Air et de l'Espace) 永久典藏", en: "Preserved at Musée de l'Air et de l'Espace, Paris Le Bourget" },
  },

  // 空客 A320 & A320neo
  'airbus-a320': {
    name: { zh: '空中客车 A320-100 MSN001 首架技术原型机', en: 'Airbus A320 Prototype MSN001 (F-WWAI)' },
    codeNumber: 'MSN 001 (F-WWAI)',
    firstDate: { zh: '1987年2月22日 (法国图卢兹首飞)', en: 'February 22, 1987 (First Flight at Toulouse-Blagnac)' },
    testLocation: { zh: '法国图卢兹空客飞行试验中心', en: 'Airbus Flight Test Center, Toulouse, France' },
    significance: {
      zh: '世界上首款采用全电传操纵（Fly-by-Wire）技术与侧杆操纵的民航客机原型机。彻底颠覆了传统民航驾驶盘布局，建立了空客家族通用的飞行包线保护法则。',
      en: 'Pioneered digital fly-by-wire controls and sidesticks in commercial aviation, defining Airbus cockpit commonality.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/F-WWAI_A320-131_Airbus_Industrie%28prototype%29_FAB_SEP88_%2813753510323%29.jpg',
    liveryName: { zh: '空中客车工业集团 A320 原厂红白首飞涂装', en: 'Airbus Industrie Original A320 First-Flight Livery' },
    currentStatus: { zh: '长期作为空客航电与系统革新先导飞行验证机', en: 'Airbus avionics and fly-by-wire test platform' },
  },

  // 空客 A330-300 / A330neo
  'airbus-a330': {
    name: { zh: '空中客车 A330-300 MSN012 首架技术原型机', en: 'Airbus A330-300 Prototype MSN012 (F-WWKA)' },
    codeNumber: 'MSN 012 (F-WWKA)',
    firstDate: { zh: '1992年11月2日 (法国图卢兹首飞)', en: 'November 2, 1992 (First Flight at Toulouse-Blagnac)' },
    testLocation: { zh: '法国图卢兹空客飞行试验中心', en: 'Airbus Flight Test Center, Toulouse, France' },
    significance: {
      zh: '空客主力中远程双发宽体客机的开创者。与四发 A340 共享相同机翼结构与驾驶舱设计，验证了高升阻比超临界翼型与现代双发跨洋飞行能力。',
      en: 'The foundation of Airbus twin-engine widebody dominance, sharing wings and glass cockpit commonality with the A340.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Airbus_A330-302_cn_181_F-WWKA_16Jun95_%28RJF%29.jpg',
    liveryName: { zh: '空中客车 A330 原厂蓝白首飞试飞涂装', en: 'Airbus Original House First Flight Livery' },
    currentStatus: { zh: '完成多项发动机认证试飞后改装封存', en: 'Preserved / Retired after certification campaigns' },
  },

  // 波音 737 Next Generation (737-800)
  'boeing-737': {
    name: { zh: '波音 737-800 1号首飞技术原型机 (YK001)', en: 'Boeing 737-800 Prototype YK001 (N737X)' },
    codeNumber: 'YK001 (N737X)',
    firstDate: { zh: '1997年7月31日 (美国伦顿机场首飞)', en: 'July 31, 1997 (First Flight at Renton Field)' },
    testLocation: { zh: '美国西雅图伦顿机场 / 波音试飞中心', en: 'Renton Municipal Airport / Boeing Field, WA' },
    significance: {
      zh: '全球民航史上产量最大的窄体喷气客机演进关键原型机。换装了全新大展弦比机翼、CFM56-7B 发动机与数字化座舱显示器，速度与巡航高度大幅超越经典型 737。',
      en: 'The maiden prototype for the 737 Next Generation series, testing the redesigned high-aspect wing and digital avionics.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Gear_Actuation-Boeing-737-800_EL-AL_approaching_VIE-DSC_3259w.jpg',
    liveryName: { zh: '波音 737-800 Next-Gen 适航工程测试涂装', en: 'Boeing 737 Next-Generation Rollout Flight Test Livery' },
    currentStatus: { zh: '波音飞行测试与工程验证机', en: 'Flight test and engineering testbed' },
  },

  // 波音 767-300ER 原型机
  'boeing-767': {
    name: { zh: '波音 767 1号首飞技术原型机 (WA001 / N767BA)', en: 'Boeing 767 Prototype WA001 (N767BA)' },
    codeNumber: 'WA001 (N767BA / N60659)',
    firstDate: { zh: '1981年9月26日 (美国埃弗雷特佩恩机场首飞)', en: 'September 26, 1981 (First Flight at Paine Field, Everett)' },
    testLocation: { zh: '美国西雅图波音试飞中心 (Boeing Field)', en: 'Paine Field Everett / Boeing Field, WA' },
    significance: {
      zh: '民航史上首款双发宽体且配备全电子飞行仪表系统 (EFIS) 的双人制客机原型机。与窄体 757 实现了空前绝后的“相同型别等级（Same Type Rating）”通用驾驶舱，为双发客机跨大西洋 ETOPS 商业飞行铺平了道路。',
      en: 'The first widebody twinjet with full EFIS glass cockpit, pioneering cross-crew qualification with the 757 and transoceanic ETOPS flights.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Boeing_Company%3B_Boeing_767-200%3B_N767BA%2C_September_1981_DVU_%285288029647%29.jpg',
    liveryName: { zh: '波音原厂 767 经典首发红白蓝三色试飞涂装', en: 'Boeing 767 Original Red-White-Blue Rollout Livery' },
    currentStatus: { zh: '完成型号审定取证与 ETOPS 适航拓展试飞后退役', en: 'Retired after extensive flight test certification' },
  },

  // 中国商飞 C909 (ARJ21-700) - 真实翔凤原型机
  'comac-c909': {
    name: { zh: '中国商飞 C909 (ARJ21-700) 101号首飞原型机 "翔凤"', en: 'COMAC C909 (ARJ21-700) Prototype 101 "Xiangfeng"' },
    codeNumber: '101架机 (B-988L)',
    firstDate: { zh: '2008年11月28日 (上海大场机场首飞)', en: 'November 28, 2008 (First Flight at Shanghai Dachang)' },
    testLocation: { zh: '上海大场基地 / 陕西阎良国家试飞院 (CFTE)', en: 'Shanghai Dachang / Yanliang National Flight Test Base' },
    significance: {
      zh: '我国第一款严格按照国际适航标准自主设计制造的涡扇支线客机首架原型机。在阎良试飞院完成了自然结冰、失速、大侧风以及极寒高温试飞，开启了中国民机适航取证体系的先河。',
      en: 'China first FAA-standard regional jet prototype. Completed pioneering icing, crosswind, and stall airworthiness campaigns.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/COMAC_ARJ21-700_Xiangfeng.jpg',
    liveryName: { zh: '中国商飞蓝白红三色 "翔凤" 首飞原厂涂装', en: 'COMAC Original "Xiangfeng" Maiden Flight Livery' },
    currentStatus: { zh: '中国飞行试验研究院 (阎良) 作为功勋功绩科研机永久典藏', en: 'Preserved at CFTE Yanliang as historic test aircraft' },
  },

  // 庞巴迪 CRJ-900 原型机
  'bombardier-crj900': {
    name: { zh: '庞巴迪 CRJ-900 1号首飞技术原型机', en: 'Bombardier CRJ-900 Prototype 1 (C-FRJX)' },
    codeNumber: 'C-FRJX (CRJ900 #1)',
    firstDate: { zh: '2001年2月21日 (加拿大蒙特利尔米拉贝尔机场首飞)', en: 'February 21, 2001 (First Flight at Montreal-Mirabel)' },
    testLocation: { zh: '加拿大蒙特利尔米拉贝尔机场 (YMX) / 威奇托试飞中心', en: 'Montreal-Mirabel, Canada / Bombardier Flight Test Center, Wichita, KS' },
    significance: {
      zh: '庞巴迪 CRJ 支线客机家族首款突破 80~90 座级的主力机型原型机。在 CRJ-700 基础上加长机身 3.74 米，采用强化机翼前缘与通用电气 CF34-8C5 涡扇引擎，实现了大高原与短跑道机场的杰出起降性能。',
      en: 'The stretch prototype of the CRJ family, seating 86 passengers. Fitted with uprated GE CF34-8C5 turbofans and leading-edge slats for high-altitude airfield operations.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Bombardier_CRJ-900_by_Lufthansa_CityLine.jpg',
    liveryName: { zh: '庞巴迪原厂流线机体工程认证涂装', en: 'Bombardier Regional Jet Flight Test Colors' },
    currentStatus: { zh: '完成型号科研试飞后退役', en: 'Retired from Bombardier Flight Test Center' },
  },

  // 巴西航空工业 ERJ-145 原型机 (PT-ZJA)
  'embraer-erj145': {
    name: { zh: '巴西航空工业 ERJ-145 1号首飞原型机 (PT-ZJA)', en: 'Embraer ERJ 145 Prototype PT-ZJA' },
    codeNumber: 'PT-ZJA (ERJ 145 #001)',
    firstDate: { zh: '1995年8月11日 (巴西圣若泽杜斯坎普斯机场首飞)', en: 'August 11, 1995 (First Flight at São José dos Campos)' },
    testLocation: { zh: '巴西圣若泽杜斯坎普斯 Embraer 试飞基地', en: 'Embraer Flight Test Center, São José dos Campos, Brazil' },
    significance: {
      zh: '开创“50座级喷气支线空中快线”神话的里程碑原型机。基于 EMB-120 巴西利亚涡桨客机机身截面全新设计，搭载两台罗·罗 AE 3007 尾吊涡扇发动机与后掠翼，首次试飞即大获成功，奠定了巴航工业世界第三大民机制造巨头的历史地位。',
      en: 'The foundational prototype that established Embraer as the world 3rd largest aircraft manufacturer. Powered by rear Rolls-Royce AE 3007 turbofans.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/PT-ZJA_%2827259101058%29.jpg',
    liveryName: { zh: '巴航工业原厂白底蓝带首飞试飞涂装 (PT-ZJA 真实机身实拍)', en: 'Embraer House Maiden Flight Colors (PT-ZJA Actual Aircraft)' },
    currentStatus: { zh: '巴西航空工业公司历史技术典藏', en: 'Embraer Historic Testbed Collection' },
  },

  // 涡轮螺旋桨：新舟60 (MA60) - 真实运七提速发展样机
  'joy-air-ma60': {
    name: { zh: '中航工业 西安飞机 新舟60 (MA60) 双发涡桨支线客机', en: "AVIC Xi'an MA60 Regional Turboprop Airliner" },
    codeNumber: 'B-3476 (幸福航空实机)',
    firstDate: { zh: '2000年2月25日 (首飞) / 2008年投入运营', en: 'February 25, 2000 (First Flight) / 2008 Revenue Service' },
    testLocation: { zh: '陕西阎良国家试飞院 (CFTE) / 幸福航空干支线', en: 'Yanliang Flight Test Base / Joy Air Route Network' },
    significance: {
      zh: '我国首款大规模投入商业客运航线运营的国产双发涡桨支线客机。采用加拿大普惠 PW127J 引擎与美国柯林斯航电设备，四叶全复合材料螺旋桨，全面验证了国产支线客机高原高温适应性与常态化商业运营能力。',
      en: 'The maiden prototype of China flagship turboprop regional airliner, powered by PW127J engines with modern avionics.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/B-3476_at_CGO_20190426.jpg',
    liveryName: { zh: '幸福航空经典蓝白祥云客运涂装 (真机实拍)', en: 'Joy Air Blue-White Lotus Regional Livery' },
    currentStatus: { zh: '幸福航空公司现役主力支线机队', en: 'Active in regional commercial service with Joy Air' },
  },

  // 涡轮螺旋桨：ATR 72-600
  'uni-air-atr72-600': {
    name: { zh: 'ATR 72-600 原厂航空电子改装原型机', en: 'ATR 72-600 Avionics Testbed Prototype (F-WWEY)' },
    codeNumber: 'MSN 098 (F-WWEY)',
    firstDate: { zh: '2009年7月24日 (法国图卢兹圣马丁首飞)', en: 'July 24, 2009 (First Flight at Toulouse-Francazal)' },
    testLocation: { zh: '法国图卢兹 ATR 飞行试验中心', en: 'ATR Flight Test Center, Toulouse, France' },
    significance: {
      zh: '验证了 ATR 全新玻璃化座舱（配备 5 块宽幅 LCD 液晶仪表）与普惠 PW127M 发动机的高效燃烧控制，大幅降低支线机场运营维护负荷。',
      en: 'Validated the modernized glass cockpit with 5 LCD displays and PW127M engines for efficient regional feeder operations.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/77/ATR_72-600_ATR_house_colors_F-WWEY_-_MSN_98_retusche.jpg',
    liveryName: { zh: 'ATR 官方原厂绿色科技展示涂装', en: 'ATR Official House Demonstration Livery' },
    currentStatus: { zh: 'ATR 工业集团飞行开发部持续运营中', en: 'Active ATR development flight testbed' },
  },

  // 涡轮螺旋桨：庞巴迪 Dash 8 Q400
  'ana-wings-dash8-q400': {
    name: { zh: '庞巴迪 Dash 8 Q400 (DHC-8-400) 首飞原型机', en: 'Bombardier Dash 8 Q400 Prototype (C-FDBJ)' },
    codeNumber: 'C-FDBJ (#4001)',
    firstDate: { zh: '1998年1月31日 (加拿大多伦多唐斯维尤首飞)', en: 'January 31, 1998 (First Flight at Downsview, Toronto)' },
    testLocation: { zh: '加拿大多伦多唐斯维尤机场 (Downsview Airport)', en: 'Downsview Airport, Toronto, Canada' },
    significance: {
      zh: '世界上巡航速度最高（达 667 km/h）的涡桨客机原型机。开创性搭载主动降噪减振系统 (ANVS)，让涡桨客机客舱安静程度首次达到喷气客机同等水平。',
      en: 'The high-speed (360 knots) turboprop prototype, pioneering Active Noise and Vibration Suppression (ANVS).'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Dash_8_Q400.jpg',
    liveryName: { zh: '德哈维兰 / 庞巴迪原厂红蓝首飞涂装', en: 'Bombardier House Rollout Livery' },
    currentStatus: { zh: '完成型号审定后作为工程验证平台', en: 'Engineering test platform' },
  },

  // 涡轮螺旋桨：DHC-6 双水獭水陆两栖
  'trans-maldivian-dhc-6': {
    name: { zh: '德哈维兰加拿大 DHC-6 双水獭首架试制原型机', en: 'de Havilland Canada DHC-6 Twin Otter Prototype (CF-VTY-X)' },
    codeNumber: 'CF-VTY-X (#1)',
    firstDate: { zh: '1965年5月20日 (加拿大多伦多首飞)', en: 'May 20, 1965 (First Flight at Downsview, Toronto)' },
    testLocation: { zh: '加拿大安大略省多伦多唐斯维尤', en: 'Downsview, Ontario, Canada' },
    significance: {
      zh: '极地探险与热带海岛短距起降（STOL）的通用航空传奇原型。验证了可在未经铺设沙滩、极地雪地与海面浮筒间自由换装的通用起落架架构。',
      en: 'The legendary STOL utility bush plane prototype, capable of operating from ice caps, sandbars, and water floats.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Winair_DHC-6_Twin_Otter_%40_SXM.jpg',
    liveryName: { zh: '德哈维兰加拿大经典红白原厂涂装', en: 'de Havilland Canada Classic Factory Colors' },
    currentStatus: { zh: '加拿大航空航天遗产中心典藏', en: 'Preserved in Canadian Aviation Heritage' },
  },

  // =========================================================================
  // 🚄 铁路干线与高速列车原型车 (Railway Prototypes & Testbeds)
  // =========================================================================

  // 新干线 0 系 (世界高速铁路鼻祖)
  'shinkansen-0': {
    name: { zh: '新干线 1000形 鸭宫试验线高速试作车 (世界新干线鼻祖原型车)', en: 'Shinkansen Class 1000 Kamomiya Prototype Test Train' },
    codeNumber: '1000形 1001-1002 (A编组) & 1003-1006 (B编组)',
    firstDate: { zh: '1962年6月下线 / 1963年3月30日突破 256 km/h', en: 'June 1962 Rollout / Reached 256 km/h on March 30, 1963' },
    testLocation: { zh: '东海道新干线神奈川鸭宫示范试验路段 (Kamomiya)', en: 'Kamomiya Model Test Track, Kanagawa' },
    significance: {
      zh: '人类现代高速铁道开天辟地第一车！日本国铁 (JNR) 专为东海道新干线研制的技术先导样车，在鸭宫试验线完成了全线 ATC 自动列车控制、交流 25kV 电气化及长钢轨无缝焊接等前所未有的工程突破。',
      en: 'The absolute pioneer of world high-speed rail. Validated cab signaling, continuous welded rails, and 250 km/h aerodynamics.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Class_1000_Shinkansen_Photograph.png',
    liveryName: { zh: '国铁经典蓝白双色鸭宫样车涂装 (带红标车头徽章)', en: 'JNR Blue-and-White Kamomiya Prototype Livery' },
    currentStatus: { zh: '完成历史使命后部分车厢改装为 922形 黄医生并永久典藏', en: 'Preserved at JR Central Railway Museum' },
  },

  // 新干线 500 系 (WIN350)
  'shinkansen-500': {
    name: { zh: 'JR西日本 500系900番台 "WIN350" 时速350公里高速试验车', en: 'JR West 500-900 Series "WIN350" High Speed Test Train' },
    codeNumber: 'WIN350 (500系 900番台 500-901~906 编组)',
    firstDate: { zh: '1992年4月出厂 / 1992年8月山阳新干线创下 350.4 km/h 纪录', en: 'April 1992 Rollout / Achieved 350.4 km/h in August 1992' },
    testLocation: { zh: '山阳新干线小郡-新下关试验区间 / 博多总合车辆所', en: 'Sanyo Shinkansen / Hakata Depot' },
    significance: {
      zh: '500系战斗机式 15 米超长翠鸟喙车头的摇篮！WIN350 样车重点攻克了微气压波爆音降低技术、主动式半主动减震悬挂及全周包覆整流罩，为后续 500 系以 300 km/h 商业运营打下基石。',
      en: 'The cradle of 500 Series jet-fighter nose aerodynamics and micro-pressure wave suppression.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/JRWest-500-901_%28WIN350-1%29.jpg',
    liveryName: { zh: 'WIN350 浅紫罗兰与银灰高速试验专属涂装', en: 'WIN350 Violet and Silver Speed Test Livery' },
    currentStatus: { zh: '先头车 500-901 永久保存于 JR西日本博多总合车辆所', en: 'Lead car 500-901 preserved at Hakata Depot' },
  },

  // 新干线 E5 系 (FASTECH 360 S)
  'shinkansen-e5': {
    name: { zh: 'JR东日本 E954形 "FASTECH 360 S" 新干线高速试验列车', en: 'JR East Class E954 "FASTECH 360 S" Prototype Test Train' },
    codeNumber: 'FASTECH 360 S (E954形 先行量产试验车)',
    firstDate: { zh: '2005年6月出厂 / 创下 398 km/h 试验速度', en: 'June 2005 Rollout / Achieved 398 km/h on Tohoku Shinkansen' },
    testLocation: { zh: '东北新干线仙台至北上试验区间', en: 'Tohoku Shinkansen Sendai - Kitakami Test Section' },
    significance: {
      zh: '车迷熟知的“猫耳新干线”！车顶装配了紧急气动阻力减速板（猫耳形状），车头对比测试了“箭头型”与“流线型”两种先头车鼻，直接孕育了今日东北新干线 320 km/h 的王者 E5 系。',
      en: 'Famous for deployable cat-ear aerodynamic emergency brakes and long nose streamlining for E5.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/FASTECH_360-S.JPG',
    liveryName: { zh: 'FASTECH 360 翡翠绿与苹果白双色高速试验涂装', en: 'FASTECH 360 Emerald Green & White Test Livery' },
    currentStatus: { zh: '测试数据完全转化至 E5 系量产后解体保存先头模型', en: 'Engineering legacy fully integrated into Series E5' },
  },

  // 新干线 N700S 系
  'shinkansen-n700s': {
    name: { zh: 'JR东海 新干线 N700S J0编组 确认试验车', en: 'JR Central Shinkansen N700S Confirmation Test Train (J0)' },
    codeNumber: 'N700S J0编组',
    firstDate: { zh: '2018年3月下线 / 2019年6月跑出 363 km/h 极速', en: 'March 2018 Rollout / Achieved 363 km/h in June 2019' },
    testLocation: { zh: '东海道新干线滨松工场 / 米原至京都区间', en: 'Hamamatsu Works / Tokaido Shinkansen' },
    significance: {
      zh: '配备了全碳化硅 (SiC) 驱动功率模块与自走蓄电池系统，在地震断电时仍可依靠车载锂电池低速脱困安全驶离桥梁隧道。',
      en: 'Pioneered full SiC traction modules and onboard lithium emergency battery traction.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Series_N700S_J0_in_Tokyo_Station.jpg',
    liveryName: { zh: 'N700S 经典白蓝条纹带金色 "S" 专属标志', en: 'N700S White-Blue Stripe with Golden "S" Emblem' },
    currentStatus: { zh: 'JR东海持续作为夜间高速试验与新技术实证车', en: 'Active night test train with JR Central' },
  },

  // 复兴号智能动车组 CR400BF-Z / CR400BF (蓝海豚)
  'cr400bf-z': {
    name: { zh: '中国标准动车组 CR400BF-0503 "金凤/蓝海豚" 技术验证样车', en: 'China Standard EMU Prototype CR400BF-0503' },
    codeNumber: 'CR400BF-0503 (原名 CRH-0503)',
    firstDate: { zh: '2015年6月30日 (中车长客下线) / 2016年7月15日交会试验跑出 420 km/h', en: 'June 30, 2015 Rollout / 420 km/h Passing Test in July 2016' },
    testLocation: { zh: '中国铁道科学研究院国家铁道试验中心 (环铁) / 郑徐高铁试验段', en: 'CARA Beijing Loop / Zhengzhou-Xuzhou HSR' },
    significance: {
      zh: '彻底摆脱引进技术依赖、实现中国标准自主知识产权的里程碑样车。在郑徐高铁与 CR400AF-0207 实现了世界首次两列动车组在时速 420 公里下的交会试验，交会相对速度达 840 km/h。',
      en: 'The historic indigenous standard EMU prototype. Achieved world-record 420 km/h passing test (relative 840 km/h) on Zhengxu HSR.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/CR400BF-0503%40BJN_%2820200828122722%29.jpg',
    liveryName: { zh: '中国标准动车组原厂金黄海豚流线测试涂装', en: 'China Standard EMU Original Dolphin Gold Test Livery' },
    currentStatus: { zh: '现配属中国铁路北京局集团，执行常态化载客运营', en: 'In revenue passenger service with China Railway Beijing Bureau' },
  },

  // 复兴号 CR400AF-Z / CR400AF / KCIC400AF (金凤凰)
  'cr400af-z-fuxing': {
    name: { zh: '中国标准动车组 CR400AF-0207 "金凤凰" 先导首发样车', en: 'China Standard EMU Prototype CR400AF-0207 (Golden Phoenix)' },
    codeNumber: 'CR400AF-0207 (原名 CRH-0207)',
    firstDate: { zh: '2015年6月30日 (中车青岛四方下线) / 2016年7月15日双向 420 km/h 交会', en: 'June 30, 2015 Rollout / 420 km/h Passing Test in July 2016' },
    testLocation: { zh: '中车青岛四方厂 / 北京铁科院环铁 / 大西客专综合试验段', en: 'CRRC Qingdao Sifang / CARA Beijing Loop / Daxi HSR' },
    significance: {
      zh: '四方厂自主研发的低阻力流线头型与车底全包覆整流罩样车。气动总阻力比上一代降低 12% 以上，车体采用高强度铝合金一体化焊接结构，成为后续雅万高铁出口车型与复兴号智能型列车的原始工程蓝本。',
      en: 'The original prototype for China standard EMU platform. 12% aerodynamic drag reduction, forming the blueprint for CR400AF and Whoosh.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/CR400AF-0207_at_Lianyuqiao_%2820260625140719%29.jpg',
    liveryName: { zh: '中国标准动车组 "金凤凰" 灵动流线先导涂装', en: 'China Standard EMU "Golden Phoenix" Prototype Livery' },
    currentStatus: { zh: '现配属中国铁路北京局集团，执行京沪高铁干线载客任务', en: 'In revenue passenger service on Beijing-Shanghai HSR' },
  },

  // 和谐号 CRH380A
  'crh380a': {
    name: { zh: '和谐号 CRH380A-0001 先导综合试验列车 (CRH2-150C)', en: 'Harmony CRH380A-0001 Comprehensive Test Train' },
    codeNumber: 'CRH380A-0001 (试验车 2808)',
    firstDate: { zh: '2010年5月下线 / 2010年12月3日京沪高铁试验创下 486.1 km/h 纪录', en: 'May 2010 Rollout / Achieved 486.1 km/h Record on Dec 3, 2010' },
    testLocation: { zh: '京沪高速铁路枣庄至蚌埠试验段 / 沪宁城际试验段', en: 'Beijing-Shanghai HSR Zaozhuang-Bengbu Test Track' },
    significance: {
      zh: '中国高铁自主创新速度突破的图腾！在京沪高铁先导段跑出 486.1 km/h 世界运营铁路试验最高速，验证了仿生鱼头低噪声气动外形、大功率异步牵引传动系统和全车平稳舒适性动力学控制。',
      en: 'The iconic test train that reached 486.1 km/h on Beijing-Shanghai HSR, establishing China high-speed railway engineering leadership.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Two_380A%27s_and_a_SYJZ0001_%2820151204165022%29.jpg',
    liveryName: { zh: '和谐号白底蓝杠带先导综合试验车金黄腰线涂装', en: 'Harmony White-Blue with Golden Inspection Trim' },
    currentStatus: { zh: '改建为综合检测列车 (CIT001) 持续服役于铁路线路巡检', en: 'In service as high-speed comprehensive track inspection train' },
  },

  // 韶山 SS8 型电力机车
  'ss8': {
    name: { zh: '韶山 SS8-0001 准高速客运电力机车 (速度纪录功勋车)', en: 'Shaoshan SS8-0001 High-Speed Passenger Electric Locomotive' },
    codeNumber: 'SS8-0001',
    firstDate: { zh: '1994年10月中车株机下线 / 1998年6月24日创下 240 km/h 中国铁路第一速', en: 'Oct 1994 Rollout / Achieved China 240 km/h Record on June 24, 1998' },
    testLocation: { zh: '广深准高速铁路 / 郑武线许昌至小商桥试验区段', en: 'Guangzhen Railway / Zhengzhou-Wuchang Test Section' },
    significance: {
      zh: '曾长达数年保持“中国铁路第一速”的传奇机车！在京广线郑武段创造了 240 km/h 的中国铁道既有线最高跑车纪录，完成了轮盘制动、架悬式牵引电机及微机控制等准高速关键技术试验，现珍藏于中国铁道博物馆。',
      en: 'Held the speed record for Chinese locomotives for years, reaching 240 km/h in 1998. Now preserved at China Railway Museum.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/SS8-0001_at_Guangzhou_Locomotive_Repair_Depot_20260404.jpg',
    liveryName: { zh: '株机原厂红白双色准高速客运经典涂装', en: 'CRRC Zhuzhou Original Red-White Speed Livery' },
    currentStatus: { zh: '退役后移交北京中国铁道博物馆东郊馆永久馆藏', en: 'Preserved at China Railway Museum (Dongjiao), Beijing' },
  },

  // 东风 4D 型柴油机车
  'df4d': {
    name: { zh: '东风 4D 型 0001 号客运内燃机车 (首台样产机车)', en: 'Dongfeng DF4D-0001 Passenger Diesel Locomotive Prototype' },
    codeNumber: 'DF4D-0001',
    firstDate: { zh: '1996年12月下线 (大连机车车辆厂)', en: 'December 1996 Rollout by Dalian Locomotive Works' },
    testLocation: { zh: '大连机车车辆厂 / 北京环行铁道试验基地', en: 'Dalian Locomotive Works / CARA Beijing Loop' },
    significance: {
      zh: '为中国铁路前三次大提速奠定坚实基础的功勋提速客运内燃机车。换装了 16V240ZJD 强化柴油机与全悬挂转向架，最高运营速度提升至 145 km/h，一举结束了提速干线客运动力不足的历史。',
      en: 'The premier passenger diesel locomotive built for China major railway speed-up campaigns, featuring the 16V240ZJD diesel engine.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/China_Railways_DF4D_3028_20090728.jpg',
    liveryName: { zh: '大连厂经典红白相间 "花东风" 涂装', en: 'Dalian Classic Red-and-White "Flora Dongfeng" Livery' },
    currentStatus: { zh: '沈阳铁路局机务段典藏', en: 'Preserved in Shenyang Railway Bureau' },
  },

  // 联合太平洋 "大男孩" Big Boy
  'big-boy-4014': {
    name: { zh: '联合太平洋 "大男孩" 4000 号原型机车 (ALCO Schenectady)', en: 'Union Pacific Big Boy Prototype 4000 (ALCO Schenectady)' },
    codeNumber: 'UP 4000 (首号样车)',
    firstDate: { zh: '1941年9月下线出厂', en: 'September 1941 Rollout by ALCO' },
    testLocation: { zh: '美国怀俄明州谢尔曼山脉 (Sherman Hill) 恶劣山道', en: 'Sherman Hill, Wyoming / Wasatch Mountains' },
    significance: {
      zh: '人类机械工业史上制造的最大、最强劲的关节式蒸汽机车之祖（4-8-8-4 轴式）。双机铰接转向架与重达 548 吨的巨型车身，专为在 1.14% 陡峭坡道上无补机牵引 3,600 吨超长大重载货列而生。',
      en: 'The lead locomotive of the world largest articulated steam locomotives (4-8-8-4), built to haul 3,600-ton freight over the Wasatch Range.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Union_Pacific_Big_Boy_4000_1941.JPG',
    liveryName: { zh: '联合太平洋经典哑光石墨黑蒸汽机车涂装', en: 'Union Pacific Classic Graphite Black Steam Livery' },
    currentStatus: { zh: '现陈列于宾夕法尼亚州斯克兰顿斯廷敦国家历史名胜', en: 'Preserved at Steamtown National Historic Site, Scranton, PA' },
  },

  // 超导磁悬浮 L0 系
  'scmaglev-l0': {
    name: { zh: 'JR东海 超导磁浮 L0系 时速603公里世界纪录试验列车', en: 'JR Central SCMaglev L0 Series Prototype (World Record 603 km/h)' },
    codeNumber: 'L0系 900番台 先导试验编组',
    firstDate: { zh: '2012年11月出厂 / 2015年4月21日创下 603 km/h 世界载人轨道纪录', en: 'Nov 2012 Rollout / World Record 603 km/h on April 21, 2015' },
    testLocation: { zh: '山梨县山梨超导磁浮试验线 (42.8 km)', en: 'Yamanashi Maglev Test Track (42.8 km)' },
    significance: {
      zh: '保持当今全球载人轨道交通最高速度记录（603 km/h）的超导磁浮先导车。采用液氦超导电磁体与 840 毫米感应悬浮侧壁线圈，彻底摆脱了轮轨接触摩擦限制。',
      en: 'The world-record holder (603 km/h) for manned rail transport using niobium-titanium superconducting magnets.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/13/JR_Central_SCMaglev_L0_Series_Shinkansen_201408081006.jpg',
    liveryName: { zh: '中央新干线纯白车身配青蓝色超流线涂装', en: 'Chuo Shinkansen Pure White with Cyan Aero-Streak Livery' },
    currentStatus: { zh: '山梨磁浮试验线常态化载人试车与科研中', en: 'Active testing on Yamanashi Maglev Test Line' },
  },

  // CR200J 动力集中动车组
  'cr200j-hulvwa': {
    name: { zh: '复兴号 CR200J 动力集中动车组 先导试制试验车', en: 'CR200J Push-Pull High-Power EMU Prototype' },
    codeNumber: 'FXD1-J / FXD3-J 先导概念车',
    firstDate: { zh: '2017年出厂 / 2018年在铁科院环铁与兰渝铁路完成综合试验', en: '2017 Rollout / Comprehensive Testing on CARA & Lan-Yu Railway' },
    testLocation: { zh: '北京国家铁道试验中心 (环铁) / 兰渝铁路', en: 'CARA Beijing Loop / Lanzhou-Chongqing Railway' },
    significance: {
      zh: '中国普速干线迈入动车时代的核心试验平台。首次实现了传统机车牵引与动力分散动车组客室服务设施的一体化兼容整合。',
      en: 'The pioneering push-pull standard EMU prototype, modernizing China non-high-speed trunk rail networks.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/FXD1-J0280%40HLC_%2820240115093352%29.jpg',
    liveryName: { zh: '国槐绿配黄色双腰线经典提速涂装', en: 'Locust Green with Double Yellow Waistlines' },
    currentStatus: { zh: '持续承担普速电气化提速客车任务', en: 'In service on national electrified lines' },
  },

  // 923形 "黄医生 / Doctor Yellow"
  'shinkansen-923-doctor-yellow': {
    name: { zh: '新干线 922形 T1编组 (世界首台电气轨道综合试验车)', en: 'Shinkansen Class 922 Doctor Yellow Prototype T1' },
    codeNumber: '922形 0番台 (T1 编组)',
    firstDate: { zh: '1964年6月投入使用 (由 1000形 B编组改造)', en: 'June 1964 Debut (Converted from Class 1000 Prototype)' },
    testLocation: { zh: '东海道新干线全线巡检区间', en: 'Tokaido Shinkansen Route' },
    significance: {
      zh: '全球高速铁道“综合巡检车”的始祖！车内首次搭载激光高精度轨道几何测量仪、受电弓接触网电弧摄影机与轨道电压感应仪，确保了东海道新干线自开通以来零旅客伤亡的神话。',
      en: 'The grandfather of all high-speed inspection trains, ensuring Tokaido Shinkansen unmatched safety track record.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Type923-T4.jpg',
    liveryName: { zh: '明亮鲜黄带青蓝腰线的 Doctor Yellow 标志性涂装', en: 'Signature Bright Yellow with Blue Waist Stripe' },
    currentStatus: { zh: '922形退役后由 923形 接棒，部分车厢陈列于铁道博物馆', en: 'Succeeded by Class 923; preserved at JR SCMAGLEV and Railway Park' },
  },

  // 上海磁浮示范线 Transrapid 08 (真实车辆照片)
  'shanghai-maglev-transrapid': {
    name: { zh: '德国蒂森克虏伯 Transrapid 08 常导高速磁浮试验车', en: 'ThyssenKrupp Transrapid 08 Maglev Prototype' },
    codeNumber: 'TR 08-01',
    firstDate: { zh: '1999年下线 / 埃姆斯兰特试验线跑出 450 km/h', en: '1999 Rollout / 450 km/h on Emsland Test Facility' },
    testLocation: { zh: '德国拉滕埃姆斯兰特磁浮试验基地 (TVE Lathen)', en: 'Transrapid Test Facility Emsland, Lathen, Germany' },
    significance: {
      zh: '世界首条商业运营高速磁浮线（上海磁浮示范线）的直系技术原型车。验证了定子铁心长定子直线同步电机推进与 8 毫米悬浮气隙闭环微秒级控制技术。',
      en: 'The direct engineering prototype for the Shanghai Maglev Line, validating 8mm magnetic gap levitation at 430 km/h.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Transrapid_08.jpg',
    liveryName: { zh: '德国埃姆斯兰特白色带红黑流线科技涂装 (磁浮列车实拍)', en: 'Emsland TVE White with Red-Black Accent Livery (Trainset Photo)' },
    currentStatus: { zh: '德国埃姆斯兰特磁浮试验中心永久典藏', en: 'Preserved at TVE Lathen Visitor Center, Germany' },
  },

  // 中车时速600公里高速磁浮试验车 (真实下线实拍)
  'crrc-600-maglev': {
    name: { zh: '中国中车 时速600公里高速磁浮交通系统试验样车', en: 'CRRC 600 km/h High-Speed Maglev Test Vehicle' },
    codeNumber: '中车四方 时速600公里样车',
    firstDate: { zh: '2019年5月23日 (中车青岛四方下线) / 2021年7月成套系统发布', en: 'May 23, 2019 Rollout / July 2021 Complete System Debut' },
    testLocation: { zh: '青岛中车四方试验厂 / 同济大学嘉定校区高速磁浮试验线', en: 'CRRC Qingdao Sifang / Tongji University Maglev Line' },
    significance: {
      zh: '填补高铁（350 km/h）与航空（800 km/h）之间速度空白的陆地地面交通旗舰原型！采用自主研制的长定子直线同步电机、车载超轻量化碳纤维复合材料车体与全自动无人驾驶控制系统。',
      en: 'China flagship 600 km/h ground transport prototype, bridging the speed gap between high-speed rail and aviation.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/%E4%B8%AD%E5%9B%BD%E6%97%B6%E9%80%9F600%E5%85%AC%E9%87%8C%E9%AB%98%E9%80%9F%E7%A3%81%E6%B5%AE%E4%BA%A4%E9%80%9A%E7%B3%BB%E7%BB%9F%E4%B8%8B%E7%BA%BF.jpg',
    liveryName: { zh: '深邃群青蓝配碳纤维黑与极光蓝腰线原厂下线涂装', en: 'Ultramarine Blue with Carbon Black & Aurora Cyan Official Rollout Livery' },
    currentStatus: { zh: '国家高速列车青岛技术创新中心科研试车中', en: 'Active test vehicle at National High Speed Train Center' },
  },

  // JR西日本 281系 "遥号 (Haruka)"
  'jr-281-haruka': {
    name: { zh: 'JR西日本 281系 "遥号 (Haruka)" 第1编组先行量产车', en: 'JR West 281 Series Haruka Trainset #1 (HA601)' },
    codeNumber: 'HA601 编组 (クハ 281-1)',
    firstDate: { zh: '1994年3月出厂 (近畿车辆 / 川崎重工)', en: 'March 1994 Rollout by Kinki Sharyo & Kawasaki' },
    testLocation: { zh: '东海道・山阳本线 / 关西空港线先行试运行', en: 'Tokaido/Sanyo Main Line & Kansai Airport Line' },
    significance: {
      zh: '专为 1994 年关西国际机场开港量身研制的机场特急原型车。设计融入“和风之雅”理念，最高运营速度 130 km/h，车头呈独特的非贯通式高司机室流线造型。',
      en: 'Prototype trainset built for the 1994 opening of Kansai International Airport, featuring refined Japanese aesthetic design.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Series281_Hanwa_Line.jpg',
    liveryName: { zh: '关西机场特急白底宇宙灰与天蓝腰线原厂涂装', en: 'Haruka Original White with Cosmo Grey and Sky Blue Livery' },
    currentStatus: { zh: '吹田总合车辆所日根野支所现役', en: 'In active service with Suita General Depot' },
  },

  // JR九州 キハ183系 "阿苏男孩！"
  'jr-kyushu-aso-boy': {
    name: { zh: 'JR九州 キハ183系1000番台 观光特急试制车', en: 'JR Kyushu KiHa 183-1000 Prototype Trainset' },
    codeNumber: 'キハ183-1001/1002 (试制车)',
    firstDate: { zh: '1988年3月下线 (小仓工场)', en: 'March 1988 Rollout at Kokura Works' },
    testLocation: { zh: '长崎本线 / 佐世保线 / 丰肥本线', en: 'Nagasaki / Sasebo / Hohi Main Line' },
    significance: {
      zh: 'JR九州首款先头车全景眺望席（Panorama Lounge）特急柴油动车组。先头车司机室位于二层，前方全景玻璃让乘客享受无遮挡视野，开创了九州个性化特色观光列车 (D&S) 的辉煌篇章。',
      en: 'The pioneer of JR Kyushu panoramic sightseeing trains, featuring an elevated driver cab with a front observation lounge.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/JRK_Kiha183-1000_Aso-Boy%21.jpg',
    liveryName: { zh: '初代 "荷兰村特急" 白红蓝三色欧风先驱涂装', en: 'Original Holland Village Express Tri-color Livery' },
    currentStatus: { zh: '熊本车辆中心现役 (阿苏男孩！定期巡游)', en: 'Active with Kumamoto Depot' },
  },

  // JR九州 883系 "Sonic / 音速"
  'jr-kyushu-883-sonic': {
    name: { zh: 'JR九州 883系 "音速号" 第1编组 (日本首款不锈钢摆式高速特急样车)', en: 'JR Kyushu 883 Series Sonic Trainset AO-1 Prototype' },
    codeNumber: '883系 AO-1 编组',
    firstDate: { zh: '1994年8月出厂 (日立笠户事业所)', en: 'August 1994 Rollout by Hitachi Kasado' },
    testLocation: { zh: '日丰本线高速试验段 (小仓至大分)', en: 'Nippo Main Line High Speed Test Track' },
    significance: {
      zh: '日本首款采用轻量化不锈钢车体与受控自然摆式（Controlled Tilting）系统的高速交流电车。最高过弯速度比传统列车提升 30 km/h，荣获 1995 年蓝丝带大奖。',
      en: 'Japan first stainless-steel tilting EMU, designed by Eiji Mitooka, increasing curve speeds by 30 km/h.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/JR_Kyushu_883_Series_EMU_883-7.jpg',
    liveryName: { zh: '日立原厂金属深蓝与黄色活动前鼻盖机械试车涂装', en: 'Original Metallic Deep Blue with Yellow Nose Hatch' },
    currentStatus: { zh: '大分车辆中心现役', en: 'Active with Oita Depot' },
  },

  // JR九州 キハ71系 "由布院之森"
  'jr-kyushu-yufuin-no-mori': {
    name: { zh: 'JR九州 キハ71系 "由布院之森" 经典高地板度假特急原型车', en: 'JR Kyushu KiHa 71 Series Yufuin no Mori Prototype' },
    codeNumber: 'キハ71-1 / キハ70-1 (改造先行试作车)',
    firstDate: { zh: '1989年3月出厂 (小仓工场)', en: 'March 1989 Rollout at Kokura Works' },
    testLocation: { zh: '久大本线高原山岳路段', en: 'Kyudai Main Line Mountain Section' },
    significance: {
      zh: '日本高原度假胜地观光列车的始祖！采用全车高地板 (High-Decker) 架构，地板高度抬升至 1,200 毫米以上，客席视野开阔，车内大量运用纯天然原木与黄铜装饰。',
      en: 'The genesis of Japan luxury resort train boom, featuring high-decker passenger saloons with wood and brass interiors.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Kuha71-Kagoshima-Line.jpg',
    liveryName: { zh: '经典墨绿深邃高原森呼吸金带专属原厂涂装', en: 'Classic Deep Forest Green with Gold Pinstripes' },
    currentStatus: { zh: '直方车辆中心现役', en: 'Active with Nogata Depot' },
  },

  // JR九州 "九州七星号"
  'jr-kyushu-seven-stars': {
    name: { zh: 'JR九州 "九州七星号" 专用机车与超豪华卧铺客车样车', en: 'Seven Stars in Kyushu DF200-7000 Locomotive & Cars #1' },
    codeNumber: 'DF200-7000 (首机) + 77系 (77-7001)',
    firstDate: { zh: '2013年9月出厂 (川崎重工兵库工场 / 近畿车辆)', en: 'September 2013 Rollout by Kawasaki & Kinki Sharyo' },
    testLocation: { zh: '九州全线性能与制振实车试验', en: 'Kyushu Islandwide Test Runs' },
    significance: {
      zh: '耗资 30 亿日元打造的全球超奢华巡游铁道巅峰原型。机车基于 DF200 “红熊”重载柴油机车深度魔改，噪音降低 30dB，全列仅设 14 间顶级套房，纯手工拼花木工艺。',
      en: 'The ultra-luxury cruise train benchmark. Features a customized DF200-7000 locomotive and 14 bespoke handcrafted suites.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Seven_Stars_in_Kyushu_at_Aso_Station_20131103.jpg',
    liveryName: { zh: '独创 "古代漆" (Royal Wine Red) 极致镜面金属烤漆配纯金七星徽章', en: 'Exclusive "Ancient Lacquer" Royal Wine Red with Solid Gold Emblems' },
    currentStatus: { zh: '熊本/小仓车辆段专属维护运营中', en: 'In active ultra-luxury cruise service' },
  },

  // 小田急 70000形 Romancecar GSE
  'odakyu-70000-gse': {
    name: { zh: '小田急电铁 70000形 Romancecar GSE 第1编组先行车', en: 'Odakyu 70000 Series GSE Trainset #1 (70051F)' },
    codeNumber: '70051F (第1编组样车)',
    firstDate: { zh: '2017年12月下线 (日本车辆制造)', en: 'December 2017 Rollout by Nippon Sharyo' },
    testLocation: { zh: '小田原线 / 箱根登山铁道', en: 'Odakyu Odawara Line & Hakone Tozan Railway' },
    significance: {
      zh: '小田急浪漫特快史上窗高最大（达 1 米）的展望席原型车。取消了传统铰接转向架改用独立 20 米车体，配备全电动空气悬挂振动主动抑制器，过弯极致平顺。',
      en: 'Features 1000mm-tall panoramic windows and active electro-pneumatic suspension for effortless ride comfort.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Odakyu_70000_series_GSE_Haruhino_Station_20180208.jpg',
    liveryName: { zh: '玫瑰亮红 (Rose Vermilion) 搭配月光银车顶原厂试跑涂装', en: 'Rose Vermilion with Moonlight Silver Roof' },
    currentStatus: { zh: '海老名检车区现役', en: 'Active with Ebina Depot' },
  },

  // 近铁 50000系 "Shimakaze / 岛风号"
  'kintetsu-50000-shimakaze': {
    name: { zh: '近畿日本铁道 50000系 "岛风号" 第1编组先行车 (SV01)', en: 'Kintetsu 50000 Series Shimakaze Trainset SV01' },
    codeNumber: '50101F (SV01 编组)',
    firstDate: { zh: '2012年9月出厂 (近畿车辆)', en: 'September 2012 Rollout by Kinki Sharyo' },
    testLocation: { zh: '近铁大阪线 / 山田线 / 鸟羽线', en: 'Kintetsu Osaka & Toba Lines' },
    significance: {
      zh: '荣获蓝丝带奖的伊势志摩顶级观光特急原型车。六棱柱切面水晶车头，客室配备真皮电动按摩座椅与双层沙龙观景咖啡车厢。',
      en: 'Award-winning luxury tourist EMU featuring genuine leather massaging seats and double-decker cafe cars.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Kintetsu_50000_Shimakaze_%2822695502042%29.jpg',
    liveryName: { zh: '水晶晴空海蓝配珍珠白带金线涂装', en: 'Crystal Sky Blue and Pearl White with Gold Pinstripes' },
    currentStatus: { zh: '富吉检车区现役', en: 'Active with Tomiyoshi Depot' },
  },

  // JR东日本 E259系 "成田特快 (Narita Express)"
  'jr-east-e259-nex': {
    name: { zh: "JR东日本 E259系 \"成田特快 (N'EX)\" 先行试制 Ne001 编组", en: "JR East E259 Series Narita Express Prototype Ne001" },
    codeNumber: 'Ne001 编组 (先行试制车)',
    firstDate: { zh: '2009年4月出厂 (东急车辆制造 / 近畿车辆)', en: 'April 2009 Rollout' },
    testLocation: { zh: '总武本线 / 成田线高速制动试验', en: 'Sobu Main Line & Narita Line Test Tracks' },
    significance: {
      zh: '全面接替 253 系的第二代成田特快原型车。先头车配备全主动悬挂与全列车门电子密码锁，最高运营速度 130 km/h，实现全天候跨东京市区与机场无缝衔接。',
      en: 'Second-generation airport express prototype with full active suspension and multi-language passenger displays.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Series-E259-NE014_NEX.jpg',
    liveryName: { zh: '北极白配飞扬红与宇宙黑三色经典涂装', en: 'Arctic White, Flying Red, and Cosmos Black Tri-Color Livery' },
    currentStatus: { zh: '镰仓车辆中心现役', en: 'Active with Kamakura Depot' },
  },

  // 美铁 Avelia Liberty
  'amtrak-avelia-liberty': {
    name: { zh: '美铁 (Amtrak) 新一代 "阿西乐特快" Avelia Liberty 1号试验动车组', en: 'Amtrak Next-Gen Avelia Liberty Prototype Trainset #1' },
    codeNumber: 'Trainset #1 (Alstom Prototype)',
    firstDate: { zh: '2020年2月下线 (阿尔斯通霍内尔工厂)', en: 'February 2020 Rollout at Alstom Hornell, NY' },
    testLocation: { zh: '美国联邦交通技术中心 (TTCI Pueblo, Colorado) / 东北走廊干线', en: 'TTCI Pueblo, CO / Northeast Corridor' },
    significance: {
      zh: '北美最高速度客运高铁列车原型车。基于阿尔斯通 Avelia 动力集中铰接平台，搭载 Tiltronix 主动倾斜摆式系统，在东北走廊弯道多的曲线上最高设计时速达 354 km/h (220 mph)。',
      en: 'North America fastest rail prototype. Features Tiltronix active tilting and articulated wheelsets for 220 mph speeds.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Avelia_Liberty.jpg',
    liveryName: { zh: '美铁新世代灰蓝科技涂装 (车身带动感波浪线条)', en: 'Amtrak Modern Slate Blue & Navy Streamline Livery' },
    currentStatus: { zh: '美铁东北走廊干线调试试车中', en: 'Active dynamic testing on the Northeast Corridor' },
  },

  // 美铁 GE Genesis P42DC
  'amtrak-ge-p42dc': {
    name: { zh: 'GE Genesis AMD-103 / P42DC 1号首发样车', en: 'GE Genesis AMD-103 / P42DC Prototype #1' },
    codeNumber: 'GE AMD-103 Prototype #800 / P42DC #1',
    firstDate: { zh: '1993年首台下线 (GE 宾夕法尼亚伊利工厂)', en: '1993 Rollout at GE Transportation Erie, PA' },
    testLocation: { zh: '美国东北走廊与跨大陆干线', en: 'Northeast Corridor & Transcontinental routes' },
    significance: {
      zh: '专为满足美铁极严苛的限界与低重心要求研制的整流单体承载机车。车身高度比传统机车低 14 英寸，风阻降低 22%，搭载 4,250 马力 GE 7FDL16 柴油机，是北美现代客运柴油机车的传奇基石。',
      en: 'Revolutionary aerodynamic passenger diesel with a monocoque body 14 inches lower than predecessor F40PH.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Amtrak_California_Zephyr_Green_River_-_Floy%2C_Utah.jpg',
    liveryName: { zh: '美铁 Phase III 经典红白蓝三色涂装', en: 'Amtrak Phase III Red, White & Blue Genesis Livery' },
    currentStatus: { zh: '美铁全美长途列车机务段现役', en: 'In active mainline passenger service' },
  },

  // BNSF GE ES44AC
  'bnsf-es44ac': {
    name: { zh: 'GE Evolution 创新系列 ES44AC 重载干线柴油机车样车', en: 'GE Evolution Series ES44AC Prototype GEVO 2005' },
    codeNumber: 'GEVO 2005 (ES44AC 先导验证机车)',
    firstDate: { zh: '2003年下线 (GE 宾夕法尼亚伊利工厂)', en: '2003 Rollout at GE Transportation Erie, PA' },
    testLocation: { zh: '落基山脉恶劣重载干线 / 普韦布洛试验基地', en: 'Rocky Mountains heavy haul test tracks / TTCI Pueblo' },
    significance: {
      zh: '耗资 4 亿美元研制的重载内燃机车绿色革命先锋。换装 GEVO-12 缸高压共轨柴油机，输出 4,400 马力，在减少 40% 排放的同时降低油耗，成为北美运量最大的功勋重载机车。',
      en: 'A M investment that revolutionized heavy haul, cutting emissions by 40% with the GEVO-12 engine.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/BNSF_5871-GE_ES44AC_%2840484291303%29.jpg',
    liveryName: { zh: 'GE Evolution Series 原厂蓝银科技试验涂装', en: 'GE Evolution Series Blue-Silver Demonstrator Livery' },
    currentStatus: { zh: '北美一级铁路重载干线现役', en: 'In heavy-haul mainline service' },
  },

  // 联合太平洋 EMD SD70ACe (UP 4141)
  'up-sd70ace-4141': {
    name: { zh: '易安迪 EMD SD70ACe 1号重载工程试验样车 (GM70)', en: 'EMD SD70ACe Prototype GM70 (EMDX 70)' },
    codeNumber: 'EMD GM70 / EMDX 70 (首台样车)',
    firstDate: { zh: '2003年出厂 (EMD 加拿大伦敦工厂)', en: '2003 Rollout at EMD London, Ontario' },
    testLocation: { zh: '普韦布洛联邦试验环线 / 怀俄明州重载煤炭走廊', en: 'TTCI Pueblo, CO / Powder River Basin Coal Route' },
    significance: {
      zh: '易安迪应对 EPA Tier 2 环保法案的巅峰重载交流传动车。搭载 16-710G3C-T2 柴油机与全绝缘高牵引力转向架，起动牵引力高达 850 kN，是北美重载煤炭列车的中流砥柱。',
      en: 'The pinnacle of EMD AC heavy-haul technology, producing 850 kN tractive effort for endless unit trains.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Union_Pacific_4141.jpg',
    liveryName: { zh: 'EMD 官方海军蓝配银白厂方演示涂装', en: 'EMD Factory Blue & Silver Demonstrator Colors' },
    currentStatus: { zh: 'UP 4141 功勋机车现永久珍藏于乔治·布什总统图书馆', en: 'UP 4141 preserved at George H.W. Bush Presidential Library' },
  },

  // 台湾高铁 700T
  'thsr-700t': {
    name: { zh: '台湾高铁 700T 型 TR01 编组先行样产车', en: 'THSR 700T Series Trainset TR01 Prototype' },
    codeNumber: 'TR01 编组',
    firstDate: { zh: '2004年1月30日出厂 (日本川崎重工兵库工场)', en: 'January 30, 2004 Rollout by Kawasaki Heavy Industries' },
    testLocation: { zh: '川崎兵库工场 / 台湾高铁六家至燕巢综合试车段', en: 'Kawasaki Hyogo Works / THSR Yanchao Main Depot' },
    significance: {
      zh: '日本新干线技术首次成套海外输出的历史见证。以 700 系为基础，特制了适应亚热带湿热气候的大功率空调、欧洲 UIC 碰撞安全标准加固车头以及 300 km/h 商业运营牵引系统。',
      en: 'The historic first export of Japanese Shinkansen technology, customized with UIC crashworthiness and subtropical climate AC systems.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Close-up_of_the_THSR_TR01_700T_train.jpg',
    liveryName: { zh: '白底亮橘色流线带深灰车顶的高铁先导涂装', en: 'THSR Pearl White with Vibrant Orange Aero Stripes' },
    currentStatus: { zh: '台湾高铁公司现役常态化运营车组', en: 'Active in revenue commercial service with THSR' },
  },

  // 韩国铁道 KTX-山川
  'korail-ktx-sancheon': {
    name: { zh: '韩国铁道 HSR-350x "Hanbit 350" 国家高速试验列车 (KTX-山川先导车)', en: 'KORAIL HSR-350x "Hanbit 350" Test Train' },
    codeNumber: 'HSR-350x (韩光 350)',
    firstDate: { zh: '2002年下线 (现代罗特姆) / 2004年12月创下 352.4 km/h 韩国纪录', en: '2002 Rollout / Reached 352.4 km/h in December 2004' },
    testLocation: { zh: '京釜高速铁道五松试验基地', en: 'Gyeongbu HSR Osong Test Track' },
    significance: {
      zh: '韩国摆脱法国 TGV 原装技术、实现高速列车完全自主化的摇篮。攻克了加压铝合金车体、交流感应牵引电机以及集中动力式动力车转向架核心技术。',
      en: 'The foundation of indigenous Korean high-speed rail, achieving 352.4 km/h and paving the way for KTX-Sancheon.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/HSR_350x_Hanvit_Uiwang_20150722.jpg',
    liveryName: { zh: 'Hanbit 350 银白带流线蓝条纹国家科技试验涂装', en: 'Hanbit 350 Silver-White & Blue National Project Livery' },
    currentStatus: { zh: '现永久展示于韩国义王市铁道博物馆', en: 'Preserved at Uiwang Railway Museum, South Korea' },
  },

  // 印度铁路 Vande Bharat (Train 18)
  'indian-railways-vande-bharat': {
    name: { zh: '印度铁路 "Train 18" (Vande Bharat Express) 1号自主研发样车', en: 'Indian Railways Train 18 (Vande Bharat) Prototype Rake 1' },
    codeNumber: 'Train 18 Rake 1 (首列本土准高速样车)',
    firstDate: { zh: '2018年10月下线 (金奈集成客车厂 ICF Chennai)', en: 'October 2018 Rollout by ICF Chennai' },
    testLocation: { zh: '德里-瓦拉纳西试车区间 / 科塔至萨瓦伊马多普尔试验段', en: 'Delhi-Varanasi Route / Kota-Sawai Madhopur Section' },
    significance: {
      zh: '“印度制造 (Make in India)”旗舰工程的第一号样车。用仅 18 个月工期完成设计制造，彻底摒弃传统机车牵引模式改用动力分散式动车组，最高试验速度达到 180 km/h。',
      en: 'The flagship of Make in India, designed in just 18 months as India first indigenous semi-high-speed EMU (180 km/h).'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Vande_Bharat_Express_around_Mumbai.jpg',
    liveryName: { zh: '白底深蓝饰带带橘色防撞警示条原厂首发涂装', en: 'White with Deep Blue and Orange Accent Trim' },
    currentStatus: { zh: '执飞新德里至瓦拉纳西常态化商业客运', en: 'Active in passenger service between New Delhi & Varanasi' },
  },

  // 乌兹别克斯坦 "Afrosiyob" Talgo 250
  'uzbekistan-afrosiyob-talgo250': {
    name: { zh: '西班牙塔尔高 Talgo 250 可变轨距高速动力集中试验车', en: 'Patentes Talgo 250 Variable-Gauge Prototype' },
    codeNumber: 'Talgo 250 (RENFE Series 130 原型车)',
    firstDate: { zh: '2005年西班牙出厂 (马德里拉斯马塔斯基地)', en: '2005 Rollout at Las Matas, Madrid' },
    testLocation: { zh: '马德里-巴塞罗那高铁 / 乌兹别克塔什干-撒马尔罕线', en: 'Madrid-Barcelona HSR / Tashkent-Samarkand Line' },
    significance: {
      zh: '中亚内陆首款商业高速列车的直系原型。独创性采用了西班牙 Talgo 摆式被动倾斜悬挂与独立单轮转向架，即使在弯道较多的中亚古丝绸之路既有线路上，也能跑出 250 km/h 高速。',
      en: 'Central Asia first high-speed train. Features Talgo passive tilting and independently rotating wheels for 250 km/h on legacy tracks.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Hi-speed_trains_Afrosiyab_%28Uzbekistan%29.JPG',
    liveryName: { zh: '乌兹别克斯坦国旗白蓝绿三色配金色 Afrosiyob 标识涂装', en: 'Uzbekistan White-Blue-Green Tricolor with Gold Afrosiyob Crest' },
    currentStatus: { zh: '塔什干乌铁机务段现役', en: 'Active with Uzbekistan Railways' },
  },

  // 沙特麦加-麦地那 "哈拉曼" Talgo 350 SRO
  'saudi-haramain-talgo350': {
    name: { zh: '西班牙塔尔高 Talgo 350 "鸭嘴兽" 时速350公里高速试验车', en: 'Patentes Talgo 350 "El Pato" Prototype 102-001' },
    codeNumber: 'Talgo 350 "El Pato" (RENFE 102-001)',
    firstDate: { zh: '2000年出厂 / 跑出 359 km/h 高速纪录', en: '2000 Rollout / Reached 359 km/h on Madrid-Seville HSR' },
    testLocation: { zh: '马德里至塞维利亚高铁 / 沙特鲁卜哈利沙漠极端耐温段', en: 'Madrid-Seville HSR / Rub al Khali Desert Test Section' },
    significance: {
      zh: '征服摄氏 50 度酷热沙漠狂风风沙的“沙漠高铁之王”原型车。车头鸭嘴兽外形可将气动阻力减少 15%，配备全密封双层抗沙防尘气密滤网与特制耐磨轮对。',
      en: 'The desert high-speed champion prototype, engineered to withstand 50°C heat and sandstorms across Arabian deserts.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Talgo_350_SRO.jpg',
    liveryName: { zh: '沙漠银白车身配高贵灰条纹与阿拉伯书法金色标识', en: 'Desert Pearl White with Arabic Calligraphy Accent' },
    currentStatus: { zh: '沙特麦加-麦地那高铁全线现役运营', en: 'Active on Haramain High Speed Railway' },
  },

  // 马来亚铁道 ETS Class 93
  'ktmb-ets-class-93': {
    name: { zh: '马来亚铁道 Class 93 世界最高速米轨动车组样车', en: 'KTMB ETS Class 93 Meter-Gauge Prototype ETS 201' },
    codeNumber: 'ETS 201 样车 (中车株机制造)',
    firstDate: { zh: '2014年11月中车株机下线', en: 'November 2014 Rollout by CRRC Zhuzhou' },
    testLocation: { zh: '西海岸干线吉隆坡至巴东勿刹区间', en: 'West Coast Main Line, Kuala Lumpur to Padang Besar' },
    significance: {
      zh: '世界米轨（轨距 1000 毫米）轨道交通最高运营速度纪录保持者原型车。设计时速 160 km/h，完美解决了窄轨高速运行时转向架蛇行晃动与横向平稳性世界难题。',
      en: 'World fastest meter-gauge train prototype, operating at 160 km/h with custom narrow-gauge bogies.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/ETS_201_KTMB_Class_93_Port_Klang_Pre-Comission.jpg',
    liveryName: { zh: '马来亚铁道流线银黄黑三色官方涂装', en: 'KTMB Silver-Yellow-Black Streamline Livery' },
    currentStatus: { zh: '吉隆坡机务段现役', en: 'Active with KTMB' },
  },

  // 越南铁路 D19E "创新号"
  'vietnam-railways-d19e': {
    name: { zh: '越南铁路 D19E "创新号" 001 号客运内燃机车样车', en: 'Vietnam Railways D19E Prototype Locomotive D19E-901' },
    codeNumber: 'D19E-901 (首台样车)',
    firstDate: { zh: '2001年下线 (中车资阳机车制造)', en: '2001 Rollout by CRRC Ziyang' },
    testLocation: { zh: '越南河内-胡志明市南北统一铁路干线 (1,726 km)', en: 'North-South Railway Line, Hanoi to Ho Chi Minh City' },
    significance: {
      zh: '中国机车成套出口越南的里程碑样车。装配卡特彼勒 3512B 涡轮增压柴油机与微机控制系统，大幅缩短了河内至胡志明市单程运行时间至 29 小时。',
      en: 'Historic export locomotive built by CRRC Ziyang with Caterpillar 3512B engine, revitalizing the North-South spine.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/D19E-905_%28SIK_03-054979%29.jpg',
    liveryName: { zh: '越南铁路经典深蓝与鲜红条带配五角星先导涂装', en: 'Vietnam Railways Blue-Red with Golden Star Livery' },
    currentStatus: { zh: '河内机务段现役主力', en: 'Active with Hanoi Locomotive Depot' },
  },

  // 印尼铁路 CC206 (GE CM20EMP)
  'kai-panoramic-cc206': {
    name: { zh: '印尼国家铁路 CC206 (GE CM20EMP) 双驾驶室柴油机车样车', en: 'KAI CC206 Prototype Locomotive CC206 13 01' },
    codeNumber: 'CC206 13 01 (首台工程验证样车)',
    firstDate: { zh: '2012年下线 (GE 宾夕法尼亚伊利工厂)', en: '2012 Rollout by GE Transportation Erie, PA' },
    testLocation: { zh: '爪哇岛山岳火山弯道干线', en: 'Java Island Mountain & Volcano Mainline' },
    significance: {
      zh: '专为印尼狭窄米轨与火山地质定制的双端驾驶室重载机车原型。取消了传统单端机车折返换向调车作业，具备 2,250 马力强劲牵引力与极佳的抗震适应性。',
      en: 'Customized twin-cab diesel built by GE for Indonesia 1067mm gauge, hauling scenic express across Java.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Lokomotif_CC206_15_07.jpg',
    liveryName: { zh: '印尼铁路经典白底橘红条带配 "KAI" 标识原厂涂装', en: 'KAI White with Orange Stripes & Modern Logo' },
    currentStatus: { zh: '万隆机务段现役', en: 'Active with Bandung Locomotive Depot' },
  },

  // 斯里兰卡铁路 Class S12
  'sri-lanka-class-s12': {
    name: { zh: '斯里兰卡高山与海上铁路 Class S12 动力集中动车组样车', en: 'Sri Lanka Railways Class S12 Prototype Trainset 917' },
    codeNumber: 'Class S12 917 (首列样车)',
    firstDate: { zh: '2012年下线 (中车青岛四方制造)', en: '2012 Rollout by CRRC Qingdao Sifang' },
    testLocation: { zh: '斯里兰卡中央高山茶园茶山段 (康提-埃拉) / 加勒海上铁道', en: 'Main Line Tea Country (Kandy-Ella) & Coast Line' },
    significance: {
      zh: '征服世界著名“高山茶园小火车”与“千与千寻海上火车”的功勋动车组原型。采用防盐雾腐蚀不锈钢车体与大扭矩动力包，可克服 1:30 (33‰) 极陡峭山地坡道。',
      en: 'Engineered by CRRC Sifang to conquer 33‰ mountain grades and sea-spray salt air along the Galle coast.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Class_S12.jpg',
    liveryName: { zh: '经典锡兰印度洋深蓝配灰白与红条原厂涂装', en: 'Ceylon Ocean Deep Blue with Grey and Red Accent Stripes' },
    currentStatus: { zh: '科伦坡德马拉戈达机务段现役', en: 'Active with Dematagoda Depot, Colombo' },
  },

  // 哈萨克斯坦 "图尔根号" Tulpar-Talgo
  'kazakhstan-tulpar-talgo': {
    name: { zh: '哈萨克斯坦铁路 "图尔根号" (Tulpar-Talgo) 宽轨草原高速列车样车', en: 'Kazakhstan Temir Zholy Tulpar-Talgo Prototype Trainset #1' },
    codeNumber: 'Tulpar-Talgo 1号原型列车',
    firstDate: { zh: '2011年出厂 (阿斯塔纳 Tulpar-Talgo 工厂)', en: '2011 Rollout at Astana Works' },
    testLocation: { zh: '阿斯塔纳至阿拉木图哈萨克大草原宽轨干线 (1,520 mm)', en: 'Astana-Almaty Broad-Gauge Steppe Corridor (1,520 mm)' },
    significance: {
      zh: '在中亚广袤宽轨（1520 毫米）大草原上跑出 200 km/h 的抗严寒列车原型。车厢采用超厚聚氨酯保温材料与特制耐零下 50 度极寒低温转向架轴承。',
      en: 'Built to cross frozen Eurasian steppes at 200 km/h, insulated against -50°C Siberian winters.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Talgo_200_Tulpar%2C_Almaty_%28P1180169%29.jpg',
    liveryName: { zh: '哈萨克天蓝与纯白双色草原苍鹰飞翔涂装', en: 'Kazakh Sky Blue and White Steppe Eagle Livery' },
    currentStatus: { zh: '哈萨克斯坦国家铁路现役主力', en: 'Active with Kazakhstan Temir Zholy' },
  },

  // JR东日本 秋田新干线 E6系 "小町号"
  'jr-east-series-e6-komachi': {
    name: { zh: 'JR东日本 秋田新干线 E6系 S11 编组先行量产试验车', en: 'JR East Akita Shinkansen Series E6 Prototype S11' },
    codeNumber: 'E6系 S11 编组 (先行量产试验车)',
    firstDate: { zh: '2010年6月出厂 (川崎重工 / 日立制作所)', en: 'June 2010 Rollout by Kawasaki & Hitachi' },
    testLocation: { zh: '东北新干线高速试验段 / 田泽湖线迷你新干线窄限界段', en: 'Tohoku Shinkansen & Tazawako Line' },
    significance: {
      zh: '实现“新干线与在来线直通”的迷你新干线速度霸主原型车。车体缩窄以适应狭窄隧道限界，在东北新干线上能以 320 km/h 与 E5 系重联狂飙，在弯道通过空气弹簧摆式倾斜。',
      en: 'Pioneered 320 km/h coupled operation with E5 while squeezing into mini-shinkansen narrower clearances.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Series-E6_Z14_Komachi.jpg',
    liveryName: { zh: '“茜红”车顶配飞云白与银铃灰奥羽名花专属涂装', en: 'Akane Crimson Roof with Hiun White and Silver Grey' },
    currentStatus: { zh: '秋田综合车辆中心现役', en: 'Active with Akita Depot' },
  },

  // JR 285系 "日出特急"
  'jr-series-285-sunrise-express': {
    name: { zh: 'JR西日本 / JR东海 285系 "日出特急" 第1编组 (クモハ 285-1)', en: 'JR Series 285 Sunrise Express Trainset I1 Prototype' },
    codeNumber: '285系 I1 编组 (クモハ 285-1 样产车)',
    firstDate: { zh: '1998年3月出厂 (近畿车辆制造)', en: 'March 1998 Rollout by Kinki Sharyo' },
    testLocation: { zh: '东海道・山阳本线 / 伯备线夜晚试验段', en: 'Tokaido/Sanyo Main Line & Hakubi Line Night Tests' },
    significance: {
      zh: '日本最后且唯一的经典定期双层寝台电力动车组原型车。颠覆了传统机车牵引卧铺，采用动力分散型双层车身与日本积水住宅 (Sekisui House) 共同设计的纯木质个人胶囊与独立包厢。',
      en: 'Japan last scheduled overnight sleeper EMU, co-designed with Sekisui House with warm wooden private cabins.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/JRW_Series_285_Sunrise_Seto.jpg',
    liveryName: { zh: '晨曦朝霞深红与朝露金双层温馨原厂涂装', en: 'Morning Glow Deep Red and Sunrise Gold Two-Tone' },
    currentStatus: { zh: '出云支所与大垣车辆区现役', en: 'Active in night sleeper service' },
  },

  // 中国铁路 韶山 9G 型 (SS9G)
  'china-railway-ss9g': {
    name: { zh: '韶山 9 型 (SS9) 0001 号准高速客运电力机车样车', en: 'Shaoshan SS9-0001 Passenger Electric Locomotive Prototype' },
    codeNumber: 'SS9-0001',
    firstDate: { zh: '1998年12月26日 (中车株洲电力机车下线)', en: 'December 26, 1998 Rollout by CRRC Zhuzhou' },
    testLocation: { zh: '株洲电力机车厂 / 京广铁路提速干线', en: 'CRRC Zhuzhou / Beijing-Guangzhou Mainline' },
    significance: {
      zh: '专为中国铁路干线准高速客运量身打造的重载提速名车。采用 Bo-Bo-Bo 轴式与电机空心轴全悬挂转向架，持续功率达 4,800 kW，牵引 18 节双层客车在平直道能以 160-170 km/h 稳健运行，被车迷尊称为“大红枣”。',
      en: 'The dedicated passenger electric locomotive designed for China trunk speedups. Equipped with Bo-Bo-Bo wheel arrangement and 4,800 kW output.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/SS9_0001%40BJI_%2820200809115707%29.jpg',
    liveryName: { zh: '株机原厂红白双色准高速客运机车涂装', en: 'CRRC Zhuzhou Original Red-White Livery' },
    currentStatus: { zh: '配属中国铁路北京局集团，北京机务段典藏', en: 'Preserved at Beijing Locomotive Depot' },
  },

  // 中国铁路 东风 11G 型 (DF11G)
  'china-railway-df11g': {
    name: { zh: '东风 11G 型 0001 号双机重联跨世纪直特客运内燃机车样车', en: 'Dongfeng DF11G-0001 Double-Unit Diesel Locomotive Prototype' },
    codeNumber: 'DF11G-0001 (A+B 双机重联)',
    firstDate: { zh: '2003年11月下线 (南车戚墅堰机车厂)', en: 'November 2003 Rollout by Qishuyan Locomotive' },
    testLocation: { zh: '戚墅堰机车车辆厂 / 北京环铁 / 京沪铁路提速测试', en: 'Qishuyan Works / CARA Beijing Loop / Beijing-Shanghai Line' },
    significance: {
      zh: '第五次铁路大提速直达特快（Z字头）“开八对，通九州”的头号开路先锋样车。独创自带客车全电列供电逆变系统，双机联动提供 7,220 kW 强劲动力，创造了单机跨局长交路不换挂机车连续狂奔 1,463 公里的历史纪律。',
      en: 'The vanguard double-unit locomotive designed for non-stop "Z-series" expresses, delivering 7,220 kW and pioneering direct hotel power.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/DF11G_0002-0001_with_Z226%40NXH_%2820251014073113%29.jpg',
    liveryName: { zh: '中国铁路直达特快高光鲜红双机重联原厂涂装', en: 'China Railway Z-Express High-Gloss Crimson Red Livery' },
    currentStatus: { zh: '配属中国铁路上海局集团杭州机务段，执飞干线客运', en: 'In revenue passenger service with Shanghai Railway Bureau' },
  },

  // 东武铁道 N100系 "SPACIA X"
  'tobu-n100-spacia-x': {
    name: { zh: '东武铁道 N100系 "SPACIA X" 第1编组 (N101F)', en: 'Tobu N100 Series SPACIA X Trainset N101F' },
    codeNumber: 'N101F 编组',
    firstDate: { zh: '2023年3月出厂 (日立笠户事业所)', en: 'March 2023 Rollout by Hitachi Kasado' },
    testLocation: { zh: '东武日光线 / 鬼怒川线', en: 'Tobu Nikko Line & Kinugawa Line' },
    significance: {
      zh: '新一代日光旗舰特急。车窗融入鹿沼组子几何花纹传统工艺，配备 Cockpit Lounge 观景沙龙席与最高级的驾驶室套房。',
      en: 'Flagship sightseeing EMU incorporating Kanuma Kumiko woodcraft geometric window frames.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Tobu_Series-N100-N101.jpg',
    liveryName: { zh: '高雅白瓷 (White Porcelain) 涂装', en: 'White Porcelain with Kumiko Craft Accents' },
    currentStatus: { zh: '南栗桥车辆管区现役', en: 'Active with Minami-Kurihashi Depot' },
  },

  // 南海电铁 50000系 "Rapi:t"
  'nankai-50000-rapit': {
    name: { zh: '南海电气铁道 50000系 "Rapi:t" 铁人28号 第1编组', en: 'Nankai 50000 Series Rapi:t Trainset #1 (50501F)' },
    codeNumber: '50501F (第1编组)',
    firstDate: { zh: '1994年2月出厂 (东急车辆制造)', en: 'February 1994 Rollout by Tokyu Car' },
    testLocation: { zh: '南海本线 / 空港线', en: 'Nankai Main Line & Airport Line' },
    significance: {
      zh: '极富未来复古科幻色彩的关西空港特急。车头神似“铁人28号”武士面具，椭圆形飞机式舷窗独具一格，最高速度 120 km/h。',
      en: 'Avant-garde retro-futuristic airport express with oval aircraft-styled windows.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Nankai_50000_series_Rapit_at_Namba_Station_2017-03-12.jpg',
    liveryName: { zh: '深蓝海军色 (Deep Navy Blue) 专属涂装', en: 'Deep Navy Blue Metallic Livery' },
    currentStatus: { zh: '住之江检车区现役', en: 'Active with Suminoe Depot' },
  },

  // 名古屋铁道 2000系 "μ-SKY"
  'meitetsu-series-2000-musky': {
    name: { zh: '名古屋铁道 2000系 "μ-SKY" 第1编组 (2001F)', en: 'Meitetsu 2000 Series mu-SKY Trainset 2001F' },
    codeNumber: '2001F 编组',
    firstDate: { zh: '2004年5月出厂 (日本车辆制造)', en: 'May 2004 Rollout by Nippon Sharyo' },
    testLocation: { zh: '名铁常滑线 / 空港线', en: 'Meitetsu Tokoname & Airport Lines' },
    significance: {
      zh: '专为 2005 年爱知世博会与中部国际机场开港定制的高速空港特急。车体具备 1.5 度空气弹簧自然车体倾斜，最高运营时速 120 km/h。',
      en: 'Chubu Centrair Airport express featuring 1.5-degree pneumatic carbody tilting.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Nagoya_Railway_2000.jpg',
    liveryName: { zh: '蓝天与白云双色空港涂装', en: 'Blue Sky and Ocean White Airport Livery' },
    currentStatus: { zh: '舞木检查场现役', en: 'Active with Mugi Depot' },
  },

  // 印尼雅万高铁 KCIC400AF "Whoosh"
  'kcic-400af-whoosh': {
    name: { zh: '印尼雅万高铁 KCIC400AF "Whoosh" 首列高速动车组样车', en: 'KCIC400AF Whoosh High-Speed EMU Trainset #1' },
    codeNumber: 'KCIC400AF-2201 (首列交付印尼雅万动车组样车)',
    firstDate: { zh: '2022年8月5日下线 (中车青岛四方制造)', en: 'August 5, 2022 Rollout by CRRC Qingdao Sifang' },
    testLocation: { zh: '中国铁道科学研究院环铁 / 印尼雅万高铁德卡鲁尔试验段', en: 'CARS Beijing / Tegalluar Depot & Test Track, Indonesia' },
    significance: {
      zh: '东南亚首条时速350公里高速铁路标杆样车。依托中国复兴号 CR400AF 先进成熟平台，结合印尼热带雨林湿热海风与多地震带环境，全新开发了高耐腐蚀车体、低阻力流线型头型与红色科幻涂装。',
      en: 'Southeast Asia first 350 km/h high-speed rail prototype, engineered for tropical rainforest climate with high corrosion resistance.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Front_Carriage_of_Whoosh_High-speed_Train%2C_with_Whoosh_Decal.jpg',
    liveryName: { zh: '印尼国旗红银双色流线配 Whoosh 动感飞翼涂装', en: 'Indonesian Red & Silver Streamline with Whoosh Wings Livery' },
    currentStatus: { zh: '印尼雅万高铁全线商业常态化运营中', en: 'In active high-speed revenue service between Jakarta and Bandung' },
  },

  // 中老铁路 "澜沧号" CR200J
  'laos-china-railway-cr200j': {
    name: { zh: '中老铁路 "澜沧号" CR200J 动力集中动车组首列样车', en: 'Laos-China Railway "Lancang" CR200J EMU Trainset #1' },
    codeNumber: 'CR200J-0401 (澜沧号 1号样组)',
    firstDate: { zh: '2021年10月16日交付 (中车大连与中车四方联合研制)', en: 'October 16, 2021 Delivery to Vientiane' },
    testLocation: { zh: '中老铁路磨万段 (磨丁至万象)', en: 'Boten-Vientiane Railway Mainline, Laos' },
    significance: {
      zh: '中老铁路跨国干线客运旗舰先导车。针对热带山岳地质与高温高湿环境深度定制，配备持续大坡道安全电制动与高平稳性客室减振，最高运营速度 160 km/h。',
      en: 'Flagship international EMU built for the Boten-Vientiane line, tailored for mountainous tropical terrain at 160 km/h.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/2021-12-03_China-Laos-Eisenbahn.jpg',
    liveryName: { zh: '老挝国旗红白蓝三色“国旗之美”专属涂装', en: 'Lao National Flag Tricolor (Red, White & Blue) Livery' },
    currentStatus: { zh: '万象站至磨丁站跨国干线常态化客运主力', en: 'In active revenue service on the Laos-China Railway' },
  },
};

/**
 * 完整精确的 106 款载具 ID 到原型机/车 Key 的 1 对 1 映射表
 * 杜绝任何因为模糊匹配造成的 C919 / CR400BF 误配问题！
 */
export const VEHICLE_TO_PROTOTYPE_MAP: Record<string, string> = {
  // Aviation
  'ana-b747-pokemon': 'boeing-747-400',
  'ana-a380-honu': 'airbus-a380-800',
  'ana-b787-starwars': 'boeing-787',
  'jal-a350-900': 'airbus-a350-900',
  'b747-400': 'boeing-747-400',
  'comac-c919': 'comac-c919',
  'sichuan-a350-panda': 'airbus-a350-900',
  'csn-a350-900': 'airbus-a350-900',
  'csn-b787': 'boeing-787',
  'csn-a380-800': 'airbus-a380-800',
  'airchina-b777-300er': 'boeing-777',
  'concorde': 'concorde',
  'hainan-787-panda': 'boeing-787',
  'xiamen-787-un': 'boeing-787',
  'juneyao-787-peony': 'boeing-787',
  'spring-a320': 'airbus-a320',
  'nine-air-737': 'boeing-737',
  'china-express-crj900': 'bombardier-crj900',
  'china-eastern-erj145': 'embraer-erj145',
  'jal-767-disney': 'boeing-767',
  'airbus-a330-900neo-hu': 'airbus-a330',
  'delta-a350-team-usa': 'airbus-a350-900',
  'united-b737-star-wars': 'boeing-737',
  'american-b777-bare-metal': 'boeing-777',
  'southwest-b737-lonestar': 'boeing-737',
  'china-express-c909': 'comac-c909',
  'korean-air-b747-8i': 'boeing-747-8i',
  'eva-air-b777-300er': 'boeing-777',
  'singapore-airlines-a350-900': 'airbus-a350-900',
  'thai-airways-a350-900': 'airbus-a350-900',
  'china-airlines-a350-900': 'airbus-a350-900',
  'cathay-pacific-777-300er': 'boeing-777',
  'cathay-pacific-a350-1000': 'airbus-a350-1000',
  'singapore-airlines-a380-800': 'airbus-a380-800',
  'malaysia-airlines-a350-900': 'airbus-a350-900',
  'airasia-a320neo': 'airbus-a320',
  'vietnam-airlines-a350-900': 'airbus-a350-900',
  'garuda-777-300er': 'boeing-777',
  'saudia-787-9': 'boeing-787',
  'emirates-a380-800': 'airbus-a380-800',
  'etihad-787-9': 'boeing-787',
  'qatar-airways-a350-1000': 'airbus-a350-1000',
  'starflyer-a320': 'airbus-a320',
  'miat-787-9': 'boeing-787',
  'bangkok-airways-a320': 'airbus-a320',
  'royal-brunei-787-8': 'boeing-787',
  'air-india-787-8': 'boeing-787',
  'srilankan-a330-300': 'airbus-a330',
  'trans-maldivian-dhc-6': 'trans-maldivian-dhc-6',
  'drukair-a319': 'airbus-a320',
  'oman-air-787-9': 'boeing-787',
  'joy-air-ma60': 'joy-air-ma60',
  'uni-air-atr72-600': 'uni-air-atr72-600',
  'ana-wings-dash8-q400': 'ana-wings-dash8-q400',
  'klm-b777-300er-orange-pride': 'boeing-777',
  'air-china-b747-8i': 'boeing-747-8i',
  'china-eastern-a350-900': 'airbus-a350-900',
  'china-eastern-a330-300-disney': 'airbus-a330',
  'eva-air-b777-300er-hello-kitty': 'boeing-777',

  // Railway
  'shinkansen-0': 'shinkansen-0',
  'shinkansen-500': 'shinkansen-500',
  'shinkansen-e5': 'shinkansen-e5',
  'shinkansen-n700s': 'shinkansen-n700s',
  'cr400bf-z': 'cr400bf-z',
  'crh380a': 'crh380a',
  'ss8': 'ss8',
  'df4d': 'df4d',
  'big-boy-4014': 'big-boy-4014',
  'shinkansen-500-hellokitty': 'shinkansen-500',
  'jr-281-hellokitty-haruka': 'jr-281-haruka',
  'jr-kyushu-aso-boy': 'jr-kyushu-aso-boy',
  'jr-kyushu-883-sonic': 'jr-kyushu-883-sonic',
  'scmaglev-l0': 'scmaglev-l0',
  'cr400af-z-fuxing': 'cr400af-z-fuxing',
  'cr200j-hulvwa': 'cr200j-hulvwa',
  'shinkansen-923-doctor-yellow': 'shinkansen-923-doctor-yellow',
  'jr-kyushu-yufuin-no-mori': 'jr-kyushu-yufuin-no-mori',
  'jr-kyushu-seven-stars': 'jr-kyushu-seven-stars',
  'odakyu-70000-gse': 'odakyu-70000-gse',
  'kintetsu-50000-shimakaze': 'kintetsu-50000-shimakaze',
  'jr-east-e259-nex': 'jr-east-e259-nex',
  'shanghai-maglev-transrapid': 'shanghai-maglev-transrapid',
  'crrc-600-maglev': 'crrc-600-maglev',
  'tobu-n100-spacia-x': 'tobu-n100-spacia-x',
  'nankai-50000-rapit': 'nankai-50000-rapit',
  'amtrak-avelia-liberty': 'amtrak-avelia-liberty',
  'amtrak-ge-p42dc': 'amtrak-ge-p42dc',
  'bnsf-es44ac': 'bnsf-es44ac',
  'up-sd70ace-4141': 'up-sd70ace-4141',
  'thsr-700t': 'thsr-700t',
  'korail-ktx-sancheon': 'korail-ktx-sancheon',
  'kcic-400af-whoosh': 'kcic-400af-whoosh',
  'indian-railways-vande-bharat': 'indian-railways-vande-bharat',
  'laos-china-railway-cr200j': 'laos-china-railway-cr200j',
  'uzbekistan-afrosiyob-talgo250': 'uzbekistan-afrosiyob-talgo250',
  'saudi-haramain-talgo350': 'saudi-haramain-talgo350',
  'ktmb-ets-class-93': 'ktmb-ets-class-93',
  'vietnam-railways-d19e': 'vietnam-railways-d19e',
  'kai-panoramic-cc206': 'kai-panoramic-cc206',
  'sri-lanka-class-s12': 'sri-lanka-class-s12',
  'kazakhstan-tulpar-talgo': 'kazakhstan-tulpar-talgo',
  'meitetsu-series-2000-musky': 'meitetsu-series-2000-musky',
  'jr-east-series-e6-komachi': 'jr-east-series-e6-komachi',
  'jr-series-285-sunrise-express': 'jr-series-285-sunrise-express',
  'china-railway-ss9g': 'china-railway-ss9g',
  'china-railway-df11g': 'china-railway-df11g',
};

/**
 * 获取每辆载具的专属原型机/样车档案
 */
export function getVehiclePrototype(vehicle: { id: string; category?: string }): PrototypeInfo {
  const targetKey = VEHICLE_TO_PROTOTYPE_MAP[vehicle.id];
  if (targetKey && PROTOTYPE_REGISTRY[targetKey]) {
    return PROTOTYPE_REGISTRY[targetKey];
  }
  // 仅在未知条目时安全回退
  return vehicle.category === 'aviation'
    ? PROTOTYPE_REGISTRY['comac-c919']
    : PROTOTYPE_REGISTRY['cr400bf-z'];
}
