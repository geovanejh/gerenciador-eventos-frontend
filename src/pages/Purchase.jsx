import React from "react";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
  const navigate = useNavigate();

  return (
    <div>
      Purchase
      <button onClick={() => navigate("/payment")}>Confirmar compra</button>
    </div>
  );
};

export default Purchase;
