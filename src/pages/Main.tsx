import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../components/App.css';

const Main = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="container mx-auto">
      <h1 className='text-secondary text-b'>Wellcome on start page!</h1>
      {showButton && (
        <button className="btn btn-primary" onClick={() => setShowMessage(true)}>Start</button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div className="bg-dark text-light w-25 mx-auto card p-3">
            <ul style={{paddingLeft: 0}}>
              <li className="list-group-item">
                <Link className="nav-link" to="users">
                 Users
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="nav-link" to="posts">
                  Posts
                </Link>
              </li>
            </ul>
          <button className='btn btn-danger' onClick={() => setShowMessage(false)}>Close</button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Main;
