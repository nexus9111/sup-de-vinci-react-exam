import { useEffect, useState } from "react";
import LittleMealCard from "../components/LittleMealCard";
import fetcher from "../lib/apiFetcher";
import '../styles/MealPage.css'
import '../styles/MealCard.css'
import { useParams } from "react-router";
import Header from "../components/Header";

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
                <h3>Loading...</h3>
            )}

        </>
    );
}

export default MealSearch;