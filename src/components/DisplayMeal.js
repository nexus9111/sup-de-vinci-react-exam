import '../styles/MealPage.css';

const DisplayMeal = (props) => {
    const getIngredients = (meal) => {
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

    return (
        <div class="page">
            <img class="page-image" src={props.meal.strMealThumb} alt=" de la page" />
            <div class="page-content">
                <h1 class="page-title">{props.meal.strMeal}</h1>
                <h2 class="page-subtitle">{props.meal.strCategory} - {props.meal.strArea}</h2>
                <p class="page-description">{props.meal.strInstructions}</p>

            </div>
            <ul class="page-ingredients">
                {getIngredients(props.meal).map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayMeal;