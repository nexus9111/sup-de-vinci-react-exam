exports.getIngredients = (meal) => {
    let ingredients = [];
    for (const key in meal) {
        if (key.includes('strIngredient') && meal[key]) {
            ingredients.push(meal[key]);
        }
    }
    // make all ingredients unique
    ingredients = [...new Set(ingredients)];
    return ingredients;
}