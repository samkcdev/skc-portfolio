const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // Output directory: _site
  eleventyConfig.addWatchTarget("assets");

  //passthrough files
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy(
    "src/assets/pdf/SamKCherianResume-FrontendDeveloper.pdf"
  );
  // eleventyConfig.addPassthroughCopy("assets/styles");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/posts/*.md")
      .filter((item) => item.data.permalink !== false);
  });

  eleventyConfig.addCollection("featuredPosts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/posts/*.md")
      .filter((item) => item.data.featured)
      .filter((item) => item.data.permalink !== false);
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
