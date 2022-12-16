import { Link } from 'react-router-dom';
import '../styles/MealPage.css';

const DisplayMealByCategory = (props) => {
    const mealUrl = "/meal/id/" + props.meal.idMeal

    return (
        <div className="page">
            <img className="page-image" src={props.meal.strMealThumb} alt=" de la page" />
            <div className="page-content">
                <h1 className="page-title">{props.meal.strMeal}</h1>
                <Link className="details-link" to={mealUrl}>Details</Link>

            </div>
        </div>
    );
}

export default DisplayMealByCategory;