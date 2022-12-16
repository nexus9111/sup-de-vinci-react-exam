import mealUtils from '../lib/mealUtils';

import '../styles/MealPage.css';

const DisplayMeal = (props) => {
    return (
        <div class="page">
            <img class="page-image" src={props.meal.strMealThumb} alt=" de la page" />
            <div class="page-content">
                <h1 class="page-title">{props.meal.strMeal}</h1>
                <h2 class="page-subtitle">{props.meal.strCategory} - {props.meal.strArea}</h2>
                <p class="page-description">{props.meal.strInstructions}</p>

            </div>
            <ul class="page-ingredients">
                {mealUtils.getIngredients(props.meal).map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayMeal;