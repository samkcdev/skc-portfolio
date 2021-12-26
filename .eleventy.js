module.exports = function (eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addWatchTarget("assets");

  //passthrough files
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  // eleventyConfig.addPassthroughCopy("assets/styles");

  return {
    dir: {
      input: "src",
      output: "_output",
      includes: "_includes",
      layouts: "layouts",
    },
  };
};
