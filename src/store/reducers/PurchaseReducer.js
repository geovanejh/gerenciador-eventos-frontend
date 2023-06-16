const INITIAL_STATE = {
  event_id: "",
  quantity_ing: "",
  user_id: "",
  title: "",
  description: "",
};

const PurchaseReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_EVENT") {
    return {
      ...state,
      event_id: action.event_id,
      quantity_ing: action.quantity_ing,
      user_id: action.user_id,
      title: action.title,
      description: action.description,
    };
  }

  if (action.type === "SET_QUANTITY") {
    return {
      ...state,
      quantity_ing: action.quantity_ing,
    };
  }

  return state;
};

export default PurchaseReducer;
