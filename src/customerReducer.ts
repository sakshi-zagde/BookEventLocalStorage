
import { ADD_CUSTOMER } from './customerActions';

const initialState: any[] = [];
//  how the application's state changes in response to actions sent to the store
const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default customerReducer;
