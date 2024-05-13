import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './tickets-slice'

const store = configureStore({
  reducer: {
    ticketsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;