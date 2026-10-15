import React from 'react';
import { Plane, Train, Box, Award, PlusCircle, Search } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenSubmit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenSubmit,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Dual Brand Title */}
          <div
            className="flex items-center space-x-3 cursor-pointer group btn-press"
            onClick={() => setActiveTab('all')}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-500 via-indigo-600 to-amber-500 flex items-center justify-center shadow-lg shadow-sky-500/20 ring-1 ring-white/20 group-hover:shadow-sky-500/30 transition-shadow">
              <div className="relative">
                <Plane className="w-5 h-5 text-white transform -rotate-45 absolute -top-1 -left-1 drop-shadow-sm" />
                <Train className="w-5 h-5 text-amber-200 transform translate-x-1.5 translate-y-1.5 drop-shadow-sm" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-mono">
                  AERO<span className="text-sky-400">·</span>RAIL
                </span>
                <span className="text-[10px] sm:text-xs font-semibold px-1.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono tracking-wider">
                  ARCHIVE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-tight">
                翼轨档案 · 航空与铁道图鉴及微缩模型库
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="搜索机型/车型/涂装/模型货号 (B747, CR400, KATO...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/80 text-sm text-slate-200 pl-10 pr-9 py-2 rounded-xl border border-white/[0.08] focus:border-sky-500/80 focus:ring-2 focus:ring-sky-500/20 focus:bg-slate-900 placeholder-slate-500 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white w-5 h-5 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center btn-press"
                  title="清空搜索"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenSubmit}
              className="btn-press inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300 text-slate-950 shadow-md shadow-sky-500/20 ring-1 ring-white/25"
            >
              <PlusCircle className="w-4 h-4" />
              <span>投稿打卡 / Spotter Submit</span>
            </button>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="搜索机型/车型/涂装/模型货号..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 text-sm text-slate-200 pl-9 pr-8 py-2 rounded-xl border border-white/[0.08] focus:border-sky-500/80 focus:ring-2 focus:ring-sky-500/20 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center btn-press"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs (Tactile Segment Switcher) */}
        <div className="flex space-x-1.5 overflow-x-auto pb-2.5 scrollbar-none border-t border-white/[0.06] pt-2.5 -mx-1 px-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`btn-press px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center space-x-1.5 transition-all ${
              activeTab === 'all'
                ? 'bg-slate-800 text-white shadow-sm ring-1 ring-white/10'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <span>全部档案 / All</span>
          </button>

          <button
            onClick={() => setActiveTab('aviation')}
            className={`btn-press px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center space-x-1.5 transition-all ${
              activeTab === 'aviation'
                ? 'bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30 shadow-sm shadow-sky-500/10'
                : 'text-slate-400 hover:text-sky-300 hover:bg-slate-900/60'
            }`}
          >
            <Plane className="w-3.5 h-3.5 text-sky-400" />
            <span>✈️ 航空世界 / Aviation</span>
          </button>

          <button
            onClick={() => setActiveTab('railway')}
            className={`btn-press px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center space-x-1.5 transition-all ${
              activeTab === 'railway'
                ? 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30 shadow-sm shadow-amber-500/10'
                : 'text-slate-400 hover:text-amber-300 hover:bg-slate-900/60'
            }`}
          >
            <Train className="w-3.5 h-3.5 text-amber-400" />
            <span>🚄 铁道世界 / Railway</span>
          </button>

          <button
            onClick={() => setActiveTab('models')}
            className={`btn-press px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center space-x-1.5 transition-all ${
              activeTab === 'models'
                ? 'bg-purple-500/15 text-purple-300 ring-1 ring-purple-500/30 shadow-sm shadow-purple-500/10'
                : 'text-slate-400 hover:text-purple-300 hover:bg-slate-900/60'
            }`}
          >
            <Box className="w-3.5 h-3.5 text-purple-400" />
            <span>📦 比例模型收录 / Scale Models</span>
          </button>

          <button
            onClick={() => setActiveTab('retired')}
            className={`btn-press px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center space-x-1.5 transition-all ${
              activeTab === 'retired'
                ? 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/30 shadow-sm shadow-rose-500/10'
                : 'text-slate-400 hover:text-rose-300 hover:bg-slate-900/60'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-rose-400" />
            <span>🏛️ 退役经典馆 / Hall of Fame</span>
          </button>
        </div>

      </div>
    </header>
  );
};
