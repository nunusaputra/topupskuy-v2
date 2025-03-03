export const ADD_TOPUP = "ADD_TOPUP";

export const addTopup = (newTopup) => {
  return {
    type: ADD_TOPUP,
    payload: newTopup,
  };
};
