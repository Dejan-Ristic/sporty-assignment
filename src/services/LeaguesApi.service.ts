import { api } from "../config";
import type { IAllLeaguesResponse, IApiResponse } from "../interfaces";

class LeaguesApiService {
  getAllLeagues = (): Promise<IApiResponse<IAllLeaguesResponse>> =>
    api.get("all_leagues.php");
}

export const leaguesApiService = new LeaguesApiService();
