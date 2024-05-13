import * as React from "react";
import { CheckIcon } from "@/shared/icons";
const styles = require("./checkbox.module.scss");

type OwnProps = {
  isChecked: boolean;
  setChecked?: (isChecked: boolean) => void;
  name: string;
};

const Checkbox: React.FC<OwnProps> = ({ isChecked, setChecked, name }) => {
  const checkboxClickHandler = () => {
    setChecked && setChecked(!isChecked);
  };

  return (
    <div className="checkbox">
      <label
        htmlFor={`checkbox_${name}`}
        className={`
          ${styles["checkbox__fake-box"]} ${
          isChecked ? styles["checkbox__fake-box--checked"] : ""
        }
        `}
      >
        {isChecked && (
          <span className={styles["checkbox__fake-check"]}>
            <CheckIcon />
          </span>
        )}
      </label>
      <input
        type="checkbox"
        className={styles.checkbox__real}
        id={`checkbox_${name}`}
        onChange={() => checkboxClickHandler()}
      />
    </div>
  );
};

export default React.memo(Checkbox);
