import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import MealCategoryList from './pages/CategoryList';

import Home from './pages/Home';
import MealByCategory from './pages/MealByCategory';
import MealDetail from './pages/MealDetail';
import MealList from './pages/MealList';
import MealSearch from './pages/MealSearch';

function App() {

  return (
    <BrowserRouter>
      <div className="content-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/all" element={<MealList />} />
          <Route path="/meal/categories" element={<MealCategoryList />} />
          <Route path="/meal/categories/:category" element={<MealByCategory />} />
          <Route path="/meal/id/:id" element={<MealDetail />} />
          <Route path="/meal/name/:name" element={<MealSearch />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
