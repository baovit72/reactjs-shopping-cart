import { ADD_TO_CART,SEARCH_TITLE } from "../actions/action-types/cart-actions";
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};

export const searchTitle = searchText => {
  return {
    type: SEARCH_TITLE,
    searchText
  };
};
