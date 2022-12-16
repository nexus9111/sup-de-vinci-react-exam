import { useEffect, useState } from 'react';
import fetcher from '../lib/apiFetcher';

import BigMealCard from './BigMealCard';

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
            {meal && (
                <>
                    <BigMealCard meal={meal} />
                </>
            )}
        </>
    );
}

export default RandomBigMeal;