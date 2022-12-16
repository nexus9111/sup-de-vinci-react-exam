import { useEffect, useState } from 'react';

import fetcher from '../lib/apiFetcher';

import LittleMealCard from './LittleMealCard';
import Loading from './Loading';

const RandomLittleMeal = () => {
    const [meal, setmeal] = useState();

    useEffect(() => {
        (async () => {
            let data = await fetcher.getRandomMeal();
            setmeal(data.meals[0]);
        })();
    }, []);

    return (
        <>
            {meal ? (
                <LittleMealCard meal={meal} />
            ) : (
                <Loading />
            )}
        </>
    );
}

export default RandomLittleMeal;