import { api } from "../config";
import type {
  IAllLeaguesResponse,
  IAllSeasonsResponse,
  IApiResponse,
} from "../interfaces";

class LeaguesApiService {
  getAllLeagues = (): Promise<IApiResponse<IAllLeaguesResponse>> =>
    api.get("all_leagues.php");

  getAllSeasons = (id: string): Promise<IApiResponse<IAllSeasonsResponse>> =>
    api.get(`search_all_seasons.php?badge=1&id=${id}`);
}

export const leaguesApiService = new LeaguesApiService();
