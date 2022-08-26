import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Posts from '../pages/Posts';
import Users from '../pages/Users';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="users" element={<Users />} />
      <Route path="posts" element={<Posts />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default AppRoutes;
