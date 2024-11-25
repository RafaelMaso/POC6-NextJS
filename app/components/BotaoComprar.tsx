'use client';

const BotaoComprar = ({ total, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'var(--primary)',
        color: 'var(--button-text)',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '20px',
      }}
    >
      Comprar - R$ {total.toFixed(2)}
    </button>
  );
};

export default BotaoComprar;
