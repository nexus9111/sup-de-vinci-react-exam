import { useEffect, useState } from 'react';

import fetcher from '../lib/apiFetcher';

import BigMealCard from './BigMealCard';
import Loading from './Loading';

const RandomBigMeal = () => {
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
                <BigMealCard meal={meal} />
            ) : (
                <Loading />
            )}
        </>
    );
}

export default RandomBigMeal;