import React, { useState } from 'react';
import type { Vehicle, DetailPhoto } from '../types';
import { OPERATORS } from '../data/database';
import {
  X,
  Plane,
  Train,
  Box,
  Building,
  Camera,
  Maximize2,
} from 'lucide-react';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, onClose }) => {
  if (!vehicle) return null;

  const [activeLiveryId, setActiveLiveryId] = useState<string>(
    vehicle.liveries[0]?.id || ''
  );
  const [activeDetailPhoto, setActiveDetailPhoto] = useState<DetailPhoto | null>(null);

  const activeLivery =
    vehicle.liveries.find((l) => l.id === activeLiveryId) || vehicle.liveries[0];

  const isAviation = vehicle.category === 'aviation';
  const isRetired = vehicle.status === 'retired';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-slate-950/95 border-b border-slate-800 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span
              className={`p-2 rounded-xl ${
                isAviation ? 'bg-sky-950 text-sky-400 border border-sky-800' : 'bg-amber-950 text-amber-400 border border-amber-800'
              }`}
            >
              {isAviation ? <Plane className="w-5 h-5" /> : <Train className="w-5 h-5" />}
            </span>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {vehicle.modelName.zh}
                </h2>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
                  {vehicle.code}
                </span>
                {isRetired ? (
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800">
                    已退役 / Retired ({vehicle.retiredYear})
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                    现役服役 / Active
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {vehicle.modelName.en}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-7 bg-grid-pattern">
          
          {/* Top Hero Banner & Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Main Picture */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative group">
              <img
                src={activeLivery?.photoUrl || vehicle.heroImage}
                alt={vehicle.modelName.en}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-300">
                <div className="font-mono text-sky-400 text-[11px]">当前展示涂装 / Displayed Livery:</div>
                <div className="font-semibold text-white text-sm">{activeLivery?.name.zh}</div>
                <div className="font-mono text-slate-400 text-xs">{activeLivery?.name.en}</div>
              </div>
            </div>

            {/* Quick Specs & Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-3 font-mono text-xs">
                <div className="text-xs text-sky-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
                  技术性能参数 / Technical Specifications
                </div>
                
                <div className="flex items-center justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">制造厂商 Manufacturer:</span>
                  <span className="text-white font-semibold text-right">{vehicle.manufacturer.zh}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">最高极速 Max Speed:</span>
                  <span className="text-sky-300 font-bold text-right">{vehicle.specs.maxSpeed}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">定员/载客 Capacity:</span>
                  <span className="text-white text-right">{vehicle.specs.capacity}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">{isAviation ? '最大航程 Range' : '牵引功率 Output'}:</span>
                  <span className="text-white text-right">{vehicle.specs.rangeOrPower}</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">车体/机身尺寸 Dimensions:</span>
                  <span className="text-slate-300 text-right">{vehicle.specs.length}</span>
                </div>
              </div>

              {/* Operators list */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800">
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-2 font-mono">
                  运营单位与航司 / Fleet Operators
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {vehicle.operatorIds.map((opId) => {
                    const op = OPERATORS[opId];
                    return (
                      <div
                        key={opId}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-slate-200"
                      >
                        <span className="font-semibold">{op?.name.zh}</span>
                        <span className="text-slate-400 font-mono ml-1">({op?.code})</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Overview text (bilingual in same context) */}
          <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              载具历史档案 / Vehicle Overview & Legacy
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed mb-2">
              {vehicle.overview.zh}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              {vehicle.overview.en}
            </p>
          </div>

          {/* If Retired: Museum / Preservation location */}
          {vehicle.museumLocation && (
            <div className="bg-rose-950/30 border border-rose-900/50 rounded-2xl p-4.5 flex items-start space-x-3">
              <Building className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-rose-300 font-mono">
                  🏛️ 经典退役保存地 / Museum Location & Static Preservation
                </div>
                <p className="text-sm text-slate-200 mt-1">
                  {vehicle.museumLocation.zh}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {vehicle.museumLocation.en}
                </p>
              </div>
            </div>
          )}

          {/* NEW SECTION: Close-Up Photo Gallery (特写图片) */}
          {vehicle.detailPhotos && vehicle.detailPhotos.length > 0 && (
            <div className="bg-slate-950/90 rounded-2xl p-5 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-sky-400" />
                  <h3 className="text-base font-bold text-white">
                    机械构造与涂装特写画廊 / Close-up Engineering & Detail Gallery
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  收录 {vehicle.detailPhotos.length} 张高清细节特写
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vehicle.detailPhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveDetailPhoto(photo)}
                    className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/70 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative h-44 overflow-hidden bg-slate-950">
                      <img
                        src={photo.url}
                        alt={photo.title.en}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono font-semibold text-sky-300 border border-sky-850 backdrop-blur-sm">
                        {photo.tag.zh} / {photo.tag.en}
                      </div>
                      <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-900/80 text-slate-300 group-hover:text-white group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                        {photo.title.zh}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono line-clamp-1 mb-1">
                        {photo.title.en}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight line-clamp-2">
                        {photo.caption.zh}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Livery Selector & Details */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-base font-bold text-white">
                  涂装演变与彩绘专栏 / Liveries & Paint Schemes
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  收录 {vehicle.liveries.length} 款代表性历史与特别涂装
                </p>
              </div>
            </div>

            {/* Livery Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {vehicle.liveries.map((liv) => {
                const isSelected = liv.id === activeLiveryId;
                return (
                  <button
                    key={liv.id}
                    onClick={() => setActiveLiveryId(liv.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                      isSelected
                        ? 'bg-sky-500 text-slate-950 border-sky-400 font-bold shadow-md'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    <span>{liv.name.zh}</span>
                    <span className="text-[11px] block opacity-80 font-mono font-normal">
                      {liv.yearsActive}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Livery Detail Card */}
            {activeLivery && (
              <div className="mt-4 bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-850 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {activeLivery.name.zh}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {activeLivery.name.en}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-850 text-slate-300 border border-slate-700">
                      运营年限: {activeLivery.yearsActive}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-950 text-sky-400 border border-sky-800">
                      类型: {activeLivery.type.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p className="mb-1">{activeLivery.description.zh}</p>
                  <p className="text-xs text-slate-400 font-mono">{activeLivery.description.en}</p>
                </div>

                {/* Nested SCALE MODELS section for this livery */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex items-center space-x-2 mb-3">
                    <Box className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-bold text-white">
                      收录同款微缩模型 / Archived Scale Models ({activeLivery.scaleModels.length} 款)
                    </span>
                  </div>

                  {activeLivery.scaleModels.length === 0 ? (
                    <div className="text-xs text-slate-500 font-mono py-2">
                      暂无主流厂商对应开模记录 / No scale models archived yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {activeLivery.scaleModels.map((m) => (
                        <div
                          key={m.id}
                          className="bg-slate-900/90 rounded-xl p-3.5 border border-purple-900/40 hover:border-purple-600/70 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              {/* Brand & Scale */}
                              <span className="text-xs font-bold text-purple-300 font-mono">
                                {m.brand}
                              </span>
                              <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-semibold">
                                {m.scale}
                              </span>
                            </div>

                            {/* SKU / Code */}
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-[11px] text-slate-400 font-mono">货号 SKU:</span>
                              <span className="text-xs font-mono font-bold text-white bg-slate-800 px-1.5 py-0.5 rounded">
                                {m.itemCode}
                              </span>
                              <span className="text-[11px] text-slate-400 font-mono">发售: {m.releaseYear}</span>
                            </div>

                            {/* Material & Specs */}
                            <div className="text-xs text-slate-300 mb-1">
                              材质: <span className="text-slate-200 font-medium">{m.material.zh} / {m.material.en}</span>
                            </div>

                            {m.notes && (
                              <p className="text-[11px] text-slate-400 leading-tight">
                                特点: {m.notes.zh}
                                <span className="block text-[10px] text-slate-500 font-mono mt-0.5">{m.notes.en}</span>
                              </p>
                            )}
                          </div>

                          {/* Status Badge */}
                          <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                            <span className="text-slate-500 font-mono">收藏状态:</span>
                            {m.status === 'limited' && (
                              <span className="text-amber-400 font-mono font-semibold">★ 限量典藏 Limited Edition</span>
                            )}
                            {m.status === 'discontinued' && (
                              <span className="text-rose-400 font-mono font-semibold">✕ 停产绝版 Discontinued</span>
                            )}
                            {m.status === 'available' && (
                              <span className="text-emerald-400 font-mono font-semibold">✓ 现货在售 Available</span>
                            )}
                          </div>

                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Fullscreen Close-up Image */}
      {activeDetailPhoto && (
        <div className="fixed inset-0 z-60 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button
              onClick={() => setActiveDetailPhoto(null)}
              className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-850"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeDetailPhoto.url}
              alt={activeDetailPhoto.title.en}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain border border-slate-800 shadow-2xl"
            />

            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800 mb-2 inline-block">
                {activeDetailPhoto.tag.zh} / {activeDetailPhoto.tag.en}
              </span>
              <h3 className="text-base font-bold text-white">
                {activeDetailPhoto.title.zh}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {activeDetailPhoto.title.en}
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {activeDetailPhoto.caption.zh}
              </p>
              <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                {activeDetailPhoto.caption.en}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
