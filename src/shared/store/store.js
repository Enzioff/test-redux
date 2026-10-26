import {configureStore} from "@reduxjs/toolkit";
import {reducer as productsReducer} from "./productsSlice";
import {$api} from "../api/api";

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    })
})
