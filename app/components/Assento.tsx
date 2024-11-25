import React, { useState } from "react";

interface AssentoProps {
  numero: number;
  disponivel: boolean;
  onSelect: (numero: number, isSelected: boolean) => void;
}

const Assento = ({ numero, disponivel, onSelect }: AssentoProps) => {
  const [selecionado, setSelecionado] = useState(false);

  const handleClick = () => {
    if (!disponivel) return;
    setSelecionado(!selecionado);
    onSelect(numero, !selecionado);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        cursor: disponivel ? "pointer" : "not-allowed",
        backgroundColor: !disponivel
          ? "#e97bec"
          : selecionado
          ? "var(--primary)"
          : "var(--available)",
        color: "var(--foreground)",
      }}
    >
      {numero}
    </div>
  );
};

export default Assento;
