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
  const [selectedFilters, setSelectedFilters] = React.useState<FilterType[]>([
    FilterType.All,
  ]);
  const allSelected = selectedFilters.includes(FilterType.All);

  const handleCheckboxChange = (filterType: FilterType) => {
    if (filterType === FilterType.All) {
      setSelectedFilters([
        FilterType.All,
        FilterType.Direct,
        FilterType.OneStop,
        FilterType.TwoStops,
        FilterType.ThreeStops,
      ]);
    } else {
      setSelectedFilters((prevFilters) => {
        if (prevFilters.includes(filterType)) {
          return prevFilters.filter(
            (f) => f !== filterType && f !== FilterType.All
          );
        } else {
          if (prevFilters.includes(FilterType.All)) {
            return [filterType];
          } else {
            return [...prevFilters, filterType];
          }
        }
      });
    }
  };

  React.useEffect(() => {
    if (selectedFilters.length === 4) {
      setSelectedFilters([
        FilterType.All,
        FilterType.Direct,
        FilterType.OneStop,
        FilterType.TwoStops,
        FilterType.ThreeStops,
      ]);
    }

    dispatch(setFilters(selectedFilters));
    dispatch(filterTickets(tickets));
  }, [selectedFilters]);

  console.log(selectedFilters);

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
              isChecked={allSelected || selectedFilters.includes(option.key)}
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
