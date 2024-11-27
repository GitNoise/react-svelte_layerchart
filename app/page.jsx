"use client";

import { stores, StoreContext } from "../statemanagement/stores";

export default function Home() {
  return (
    <div>
      <a href="/layercake">Test LayerCake</a>
      <br />
      <br />
      <StoreContext.Provider value={stores}>
        <a href="/layerchart">Test LayerChart</a>
      </StoreContext.Provider>
    </div>
  );
}
