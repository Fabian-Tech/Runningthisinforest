const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-list-js": hot(preferDefault(require("C:\\Users\\FabianArens\\Runningthisinforest\\src\\templates\\blog-list.js"))),
  "component---src-templates-portfolio-list-js": hot(preferDefault(require("C:\\Users\\FabianArens\\Runningthisinforest\\src\\templates\\portfolio-list.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("C:\\Users\\FabianArens\\Runningthisinforest\\src\\templates\\blog.js"))),
  "component---src-templates-portfolio-js": hot(preferDefault(require("C:\\Users\\FabianArens\\Runningthisinforest\\src\\templates\\portfolio.js"))),
  "component---src-templates-basepage-js": hot(preferDefault(require("C:\\Users\\FabianArens\\Runningthisinforest\\src\\templates\\basepage.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\FabianArens\\Runningthisinforest\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\FabianArens\\Runningthisinforest\\src\\pages\\404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\FabianArens\\Runningthisinforest\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\FabianArens\\Runningthisinforest\\src\\pages\\index.js")))
}

