import styles from "./HomePage.module.sass";
import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className={clsx(styles.homePage)}>
      <Flex vertical align="center">
        <p className={styles.title}>{t("welcome")}</p>
      </Flex>
    </div>
  );
};

export default HomePage;
