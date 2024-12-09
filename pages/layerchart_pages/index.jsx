"use client";

import "../../styles/globals.css";

import { observer } from "mobx-react-lite";
import { useStores } from "../../statemanagement/stores";
import { BarChart } from "../../app/components/BarChart";
import { StoreProvider } from "../../statemanagement/stores";

const Index = observer(() => {
  const stores = useStores();
  const { randomizeValues, caller, doToggle, toggle } = stores.chartStore;

  return (
    <div>
      <h1 className="text-xl mb-8">LayerChart in /pages</h1>

      <button
        className="bg-primary/10 px-4 py-2 border border-primary/50 rounded hover:bg-primary/20"
        onClick={() => randomizeValues("react")}
      >
        React randomizeValues
      </button>

      <div className="mt-2 flex gap-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={doToggle}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Change color
          </span>
        </label>
        <div> {!toggle ? "yes" : "no"}</div>
      </div>

      <BarChart />

      <div className="mt-16">randomizeValues called from: {caller}</div>
    </div>
  );
});

export default () => (
  <StoreProvider>
    <div
      style={{
        margin: "24px auto",
        width: "100%",
        maxWidth: 600,
      }}
    >
      <Index />
    </div>
  </StoreProvider>
);
