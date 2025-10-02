import type { ColumnsType } from "antd/es/table";
import type { ILeague } from "../../interfaces";
import i18n from "i18next";

export const columns: ColumnsType<ILeague> = [
  {
    title: i18n.t("league_name"),
    dataIndex: "strLeague",
    key: "strLeague",
  },
  {
    title: i18n.t("sport_name"),
    dataIndex: "strSport",
    key: "strSport",
  },
  {
    title: i18n.t("league_alternate"),
    dataIndex: "strLeagueAlternate",
    key: "strLeagueAlternate",
  },
];
