import { useEffect, useState } from "react";
import LittleMealCard from "../components/LittleMealCard";
import fetcher from "../lib/apiFetcher";
import '../styles/MealPage.css'
import '../styles/MealCard.css'
import Header from "../components/Header";

const MealList = () => {
    const [meals, setmeals] = useState([]);

    useEffect(() => {
        (async () => {
            let data = await fetcher.getAllMeal();
            setmeals(data.meals);
        })();
    }, []);

    return (
        <>
            <Header />
            {meals && (
                <div className="cards">
                    {(meals.map((meal) => (
                        <LittleMealCard meal={meal} />
                    )))}
                </div>
            )}
        </>
    );
}

export default MealList;