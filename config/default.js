const path = require(`path`)

const menuTemplate = path.resolve(`src/pages/menu/index.js`)
const homeTemplate = path.resolve(`src/pages/home/index.js`)
const billTemplate = path.resolve(`src/pages/bill/index.js`)
const splitBillTemplate = path.resolve(`src/pages/split-bill/index.js`)

exports.flattenedRoutes = [
  { path: "menu", component: menuTemplate },
  { path: "bill", component: billTemplate },
  { path: "split-bill", component: splitBillTemplate },
  { path: "/", component: homeTemplate },
]
