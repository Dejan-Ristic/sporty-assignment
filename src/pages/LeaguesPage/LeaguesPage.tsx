import styles from "./LeaguesPage.module.sass";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Badge, Header, LeaguesFilter, LeaguesTable } from "../../components";

const LeaguesPage = () => {
  const { t } = useTranslation();
  return (
    <Flex className={clsx(styles.leaguesPage)} vertical>
      <Header className={styles.section}>{t("title")}</Header>
      <Flex className={styles.section} justify="space-between">
        <LeaguesFilter />
        <Badge />
      </Flex>
      <div className={styles.table}>
        <LeaguesTable />
      </div>
    </Flex>
  );
};

export default LeaguesPage;
