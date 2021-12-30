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

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_output",
      includes: "_includes",
      layouts: "layouts",
    },
  };
};
