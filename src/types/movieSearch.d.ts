export enum SearchResponse {
  False = 'False',
  True = 'True',
}

export interface ISearchType {
  Search: ISearch[];
  TotalResults: number;
  Response: SearchResponse;
}

export interface ISearchResponse {
  Error?: string;
  data?: ISearchType;
}

export interface ISearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ISearchState {
  s: string;
  page: number;
  dataList: ISearch[];
}

export interface IAPIParams {
  apikey: string;
  s: string;
  page: number;
}

export interface IHandleButtonTarget {
  currentTarget: HTMLButtonElement;
}

export interface IHandleListTarget {
  currentTarget: HTMLListElement;
}
