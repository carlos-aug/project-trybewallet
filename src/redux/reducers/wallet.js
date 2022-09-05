// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RECEIVED_INFO_COINS':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'SAVE_INFO':
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case 'REMOVE_INFO_COINS':
    return {
      ...state,
      expenses: [...action.expenses],
    };
  default:
    return state;
  }
};

export default walletReducer;
