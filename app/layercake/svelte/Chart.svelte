<script>
  import { LayerCake, Svg } from "layercake";
  import { scaleBand } from "d3-scale";

  import Bar from "./Bar.svelte";
  import AxisX from "./AxisX.svelte";
  import AxisY from "./AxisY.svelte";

  export let data = [];

  const xKey = "value";
  const yKey = "year";

  data.forEach((d) => {
    d[xKey] = +d[xKey];
  });
</script>

<div class="chart-container">
  <LayerCake
    padding={{ bottom: 20, left: 35 }}
    x={xKey}
    y={yKey}
    yScale={scaleBand().paddingInner(0.05)}
    xDomain={[0, null]}
    {data}
  >
    <Svg>
      <AxisX tickMarks baseline snapLabels />
      <AxisY tickMarks gridlines={false} />
      <Bar />
    </Svg>
  </LayerCake>
</div>

<style>
  .chart-container {
    height: 250px;
  }
</style>
