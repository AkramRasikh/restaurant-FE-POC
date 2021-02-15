module.exports = ({
  actions: {deletePage, createPage},
  page,
  getNodesByType,
}) => {
  const [configNode] = getNodesByType('configType');
  // const {
  //   features: {splitBillEnabled},
  // } = configNode;
  if (page.path === '/split-bill/' && !configNode.features.splitBillEnabled) {
    deletePage(page);
  }

  createPage({
    ...page,
    context: {
      ...page.context,
      config: configNode,
    },
  });
};
