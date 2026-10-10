import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedOperator: string;
  setSelectedOperator: (op: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  totalFiltered: number;
  onReset: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  selectedCountry,
  setSelectedCountry,
  selectedOperator,
  setSelectedOperator,
  selectedBrand,
  setSelectedBrand,
  totalFiltered,
  onReset,
}) => {
  const isFiltered =
    selectedCategory !== 'all' ||
    selectedStatus !== 'all' ||
    selectedCountry !== 'all' ||
    selectedOperator !== 'all' ||
    selectedBrand !== 'all';

  return (
    <div className="bg-slate-900/70 border-b border-slate-800 py-3.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Left Filter Selectors */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center text-slate-400 font-mono pr-1">
            <Filter className="w-3.5 h-3.5 mr-1 text-sky-400" />
            <span>筛选 Filters:</span>
          </div>

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-sky-500 font-medium cursor-pointer"
          >
            <option value="all">领域: 全部 / All Domains</option>
            <option value="aviation">✈️ 航空民航 / Aviation</option>
            <option value="railway">🚄 铁路运输 / Railway</option>
          </select>

          {/* Status */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-sky-500 font-medium cursor-pointer"
          >
            <option value="all">状态: 全部 / All Status</option>
            <option value="active">🟢 现役运营 / In Service</option>
            <option value="retired">🏛️ 已退役经典 / Retired</option>
          </select>

          {/* Country Grouped by Continent */}
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-sky-500 font-medium cursor-pointer"
          >
            <option value="all">国家/地区: 全部 / All Countries</option>
            <optgroup label="🌏 亚洲 / Asia">
              <option value="CN">🇨🇳 中国 / China</option>
              <option value="HK">🇭🇰 中国香港 / Hong Kong</option>
              <option value="TW">🇹🇼 中国台湾 / Taiwan</option>
              <option value="JP">🇯🇵 日本 / Japan</option>
              <option value="KR">🇰🇷 韩国 / South Korea</option>
              <option value="SG">🇸🇬 新加坡 / Singapore</option>
              <option value="ID">🇮🇩 印度尼西亚 / Indonesia</option>
              <option value="TH">🇹🇭 泰国 / Thailand</option>
              <option value="IN">🇮🇳 印度 / India</option>
              <option value="AE">🇦🇪 阿联酋 / UAE</option>
            </optgroup>
            <optgroup label="🌍 欧洲 / Europe">
              <option value="FR">🇫🇷 法国 / France</option>
              <option value="GB">🇬🇧 英国 / United Kingdom</option>
              <option value="NL">🇳🇱 荷兰 / Netherlands</option>
              <option value="EU">🇪🇺 欧洲联合 / Europe</option>
            </optgroup>
            <optgroup label="🌎 北美洲 / North America">
              <option value="US">🇺🇸 美国 / United States</option>
            </optgroup>
          </select>

          {/* Operator Selector Grouped by Continent and Domain */}
          <select
            value={selectedOperator}
            onChange={(e) => setSelectedOperator(e.target.value)}
            className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-sky-500 font-medium cursor-pointer"
          >
            <option value="all">运营机构: 全部 / All Operators</option>
            <optgroup label="✈️ 亚洲航空公司 / Asian Airlines">
              <option value="air_china">🇨🇳 中国国际航空 (Air China)</option>
              <option value="china_eastern">🇨🇳 中国东方航空 (China Eastern)</option>
              <option value="china_southern">🇨🇳 中国南方航空 (China Southern)</option>
              <option value="hainan_airlines">🇨🇳 海南航空 (Hainan Airlines)</option>
              <option value="sichuan_airlines">🇨🇳 四川航空 (Sichuan Airlines)</option>
              <option value="xiamen_air">🇨🇳 厦门航空 (XiamenAir)</option>
              <option value="juneyao_air">🇨🇳 吉祥航空 (Juneyao Air)</option>
              <option value="spring_airlines">🇨🇳 春秋航空 (Spring Airlines)</option>
              <option value="china_express">🇨🇳 华夏航空 (China Express)</option>
              <option value="air_nine">🇨🇳 九元航空 (9 Air)</option>
              <option value="cathay_pacific">🇭🇰 国泰航空 (Cathay Pacific)</option>
              <option value="eva_air">🇹🇼 长荣航空 (EVA Air)</option>
              <option value="ana">🇯🇵 全日空航空 (ANA)</option>
              <option value="jal">🇯🇵 日本航空 (JAL)</option>
              <option value="korean_air">🇰🇷 大韩航空 (Korean Air)</option>
              <option value="singapore_airlines">🇸🇬 新加坡航空 (Singapore Airlines)</option>
              <option value="thai_airways">🇹🇭 泰国国际航空 (Thai Airways)</option>
              <option value="emirates">🇦🇪 阿联酋航空 (Emirates)</option>
            </optgroup>
            <optgroup label="✈️ 欧美航空公司 / Western Airlines">
              <option value="air_france">🇫🇷 法国航空 (Air France)</option>
              <option value="british_airways">🇬🇧 英国航空 (British Airways)</option>
              <option value="klm">🇳🇱 荷兰皇家航空 (KLM)</option>
              <option value="united_airlines">🇺🇸 美国联合航空 (United Airlines)</option>
              <option value="delta_air_lines">🇺🇸 达美航空 (Delta Air Lines)</option>
              <option value="american_airlines">🇺🇸 美国航空 (American Airlines)</option>
              <option value="southwest_airlines">🇺🇸 西南航空 (Southwest Airlines)</option>
            </optgroup>
            <optgroup label="🚄 亚洲铁路机构 / Asian Railways">
              <option value="china_railway">🇨🇳 中国国家铁路集团 (CR)</option>
              <option value="shanghai_maglev">🇨🇳 上海磁浮交通 (SMT)</option>
              <option value="taiwan_high_speed_rail">🇹🇼 台湾高速铁路 (THSR)</option>
              <option value="jr_central">🇯🇵 JR东海 (JR Central)</option>
              <option value="jr_east">🇯🇵 JR东日本 (JR East)</option>
              <option value="jr_west">🇯🇵 JR西日本 (JR West)</option>
              <option value="jr_kyushu">🇯🇵 JR九州 (JR Kyushu)</option>
              <option value="odakyu">🇯🇵 小田急电铁 (Odakyu)</option>
              <option value="kintetsu">🇯🇵 近畿日本铁道 (近铁)</option>
              <option value="tobu_railway">🇯🇵 东武铁道 (Tobu)</option>
              <option value="nankai_railway">🇯🇵 南海电气铁道 (南海电铁)</option>
              <option value="meitetsu">🇯🇵 名古屋铁道 (名铁)</option>
              <option value="korail">🇰🇷 韩国铁道公社 (Korail)</option>
              <option value="kcic_whoosh">🇮🇩 印尼雅万高铁 (Whoosh)</option>
              <option value="indian_railways">🇮🇳 印度铁路 (Indian Railways)</option>
            </optgroup>
            <optgroup label="🚄 北美铁路机构 / North American Railroads">
              <option value="amtrak">🇺🇸 美铁 (Amtrak)</option>
              <option value="union_pacific">🇺🇸 联合太平洋铁路 (UP)</option>
              <option value="bnsf_railway">🇺🇸 BNSF 铁路</option>
            </optgroup>
          </select>

          {/* Model Brands */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-sky-500 font-medium cursor-pointer"
          >
            <option value="all">模型品牌: 全部 / All Model Brands</option>
            <option value="Aviation400">✈️ Aviation400 (飞度)</option>
            <option value="JC Wings">✈️ JC Wings</option>
            <option value="GeminiJets">✈️ GeminiJets</option>
            <option value="KATO">🚄 KATO (关水金属)</option>
            <option value="TOMIX">🚄 TOMIX (TOMYTEC)</option>
            <option value="中车文创">🚄 中车文创 (CRRC)</option>
            <option value="长鸣火模">🚄 长鸣火模 (Changming)</option>
          </select>

          {isFiltered && (
            <button
              onClick={onReset}
              className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-rose-950/80 text-rose-300 border border-rose-800 hover:bg-rose-900 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>重置 / Reset</span>
            </button>
          )}
        </div>

        {/* Right Counter */}
        <div className="text-slate-400 font-mono text-xs ml-auto">
          匹配结果 Matched: <span className="font-bold text-sky-400">{totalFiltered}</span> 款档案
        </div>

      </div>
    </div>
  );
};
