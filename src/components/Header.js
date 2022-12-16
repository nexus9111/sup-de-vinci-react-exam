import { Link, useNavigate } from "react-router-dom";

import '../styles/Header.css'

const Header = () => {
    const navigation = useNavigate();
    const searchMeal = async (e) => {
        const searchTerm = e.target.search.value
        e.preventDefault();
        navigation(`/meal/name/${searchTerm}`);
    }

    const paths = [
        { path: "/", name: "Home" },
        { path: "/meal/all", name: "Meal List" },
        { path: "/meal/categories", name: "Meal Categories" },
    ]

    return (
        <>
            <div className="header">
                <div className="header-left">
                    {paths.map((path) => {
                        return (
                            <Link className="header-navigation" to={path.path} key={path.path}>{path.name}</Link>
                        )
                    })}
                </div>
                <div className="header-right">
                    <form onSubmit={searchMeal}>
                        <input className="search searchInput" type="text" name="search" placeholder="Search for a meal" />
                        <button className="search searchButton" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Header;