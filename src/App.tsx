import { useState, useMemo } from 'react';
import { VEHICLES } from './data/database';
import type { Vehicle } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { VehicleCard } from './components/VehicleCard';
import { VehicleModal } from './components/VehicleModal';
import { ScaleModelView } from './components/ScaleModelView';
import { SubmitModal } from './components/SubmitModal';
import { Footer } from './components/Footer';
import { SearchX, Plane, Train, Award } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState<boolean>(false);

  // Compute overall stats
  const totalVehicles = VEHICLES.length;
  const totalLiveries = useMemo(
    () => VEHICLES.reduce((acc, v) => acc + v.liveries.length, 0),
    []
  );
  const totalModels = useMemo(
    () =>
      VEHICLES.reduce(
        (acc, v) =>
          acc + v.liveries.reduce((lAcc, l) => lAcc + l.scaleModels.length, 0),
        0
      ),
    []
  );
  const totalRetired = useMemo(
    () => VEHICLES.filter((v) => v.status === 'retired').length,
    []
  );

  // Tab influence on filters
  const effectiveCategory = useMemo(() => {
    if (activeTab === 'aviation') return 'aviation';
    if (activeTab === 'railway') return 'railway';
    return selectedCategory;
  }, [activeTab, selectedCategory]);

  const effectiveStatus = useMemo(() => {
    if (activeTab === 'retired') return 'retired';
    return selectedStatus;
  }, [activeTab, selectedStatus]);

  // Filter vehicles
  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchNameZh = vehicle.modelName.zh.toLowerCase().includes(query);
        const matchNameEn = vehicle.modelName.en.toLowerCase().includes(query);
        const matchCode = vehicle.code.toLowerCase().includes(query);
        const matchMfgZh = vehicle.manufacturer.zh.toLowerCase().includes(query);
        const matchMfgEn = vehicle.manufacturer.en.toLowerCase().includes(query);
        const matchCountry = vehicle.country.zh.toLowerCase().includes(query);
        
        // Search in liveries
        const matchLivery = vehicle.liveries.some(
          (liv) =>
            liv.name.zh.toLowerCase().includes(query) ||
            liv.name.en.toLowerCase().includes(query)
        );

        // Search in models
        const matchModel = vehicle.liveries.some((liv) =>
          liv.scaleModels.some(
            (m) =>
              m.brand.toLowerCase().includes(query) ||
              m.itemCode.toLowerCase().includes(query) ||
              m.scale.toLowerCase().includes(query)
          )
        );

        if (
          !matchNameZh &&
          !matchNameEn &&
          !matchCode &&
          !matchMfgZh &&
          !matchMfgEn &&
          !matchCountry &&
          !matchLivery &&
          !matchModel
        ) {
          return false;
        }
      }

      // 2. Category
      if (effectiveCategory !== 'all' && vehicle.category !== effectiveCategory) {
        return false;
      }

      // 3. Status
      if (effectiveStatus !== 'all' && vehicle.status !== effectiveStatus) {
        return false;
      }

      // 4. Country
      if (selectedCountry !== 'all' && vehicle.countryCode !== selectedCountry) {
        return false;
      }

      // 5. Brand filter
      if (selectedBrand !== 'all') {
        const hasBrand = vehicle.liveries.some((liv) =>
          liv.scaleModels.some((m) =>
            m.brand.toLowerCase().includes(selectedBrand.toLowerCase())
          )
        );
        if (!hasBrand) return false;
      }

      return true;
    });
  }, [
    searchQuery,
    effectiveCategory,
    effectiveStatus,
    selectedCountry,
    selectedBrand,
  ]);

  const handleResetFilters = () => {
    setActiveTab('all');
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSelectedCountry('all');
    setSelectedBrand('all');
  };

  const handleSelectTag = (tag: string) => {
    setSearchQuery(tag);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenSubmit={() => setIsSubmitOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        totalVehicles={totalVehicles}
        totalLiveries={totalLiveries}
        totalModels={totalModels}
        totalRetired={totalRetired}
        onSelectTag={handleSelectTag}
      />

      {/* Scale Models Dedicated View OR Vehicle Grid */}
      {activeTab === 'models' ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
          <ScaleModelView
            vehicles={VEHICLES}
            onSelectVehicle={(v) => setSelectedVehicle(v)}
          />
        </main>
      ) : (
        <>
          {/* Filter Bar */}
          <FilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            totalFiltered={filteredVehicles.length}
            onReset={handleResetFilters}
          />

          {/* Main Grid Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
            
            {/* Section sub-heading */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                  {activeTab === 'retired' ? (
                    <>
                      <Award className="w-5 h-5 text-rose-400" />
                      <span>🏛️ 退役经典名人堂 / Hall of Fame: Retired Legends</span>
                    </>
                  ) : activeTab === 'aviation' ? (
                    <>
                      <Plane className="w-5 h-5 text-sky-400" />
                      <span>✈️ 航空民航客机档案 / Aviation Fleet Database</span>
                    </>
                  ) : activeTab === 'railway' ? (
                    <>
                      <Train className="w-5 h-5 text-amber-400" />
                      <span>🚄 高速动车与机车档案 / Railway Locomotives & EMUs</span>
                    </>
                  ) : (
                    <span>全部载具与涂装图鉴 / Vehicle & Livery Archives</span>
                  )}
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  点击任意卡片查看 2D 侧视涂装演变细节、技术参数及各大模型厂商对应开模货号
                </p>
              </div>

              <div className="text-xs text-slate-400 font-mono">
                当前收录: <span className="text-sky-400 font-bold">{filteredVehicles.length}</span> / {totalVehicles} 款
              </div>
            </div>

            {/* Vehicle Cards Grid */}
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    onSelect={(v) => setSelectedVehicle(v)}
                  />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-12 text-center max-w-md mx-auto my-12 space-y-4">
                <SearchX className="w-12 h-12 text-slate-500 mx-auto" />
                <h3 className="text-base font-bold text-white">
                  未找到匹配档案 / No Records Found
                </h3>
                <p className="text-xs text-slate-400">
                  没有找到与当前筛选条件或关键词匹配的载具、涂装或模型货号。
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors"
                >
                  重置筛选条件 / Reset All Filters
                </button>
              </div>
            )}
          </main>
        </>
      )}

      {/* Modals */}
      <VehicleModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />

      <SubmitModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
