import path from "path";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  webpack(config, { isServer }) {
    // Add Svelte loader configuration
    config.module.rules.push({
      test: /\.svelte$/,
      use: [
        {
          loader: "svelte-loader",
          options: {
            preprocess: sveltePreprocess(),
            emitCss: !isServer, // Don't emit CSS for server-side rendering
          },
        },
      ],
    });

    // Resolve svelte imports correctly (including internal paths)
    // Ensure svelte/internal is resolved correctly
    config.resolve.alias = {
      ...config.resolve.alias,
      svelte: path.resolve("node_modules", "svelte/src/runtime"),
    };

    // Ensure that `.svelte` extension is handled by Webpack
    config.resolve.extensions.push(".svelte");

    return config;
  },
};
