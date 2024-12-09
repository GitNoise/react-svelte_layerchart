<script context="module">
  import { connect } from "../../../utils/mobxAuto";
</script>

<script>
  import { BarChart, Tooltip } from "layerchart";
  import { accessor } from "layerchart/utils/common";

  const { autorun } = connect();
  export let height = 300;
  export let store;

  let toggle;
  let data;

  $: autorun(() => {
    toggle = store.toggle;
    data = store.data;
  });

  $: color = toggle ? "fill-[pink]" : "fill-[green]";
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
      x={"value"}
      y={"year"}
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
