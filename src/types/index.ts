export type Category = 'aviation' | 'railway';

export type VehicleStatus = 'active' | 'retired' | 'prototype';

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface Operator {
  id: string;
  name: LocalizedString;
  code?: string; // ICAO/IATA or UIC
  country: LocalizedString;
  countryCode: string; // ISO 2 letters for flag
  continent: LocalizedString; // e.g. { zh: '亚洲', en: 'Asia' }
  continentCode: string; // 'AS' | 'EU' | 'NA'
  type: Category;
  logoUrl?: string;
}

export interface ScaleModelItem {
  id: string;
  brand: string; // e.g. "Aviation400", "KATO", "TOMIX", "中车文创 / CRRC", "JC Wings", "长鸣 / Changming"
  itemCode: string; // SKU e.g. "AV4052", "10-1784", "CRRC-8701"
  scale: string; // "1:400", "1:200", "N (1:150)", "HO (1:87)"
  material: LocalizedString; // "合金 Diecast", "工程塑料 ABS"
  releaseYear: number;
  status: 'available' | 'discontinued' | 'limited';
  imageUrl: string;
  notes?: LocalizedString;
}

export interface Livery {
  id: string;
  name: LocalizedString;
  type: 'standard' | 'special' | 'retro' | 'farewell';
  yearsActive: string;
  operatorId: string;
  description: LocalizedString;
  sideProfileSvgUrl?: string;
  photoUrl: string;
  isRetired: boolean;
  scaleModels: ScaleModelItem[];
}

export interface DetailPhoto {
  title: LocalizedString;
  caption: LocalizedString;
  url: string;
  tag: LocalizedString;
}

export interface Vehicle {
  id: string;
  category: Category;
  modelName: LocalizedString;
  code: string; // e.g. "B747-400", "CR400AF-Z", "Shinkansen 0", "Concorde"
  manufacturer: LocalizedString;
  status: VehicleStatus;
  firstServiceYear: number;
  retiredYear?: number;
  country: LocalizedString;
  countryCode: string;
  operatorIds: string[];
  specs: {
    maxSpeed: string;
    capacity: string;
    rangeOrPower: string;
    length: string;
  };
  overview: LocalizedString;
  museumLocation?: LocalizedString; // Where visitors can see retired units
  heroImage: string;
  liveries: Livery[];
  detailPhotos: DetailPhoto[];
}
