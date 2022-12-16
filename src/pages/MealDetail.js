import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DisplayMeal from "../components/DisplayMeal";
import Header from "../components/Header";
import fetcher from "../lib/apiFetcher";
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
            {meal && (
                <DisplayMeal meal={meal} />
            )}
        </>
    );
}

export default MealDetail;