const { rest } = require("msw")
const {
  getRestaurantDataAPI,
  getAllRestaurantDataAPI,
  getConfigDataAPI,
  getPageDataAPI,
} = require("../../mock-service-end-points")

const handlers = [
  rest.get("http://localhost:8000/one-restaurant", (req, res, ctx) => {
    return res(ctx.json(getRestaurantDataAPI()))
  }),
  rest.get("http://localhost:8000/restaurants", (req, res, ctx) => {
    return res(ctx.json(getAllRestaurantDataAPI()))
  }),
  rest.get("http://localhost:8000/config", (req, res, ctx) => {
    return res(ctx.json(getConfigDataAPI()))
  }),
  rest.get("http://localhost:8000/routes", (req, res, ctx) => {
    return res(ctx.json(getPageDataAPI()))
  }),
]

module.exports = { handlers }
