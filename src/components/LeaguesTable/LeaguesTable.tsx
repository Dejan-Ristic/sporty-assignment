import { Table } from "antd";
import { useEffect } from "react";
import { leaguesStore } from "../../store";
import { columns } from "./leaguesTable.config";
import type { ILeague } from "../../interfaces";
import { observer } from "mobx-react-lite";

const LeaguesTable = observer(() => {
  useEffect(() => {
    leaguesStore.getAllLeagues();
  }, []);

  // const getBadge = (id: string) => {
  //   console.log(id);
  // };

  return (
    <Table<ILeague>
      dataSource={leaguesStore.allLeagues}
      columns={columns}
      pagination={false}
      rowKey={(record) => `row_${record.idLeague}`}
      // onRow={(record) => ({
      //   onClick: () => getBadge(record.idLeague),
      // })}
      rowHoverable
    ></Table>
  );
});

export default LeaguesTable;
