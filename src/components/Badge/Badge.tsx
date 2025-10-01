import { observer } from "mobx-react-lite";
import { leaguesStore } from "../../store";
import styles from "./Badge.module.sass";

const Badge = observer(() => {
  return (
    <div className={styles.badge}>
      <div
        className={styles.badgeInner}
        style={{ backgroundImage: `url(${leaguesStore.badgeToDisplay})` }}
      ></div>
    </div>
  );
});

export default Badge;
