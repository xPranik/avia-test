

export enum SortType {
    PRICE = 'PRICE',
    TIME = 'TIME',
    OPTIMAL = 'OPTIMAL',
}

interface Flight {
    departure_time: Date;
    arrival_time: Date;
    departure_airport: string;
    arrival_airport: string;
}

export enum FilterType {
    All = 0,
    Direct = 1,
    OneStop = 2,
    TwoStops = 3,
    ThreeStops = 4,
}

export type TicketType = {
    id: string;
    price: string;
    logo: string;
    forward: Flight;
    back: Flight;
    transfers: string[];
    transfersKey: FilterType;
};