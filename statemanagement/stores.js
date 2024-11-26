"use client";

import { createContext, useContext } from "react";

import ChartStore from "./ChartStore";

export const stores = {
  chartStore: new ChartStore(),
};

export const StoreContext = createContext(stores);

export const useStores = () => {
  return useContext(StoreContext);
};
