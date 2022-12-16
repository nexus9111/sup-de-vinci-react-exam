import { useEffect, useState } from 'react';
import fetcher from '../lib/apiFetcher';

import LittleMealCard from './LittleMealCard';

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
            {meal && (
                <>
                    <LittleMealCard meal={meal} />
                </>
            )}
        </>
    );
}

export default RandomLittleMeal;