import * as React from "react";
import useHumanizeTicketData from "@/shared/utils/hooks/use-humanize-ticket-data";
import { TicketType } from "@/api/types";
const styles = require("./ticket.module.scss");

type OwnProps = {
  ticketData: TicketType;
};

const Ticket: React.FC<OwnProps> = ({ ticketData }) => {
  const ticketFormattedDates = useHumanizeTicketData(ticketData);
  const transfersLength = ticketData.transfers?.length;
  const transfersLabel =
    transfersLength && transfersLength > 1 ? "Пересадки" : "Пересадка";

  return (
    <a href="#" className={`block ${styles.ticket}`}>
      <div className={styles.ticket__head}>
        <p className={styles.ticket__head__price}>
          {ticketData.price}
          <span className={styles.ticket__head__currency}> $</span>
        </p>
        <div className={styles.ticket__head__logo}>
          <img src={ticketData.logo} alt="company_logo" />
        </div>
      </div>
      <div className={styles.ticket__body}>
        <div className={styles.ticket__body__row}>
          <div className={styles.ticket__body__data}>
            <p className={styles.ticket__body__label}>
              {`${ticketData.forward.departure_airport} - ${ticketData.forward.arrival_airport}`}
            </p>
            <p className={styles.ticket__body__value}>
              {ticketFormattedDates.forwardFlightDeparture} -{" "}
              {ticketFormattedDates.forwardFlightArrival}
            </p>
          </div>
          <div className={styles.ticket__body__data}>
            <p className={styles.ticket__body__label}>В дорозі</p>
            <p className={styles.ticket__body__value}>
              {ticketFormattedDates.forwardFlightDuration}
            </p>
          </div>
          <div className={styles.ticket__body__data}>
            {transfersLength ? (
              <>
                <p
                  className={styles.ticket__body__label}
                >{`${transfersLength} ${transfersLabel}`}</p>
                <p className={styles.ticket__body__value}>
                  {ticketData.transfers.map((transfer, index) => (
                    <span key={index}>{`${transfer}${
                      index + 1 !== transfersLength ? ", " : ""
                    }`}</span>
                  ))}
                </p>
              </>
            ) : null}
          </div>
        </div>
        <div className={styles.ticket__body__row}>
          <div className={styles.ticket__body__data}>
            <p className={styles.ticket__body__label}>
              {`${ticketData.back.departure_airport} - ${ticketData.back.arrival_airport}`}
            </p>
            <p className={styles.ticket__body__value}>
              {ticketFormattedDates.backFlightDeparture} -{" "}
              {ticketFormattedDates.backFlightArrival}
            </p>
          </div>
          <div className={styles.ticket__body__data}>
            <p className={styles.ticket__body__label}>В дорозі</p>
            <p className={styles.ticket__body__value}>
              {ticketFormattedDates.backFlightDuration}
            </p>
          </div>
          <div className={styles.ticket__body__data}>
            {transfersLength ? (
              <>
                <p
                  className={styles.ticket__body__label}
                >{`${transfersLength} ${transfersLabel}`}</p>
                <p className={styles.ticket__body__value}>
                  {ticketData.transfers.map((transfer, index) => (
                    <span key={index}>{`${transfer}${
                      index + 1 !== transfersLength ? ", " : ""
                    }`}</span>
                  ))}
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
};

export default React.memo(Ticket);
