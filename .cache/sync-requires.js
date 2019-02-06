const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-course-template-js": hot(preferDefault(require("/home/ubuntu/workspace/website/src/templates/course-template.js"))),
  "component---src-templates-location-template-js": hot(preferDefault(require("/home/ubuntu/workspace/website/src/templates/location-template.js"))),
  "component---src-templates-apply-template-js": hot(preferDefault(require("/home/ubuntu/workspace/website/src/templates/apply-template.js"))),
  "component---src-templates-about-us-template-js": hot(preferDefault(require("/home/ubuntu/workspace/website/src/templates/about-us-template.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ubuntu/workspace/website/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ubuntu/workspace/website/src/pages/index.js")))
}

