import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { filterTickets, setSortType } from "@/api/tickets-slice";
import { SortType } from "@/api/types";
const styles = require("./sort.module.scss");

const Sort = () => {
  const dispatch = useAppDispatch();
  const tickets = useAppSelector((state) => state.ticketsReducer.tickets);
  const [activeSort, setActiveSort] = React.useState<SortType>(SortType.PRICE);

  React.useEffect(() => {
    dispatch(setSortType(activeSort));
    dispatch(filterTickets(tickets));
  }, []);

  const handleButtonClick = (type: SortType) => {
    dispatch(setSortType(type));
    dispatch(filterTickets(tickets));
    setActiveSort(type);
  };

  return (
    <div className={styles.sort}>
      <div
        className={`${styles.sort__button} ${
          activeSort === SortType.PRICE ? styles["sort__button--active"] : ""
        }`}
        onClick={() => handleButtonClick(SortType.PRICE)}
      >
        Найдешевший
      </div>
      <div
        className={`${styles.sort__button}  ${
          activeSort === SortType.TIME ? styles["sort__button--active"] : ""
        }`}
        onClick={() => handleButtonClick(SortType.TIME)}
      >
        Найшвидший
      </div>
      <div
        className={`${styles.sort__button}  ${
          activeSort === SortType.OPTIMAL ? styles["sort__button--active"] : ""
        }`}
        onClick={() => handleButtonClick(SortType.OPTIMAL)}
      >
        Оптимальний
      </div>
    </div>
  );
};

export default Sort;
