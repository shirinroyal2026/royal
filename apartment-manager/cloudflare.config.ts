import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "apartment-manager",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-01",
    compatibilityFlags: ["nodejs_compat"],
    assets: { notFoundHandling: "none" },
    env: {
      ASSETS: bindings.assets(),
      APARTMENT_DB: bindings.d1({
        name: "apartment-db",
        id: "c9fc1326-25d3-468a-a6bd-42f75b8e6509",
      }),
    },
  }),
});