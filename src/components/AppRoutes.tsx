import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Context from '../context/context';
import Main from '../pages/Main';
import Posts from '../pages/Posts';
import Users from '../pages/Users';

const AppRoutes = () => {
  const { isLoginUser } = useContext(Context);
  return (
    <>
      {isLoginUser ? (
        <Routes>
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<Main />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Main />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
