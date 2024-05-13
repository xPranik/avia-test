import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterType, SortType, TicketType } from './types';
import { mockTickets } from './mock-data';
import { filterAndSortTickets } from '@/api/utils/filter-and-sort-tickets';

interface TicketState {
  isLoading: boolean;
  tickets: TicketType[],
  filteredTickets: TicketType[],
  quantity: number;
  sortType: SortType,
  filters: FilterType,
}

const initialState: TicketState = {
  isLoading: false,
  tickets: mockTickets,
  filteredTickets: mockTickets,
  quantity: 10,
  sortType: SortType.PRICE,
  filters: FilterType.All,
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterType>) {
      state.filters = action.payload;
    },
    filterTickets(state, action: PayloadAction<TicketType[]>) {
      state.filteredTickets = filterAndSortTickets({sortType: state.sortType, filterType: state.filters, tickets: action.payload});
    }
  },
})

  export const {setSortType, setFilters, filterTickets} = ticketsSlice.actions;
  export default ticketsSlice.reducer;