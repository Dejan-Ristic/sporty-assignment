export interface ILeague {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
}

export interface ISeason {
  strSeason: string;
  strBadge: string;
}

export interface IApiResponse<T> {
  data: T;
}

export interface IAllLeaguesResponse {
  leagues: ILeague[] | null;
}

export interface IAllSeasonsResponse {
  seasons: ISeason[] | null;
}

export interface ILeagueListFilter {
  [FilterFieldsEnum.NAME_SEARCH]: string | undefined;
  [FilterFieldsEnum.SELECTED_SPORT]: string | undefined;
}

export enum FilterFieldsEnum {
  NAME_SEARCH = "nameSearch",
  SELECTED_SPORT = "selectedSport",
}
