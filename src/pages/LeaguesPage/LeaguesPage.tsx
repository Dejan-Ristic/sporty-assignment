import styles from "./LeaguesPage.module.sass";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Badge, Header, LeaguesFilter, LeaguesTable } from "../../components";

const LeaguesPage = () => {
  const { t } = useTranslation();
  return (
    <div className={clsx(styles.leaguesPage)}>
      <Header className={styles.section}>{t("welcome")}</Header>
      <Flex className={styles.section} justify="space-between">
        <LeaguesFilter />
        <Badge />
      </Flex>
      <LeaguesTable />
    </div>
  );
};

export default LeaguesPage;
