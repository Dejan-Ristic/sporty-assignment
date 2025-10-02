import { makeAutoObservable, runInAction } from "mobx";
import to from "await-to-js";
import { leaguesApiService } from "../services";
import type {
  FilterFieldsEnum,
  ILeague,
  ILeagueListFilter,
  ISeason,
} from "../interfaces";

class LeaguesStore {
  constructor() {
    makeAutoObservable(this);
  }
  allLeagues: ILeague[] = [];
  filter: ILeagueListFilter = {
    nameSearch: undefined,
    selectedSport: undefined,
  };
  allSeasons: ISeason[] = [];

  getAllLeagues = async () => {
    const [err, res] = await to(leaguesApiService.getAllLeagues());
    if (err) return;
    runInAction(() => (this.allLeagues = res.data.leagues ?? []));
  };

  getAllSeasons = async (id: string) => {
    const [err, res] = await to(leaguesApiService.getAllSeasons(id));
    if (err) return;
    runInAction(() => (this.allSeasons = res.data.seasons ?? []));
  };

  setFilter = (prop: FilterFieldsEnum, value: string) =>
    runInAction(() => (this.filter[prop] = value));

  get leaguesToDisplay() {
    let leagues = this.allLeagues;
    if (this.filter.nameSearch) {
      const name = this.filter.nameSearch.toLowerCase();
      leagues = leagues.filter(
        (league) =>
          league.strLeague.toLowerCase().includes(name) ||
          league.strLeagueAlternate.toLowerCase().includes(name)
      );
    }
    if (this.filter.selectedSport)
      leagues = leagues.filter(
        (league) => league.strSport === this.filter.selectedSport
      );
    return leagues;
  }

  get allSportsList() {
    const sportsSet = new Set(this.allLeagues.map((league) => league.strSport));
    return Array.from(sportsSet).map((sport) => {
      return { value: sport };
    });
  }

  get badgeToDisplay() {
    return this.allSeasons.at(-1)?.strBadge;
  }
}
export const leaguesStore = new LeaguesStore();
