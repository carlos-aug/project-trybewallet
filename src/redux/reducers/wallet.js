// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RECEIVED_INFO_COINS':
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default walletReducer;
