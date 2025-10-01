import { Table } from "antd";
import { useEffect } from "react";
import { leaguesStore } from "../../store";
import { columns } from "./leaguesTable.config";
import type { ILeague } from "../../interfaces";
import { observer } from "mobx-react-lite";
import styles from "./LeaguesTable.module.sass";

const LeaguesTable = observer(() => {
  useEffect(() => {
    leaguesStore.getAllLeagues();
  }, []);

  return (
    <Table<ILeague>
      dataSource={leaguesStore.leaguesToDisplay}
      columns={columns}
      pagination={false}
      rowKey={(record) => `row_${record.idLeague}`}
      className={styles.leaguesTable}
      onRow={(record) => ({
        onClick: () => leaguesStore.getAllSeasons(record.idLeague),
      })}
    ></Table>
  );
});

export default LeaguesTable;
