import * as React from "react";
import { Ticket } from "./ticket";
import { useAppSelector } from "@/api/hooks";
import { TicketType } from "@/api/types";

const styles = require("./tickets.module.scss");

const Tickets = () => {
  const tickets = useAppSelector(
    (state) => state.ticketsReducer.filteredTickets
  );
  const [page, setPage] = React.useState<number>(1);
  const [slicedTickets, setSlicedTickets] = React.useState<TicketType[]>([]);

  const range = page * 5;

  React.useEffect(() => {
    setSlicedTickets(tickets.slice(0, range));
  }, [page, tickets]);

  return slicedTickets.length ? (
    <div>
      {slicedTickets.map((ticket) => (
        <Ticket ticketData={ticket} key={ticket.id} />
      ))}
      {tickets.length > range ? (
        <button
          className={styles.show_more_btn}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Показати ще 5 квитків
        </button>
      ) : null}
    </div>
  ) : null;
};

export default Tickets;
