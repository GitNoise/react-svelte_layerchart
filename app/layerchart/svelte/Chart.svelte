<script>
  import { BarChart, Tooltip } from "layerchart";
  import { accessor } from "layerchart/utils/common";

  import { mobxToSvelte } from "/utils/mobxToSvelte";

  export let data = [];
  export let height = 300;
  export let store;

  const xKey = "value";
  const yKey = "year";

  // transform values to numbers
  data.forEach((d) => {
    d[xKey] = +d[xKey];
  });

  // Wire up mobx toggle to svelte store
  const toggle = mobxToSvelte(() => store.toggle);

  // subscribe to changes in toggle
  $: color = $toggle ? "fill-[pink]" : "fill-[green]";
</script>

<div class="my-8">
  <button
    class="bg-primary/10 px-4 py-2 border border-primary/50 rounded hover:bg-primary/20"
    type="button"
    on:click={() => store.randomizeValues("svelte")}
    >Svelte randomizeValues</button
  >
</div>

<div style="height:{height}px">
  <!-- force re-render when color variable changes -->
  {#key color}
    <BarChart
      {data}
      orientation="horizontal"
      x={xKey}
      y={yKey}
      bandPadding={0.05}
      props={{
        xAxis: {
          tweened: { duration: 200 },
          tickLabelProps: {
            textAnchor: "end",
            rotate: -45,
            class: "!fill-[#b9554f] text-lg font-semibold",
            dy: 12,
          },
          format: (d) => d + "%",
        },
        yAxis: {
          format: "none",
          tickLabelProps: {
            class: "!fill-[#b9554f] text-lg font-semibold",
            dx: -12,
          },
        },
        bars: {
          tweened: { duration: 200 },
          class: color,
        },
      }}
      xDomain={[0, 100]}
    >
      <svelte:fragment slot="tooltip" let:y let:x let:series>
        <Tooltip.Root let:data>
          <Tooltip.Header>{y(data)}</Tooltip.Header>
          <Tooltip.List>
            {#each series as s}
              {@const valueAccessor = accessor(s.value ?? s.key)}
              {@const value = valueAccessor(data)}
              {value}
            {/each}
          </Tooltip.List>
        </Tooltip.Root>
      </svelte:fragment>
    </BarChart>
  {/key}
</div>
