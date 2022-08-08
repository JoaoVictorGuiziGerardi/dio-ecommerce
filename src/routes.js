import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Carrinho, Contato } from './pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/carrinho"
        element={<Carrinho />}
      />
      <Route
        path="/contato"
        element={<Contato />}
      />
    </Routes>
  )
}

export default AppRoutes;
