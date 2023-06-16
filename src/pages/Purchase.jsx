import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleQntTickets } from "../store/actions/PurchaseAction";

const Purchase = ({ dispatch, purchase }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(10);

  const handlePurchase = () => {
    handleQntTickets(dispatch, quantity, purchase);
    navigate("/payment");
  };

  return (
    <div>
      Purchase
      <p>infos do evento aqui</p>
      <label htmlFor="qnt_ingresso">Quantia de ingressos: </label>
      <input type="text" id="qnt_ingresso" />
      <button onClick={() => handlePurchase()}>Confirmar compra</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  purchase: state.PurchaseReducer,
});

export default connect(mapStateToProps)(Purchase);
