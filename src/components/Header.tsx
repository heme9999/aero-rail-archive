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
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Dual Brand Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('all')}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-500 via-indigo-600 to-amber-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <div className="relative">
                <Plane className="w-5 h-5 text-white transform -rotate-45 absolute -top-1 -left-1" />
                <Train className="w-5 h-5 text-amber-200 transform translate-x-1.5 translate-y-1.5" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-mono">
                  AERO<span className="text-sky-400">·</span>RAIL
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                  ARCHIVE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                翼轨档案 · 航空与铁道图鉴及微缩模型库 / Aviation & Rail Encyclopedia
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="搜索机型/车型/涂装/模型货号 (Search B747, CR400, KATO, AV400...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 text-sm text-slate-200 pl-9 pr-4 py-2 rounded-lg border border-slate-700/80 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder-slate-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
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
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>投稿打卡 / Spotter Submit</span>
            </button>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜索机型/车型/涂装/模型货号..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 text-sm text-slate-200 pl-9 pr-8 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-sky-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs (Bilingual Dual-line) */}
        <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none border-t border-slate-850 pt-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'all'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <span>全部档案 / All Archives</span>
          </button>

          <button
            onClick={() => setActiveTab('aviation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'aviation'
                ? 'bg-sky-950/80 text-sky-300 border border-sky-800'
                : 'text-slate-400 hover:text-sky-300 hover:bg-slate-900'
            }`}
          >
            <Plane className="w-3.5 h-3.5 text-sky-400" />
            <span>✈️ 航空世界 / Aviation</span>
          </button>

          <button
            onClick={() => setActiveTab('railway')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'railway'
                ? 'bg-amber-950/80 text-amber-300 border border-amber-800'
                : 'text-slate-400 hover:text-amber-300 hover:bg-slate-900'
            }`}
          >
            <Train className="w-3.5 h-3.5 text-amber-400" />
            <span>🚄 铁道世界 / Railway</span>
          </button>

          <button
            onClick={() => setActiveTab('models')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'models'
                ? 'bg-purple-950/80 text-purple-300 border border-purple-800'
                : 'text-slate-400 hover:text-purple-300 hover:bg-slate-900'
            }`}
          >
            <Box className="w-3.5 h-3.5 text-purple-400" />
            <span>📦 比例模型收录 / Scale Models</span>
          </button>

          <button
            onClick={() => setActiveTab('retired')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'retired'
                ? 'bg-rose-950/80 text-rose-300 border border-rose-800'
                : 'text-slate-400 hover:text-rose-300 hover:bg-slate-900'
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
