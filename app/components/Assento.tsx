'use client';

import React, { useState } from 'react';

const Assento = ({ numero, disponivel, onSelect }: any) => {
  const [selecionado, setSelecionado] = useState(false);

  const handleClick = () => {
    if (disponivel) {
      setSelecionado(!selecionado);
      onSelect(numero, !selecionado);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: selecionado
          ? 'var(--primary)'
          : disponivel
          ? 'var(--available)'
          : 'var(--unavailable)',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px',
        cursor: disponivel ? 'pointer' : 'not-allowed',
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'var(--foreground)',
      }}
    >
      {numero}
    </div>
  );
};

export default Assento;
