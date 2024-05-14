import * as React from "react";
const styles = require("./../ticket.module.scss");

type OwnProps = {
  airports: string;
  time: string;
  duration: string;
  transfersLabel: string;
  transfers: string[];
};

const TicketDataRow: React.FC<OwnProps> = ({
  airports,
  time,
  duration,
  transfersLabel,
  transfers,
}) => {
  const transfersLength = transfers.length;

  return (
    <div className={styles.ticket__body__row}>
      <div className={styles.ticket__body__data}>
        <p className={styles.ticket__body__label}>{airports}</p>
        <p className={styles.ticket__body__value}>{time}</p>
      </div>
      <div className={styles.ticket__body__data}>
        <p className={styles.ticket__body__label}>В дорозі</p>
        <p className={styles.ticket__body__value}>{duration}</p>
      </div>
      <div className={styles.ticket__body__data}>
        <p className={styles.ticket__body__label}>{transfersLabel}</p>
        <p className={styles.ticket__body__value}>
          {transfers.map((transfer, index) => (
            <span key={index}>{`${transfer}${
              index + 1 !== transfersLength ? ", " : ""
            }`}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default React.memo(TicketDataRow);
