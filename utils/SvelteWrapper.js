import React, { useRef, useEffect } from "react";

export function SvelteWrapper({ component: Component, props }) {
  const container = useRef();
  const app = useRef(null);

  useEffect(() => {
    // using svelte 4
    const c = new Component({
      target: container.current,
      props,
    });

    app.current = c;

    console.log(app.current);

    return () => {
      app.current.$destroy();
    };
  }, [Component]);

  useEffect(() => {
    if (app.current) {
      app.current.$set(props);
    }
  }, [props]);

  return (
    <fieldset style={{ padding: 16, width: "100%" }}>
      <legend> Svelte component </legend>
      <div style={{ width: "100%" }} ref={container} />
    </fieldset>
  );
}
