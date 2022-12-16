import { useEffect, useState } from "react";
import { useParams } from "react-router";

import fetcher from "../lib/apiFetcher";

import DisplayMealByCategory from "../components/DisplayMealByCategory";
import Header from "../components/Header";
import Loading from "../components/Loading";

import '../styles/MealPage.css'

const MealByCategory = () => {
    const { category } = useParams();
    const [meal, setmeal] = useState();

    useEffect(() => {
        (async () => {
            console.log(category);
            let data = await fetcher.getMealByCategory(category);
            setmeal(data.meals);
        })();
    }, [category]);

    return (
        <>
            <Header />
            {meal ? (
                <div className="cards">
                    {(meal.map((meal) => (
                        <DisplayMealByCategory meal={meal} />
                    )))}
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default MealByCategory;