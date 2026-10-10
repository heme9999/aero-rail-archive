import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
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
  selectedBrand,
  setSelectedBrand,
  totalFiltered,
  onReset,
}) => {
  const isFiltered =
    selectedCategory !== 'all' ||
    selectedStatus !== 'all' ||
    selectedCountry !== 'all' ||
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

          {/* Country */}
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-sky-500 font-medium cursor-pointer"
          >
            <option value="all">国家/地区: 全部 / All Countries</option>
            <option value="CN">🇨🇳 中国 / China</option>
            <option value="JP">🇯🇵 日本 / Japan</option>
            <option value="US">🇺🇸 美国 / United States</option>
            <option value="FR">🇫🇷 法国 / France</option>
            <option value="GB">🇬🇧 英国 / United Kingdom</option>
            <option value="EU">🇪🇺 欧洲联合 / Europe</option>
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
