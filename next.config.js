
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['pcdNzyFMHFRzfXNw9Qug89'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  