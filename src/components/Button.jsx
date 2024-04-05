import React from 'react';
import { ButtonStyle } from '../styles/button.styles'; // Adjust the path as necessary

const Button = ({ children, onClick, type = 'button', disabled = false }) => {
  return (
    <ButtonStyle type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
