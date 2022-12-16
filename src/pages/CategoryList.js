import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import fetcher from "../lib/apiFetcher";

import '../styles/CategoryPage.css'

const MealCategoryList = () => {
    const { id } = useParams();
    const [categories, setcategories] = useState();

    useEffect(() => {
        (async () => {
            let data = await fetcher.getCategories();
            setcategories(data.categories);
        })();
    }, [id]);

    return (
        <>
            <Header />
            <ul>
            {categories ? (
                categories.map((category) => (
                    // <li key={category.idCategory}>{category.strCategory}</li>
                    <li>
                        <Link className="category" to={`/meal/categories/${category.strCategory}`} key={category.idCategory}>{category.strCategory}</Link>
                    </li>
                ))
            ) : (
                <h3>Loading...</h3>
            )}
            </ul>
            
        </>
    );
}

export default MealCategoryList;