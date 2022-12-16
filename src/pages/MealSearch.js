import { useEffect, useState } from "react";
import { useParams } from "react-router";

import fetcher from "../lib/apiFetcher";

import LittleMealCard from "../components/LittleMealCard";
import Header from "../components/Header";
import Loading from "../components/Loading";

import '../styles/MealCard.css'
import '../styles/MealPage.css'

const MealSearch = () => {
    const { name } = useParams();
    const [meals, setmeals] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        (async () => {
            let data = await fetcher.getMealByName(name);
            setmeals(data.meals);
            setloading(false);
        })();
    }, [name]);

    return (
        <>
            <Header />
            {!loading ? (
                <>
                    {meals && meals.length > 0 ? (
                        <div className="cards">
                            {(meals.map((meal) => (
                                <LittleMealCard meal={meal} />
                            )))}
                        </div>
                    ) : (
                        <h3>Sorry</h3>
                    )}
                </>
            ) : (
                <Loading />
            )}

        </>
    );
}

export default MealSearch;