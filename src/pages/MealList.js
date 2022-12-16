import { useEffect, useState } from "react";

import fetcher from "../lib/apiFetcher";

import LittleMealCard from "../components/LittleMealCard";
import Header from "../components/Header";
import Loading from "../components/Loading";

import '../styles/MealPage.css'
import '../styles/MealCard.css'

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
            {meals ? (
                <div className="cards">
                    {(meals.map((meal) => (
                        <LittleMealCard meal={meal} />
                    )))}
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default MealList;