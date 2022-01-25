const foods = [
  { name: "Lingonberry jam", price: 4.0 },
  { name: "Mushroom and bean casserole", price: 5.5 },
  { name: "Chili-flavoured wheat", price: 3.0 },
  { name: "Vegetarian soup", price: 4.8 },
  { name: "Pureed root vegetable soup with smoked cheese", price: 8.0 },
];

//Check if name is valid
const validateFoodName = (foodName) => {
  const foodPattern = /^[A-ZÖÄÅ]{1}[a-zöäåA-ZÖÄÅ0-9 \-\/,() ]{3,63}$/;
  return foodPattern.test(foodName);
};
for (const food of foods) {
  console.log("Validate:", food.name, validateFoodName(food.name));
}

//Sort array by price from highest to lowest
const sortedFoods = foods.sort((a, b) => b.price - a.price);
console.log("sorted:", sortedFoods, sortedFoods);

//Filter foods by cost (less than 5€)
console.log(
  "Filter",
  foods.filter((food) => food.price < 5)
);

//Raise price by 15% (map)
console.log(
  "Map",
  foods.map((food) => food.price * 1.15)
);

//Reduce
const foodsAll = foods.reduce((a, b) => {
  return { price: a.price + b.price };
});
console.log("Reduce", foodsAll.price);
