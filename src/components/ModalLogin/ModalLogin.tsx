import React, { useContext } from 'react';
import Context from '../../context/context';
import Login from '../Login/Login';

const ModalLogin = () => {
  const { openModal, setOpenModal } = useContext(Context);
  return (
    <div
      style={{ backgroundColor: 'rgb(0, 0, 0, 0.5)' }}
      className={`modal ${
        openModal && 'd-flex justify-content-center align-items-center'
      }`}
      tabIndex={-1}
      onClick={() => setOpenModal(false)}
    >
      <div className="modal-dialog" onClick={(event) => event.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setOpenModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            <Login/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
