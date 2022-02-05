const { DateTime } = require("luxon");
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

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  return {
    dir: {
      input: "src",
      output: "_output",
      includes: "_includes",
      layouts: "layouts",
      data: "data",
    },
  };
};
