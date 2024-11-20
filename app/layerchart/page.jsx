"use client";

import { useState } from "react";

import Chart from "./svelte/Chart.svelte";
import { SvelteWrapper } from "../../utils/SvelteWrapper";

const Index = () => {
  const [data, setData] = useState([
    {
      year: 1979,
      value: 2,
    },
    {
      year: 1980,
      value: 3,
    },
    {
      year: 1981,
      value: 5,
    },
    {
      year: 1982,
      value: 8,
    },
    {
      year: 1983,
      value: 18,
    },
  ]);

  const randomizeValues = () => {
    const newData = data.map((item) => ({
      ...item, // Keep the year as is
      value: Math.floor(Math.random() * 100) + 1, // Randomize value between 1 and 100
    }));

    setData(newData);
  };

  return (
    <div>
      <h1>LayerChart</h1>
      <button style={{ margin: "12px 0" }} onClick={randomizeValues}>
        Random data
      </button>

      {Chart && (
        <div
          style={{
            width: "100%",
            height: 300,
            display: "flex",
            alignItems: "stretch",
            marginTop: 24,
          }}
        >
          <SvelteWrapper component={Chart} props={{ data: data }} />
        </div>
      )}
    </div>
  );
};

export default Index;
