// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-course-template-js": () => import("/home/ubuntu/workspace/website/src/templates/course-template.js" /* webpackChunkName: "component---src-templates-course-template-js" */),
  "component---src-templates-location-template-js": () => import("/home/ubuntu/workspace/website/src/templates/location-template.js" /* webpackChunkName: "component---src-templates-location-template-js" */),
  "component---src-templates-about-us-template-js": () => import("/home/ubuntu/workspace/website/src/templates/about-us-template.js" /* webpackChunkName: "component---src-templates-about-us-template-js" */),
  "component---src-templates-apply-template-js": () => import("/home/ubuntu/workspace/website/src/templates/apply-template.js" /* webpackChunkName: "component---src-templates-apply-template-js" */),
  "component---src-templates-upcoming-programs-template-js": () => import("/home/ubuntu/workspace/website/src/templates/upcoming-programs-template.js" /* webpackChunkName: "component---src-templates-upcoming-programs-template-js" */),
  "component---src-templates-partners-js": () => import("/home/ubuntu/workspace/website/src/templates/partners.js" /* webpackChunkName: "component---src-templates-partners-js" */),
  "component---cache-dev-404-page-js": () => import("/home/ubuntu/workspace/website/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/home/ubuntu/workspace/website/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/ubuntu/workspace/website/.cache/data.json")

