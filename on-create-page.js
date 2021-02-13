module.exports = ({actions: {deletePage}, page, getNodesByType}) => {
  const [configNode] = getNodesByType('configType');
  const {
    features: {splitBillEnabled},
  } = configNode;
  if (page.path === '/split-bill/' && !splitBillEnabled) {
    deletePage(page);
  }
};
