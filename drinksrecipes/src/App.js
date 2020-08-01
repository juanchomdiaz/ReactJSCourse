import React from 'react';
import Header from './components/Header';
import RecipesList from './components/RecipesList';

import Formulario from './components/Formulario';
import './assets/bootstrap.min.css';

import CategoriesProvider from './context/CategoriesContext';
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>

            <RecipesList />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
