"use client";

import { Provider } from "mobx-react-lite";
import ChartStore from "./ChartStore";

// Function to create new store instances
const createStores = () => ({
  chartStore: new ChartStore(),
});

export const StoreProvider = ({ children }) => {
  const stores = createStores(); // Create a fresh instance of the stores
  return <Provider {...stores}>{children}</Provider>;
};
