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

    return () => {
      app.current.$destroy();
    };
  }, [Component]);

  useEffect(() => {
    if (app.current) {
      app.current.$set(props);
    }
  }, [props]);

  return <div style={{ width: "100%" }} ref={container} />;
}
