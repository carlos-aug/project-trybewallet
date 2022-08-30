// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOG_IN':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default loginReducer;
