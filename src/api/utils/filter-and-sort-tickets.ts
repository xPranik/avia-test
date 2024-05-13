import { FilterType, SortType, TicketType } from "@/api/types"
import { getDateDifference } from "../../shared/utils/date";

const calculateTotalFlightDuration = (ticket: TicketType): number => {
    return getDateDifference({startDate: ticket.forward.departure_time, endDate: ticket.forward.arrival_time}) + getDateDifference({startDate: ticket.back.departure_time, endDate: ticket.back.arrival_time})
};

const compareTickets = (ticketA: TicketType, ticketB: TicketType): number => {
    const durationA = calculateTotalFlightDuration(ticketA);
    const durationB = calculateTotalFlightDuration(ticketB);
    if (durationA !== durationB) {
        return durationA - durationB;
    }

    const transfersA = ticketA.transfers.length;
    const transfersB = ticketB.transfers.length;
    if (transfersA !== transfersB) {
        return transfersA - transfersB;
    }

    const priceA = +ticketA.price;
    const priceB = +ticketB.price;
    return priceA - priceB;
};

type OwnProps = {
    sortType: SortType;
    filterType: FilterType;
    tickets: TicketType[];
}

export const filterAndSortTickets = ({sortType, filterType, tickets}: OwnProps) => {
    const filteredTickets: TicketType[] = [];

    if (filterType !== 0) {
        filteredTickets.push(...tickets.filter(ticket => filterType === ticket.transfersKey));
    } else {
        filteredTickets.push(...tickets);
    }
 
    if(sortType === SortType.PRICE) {
        return filteredTickets.concat().sort((a, b) => +a.price - +b.price)
    }
    else if (sortType === SortType.TIME) {
        return filteredTickets.slice().sort((a, b) => {
            
            const durationA = calculateTotalFlightDuration(a);
            const durationB = calculateTotalFlightDuration(b);
            return durationA - durationB;
        })
    } else {
        return filteredTickets.slice().sort(compareTickets)
    }

}