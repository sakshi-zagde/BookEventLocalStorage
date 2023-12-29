// customerActions.ts
export const ADD_CUSTOMER = 'ADD_CUSTOMER';

export const addCustomer = (customer: any) => {
  return {
    type: ADD_CUSTOMER,
    payload: customer,
  };
};

