import { Link } from 'react-router-dom';

import '../styles/MealCard.css';

const LittleMealCard = (props) => {
    const mealUrl = "/meal/id/" + props.meal.idMeal

    return (
        <div className="card">
            <img className="card-image" src={props.meal.strMealThumb} alt="meal" />
            <h1 className="card-title">{props.meal.strMeal}</h1>
            <h2 className="card-subtitle">{props.meal.strCategory} - {props.meal.strArea}</h2>
            <Link to={mealUrl} className="card-button">Voir plus</Link>
        </div>
    

    );
}

export default LittleMealCard;