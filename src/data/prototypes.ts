import type { PrototypeInfo } from '../types';

/**
 * 🔬 原型机与试验样车权威数据库 (Prototype & Testbed Archive)
 * 涵盖全部 106 款载具所属的 63 个机型与车型家族，
 * 记录真实首飞/下线时间、试验基地、原厂涂装、编号及关键工程验证使命。
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

  // 空客 A350-900
  'airbus-a350-900': {
    name: { zh: '空中客车 A350-900 MSN001 首飞原型机', en: 'Airbus A350-900 Prototype MSN001 (F-WXWB)' },
    codeNumber: 'MSN 001 (F-WXWB)',
    firstDate: { zh: '2013年6月14日 (法国图卢兹-布拉尼亚克机场首飞)', en: 'June 14, 2013 (First Flight at Toulouse-Blagnac)' },
    testLocation: { zh: '法国图卢兹空客飞行试验中心', en: 'Airbus Flight Test Center, Toulouse, France' },
    significance: {
      zh: '开启“Xtra Widebody”宽体新纪元的首发原型机。全机碳纤维复合材料应用比例高达 53%，配备劳斯莱斯遄达 XWB 引擎。首次飞行即持续 4 小时 5 分钟，验证了一体化机翼弯曲弧度自动气动调节与客舱压力舒适度。',
      en: 'The first flight prototype of the A350 XWB, featuring 53% composite airframe and Rolls-Royce Trent XWB turbofans, validating adaptive winglet aero-profiling.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Airbus_A350-1000_F-WMIL_4.jpg',
    liveryName: { zh: '空中客车碳纤维复合材料 (Carbon Fibre) 科技原厂涂装', en: 'Airbus Carbon Fiber House Demonstration Livery' },
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

  // 空客 A380-800
  'airbus-a380-800': {
    name: { zh: '空中客车 A380-800 MSN001 首飞验证机', en: 'Airbus A380-800 Prototype MSN001 (F-WWOW)' },
    codeNumber: 'MSN 001 (F-WWOW)',
    firstDate: { zh: '2005年4月27日 (法国图卢兹-布拉尼亚克机场首飞)', en: 'April 27, 2005 (First Flight at Toulouse-Blagnac)' },
    testLocation: { zh: '法国图卢兹空客飞行试验中心', en: 'Airbus Flight Test Center, Toulouse, France' },
    significance: {
      zh: '人类民航史上最大全双层宽体喷气客机首飞原型机。最大起飞重量高达 560 吨，翼展 79.75 米。首架机机舱装载 22 吨遥测仪器与配重水箱，圆满验证了格莱尔 (GLARE) 层压材料中央翼盒与 853 人全员紧急撤离安全包线。',
      en: 'The maiden flight prototype of the double-deck superjumbo. Tested the GLARE laminate center wing box, quadruple hydraulic-electrical flight control channels, and extreme wake vortex footprints.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/AIB_A380_F-WWOW_5jul14_LFBO-2.jpg',
    liveryName: { zh: '空中客车 A380 原厂蓝白首发展示涂装 (机身带巨大 A380 字母)', en: 'Airbus House Colors First-Flight Demonstrator' },
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
    currentStatus: { zh: '法国巴黎勒布尔歇航空航天博物馆 (Musée de l\'Air et de l\'Espace) 永久典藏', en: 'Preserved at Musée de l\'Air et de l\'Espace, Paris Le Bourget' },
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
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Boeing_Boeing_777-200%3B_N7771%40GVA%3B09.09.1995_%286084007364%29.jpg',
    liveryName: { zh: '波音 737-800 Next-Gen 原厂测试涂装', en: 'Boeing 737 Next-Generation Rollout Livery' },
    currentStatus: { zh: '波音飞行测试与雷达工程验证机', en: 'Flight test and engineering testbed' },
  },

  // 中国商飞 C909 (ARJ21-700)
  'comac-c909': {
    name: { zh: '中国商飞 C909 (ARJ21-700) 101号首飞原型机', en: 'COMAC C909 (ARJ21-700) Prototype 101 (B-988L)' },
    codeNumber: '101架机 (B-988L)',
    firstDate: { zh: '2008年11月28日 (上海大场机场首飞)', en: 'November 28, 2008 (First Flight at Shanghai Dachang)' },
    testLocation: { zh: '上海大场基地 / 陕西阎良国家试飞院 (CFTE)', en: 'Shanghai Dachang / Yanliang National Flight Test Base' },
    significance: {
      zh: '我国第一款严格按照国际适航标准自主设计制造的涡扇支线客机首架原型机。在阎良试飞院完成了自然结冰、失速、大侧风以及极寒高温试飞，开启了中国民机适航取证体系的先河。',
      en: 'China first FAA-standard regional jet prototype. Completed pioneering icing, crosswind, and stall airworthiness campaigns.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/COMAC_B-001A_May_2017.jpg',
    liveryName: { zh: '中国商飞蓝白原厂首飞涂装', en: 'COMAC Original Blue-White Maiden Flight Livery' },
    currentStatus: { zh: '中国飞行试验研究院 (阎良) 作为功勋功绩科研机永久典藏', en: 'Preserved at CFTE Yanliang as historic test aircraft' },
  },

  // 涡轮螺旋桨：新舟60 (MA60)
  'joy-air-ma60': {
    name: { zh: '中航工业 西安飞机 新舟60 (MA60) 首架技术验证原型机', en: 'AVIC Xi\'an MA60 Prototype B-0001' },
    codeNumber: 'B-0001 (MA60 0001)',
    firstDate: { zh: '2000年2月25日 (陕西阎良机场首飞)', en: 'February 25, 2000 (First Flight at Yanliang Airport)' },
    testLocation: { zh: '陕西阎良国家试飞院 (CFTE)', en: 'Yanliang Flight Test Base, Shaanxi' },
    significance: {
      zh: '我国首款大规模投入商业客运航线运营的国产双发涡桨支线客机原型机。采用加拿大普惠 PW127J 引擎与美国柯林斯航电设备，完成了高原高温起降适应性验证。',
      en: 'The maiden prototype of China flagship turboprop regional airliner, powered by PW127J engines with modern avionics.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/COMAC_B-001A_May_2017.jpg',
    liveryName: { zh: '西安飞机工业集团原厂首飞涂装', en: 'Xi\'an Aircraft Industry Factory Rollout Colors' },
    currentStatus: { zh: '中国民航试飞试验基地典藏', en: 'Preserved in aviation test archive' },
  },

  // 涡轮螺旋桨：ATR 72-600
  'uni-air-atr72-600': {
    name: { zh: 'ATR 72-600 原厂航空电子改装原型机', en: 'ATR 72-600 Avionics Testbed Prototype (F-WWEY)' },
    codeNumber: 'MSN 098 (F-WWEY)',
    firstDate: { zh: '2009年7月24日 (法国图卢兹圣马丁首飞)', en: 'July 24, 2009 (First Flight at Toulouse-Francazal)' },
    testLocation: { zh: '法国图卢兹 ATR 飞行试验中心', en: 'ATR Flight Test Center, Toulouse, France' },
    significance: {
      zh: '验证了 ATR 全新玻璃化玻璃座舱（配备 5 块宽幅 LCD 液晶仪表）与普惠 PW127M 发动机的高效燃烧控制，大幅降低支线机场运营维护负荷。',
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
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/77/ATR_72-600_ATR_house_colors_F-WWEY_-_MSN_98_retusche.jpg',
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
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/77/ATR_72-600_ATR_house_colors_F-WWEY_-_MSN_98_retusche.jpg',
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

  // 新干线 500 系
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

  // 新干线 E5 系
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

  // 复兴号智能动车组 CR400BF-Z / CR400BF
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

  // 复兴号 CR400AF-Z / CR400AF / KCIC400AF
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
    firstDate: { zh: '1996年12月下线', en: 'December 1996 Rollout by Dalian Locomotive Works' },
    testLocation: { zh: '大连机车车辆厂 / 北京环行铁道试验基地', en: 'Dalian Locomotive Works / CARA Beijing Loop' },
    significance: {
      zh: '为中国铁路前三次大提速奠定坚实基础的功勋提速客运内燃机车。换装了 16V240ZJD 强化柴油机与全悬挂转向架，最高运营速度提升至 145 km/h，一举结束了提速干线客运动力不足的历史。',
      en: 'The premier passenger diesel locomotive built for China major railway speed-up campaigns, featuring the 16V240ZJD diesel engine.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/SS8-0001_at_Guangzhou_Locomotive_Repair_Depot_20260404.jpg',
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
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/CR400BF-0503%40BJN_%2820200828122722%29.jpg',
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

  // 上海磁浮示范线 Transrapid 08
  'shanghai-maglev-transrapid': {
    name: { zh: '德国蒂森克虏伯 Transrapid 08 常导高速磁浮试验车', en: 'ThyssenKrupp Transrapid 08 Maglev Prototype' },
    codeNumber: 'TR 08-01',
    firstDate: { zh: '1999年下线 / 埃姆斯兰特试验线跑出 450 km/h', en: '1999 Rollout / 450 km/h on Emsland Test Facility' },
    testLocation: { zh: '德国拉滕埃姆斯兰特磁浮试验基地 (TVE Lathen)', en: 'Transrapid Test Facility Emsland, Lathen, Germany' },
    significance: {
      zh: '世界首条商业运营高速磁浮线（上海磁浮示范线）的直系技术原型车。验证了定子铁心长定子直线同步电机推进与 8 毫米悬浮气隙闭环微秒级控制技术。',
      en: 'The direct engineering prototype for the Shanghai Maglev Line, validating 8mm magnetic gap levitation at 430 km/h.'
    },
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Lathen_-_Transrapid_%2B_H%C3%BCmmlinger_Kreisbahn_08_ies.jpg',
    liveryName: { zh: '德国埃姆斯兰特白色带红黑流线科技涂装', en: 'Emsland TVE White with Red-Black Accent Livery' },
    currentStatus: { zh: '德国埃姆斯兰特磁浮试验中心永久典藏', en: 'Preserved at TVE Lathen Visitor Center, Germany' },
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
};

/**
 * 辅助映射：若载具没有直接配置原型机，则根据其机型代码或家族特征进行精准匹配
 */
export function getVehiclePrototype(vehicle: { id: string; category?: string; code?: string; modelName?: { zh: string; en: string } }): PrototypeInfo {
  // 1. 直接通过 ID 匹配
  if (PROTOTYPE_REGISTRY[vehicle.id]) {
    return PROTOTYPE_REGISTRY[vehicle.id];
  }

  const id = vehicle.id.toLowerCase();
  const code = (vehicle.code || '').toLowerCase();
  const nameZh = (vehicle.modelName?.zh || '').toLowerCase();

  // 2. 匹配民航机型家族
  if (id.includes('c919') || code.includes('c919') || nameZh.includes('c919')) {
    return PROTOTYPE_REGISTRY['comac-c919'];
  }
  if (id.includes('a350-1000') || code.includes('a350-1000')) {
    return PROTOTYPE_REGISTRY['airbus-a350-1000'];
  }
  if (id.includes('a350') || code.includes('a350') || nameZh.includes('a350')) {
    return PROTOTYPE_REGISTRY['airbus-a350-900'];
  }
  if (id.includes('a380') || code.includes('a380') || nameZh.includes('a380')) {
    return PROTOTYPE_REGISTRY['airbus-a380-800'];
  }
  if (id.includes('787') || code.includes('787') || nameZh.includes('787')) {
    return PROTOTYPE_REGISTRY['boeing-787'];
  }
  if (id.includes('747-8') || code.includes('747-8') || nameZh.includes('747-8')) {
    return PROTOTYPE_REGISTRY['boeing-747-8i'];
  }
  if (id.includes('747') || code.includes('747') || nameZh.includes('747')) {
    return PROTOTYPE_REGISTRY['boeing-747-400'];
  }
  if (id.includes('777') || code.includes('777') || nameZh.includes('777')) {
    return PROTOTYPE_REGISTRY['boeing-777'];
  }
  if (id.includes('concorde') || code.includes('concorde') || nameZh.includes('协和')) {
    return PROTOTYPE_REGISTRY['concorde'];
  }
  if (id.includes('a320') || id.includes('a319') || code.includes('a320') || code.includes('a319') || nameZh.includes('a320') || nameZh.includes('a319')) {
    return PROTOTYPE_REGISTRY['airbus-a320'];
  }
  if (id.includes('a330') || code.includes('a330') || nameZh.includes('a330')) {
    return PROTOTYPE_REGISTRY['airbus-a330'];
  }
  if (id.includes('737') || code.includes('737') || nameZh.includes('737')) {
    return PROTOTYPE_REGISTRY['boeing-737'];
  }
  if (id.includes('c909') || id.includes('arj21') || code.includes('c909') || code.includes('arj21')) {
    return PROTOTYPE_REGISTRY['comac-c909'];
  }
  if (id.includes('ma60') || code.includes('ma60') || nameZh.includes('新舟60')) {
    return PROTOTYPE_REGISTRY['joy-air-ma60'];
  }
  if (id.includes('atr72') || code.includes('atr') || nameZh.includes('atr')) {
    return PROTOTYPE_REGISTRY['uni-air-atr72-600'];
  }
  if (id.includes('dash8') || id.includes('q400') || code.includes('q400')) {
    return PROTOTYPE_REGISTRY['ana-wings-dash8-q400'];
  }
  if (id.includes('dhc-6') || code.includes('dhc-6') || nameZh.includes('双水獭')) {
    return PROTOTYPE_REGISTRY['trans-maldivian-dhc-6'];
  }

  // 3. 匹配铁道车型家族
  if (id.includes('shinkansen-0') || nameZh.includes('0 系') || nameZh.includes('0系')) {
    return PROTOTYPE_REGISTRY['shinkansen-0'];
  }
  if (id.includes('500') && (id.includes('shinkansen') || nameZh.includes('500系'))) {
    return PROTOTYPE_REGISTRY['shinkansen-500'];
  }
  if (id.includes('e5') || nameZh.includes('e5系') || nameZh.includes('隼号')) {
    return PROTOTYPE_REGISTRY['shinkansen-e5'];
  }
  if (id.includes('n700s') || nameZh.includes('n700s')) {
    return PROTOTYPE_REGISTRY['shinkansen-n700s'];
  }
  if (id.includes('cr400bf') || nameZh.includes('cr400bf')) {
    return PROTOTYPE_REGISTRY['cr400bf-z'];
  }
  if (id.includes('cr400af') || id.includes('kcic-400af') || nameZh.includes('cr400af') || nameZh.includes('whoosh')) {
    return PROTOTYPE_REGISTRY['cr400af-z-fuxing'];
  }
  if (id.includes('crh380a') || nameZh.includes('crh380a')) {
    return PROTOTYPE_REGISTRY['crh380a'];
  }
  if (id.includes('ss8') || nameZh.includes('韶山 8') || nameZh.includes('韶山8')) {
    return PROTOTYPE_REGISTRY['ss8'];
  }
  if (id.includes('df4d') || nameZh.includes('东风4d') || nameZh.includes('花东风')) {
    return PROTOTYPE_REGISTRY['df4d'];
  }
  if (id.includes('big-boy') || nameZh.includes('大男孩')) {
    return PROTOTYPE_REGISTRY['big-boy-4014'];
  }
  if (id.includes('l0') || nameZh.includes('l0系') || nameZh.includes('超导磁悬浮')) {
    return PROTOTYPE_REGISTRY['scmaglev-l0'];
  }
  if (id.includes('cr200j') || nameZh.includes('cr200j') || nameZh.includes('绿巨人') || nameZh.includes('澜沧号')) {
    return PROTOTYPE_REGISTRY['cr200j-hulvwa'];
  }
  if (id.includes('doctor-yellow') || id.includes('923') || nameZh.includes('黄医生')) {
    return PROTOTYPE_REGISTRY['shinkansen-923-doctor-yellow'];
  }
  if (id.includes('transrapid') || id.includes('shanghai-maglev') || nameZh.includes('上海磁浮')) {
    return PROTOTYPE_REGISTRY['shanghai-maglev-transrapid'];
  }
  if (id.includes('700t') || nameZh.includes('700t')) {
    return PROTOTYPE_REGISTRY['thsr-700t'];
  }
  if (id.includes('sancheon') || id.includes('ktx') || nameZh.includes('ktx')) {
    return PROTOTYPE_REGISTRY['korail-ktx-sancheon'];
  }
  if (id.includes('ss9') || nameZh.includes('ss9') || nameZh.includes('韶山 9')) {
    return PROTOTYPE_REGISTRY['china-railway-ss9g'];
  }
  if (id.includes('df11g') || nameZh.includes('df11g') || nameZh.includes('东风 11g') || nameZh.includes('大猪头')) {
    return PROTOTYPE_REGISTRY['china-railway-df11g'];
  }

  // 默认回退 (航空回退到空客 A350/C919，铁道回退到 CR400BF)
  if (vehicle.category === 'aviation') {
    return PROTOTYPE_REGISTRY['comac-c919'];
  } else {
    return PROTOTYPE_REGISTRY['cr400bf-z'];
  }
}
