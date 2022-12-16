import { useEffect, useState } from "react";
import { useParams } from "react-router";

import fetcher from "../lib/apiFetcher";

import DisplayMeal from "../components/DisplayMeal";
import Header from "../components/Header";
import Loading from "../components/Loading";

import '../styles/MealPage.css'

const MealDetail = () => {
    const { id } = useParams();
    const [meal, setmeal] = useState();

    useEffect(() => {
        (async () => {
            let data = await fetcher.getMealById(id);
            setmeal(data.meals[0]);
        })();
    }, [id]);

    return (
        <>
            <Header />
            {meal ? (
                <DisplayMeal meal={meal} />
            ) : (
                <Loading />
            )}
        </>
    );
}

export default MealDetail;