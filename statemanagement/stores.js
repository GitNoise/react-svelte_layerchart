"use client";

import React, { createContext } from "react";
import ChartStore from "./ChartStore";

// Function to create new store instances
const createStores = () => {
  return {
    chartStore: new ChartStore(),
  };
};

const StoresContext = createContext(null);

export class StoreProvider extends React.Component {
  constructor(props) {
    super(props);
    this.stores = createStores(); // Create a fresh instance of the stores
  }

  render() {
    const { children } = this.props;

    return (
      <StoresContext.Provider value={this.stores}>
        {children}
      </StoresContext.Provider>
    );
  }
}

// Custom hook to use the stores (can still be used in functional components)
export const useStores = () => {
  const context = React.useContext(StoresContext);
  if (!context) {
    throw new Error("useStores must be used within a StoreProvider");
  }
  return context;
};
