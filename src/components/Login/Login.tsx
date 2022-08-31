import React, { useState } from 'react';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  console.log(login, password)
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
    </form>
  );
};

export default Login;
