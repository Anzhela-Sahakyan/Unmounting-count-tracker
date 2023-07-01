import React, { useEffect } from "react";
import styles from "./card.module.css";

export default function Card({ num, incrementIsMountedCount, setIsMounted }) {
  useEffect(
    () => () => incrementIsMountedCount(num.id),
    [incrementIsMountedCount, num.id]
  );

  return (
    <div className={styles.card}>
      {num.value}
      <div
        onClick={() => setIsMounted(num.id, false)}
        className={styles.closeButton}
      >
        X
      </div>
    </div>
  );
}
