import React from 'react';
import { Plane, Train, Box, History } from 'lucide-react';

interface HeroProps {
  totalVehicles: number;
  totalLiveries: number;
  totalModels: number;
  totalRetired: number;
  searchQuery: string;
  onSelectTag: (tag: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalVehicles,
  totalLiveries,
  totalModels,
  totalRetired,
  searchQuery,
  onSelectTag,
}) => {
  const quickTags = [
    { label: '不丹航空 / 雷龙', query: '不丹皇家航空' },
    { label: '星悦航空 / 黑天鹅', query: '星悦航空' },
    { label: '斯里兰卡 / 海上茶园蓝色火车', query: '斯里兰卡铁路' },
    { label: 'KTMB / 马来西亚米轨高速', query: '马来亚铁道' },
    { label: '哈萨克斯坦 / 塔利戈', query: '哈萨克斯坦国家铁路' },
    { label: '阿航 A380 / Emirates', query: '阿联酋航空' },
    { label: '卡航 A350 / Qatar', query: '卡塔尔航空' },
    { label: 'ANA 宝可梦 / Pokemon', query: '宝可梦' },
    { label: '国泰 777 / 香港精神号', query: '国泰航空' },
    { label: '新航 A380 / SG50国旗', query: '新加坡航空' },
    { label: '中老铁路 / 澜沧号', query: '澜沧号' },
    { label: '沙特沙漠高铁 / Haramain', query: '哈拉曼' },
    { label: '马航 A350 / 我的祖国', query: '马来西亚航空' },
    { label: '亚航 A320 / AirAsia', query: '亚洲航空' },
    { label: '台湾高铁 700T / THSR', query: '台湾高铁' },
    { label: '雅万高铁 / Whoosh', query: '雅万高铁' },
    { label: '长荣 777 / EVA Air', query: '长荣航空' },
    { label: '华航 A350 / 碳纤维红梅', query: '中华航空' },
    { label: '🔬 首飞原型机/样车', query: '原型' },
    { label: 'C919 国产大飞机', query: 'C919' },
    { label: '新舟60 / 涡桨客机', query: '新舟60' },
    { label: '荷航 777 / Orange Pride', query: 'Orange Pride' },
    { label: '秋田新干线 / E6小町号', query: 'E6' },
    { label: '日出特急 / Sunrise', query: 'Sunrise' },
    { label: 'KATO (关水金属)', query: 'KATO' },
    { label: 'Aviation400', query: 'Aviation400' },
  ];

  return (
    <div className="relative border-b border-white/[0.08] bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950 bg-grid-pattern py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Blueprint Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          {/* Main Title & Bilingual Description */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/90 border border-white/[0.08] text-[11px] text-sky-400 font-mono mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span className="tracking-wider">ENGINEERING ENCYCLOPEDIA & PROTOTYPE ARCHIVE</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              航空与铁道图鉴 · 原型档案与微缩模型库
              <span className="block text-lg sm:text-2xl text-slate-400 font-normal mt-1.5 font-mono tracking-tight">
                Aero & Rail Archive: Prototypes, Liveries & Scale Models
              </span>
            </h1>

            <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              全面收录各个国家、航空公司与铁路局的经典客机、高速动车组、干线机车与特别彩绘涂装；
              专属收录每个机型的<span className="text-sky-300 font-semibold">首飞原型机 (Prototype)</span> 与车型的<span className="text-amber-300 font-semibold">试验验证样车 (Testbed)</span> 档案；
              无缝贯通 <span className="text-purple-300 font-semibold">Aviation400</span>、
              <span className="text-emerald-300 font-semibold">KATO / TOMIX</span>、
              <span className="text-indigo-300 font-semibold">中车文创 / 长鸣火模</span> 等各大主流实体模玩典藏数据。
            </p>

            {/* Quick Filter Tags (Tactile Chips) */}
            <div className="mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs text-slate-500 font-mono mr-1">热搜索引 Index:</span>
              {quickTags.map((t, idx) => {
                const isActive = searchQuery.trim().toLowerCase() === t.query.toLowerCase();
                return (
                  <button
                    key={idx}
                    onClick={() => onSelectTag(t.query)}
                    className={`btn-press px-2.5 py-1 text-xs rounded-lg border flex items-center space-x-1 ${
                      isActive
                        ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-md shadow-sky-500/20 ring-1 ring-white/20'
                        : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border-white/[0.08]'
                    }`}
                  >
                    <span>{t.label}</span>
                    {isActive && <span className="ml-1 text-[10px] opacity-75">✕</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stats Badges Grid (Craft Multi-Layer Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 lg:w-80 shrink-0">
            <div className="bg-slate-900/60 backdrop-blur-md craft-border craft-border-hover rounded-2xl p-3.5 transition-all">
              <div className="flex items-center justify-between text-sky-400 mb-1">
                <Plane className="w-4 h-4" />
                <span className="text-[10px] font-mono tracking-wider">VEHICLES</span>
              </div>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">{totalVehicles} 款</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">收录机型/车型 / Vehicles</div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md craft-border craft-border-hover rounded-2xl p-3.5 transition-all">
              <div className="flex items-center justify-between text-amber-400 mb-1">
                <Train className="w-4 h-4" />
                <span className="text-[10px] font-mono tracking-wider">LIVERIES</span>
              </div>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">{totalLiveries} 款</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">官方与彩绘涂装 / Liveries</div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md craft-border craft-border-hover rounded-2xl p-3.5 transition-all">
              <div className="flex items-center justify-between text-purple-400 mb-1">
                <Box className="w-4 h-4" />
                <span className="text-[10px] font-mono tracking-wider">MODELS</span>
              </div>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">{totalModels} 款</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">实体比例模型 / Scale Models</div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md craft-border craft-border-hover rounded-2xl p-3.5 transition-all">
              <div className="flex items-center justify-between text-rose-400 mb-1">
                <History className="w-4 h-4" />
                <span className="text-[10px] font-mono tracking-wider">CLASSICS</span>
              </div>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">{totalRetired} 款</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">已退役经典传奇 / Retired</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
