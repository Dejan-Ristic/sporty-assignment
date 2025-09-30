import type { ColumnsType } from "antd/es/table";
import type { ILeague } from "../../interfaces";

export const columns: ColumnsType<ILeague> = [
  {
    title: "xx",
    dataIndex: "strLeague",
    key: "strLeague",
  },
  {
    title: "yy",
    dataIndex: "strSport",
    key: "strSport",
  },
  {
    title: "zz",
    dataIndex: "strLeagueAlternate",
    key: "strLeagueAlternate",
  },
];
