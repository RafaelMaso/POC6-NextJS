'use client';

import React, { useState } from 'react';
import Assento from './Assento';
import BotaoComprar from './BotaoComprar';

const Cinema = ({ dados }: any) => {
  const [selecionados, setSelecionados] = useState<number[]>([]);

  const handleSelectAssento = (numero: number, isSelected: boolean) => {
    setSelecionados((prev) =>
      isSelected ? [...prev, numero] : prev.filter((n) => n !== numero)
    );
  };

  const handleComprar = () => {
    alert('Compra realizada com sucesso!');
  };

  const total = selecionados.length * dados.preco;

  const fileiras = [
    [null, null, 1, 2, 3, 4, null, null],
    [null, 5, 6, 7, 8, 9, 10, null],
    [11, 12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34],
    [null, 35, 36, 37, 38, 39, 40, null],
    [null, null, 41, 42, 43, 44, null, null],
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ color: 'var(--foreground)', fontSize: '32px', textAlign: 'center' }}>
        {dados.titulo}
      </h1>
      <p style={{ color: 'var(--foreground)', fontSize: '20px', textAlign: 'center' }}>
        {dados.horario}
      </p>

      <div
        className="assentos-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: '20px',
          gap: '40px',
        }}
      >
        <div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 40px)',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            {fileiras.flatMap((fileira, i) =>
              fileira.map((assento, j) =>
                assento ? (
                  <Assento
                    key={`${i}-${j}`}
                    numero={assento}
                    disponivel={dados.assentos[assento - 1].disponivel}
                    onSelect={handleSelectAssento}
                  />
                ) : (
                  <div key={`${i}-${j}`} style={{ width: '40px', height: '40px' }} />
                )
              )
            )}
          </div>
          <div
            style={{
              marginTop: '20px',
              width: '100%',
              height: '10px',
              backgroundColor: 'var(--secondary)',
              borderRadius: '4px',
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10px',
              gap: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'var(--available)',
                  borderRadius: '4px',
                }}
              ></div>
              <span style={{ color: 'var(--foreground)' }}>Livre</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'var(--primary)',
                  borderRadius: '4px',
                }}
              ></div>
              <span style={{ color: 'var(--foreground)' }}>Selecionado</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'var(--unavailable)',
                  borderRadius: '4px',
                }}
              ></div>
              <span style={{ color: 'var(--foreground)' }}>Indisponível</span>
            </div>
          </div>
        </div>
        <div className="sinopse-detalhes" style={{ maxWidth: '400px', textAlign: 'left' }}>
          <p
            style={{
              color: 'var(--foreground)',
              fontSize: '16px',
              marginTop: '10px',
              lineHeight: '1.5',
            }}
          >
            {dados.sinopse}
          </p>
          <p
            style={{
              color: 'var(--foreground)',
              fontSize: '16px',
              marginTop: '20px',
            }}
          >
            <strong>Data de lançamento:</strong> {dados.dataLancamento}
          </p>
          <p
            style={{
              color: 'var(--foreground)',
              fontSize: '16px',
              marginTop: '10px',
            }}
          >
            <strong>Direção:</strong> {dados.direcao}
          </p>
          <BotaoComprar className="botao-comprar" total={total} onClick={handleComprar} />
        </div>
      </div>
    </div>
  );
};

export default Cinema;