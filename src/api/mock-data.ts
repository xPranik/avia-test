import { FilterType, TicketType } from "./types";
import a4elogo from "@/assets/a4e_logo.png";

export const mockTickets: TicketType[] = [
    {
      id: "421313",
      price: "1200",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2011-10-10T14:48:00"),
        arrival_time: new Date("2011-10-11T08:18:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-10T04:48:00"),
        arrival_time: new Date("2024-10-11T12:18:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: [],
      transfersKey: FilterType.Direct,
    },
    {
      id: "314315",
      price: "13400",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2024-10-10T10:25:00"),
        arrival_time: new Date("2024-10-10T21:18:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-10T16:00:00"),
        arrival_time: new Date("2024-10-10T20:30:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: ["HKG"],
      transfersKey: FilterType.OneStop,
    },
    {
      id: "514312",
      price: "2200",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2011-10-10T20:20:00"),
        arrival_time: new Date("2011-10-11T10:10:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-10T14:48:00"),
        arrival_time: new Date("2024-10-11T12:18:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: ["HKG","JNB"],
      transfersKey: FilterType.TwoStops,
    },
    {
      id: "5123451234",
      price: "5400",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2011-10-10T14:48:00"),
        arrival_time: new Date("2011-10-11T14:18:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-10T14:48:00"),
        arrival_time: new Date("2024-10-11T12:18:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: ["HKG", "JNB"],
      transfersKey: FilterType.TwoStops,
    },
    {
      id: "532432141",
      price: "200",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2011-10-10T14:48:00"),
        arrival_time: new Date("2011-10-10T18:30:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-10T14:30:00"),
        arrival_time: new Date("2024-10-10T20:00:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: ["HKG"],
      transfersKey: FilterType.OneStop,
    },
    {
      id: "64235124",
      price: "700",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2011-10-10T12:48:00"),
        arrival_time: new Date("2011-10-10T20:18:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-10T18:40:00"),
        arrival_time: new Date("2024-10-10T22:20:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: [],
      transfersKey: FilterType.Direct,
    },
    {
      id: "3461341",
      price: "22400",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2011-10-10T15:15:00"),
        arrival_time: new Date("2011-10-10T18:00:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-10T06:00:00"),
        arrival_time: new Date("2024-10-10T12:00:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: ["HKG","JNB", "WSZ"],
      transfersKey: FilterType.ThreeStops,
    },
    {
      id: "432616341",
      price: "6400",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2011-10-10T14:20:00"),
        arrival_time: new Date("2011-10-10T16:40:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-10T20:50:00"),
        arrival_time: new Date("2024-10-11T06:15:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: ["HKG", "JNB"],
      transfersKey: FilterType.TwoStops,
    },
    {
      id: "64125413",
      price: "3230",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2011-10-11T13:15:00"),
        arrival_time: new Date("2011-10-11T20:30:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-11T19:40:00"),
        arrival_time: new Date("2024-10-12T06:20:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: [],
      transfersKey: FilterType.Direct,
    },
    {
      id: "2353614`",
      price: "61340",
      logo: a4elogo,
      forward: {
        departure_time: new Date("2011-10-10T14:48:00"),
        arrival_time: new Date("2011-10-11T14:18:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      back: {
        departure_time: new Date("2024-10-10T14:48:00"),
        arrival_time: new Date("2024-10-11T12:18:00"),
        departure_airport: "FLU",
        arrival_airport: "FLU",
      },
      transfers: ["HKG", "JNB"],
      transfersKey: FilterType.TwoStops,
    },
  ];