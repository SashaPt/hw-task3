import React, { Dispatch, SetStateAction } from 'react';

const ShowFormButton = ({showUserForm, setShowUserForm}: {showUserForm: boolean, setShowUserForm: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <button
        className="btn btn-success my-3"
        onClick={() => setShowUserForm(!showUserForm)}
      >
        Add new user
      </button>
  )
};

export default ShowFormButton;