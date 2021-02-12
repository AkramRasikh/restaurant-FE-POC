exports.getRestaurantDataAPI = () => ({
  restaurant: "Zizzi",
  message: "Welcome to Zizzi",
  menuItems: [
    { name: "Pizza", price: 1000 },
    { name: "Pasta", price: 850 },
    { name: "Salad", price: 450 },
    { name: "Brownie", price: 350 },
    { name: "Cola", price: 250 },
  ],
})

exports.getAllRestaurantDataAPI = () => ({
  restaurants: [
    {
      restaurant: "Zizzi",
      restaurantId: 785,
      message: "Welcome to Zizzi",
      menuItems: [
        { name: "Pizza", price: 1000 },
        { name: "Pasta", price: 850 },
        { name: "Salad", price: 450 },
        { name: "Brownie", price: 350 },
        { name: "Cola", price: 250 },
      ],
    },
    {
      restaurant: "Ask",
      restaurantId: 875,
      message: "Welcome to Ask",
      menuItems: [
        { name: "Pizza", price: 1000 },
        { name: "Pasta", price: 850 },
        { name: "Salad", price: 450 },
        { name: "Brownie", price: 350 },
        { name: "Cola", price: 250 },
      ],
    },
  ],
})

exports.getConfigDataAPI = () => ({
  features: {
    orderEnabled: true,
    payEnabled: true,
    splitBillEnabled: false,
  },
})

exports.getPageDataAPI = () => ({
  routes: { name: "first" },
})
