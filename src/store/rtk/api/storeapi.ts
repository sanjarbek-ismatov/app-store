import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Data } from "../../../types";
export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app-store-uz.onrender.com",
  }),
  endpoints(build) {
    return {
      getAppFromKeyword: build.mutation<Data, string>({
        query: (query) => `/?app=${query}`,
      }),
    };
  },
});
export const { useGetAppFromKeywordMutation } = storeApi;
