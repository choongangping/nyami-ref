import React from 'react';
import styles from './InputField.module.css';

function InputField({ type, name, placeholder, customStyles }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      style={customStyles}
    />
  );
}

export default InputField;
