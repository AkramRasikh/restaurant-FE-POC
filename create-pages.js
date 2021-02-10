const config = require("config")

const extractNode = (graphqlInfo, key) => graphqlInfo.data[key].nodes

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const restaurantInfo = await graphql(`
    query Data {
      allRestaurantType {
        nodes {
          menuItems {
            name
            price
          }
          message
        }
      }
      allConfigType {
        nodes {
          features {
            orderEnabled
            payEnabled
            splitBillEnabled
          }
        }
      }
    }
  `)

  const { flattenedRoutes } = config

  const restaurantData = extractNode(restaurantInfo, "allRestaurantType")
  const [featureNodes] = extractNode(restaurantInfo, "allConfigType")
  const {
    features: { splitBillEnabled },
  } = featureNodes

  const buildablePages = flattenedRoutes.filter(
    route => !(route.path === "split-bill" && !splitBillEnabled)
  )

  buildablePages.forEach(({ path, component }) => {
    createPage({
      path,
      component: component,
      context: {
        restaurantData,
        configJson: {
          features: {
            splitBillEnabled,
          },
        },
      },
    })
  })
}
