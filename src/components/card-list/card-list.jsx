import { useCallback } from "react";
import Card from "../card/card";
import styles from "./card-list.module.css";

export default function CardList({ nums, setNums }) {
  const setIsMounted = useCallback(
    (id, isMounted) => {
      setNums((state) =>
        state.map((number) =>
          id === number.id ? { ...number, isMounted } : number
        )
      );
    },
    [setNums]
  );

  const incrementIsMountedCount = useCallback(
    (id) => {
      setNums((state) => {
        return state.map((num) =>
          num.id === id ? { ...num, unmountCount: num.unmountCount + 1 } : num
        );
      });
    },
    [setNums]
  );
  return (
    <div className={styles.cardContainer}>
      {nums.map((num) =>
        num.isMounted ? (
          <Card
            incrementIsMountedCount={incrementIsMountedCount}
            key={num.id}
            num={num}
            setIsMounted={setIsMounted}
          />
        ) : (
          <div
            className={styles.showText}
            onClick={() => setIsMounted(num.id, true)}
            key={num.id}
          >
            Show
          </div>
        )
      )}
    </div>
  );
}
