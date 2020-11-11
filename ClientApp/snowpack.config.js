/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      public: '/',
      src: '/dist',
    },
    plugins: [
    ],
    install: [
      /* ... */
    ],
    installOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    },
    proxy: {
      "/ReactNotes": "https://localhost:5001/ReactNotes",
    },
    alias: {
      /* ... */
    },
  };
  