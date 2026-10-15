import React from 'react';
import type { Vehicle } from '../types';
import { OPERATORS } from '../data/database';
import { Plane, Train, Gauge, Users, ArrowUpRight, Box, History, Camera } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect }) => {
  const isAviation = vehicle.category === 'aviation';
  const isRetired = vehicle.status === 'retired';

  // Gather all unique scale model brands associated with this vehicle's liveries
  const modelBrands = Array.from(
    new Set(
      vehicle.liveries.flatMap((liv) => liv.scaleModels.map((m) => m.brand.split(' ')[0]))
    )
  );

  const totalModelsCount = vehicle.liveries.reduce(
    (acc, liv) => acc + liv.scaleModels.length,
    0
  );

  return (
    <div
      onClick={() => onSelect(vehicle)}
      className="btn-press group relative bg-slate-900/90 rounded-2xl craft-border craft-border-hover transition-[transform,border-color,box-shadow] duration-200 ease-out flex flex-col overflow-hidden cursor-pointer active:scale-[0.985] select-none"
    >
      {/* Image & Overlay Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={vehicle.heroImage}
          alt={vehicle.modelName.en}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          {/* Category Tag */}
          <span
            className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm ${
              isAviation
                ? 'bg-sky-950/80 text-sky-300 border border-sky-500/30 ring-1 ring-sky-500/10'
                : 'bg-amber-950/80 text-amber-300 border border-amber-500/30 ring-1 ring-amber-500/10'
            }`}
          >
            {isAviation ? <Plane className="w-3.5 h-3.5 text-sky-400" /> : <Train className="w-3.5 h-3.5 text-amber-400" />}
            <span>{isAviation ? '航空民航 / Aviation' : '高速铁道 / Railway'}</span>
          </span>

          {/* Status Tag */}
          {isRetired ? (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-950/80 text-rose-300 border border-rose-500/30 backdrop-blur-md">
              <History className="w-3 h-3 text-rose-400" />
              <span>已退役 ({vehicle.retiredYear})</span>
            </span>
          ) : (
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>现役运营 / In Service</span>
            </span>
          )}
        </div>

        {/* Badges on bottom */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 pointer-events-none">
          <div className="flex items-center space-x-1 font-mono text-[11px] px-2 py-0.5 rounded-md bg-slate-950/80 text-sky-300 border border-white/[0.08] backdrop-blur-sm">
            <Camera className="w-3 h-3 text-sky-400" />
            <span className="tabular-nums">{vehicle.detailPhotos.length} 张特写</span>
          </div>
          {vehicle.prototype && (
            <div className="flex items-center space-x-1 font-mono text-[11px] px-2 py-0.5 rounded-md bg-sky-950/90 text-sky-200 border border-sky-400/30 backdrop-blur-sm" title={vehicle.prototype.name.zh}>
              <span>🔬</span>
              <span>{isAviation ? '原型机' : '原型车'}</span>
            </div>
          )}
        </div>

        {/* Code badge bottom right */}
        <div className="absolute bottom-3 right-3 font-mono text-xs px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-white/[0.08] backdrop-blur-sm pointer-events-none">
          {vehicle.code}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Bilingual Title */}
          <div className="mb-2">
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-400 transition-colors duration-150">
              {vehicle.modelName.zh}
            </h3>
            <p className="text-xs text-slate-400 font-mono tracking-tight">
              {vehicle.modelName.en}
            </p>
          </div>

          {/* Manufacturer & Country */}
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-3">
            <span className="text-slate-300 font-medium truncate">
              {vehicle.manufacturer.zh} / {vehicle.manufacturer.en}
            </span>
            <span>•</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800/80 border border-white/[0.06] text-[11px] text-slate-300 font-mono shrink-0">
              {vehicle.country.zh} ({vehicle.countryCode})
            </span>
          </div>

          {/* Brief specs pill row */}
          <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950/60 p-2.5 rounded-xl border border-white/[0.06] mb-3 font-mono">
            <div className="flex items-center space-x-1.5 text-slate-300">
              <Gauge className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="truncate tabular-nums">{vehicle.specs.maxSpeed}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-300">
              <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate tabular-nums">{vehicle.specs.capacity}</span>
            </div>
          </div>

          {/* Operators */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <span className="text-[11px] text-slate-500 font-mono">运营/航司:</span>
            {vehicle.operatorIds.map((opId) => {
              const op = OPERATORS[opId];
              return (
                <span
                  key={opId}
                  className="px-2 py-0.5 text-[11px] rounded-md bg-slate-800/80 text-slate-300 border border-white/[0.06]"
                >
                  {op?.name.zh || opId}
                </span>
              );
            })}
          </div>
        </div>

        {/* Footer: Liveries & Scale Models Count */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-3">
            <span className="text-slate-400">
              涂装: <strong className="text-sky-300 tabular-nums">{vehicle.liveries.length}</strong> 款
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center space-x-1 text-purple-300">
              <Box className="w-3 h-3 text-purple-400" />
              <span>模型: <strong className="tabular-nums">{totalModelsCount}</strong> 款</span>
            </span>
          </div>

          <div className="inline-flex items-center space-x-1 text-xs text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150 ease-out font-medium">
            <span>档案详情</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Linked Model Brand Tags */}
        {modelBrands.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-white/[0.04] flex items-center gap-1.5 overflow-hidden">
            <span className="text-[10px] text-purple-400/90 font-mono shrink-0">厂牌 Brands:</span>
            <div className="flex flex-wrap gap-1">
              {modelBrands.map((brand, i) => (
                <span
                  key={i}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950/60 text-purple-200 border border-purple-500/20 font-mono"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
