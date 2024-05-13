import * as React from "react";
import Checkbox from "@/shared/components/checkbox/checkbox";
import { FilterType } from "@/api/types";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { filterTickets, setFilters } from "@/api/tickets-slice";

const styles = require("./filter.module.scss");

const filterOptions: { key: FilterType; label: string }[] = [
  {
    key: FilterType.All,
    label: "Всі",
  },
  {
    key: FilterType.Direct,
    label: "Без пересадок",
  },
  {
    key: FilterType.OneStop,
    label: "1 пересадка",
  },
  {
    key: FilterType.TwoStops,
    label: "2 пересадки",
  },
  {
    key: FilterType.ThreeStops,
    label: "3 пересадки",
  },
];

const Filter = () => {
  const dispatch = useAppDispatch();
  const { tickets } = useAppSelector((state) => state.ticketsReducer);
  const [allSelected, setSelectedAll] = React.useState<boolean>(true);
  const [choosenFilter, setChoosenFilter] = React.useState<FilterType>(
    FilterType.All
  );

  const handleCheckboxChange = (filterType: FilterType) => {
    setSelectedAll(filterType === FilterType.All);
    setChoosenFilter(filterType);
  };

  React.useEffect(() => {
    dispatch(setFilters(choosenFilter));
    dispatch(filterTickets(tickets));
  }, [choosenFilter, allSelected]);

  return (
    <div className={`block ${styles.filter}`}>
      <p className={styles.filter__title}>Кількість пересадок</p>
      <ul className={styles.filter__list}>
        {filterOptions.map((option) => (
          <li
            className={styles.filter__list__item}
            key={option.key}
            onClick={() => handleCheckboxChange(option.key)}
          >
            <Checkbox
              isChecked={allSelected || choosenFilter === option.key}
              name={option.key.toString()}
            />
            <span className={styles["filter__list__item-label"]}>
              {option.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Filter);
