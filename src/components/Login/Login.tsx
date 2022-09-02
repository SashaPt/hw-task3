import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Context from '../../context/context';
import http from '../../http';

const Login = () => {
  const [login, setLogin] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const { setOpenModal, setIsLoginUser } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const authorization = async () => {
    const data = { email: login, password: password };
    const authorizationData = await http.post(
      `${isLogin ? 'login' : 'registration'}`,
      data
    );
    if (authorizationData.data.token) {
      console.log('authorization');
      localStorage.setItem('token', authorizationData.data.token);
      setIsLoginUser(true);
      setOpenModal(false);
    }
    if (authorizationData.data?.email) {
      alert('Congratulate you with successfull registration!');
      setLogin('');
      setPassword('');
    }
  };
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <Link to={isLogin ? 'registration' : 'login'}>
          {isLogin
            ? 'Do not have an account? Registration!'
            : 'Have an account? Login!'}
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          type="button"
          className="btn btn-secondary m-3"
          data-bs-dismiss="modal"
          onClick={() => setOpenModal(false)}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={() => authorization()}
        >
          {isLogin ? 'Login' : 'Registration'}
        </button>
      </div>
    </form>
  );
};

export default Login;
