import { Flex, Form, Input, Select } from "antd";
import styles from "./LeaguesFilter.module.sass";
import { useTranslation } from "react-i18next";
import { leaguesStore } from "../../store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks";
import { FilterFieldsEnum } from "../../interfaces";

const LeaguesFilter = observer(() => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 400);

  useEffect(() => {
    leaguesStore.setFilter(FilterFieldsEnum.NAME_SEARCH, debouncedValue);
  }, [debouncedValue]);

  return (
    <Flex className={styles.leagueFilter}>
      <Form.Item
        label={t("select_sport")}
        layout="vertical"
        className={styles.formItem}
      >
        <Select
          className={styles.filterField}
          options={leaguesStore.allSportsList}
          allowClear
          showSearch
          onChange={(val) =>
            leaguesStore.setFilter(FilterFieldsEnum.SELECTED_SPORT, val)
          }
        />
      </Form.Item>
      <Form.Item
        label={t("search_league")}
        layout="vertical"
        className={styles.formItem}
      >
        <Input
          className={styles.filterField}
          allowClear
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Item>
    </Flex>
  );
});

export default LeaguesFilter;
