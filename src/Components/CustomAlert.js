import { useState } from 'react';

export const CustomAlert = ({ titulo, mensaje }) => {
  const [close, setClose] = useState(true);
  return (
    <div className="alert-frame">
      <div className="alert">
        <h3>{titulo}</h3>
        <p>{mensaje}</p>
        <span
          className="alert-close-btn"
          onClick={() => {
            setClose(!close);
          }}
        >
          Aceptar
        </span>
      </div>
    </div>
  );
};
