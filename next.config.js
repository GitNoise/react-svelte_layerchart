const path = require("path");
const { sveltePreprocess } = require("svelte-preprocess");

module.exports = {
  webpack: (config, { isServer }) => {
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

    // Resolve Svelte imports correctly (including internal paths)
    config.resolve.alias = {
      ...config.resolve.alias,
      svelte: path.resolve("node_modules", "svelte/src/runtime"),
    };

    // Ensure `.svelte` extensions are handled by Webpack
    config.resolve.extensions.push(".svelte");

    return config;
  },
};
