const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // Output directory: _site
  eleventyConfig.addWatchTarget("assets");

  //passthrough files
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy(
    "assets/pdf/SamKCherianResume-FrontendDeveloper.pdf"
  );
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
