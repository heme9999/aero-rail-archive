import React from 'react';
import { Plane, Train, Box, History } from 'lucide-react';

interface HeroProps {
  totalVehicles: number;
  totalLiveries: number;
  totalModels: number;
  totalRetired: number;
  onSelectTag: (tag: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalVehicles,
  totalLiveries,
  totalModels,
  totalRetired,
  onSelectTag,
}) => {
  const quickTags = [
    { label: 'ANA 宝可梦 / Pokemon', query: '宝可梦' },
    { label: 'ANA 海龟 A380 / Honu', query: '海龟' },
    { label: '500 TYPE EVA 初号机', query: 'EVA' },
    { label: '新干线 0系 / 0 Series', query: '新干线 0' },
    { label: '新干线 E5 / 隼号', query: 'E5' },
    { label: 'C919 国产大飞机', query: 'C919' },
    { label: '复兴号 / CR400', query: '复兴号' },
    { label: 'JAL 鹤丸 A350', query: '日本航空' },
    { label: 'Aviation400', query: 'Aviation400' },
    { label: 'KATO (关水金属)', query: 'KATO' },
    { label: 'TOMIX', query: 'TOMIX' },
  ];

  return (
    <div className="relative border-b border-slate-800 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950 bg-grid-pattern py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Blueprint Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Main Title & Bilingual Description */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-sky-400 font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>ENGINEERING ENCYCLOPEDIA & DIECAST ARCHIVE</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              航空与铁道图鉴 · 涂装档案与微缩模型库
              <span className="block text-lg sm:text-2xl text-slate-400 font-medium mt-1 font-mono">
                Aero & Rail Archive: Liveries, Classic Retires & Scale Models
              </span>
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              全面收录各个国家、航空公司与铁路局的经典客机、高速动车组、干线机车与特别彩绘涂装；
              深度索引已退役经典传奇车型，并无缝贯通 <span className="text-sky-300 font-semibold">Aviation400</span>、
              <span className="text-amber-300 font-semibold">日本 KATO / TOMIX</span>、
              <span className="text-purple-300 font-semibold">中国中车文创 / 长鸣</span> 等各大主流实体模玩典藏档案。
            </p>

            {/* Quick Filter Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-mono">热搜索引 Quick Index:</span>
              {quickTags.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectTag(t.query)}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 lg:w-80 shrink-0">
            <div className="bg-slate-900/90 border border-sky-900/40 rounded-xl p-3 shadow-inner">
              <div className="flex items-center justify-between text-sky-400 mb-1">
                <Plane className="w-4 h-4" />
                <span className="text-xs font-mono">MODELS</span>
              </div>
              <div className="text-xl font-bold font-mono text-white">{totalVehicles} 款</div>
              <div className="text-[11px] text-slate-400">收录机型/车型 / Vehicles</div>
            </div>

            <div className="bg-slate-900/90 border border-amber-900/40 rounded-xl p-3 shadow-inner">
              <div className="flex items-center justify-between text-amber-400 mb-1">
                <Train className="w-4 h-4" />
                <span className="text-xs font-mono">LIVERIES</span>
              </div>
              <div className="text-xl font-bold font-mono text-white">{totalLiveries} 款</div>
              <div className="text-[11px] text-slate-400">官方与彩绘涂装 / Liveries</div>
            </div>

            <div className="bg-slate-900/90 border border-purple-900/40 rounded-xl p-3 shadow-inner">
              <div className="flex items-center justify-between text-purple-400 mb-1">
                <Box className="w-4 h-4" />
                <span className="text-xs font-mono">DIECAST</span>
              </div>
              <div className="text-xl font-bold font-mono text-white">{totalModels} 款</div>
              <div className="text-[11px] text-slate-400">实体比例模型 / Scale Models</div>
            </div>

            <div className="bg-slate-900/90 border border-rose-900/40 rounded-xl p-3 shadow-inner">
              <div className="flex items-center justify-between text-rose-400 mb-1">
                <History className="w-4 h-4" />
                <span className="text-xs font-mono">RETRO</span>
              </div>
              <div className="text-xl font-bold font-mono text-white">{totalRetired} 款</div>
              <div className="text-[11px] text-slate-400">已退役经典传奇 / Retired</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
