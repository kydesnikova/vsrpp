import React from 'react';
import TablesFU from './TablesFU';
import store from '../store';

const ProtectedRoute = () => {
  const auth = store.getState().auth;
  if(auth){
    return <TablesFU></TablesFU>;
  } else{
    window.location.href = '/';
  };
}

export default ProtectedRoute;