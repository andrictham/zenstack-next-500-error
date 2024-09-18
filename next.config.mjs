import BrowserSyncPlugin from "browser-sync-webpack-plugin";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",

  /**
   * NOTE The extra configuration for ZenStack is needed because the package @zenstackhq/runtime is not yet fully compatible with NextJS's server component bundler. This issue will be resolved in a future release.
   */
  experimental: {
    serverComponentsExternalPackages: ["@zenstackhq/runtime"],
  },

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  webpack: (config, { dev, isServer }) => {
    const serverSideOrProd = isServer || !dev;
    if (!serverSideOrProd)
      config.plugins.push(
        new BrowserSyncPlugin(
          {
            host: "0.0.0.0",
            port: 4000,
            open: false,
            proxy: "http://localhost:3000/",
          },
          {
            reload: false,
            injectCss: false,
          },
        ),
      );
    return config;
  },
};

export default config;
