import { makeAutoObservable } from "mobx";
import to from "await-to-js";
import { leaguesApiService } from "../services";
import type { ILeague } from "../interfaces";

class LeaguesStore {
  constructor() {
    makeAutoObservable(this);
  }
  allLeagues: ILeague[] = [];

  getAllLeagues = async () => {
    const [err, res] = await to(leaguesApiService.getAllLeagues());
    if (err) return;
    this.allLeagues = res.data.leagues;
  };
}
export const leaguesStore = new LeaguesStore();
