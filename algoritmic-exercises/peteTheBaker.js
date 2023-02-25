function cakes(recipe, available) {
    return Math.min(...Object.keys(recipe).map(ingredient => {
      return available[ingredient] ? Math.floor(available[ingredient] / recipe[ingredient]) : 0;
    }));
}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});