import { ADD_TOPUP } from "../action/topupAction";

const initialState = {
  topup: null,
};

const topupSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPUP:
      return {
        topup: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

export default topupSlice;
