const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'
const url = {
    random: "/random.php",
    searchByName: "/search.php?s=",
    searchById: "/lookup.php?i=",
    categories: "/categories.php",
    searchByIngredient: "/filter.php?i=",
    searchByCategory: "/filter.php?c=",
}

const fetcher = async (url) => {
    let data = await fetch(BASE_URL + url);
    return await data.json();
}

exports.getRandomMeal = async () => {
    return await fetcher(url.random);
}

exports.getMealByName = async (name) => {
    return await fetcher(url.searchByName + name);
}

exports.getMealById = async (id) => {
    return await fetcher(url.searchById + id);
}

exports.getAllMeal = async () => {
    return await fetcher(url.searchByName);
}

exports.getCategories = async () => {
    return await fetcher(url.categories);
}

exports.getMealByIngredient = async (ingredient) => {
    return await fetcher(url.searchByIngredient + ingredient);
}

exports.getMealByCategory = async (category) => {
    return await fetcher(url.searchByCategory + category);
}
