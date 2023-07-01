import styles from "./cards.module.css";

export default function CreateCards() {
  const nums = [1, 2, 3, 4, 5];
  return (
    <div className={styles.cardContainer}>
      {nums.map((num) => (
        <div className={styles.card} key={num}>
          {num}
        </div>
      ))}
    </div>
  );
}
