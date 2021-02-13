const path = require(`path`);

const menuTemplate = path.resolve(`src/pages/menu/index.js`);
const homeTemplate = path.resolve(`src/pages/home/index.js`);
const splitBillTemplate = path.resolve(`src/pages/split-bill/index.js`);

exports.flattenedRoutes = [
  {path: 'menu', component: menuTemplate},
  {path: 'split-bill', component: splitBillTemplate},
  {path: '/', component: homeTemplate},
];
