module.exports = async ({ config, mode }) => {
  let j;
  // Find svelteloader from the webpack config
  const svelteloader = config.module.rules.find((r, i) => {
      if (r.loader && r.loader.includes('svelte-loader')) {
          j = i;
          return true;
      }
  });

  // safely inject preprocess into the config
  config.module.rules[j] = {
      // ...reactloader,
      ...svelteloader,
      options: {
          // ...reactloader.options,
          ...svelteloader.options,
          // style: stylepreprocess.preprocess.style
      }
  }

  // return the overridden config
  return config;
}