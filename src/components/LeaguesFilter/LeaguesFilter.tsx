import { Flex, Form, Input, Select } from "antd";
import styles from "./LeaguesFilter.module.sass";

const LeaguesFilter = () => {
  return (
    <Flex gap={24} className={styles.leagueFilter}>
      <Form.Item label="asdfj" layout="vertical">
        <Select className={styles.filterField} />
      </Form.Item>
      <Form.Item label="lksdjf" layout="vertical">
        <Input className={styles.filterField} />
      </Form.Item>
    </Flex>
  );
};

export default LeaguesFilter;
