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
  nameSearch: string | undefined;
  selectedSport: string | undefined;
}
