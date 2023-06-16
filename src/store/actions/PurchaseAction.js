import { api } from "../../api";
import { setLoading } from "./UtilsAction";

export const handleGetTicketInfo = async (dispatch, id, user_id, quantity) => {
  setLoading(dispatch);
  try {
    const { data } = await api.get(`/api/eventos/${id}`);
    dispatch({
      type: "SET_EVENT",
      event_id: data.ID,
      quantity_ing: "",
      user_id: user_id,
      title: data.titulo,
      description: data.descricao,
    });
  } catch (error) {}
  setLoading(dispatch);
};

export const handleQntTickets = (dispatch, quantity_ing, purchase) => {
  console.log("aqui:", purchase);
  dispatch({
    type: "SET_QUANTITY",
    quantity_ing: quantity_ing,
    event_id: purchase.event_id,
    user_id: purchase.user_id,
    title: purchase.title,
    description: purchase.description,
  });
};
