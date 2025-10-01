import { makeAutoObservable } from "mobx";
import to from "await-to-js";
import { leaguesApiService } from "../services";
import type { ILeague } from "../interfaces";

class LeaguesStore {
  constructor() {
    makeAutoObservable(this);
  }
  allLeagues: ILeague[] = [];
  selectedSport: string | undefined = undefined;

  getAllLeagues = async () => {
    const [err, res] = await to(leaguesApiService.getAllLeagues());
    if (err) return;
    this.allLeagues = res.data.leagues;
  };

  setSelectedSport = (sport: string) => (this.selectedSport = sport);

  get leaguesToDisplay() {
    return this.selectedSport
      ? this.allLeagues.filter(
          (league) => league.strSport === this.selectedSport
        )
      : this.allLeagues;
  }

  get allSportsList() {
    const sportsSet = new Set(this.allLeagues.map((league) => league.strSport));
    return Array.from(sportsSet).map((sport) => {
      return { value: sport };
    });
  }
}
export const leaguesStore = new LeaguesStore();
