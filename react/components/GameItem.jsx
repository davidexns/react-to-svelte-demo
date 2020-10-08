import styles from "../styles/GameItem.module.css";

const GameItem = ({ platform, name }) => (
  <li className={styles.item}>
    <div className={styles.content}>
      <p className={styles.name}>{name}</p>
      <p className={styles.platform}>{platform}</p>
    </div>
  </li>
);

export default GameItem;
