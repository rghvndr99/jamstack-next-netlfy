const withImages = require('next-images');
const withSass = require('@zeit/next-sass');


module.exports = withSass({
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "raw-loader"      
    });
    return cfg;
  }
});