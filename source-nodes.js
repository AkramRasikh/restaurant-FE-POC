const axios = require("axios")

module.exports = async ({ actions, createNodeId, createContentDigest }) => {
  const getRestaurantData = async () => {
    try {
      const response = await axios.get("http://localhost:3001")
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const getConfigData = async () => {
    try {
      const response = await axios.get("http://localhost:3003")
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const getPageData = async () => {
    try {
      const response = await axios.get("http://localhost:3003/routes")
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const [restaurantAPIData, configAPIData, pageAPIData] = await Promise.all([
    getRestaurantData(),
    getConfigData(),
    getPageData(),
  ])

  const restaurantNodeData = {
    id: createNodeId("my-restaurant-data"),
    ...restaurantAPIData,
  }

  const configNodeData = {
    id: createNodeId("my-config-data"),
    ...configAPIData,
  }
  const pageNodeData = {
    id: createNodeId("my-page-data"),
    ...pageAPIData,
  }

  const restaurantNode = {
    ...restaurantNodeData,
    internal: {
      type: "restaurantType",
      content: JSON.stringify(restaurantAPIData),
      contentDigest: createContentDigest(restaurantNodeData),
    },
  }
  const configNode = {
    ...configNodeData,
    internal: {
      type: "configType",
      content: JSON.stringify(configAPIData),
      contentDigest: createContentDigest(configNodeData),
    },
  }
  const pageNode = {
    ...pageNodeData,
    internal: {
      type: "pageType",
      content: JSON.stringify(pageAPIData),
      contentDigest: createContentDigest(pageNodeData),
    },
  }

  actions.createNode(restaurantNode)
  actions.createNode(configNode)
  actions.createNode(pageNode)
}
