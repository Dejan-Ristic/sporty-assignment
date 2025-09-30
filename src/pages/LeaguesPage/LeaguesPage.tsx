import styles from "./LeaguesPage.module.sass";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const LeaguesPage = () => {
  const { t } = useTranslation();
  return (
    <div className={clsx(styles.leaguesPage)}>
      <Flex vertical align="center">
        <p className={styles.title}>{t("welcome")}</p>
      </Flex>
    </div>
  );
};

export default LeaguesPage;
