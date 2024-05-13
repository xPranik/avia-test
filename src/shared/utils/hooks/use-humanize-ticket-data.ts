import { TicketType } from "@/api/types";
import { getDateDifference, getFormattedTime, getHumanizedTime } from "../date";

const useHumanizeTicketData = (data: TicketType) => {
  const forwardDateDifference = getDateDifference({startDate: data.forward.departure_time, endDate: data.forward.arrival_time});
  const backDateDifference = getDateDifference({startDate: data.back.departure_time, endDate: data.back.arrival_time});

  const forwardFlightDuration = getHumanizedTime(forwardDateDifference);
  const backFlightDuration = getHumanizedTime(backDateDifference);

  const forwardFlightDeparture = getFormattedTime(data.forward.departure_time);
  const forwardFlightArrival = getFormattedTime(data.forward.arrival_time);
  const backFlightDeparture = getFormattedTime(data.back.departure_time);
  const backFlightArrival = getFormattedTime(data.back.arrival_time);

  return {
    forwardFlightDuration,
    backFlightDuration,
    forwardFlightArrival,
    forwardFlightDeparture,
    backFlightArrival,
    backFlightDeparture
  };
};

export default useHumanizeTicketData;
