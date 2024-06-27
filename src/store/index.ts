import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { locationsApi, timeApi, weatherApi } from "../api";

export const store = configureStore({
  reducer: {
    [locationsApi.reducerPath]: locationsApi.reducer,
    [timeApi.reducerPath]: timeApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(locationsApi.middleware)
      .concat(timeApi.middleware)
      .concat(weatherApi.middleware),
});

setupListeners(store.dispatch);
