export interface Data {
  info: Info;
  datalist: Datalist;
}

export interface Datalist {
  total: number;
  count: number;
  offset: number;
  limit: number;
  next: number;
  hidden: number;
  loaded: boolean;
  list: List[];
}

export interface List {
  id: number;
  name: string;
  package: string;
  uname: string;
  size: number;
  icon: string;
  graphic: null | string;
  added: string;
  modified: string;
  updated: string;
  uptype: Uptype;
  store: Store;
  file: File;
  stats: ListStats;
  has_versions: boolean;
  obb: Obb | null;
  appcoins: Appcoins;
  urls: Urls;
}

export interface Appcoins {
  advertising: boolean;
  billing: boolean;
}

export interface File {
  vername: string;
  vercode: number;
  md5sum: string;
  filesize: number;
  path: string;
  path_alt: string;
  tags?: any[];
  malware: Malware;
}

export interface Malware {
  rank: Rank;
}

export enum Rank {
  Trusted = "TRUSTED",
  Unknown = "UNKNOWN",
}

export interface Obb {
  main: Main;
  patch?: Main;
}

export interface Main {
  md5sum: string;
  filesize: number;
  filename: string;
  path: string;
}

export interface ListStats {
  downloads: number;
  pdownloads: number;
  rating: Rating;
  prating: Rating;
}

export interface Rating {
  avg: number;
  total: number;
}

export interface Store {
  id: number;
  name: string;
  avatar: string;
  appearance: Appearance;
  stats: StoreStats;
}

export interface Appearance {
  theme: Theme;
  description: string;
}

export enum Theme {
  DeepPurple = "deep-purple",
  Default = "default",
  Green = "green",
}

export interface StoreStats {
  apps: number;
  subscribers: number;
  downloads: number;
}

export enum Uptype {
  Aptbackup = "aptbackup",
  Aptuploader = "aptuploader",
  Dropbox = "dropbox",
  Webservice = "webservice",
}

export interface Urls {}

export interface Info {
  status: string;
  time: Time;
}

export interface Time {
  seconds: number;
  human: string;
}
