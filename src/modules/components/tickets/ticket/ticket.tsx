import * as React from "react";
import useHumanizeTicketData from "@/shared/utils/hooks/use-humanize-ticket-data";
import { TicketType } from "@/api/types";
import { TicketDataRow } from "./ticket-data-row";
const styles = require("./ticket.module.scss");

type OwnProps = {
  ticketData: TicketType;
};

const Ticket: React.FC<OwnProps> = ({ ticketData }) => {
  const ticketFormattedDates = useHumanizeTicketData(ticketData);
  const transfersLength = ticketData.transfers.length;
  const transfersLabel =
    transfersLength > 1 ? "Пересадки" : "Пересадка" || "Без пересадок";

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
        <TicketDataRow
          airports={`${ticketData.forward.departure_airport} - ${ticketData.forward.arrival_airport}`}
          time={`${ticketFormattedDates.forwardFlightDeparture} - ${ticketFormattedDates.forwardFlightArrival}`}
          duration={ticketFormattedDates.forwardFlightDuration}
          transfers={ticketData.transfers}
          transfersLabel={
            transfersLength
              ? `${transfersLength} ${transfersLabel}`
              : "Без пересадок"
          }
        />
        <TicketDataRow
          airports={`${ticketData.back.departure_airport} - ${ticketData.back.arrival_airport}`}
          time={`${ticketFormattedDates.backFlightDeparture} - ${ticketFormattedDates.backFlightArrival}`}
          duration={ticketFormattedDates.backFlightDuration}
          transfers={ticketData.transfers}
          transfersLabel={
            transfersLength
              ? `${transfersLength} ${transfersLabel}`
              : "Без пересадок"
          }
        />
      </div>
    </a>
  );
};

export default React.memo(Ticket);
