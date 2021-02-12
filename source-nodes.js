const axios = require('axios')
const {server} = require('./mocks/server')

server.listen()

module.exports = async ({actions, createNodeId, createContentDigest}) => {
  const getRestaurantData = async () => {
    try {
      // const response = await axios.get("http://localhost:3001")
      const response = await axios.get('http://localhost:8000/one-restaurant')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const getAllRestaurantData = async () => {
    try {
      // const response = await axios.get("http://localhost:3001/restaurants")
      const response = await axios.get('http://localhost:8000/restaurants')
      return response.data.restaurants
    } catch (error) {
      console.error(error)
    }
  }

  const getConfigData = async () => {
    try {
      // const response = await axios.get("http://localhost:3003")
      const response = await axios.get('http://localhost:8000/config')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const getPageData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/routes')
      // const response = await axios.get("http://localhost:3003/routes")
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const [
    restaurantAPIData,
    configAPIData,
    pageAPIData,
    allRestaurantsAPIData,
  ] = await Promise.all([
    getRestaurantData(),
    getConfigData(),
    getPageData(),
    getAllRestaurantData(),
  ])

  const restaurantNodeData = {
    id: createNodeId('my-restaurant-data'),
    ...restaurantAPIData.data,
  }

  const configNodeData = {
    id: createNodeId('my-config-data'),
    ...configAPIData,
  }
  const pageNodeData = {
    id: createNodeId('my-page-data'),
    ...pageAPIData,
  }

  const restaurantNode = {
    ...restaurantNodeData,
    internal: {
      type: 'restaurantType',
      content: JSON.stringify(restaurantAPIData),
      contentDigest: createContentDigest(restaurantNodeData),
    },
  }

  allRestaurantsAPIData.forEach((dataNode, index) => {
    actions.createNode({
      ...dataNode,
      id: createNodeId(`restaurant-${index}`),
      internal: {
        type: 'restaurantsType',
        content: JSON.stringify(dataNode),
        contentDigest: createContentDigest(dataNode),
      },
    })
  })

  const configNode = {
    ...configNodeData,
    internal: {
      type: 'configType',
      content: JSON.stringify(configAPIData),
      contentDigest: createContentDigest(configNodeData),
    },
  }
  const pageNode = {
    ...pageNodeData,
    internal: {
      type: 'pageType',
      content: JSON.stringify(pageAPIData),
      contentDigest: createContentDigest(pageNodeData),
    },
  }

  actions.createNode(restaurantNode)
  actions.createNode(configNode)
  actions.createNode(pageNode)
}
