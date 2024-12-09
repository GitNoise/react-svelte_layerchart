"use client";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { useStores } from "../../../statemanagement/stores";
import { SvelteWrapper } from "../../../utils/SvelteWrapper";

export const BarChart = observer(() => {
  const [Chart, setChart] = useState(null);

  const stores = useStores();

  useEffect(() => {
    const loadChart = async () => {
      const { default: chart } = await import("./index.svelte");
      setChart(() => chart);
    };

    loadChart();
  }, []);

  if (!Chart) {
    return <div>Loading...</div>;
  }

  return (
    <SvelteWrapper
      component={Chart}
      props={{ store: stores.chartStore, height: 300 }}
    />
  );
});
