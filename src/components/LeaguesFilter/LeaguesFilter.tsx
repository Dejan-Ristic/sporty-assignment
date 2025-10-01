import { Flex, Form, Input, Select } from "antd";
import styles from "./LeaguesFilter.module.sass";
import { useTranslation } from "react-i18next";
import { leaguesStore } from "../../store";
import { observer } from "mobx-react-lite";

const LeaguesFilter = observer(() => {
  const { t } = useTranslation();
  return (
    <Flex gap={24} className={styles.leagueFilter}>
      <Form.Item label={t("select_sport")} layout="vertical">
        <Select
          className={styles.filterField}
          options={leaguesStore.allSportsList}
          allowClear
          showSearch
          onChange={(val) => leaguesStore.setSelectedSport(val)}
        />
      </Form.Item>
      <Form.Item label={t("search_league")} layout="vertical">
        <Input className={styles.filterField} />
      </Form.Item>
    </Flex>
  );
});

export default LeaguesFilter;
