import React, { useState } from 'react';
import type { Vehicle, ScaleModelItem, Livery } from '../types';
import { ExternalLink, Sparkles, Filter } from 'lucide-react';

interface ScaleModelViewProps {
  vehicles: Vehicle[];
  onSelectVehicle: (v: Vehicle) => void;
}

interface FlattenedModel {
  model: ScaleModelItem;
  vehicle: Vehicle;
  livery: Livery;
}

export const ScaleModelView: React.FC<ScaleModelViewProps> = ({
  vehicles,
  onSelectVehicle,
}) => {
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('all');
  const [selectedScaleFilter, setSelectedScaleFilter] = useState<string>('all');

  // Flatten all models across all liveries and vehicles
  const allModels: FlattenedModel[] = vehicles.flatMap((v) =>
    v.liveries.flatMap((liv) =>
      liv.scaleModels.map((m) => ({
        model: m,
        vehicle: v,
        livery: liv,
      }))
    )
  );

  const brands = [
    { name: '全部厂牌 / All', id: 'all' },
    { name: 'Aviation400 (飞度)', id: 'Aviation400' },
    { name: 'KATO (关水金属)', id: 'KATO' },
    { name: 'TOMIX (TOMYTEC)', id: 'TOMIX' },
    { name: '中车文创 (CRRC)', id: '中车文创' },
    { name: '长鸣火模 (Changming)', id: '长鸣' },
    { name: 'JC Wings', id: 'JC Wings' },
    { name: 'GeminiJets', id: 'GeminiJets' },
  ];

  const scales = [
    { label: '全部比例 / All Scales', id: 'all' },
    { label: '1:400 合金 / 1:400 Diecast', id: '1:400' },
    { label: '1:200 大比例 / 1:200 Large', id: '1:200' },
    { label: 'N 比例 (1:150/1:160) 9mm', id: 'N' },
    { label: 'HO 比例 (1:87) 16.5mm', id: 'HO' },
  ];

  const filteredModels = allModels.filter((item) => {
    if (
      selectedBrandFilter !== 'all' &&
      !item.model.brand.toLowerCase().includes(selectedBrandFilter.toLowerCase())
    ) {
      return false;
    }
    if (selectedScaleFilter !== 'all') {
      if (!item.model.scale.includes(selectedScaleFilter)) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-950/70 via-slate-900 to-slate-950 p-6 rounded-2xl border border-purple-900/50">
        <div className="flex items-center space-x-2 text-purple-400 font-mono text-xs mb-2">
          <Sparkles className="w-4 h-4" />
          <span>COLLECTOR GRADE SCALE MODELS ARCHIVE</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          微缩模型典藏库 · 真机真车实体复刻图鉴
          <span className="block text-sm sm:text-base text-slate-400 font-mono font-normal mt-0.5">
            Scale Model Index: Aviation Diecast & Model Railroad Trainsets
          </span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          收录 Aviation400、JC Wings、GeminiJets 飞机合金模型，以及日本 KATO、TOMIX，中国中车文创、长鸣火模等铁道模型品牌。
          从微缩模型的货号 SKU 直接溯源真实世界中的原型车号、涂装年代与服役历史。
        </p>

        {/* Brand Filter Pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBrandFilter(b.id)}
              className={`px-3 py-1.5 text-xs rounded-xl font-mono transition-all border ${
                selectedBrandFilter === b.id
                  ? 'bg-purple-600 text-white border-purple-500 font-bold shadow-lg shadow-purple-900/40'
                  : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>

      {/* Filter and count bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-900/50 p-3 rounded-xl border border-slate-800">
        <div className="flex items-center space-x-2">
          <Filter className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-slate-400 font-mono">比例筛选 Scale:</span>
          <select
            value={selectedScaleFilter}
            onChange={(e) => setSelectedScaleFilter(e.target.value)}
            className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1 focus:outline-none focus:border-purple-500"
          >
            {scales.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="text-slate-400 font-mono">
          收录模型: <strong className="text-purple-300">{filteredModels.length}</strong> 款
        </div>
      </div>

      {/* Grid of Models */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredModels.map((item) => (
          <div
            key={item.model.id}
            className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between hover:border-purple-600/60 transition-all hover:shadow-xl hover:shadow-purple-950/20 group"
          >
            <div>
              {/* Top Row: Brand & Scale */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-purple-300 font-mono bg-purple-950/80 border border-purple-800/60 px-2.5 py-1 rounded-lg">
                  {item.model.brand}
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
                  {item.model.scale}
                </span>
              </div>

              {/* SKU & Release Year */}
              <div className="mb-3">
                <div className="flex items-baseline space-x-2">
                  <span className="text-xs text-slate-400 font-mono">货号 SKU:</span>
                  <span className="text-sm font-mono font-bold text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {item.model.itemCode}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">({item.model.releaseYear})</span>
                </div>
              </div>

              {/* Real vehicle prototype mapped */}
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-850 mb-3 space-y-1">
                <div className="text-[10px] text-sky-400 font-mono uppercase">复刻真实载具原型 Prototype:</div>
                <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {item.vehicle.modelName.zh}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {item.vehicle.modelName.en}
                </div>
                <div className="text-xs text-slate-300 pt-1 border-t border-slate-900 mt-1">
                  涂装: <span className="font-semibold text-slate-200">{item.livery.name.zh}</span>
                </div>
              </div>

              {/* Material & Specs */}
              <div className="text-xs text-slate-300 mb-2">
                <span className="text-slate-400">材质工艺:</span>{' '}
                <span className="text-slate-200 font-medium">
                  {item.model.material.zh} / {item.model.material.en}
                </span>
              </div>

              {item.model.notes && (
                <div className="text-xs text-slate-400 bg-slate-950/40 p-2.5 rounded-lg border border-slate-850">
                  <span className="text-purple-300 font-semibold">细节特点:</span> {item.model.notes.zh}
                </div>
              )}
            </div>

            {/* Bottom Status & Jump to Real Prototype */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <div>
                {item.model.status === 'limited' && (
                  <span className="text-xs text-amber-400 font-mono font-semibold">★ 限量典藏 Limited</span>
                )}
                {item.model.status === 'discontinued' && (
                  <span className="text-xs text-rose-400 font-mono font-semibold">✕ 停产绝版 Discontinued</span>
                )}
                {item.model.status === 'available' && (
                  <span className="text-xs text-emerald-400 font-mono font-semibold">✓ 现货在售 Available</span>
                )}
              </div>

              <button
                onClick={() => onSelectVehicle(item.vehicle)}
                className="inline-flex items-center space-x-1 text-xs text-sky-400 hover:text-sky-300 font-medium group-hover:translate-x-0.5 transition-transform"
              >
                <span>真机/真车全貌</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
