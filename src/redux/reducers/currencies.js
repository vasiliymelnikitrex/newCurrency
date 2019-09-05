import {SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT} from '../actions/ationTypes';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'BLR',
  amount: 100,
  conversions: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {...state, amount: action.amount || 0};
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    default:
      return state;
  }
};

export default reducer;
