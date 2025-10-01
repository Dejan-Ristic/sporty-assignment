import { Flex, Form, Input, Select } from "antd";
import styles from "./LeaguesFilter.module.sass";
import { useTranslation } from "react-i18next";

const LeaguesFilter = () => {
  const { t } = useTranslation();
  return (
    <Flex gap={24} className={styles.leagueFilter}>
      <Form.Item label={t("select_sport")} layout="vertical">
        <Select className={styles.filterField} />
      </Form.Item>
      <Form.Item label={t("search_league")} layout="vertical">
        <Input className={styles.filterField} />
      </Form.Item>
    </Flex>
  );
};

export default LeaguesFilter;
