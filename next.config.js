const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

//module.exports = withImages();
module.exports = withSass({
    cssLoaderOptions: {
        url: false
      }
});