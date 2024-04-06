import React from 'react';
import { ButtonStyle } from '../styles/button.styles'; 

const Button = ({ children, onClick, type = 'button', disabled = false }) => {
  return (
    <ButtonStyle type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
