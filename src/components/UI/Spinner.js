import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  const spinnerStyles = {
    width: '200px',
    margin: 'auto',
    display: 'block',
  };
  return <img src={spinner} style={spinnerStyles} alt="Loading" />;
};

export default Spinner;
