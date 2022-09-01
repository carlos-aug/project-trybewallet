// Coloque aqui suas actions
export const LOG_IN = 'LOG_IN';
export const REQUEST_INFO_COINS = 'REQUEST_INFO_COINS';
export const RECEIVED_INFO_COINS = 'RECEIVED_INFO_COINS';

export const getUser = (email) => ({ type: LOG_IN, email });

export const requestInfoCoins = () => ({ type: REQUEST_INFO_COINS });

export const receivedInfoCoins = (currencies) => ({
  type: RECEIVED_INFO_COINS,
  currencies,
});

export function fetchApi() {
  return async (dispatch) => {
    dispatch(requestInfoCoins());
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    const apiArray = Object.keys(response);
    const apiArrayFiltered = apiArray.filter((item) => item !== 'USDT');
    return dispatch(receivedInfoCoins(apiArrayFiltered));
  };
}
