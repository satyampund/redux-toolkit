import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import TableData from './components/TableData';

import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={!isAuth ? <Auth /> : <UserProfile />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/table" element={<TableData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
