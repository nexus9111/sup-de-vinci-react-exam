import { Link } from 'react-router-dom';

import Header from '../components/Header';
import RandomBigMeal from '../components/RandomBigMeal';
import RandomLittleMeal from '../components/RandomLittleMeal';

import '../styles/MealCard.css'

const Home = () => {
    return (
        <>
            <Header />
            <RandomBigMeal />
            <div className="cards">
                <RandomLittleMeal />
                <RandomLittleMeal />
                <RandomLittleMeal />
            </div>
            <Link to="/meal/all" className="card-button">Voir plus</Link>
        </>
    );
}

export default Home;