import React from 'react';

const Loader = ({color='text-primary'}:{color:string}) => {
  return (
    <div className="container my-4 d-flex justify-content-center">
      <div className={`spinner-border ${color}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
