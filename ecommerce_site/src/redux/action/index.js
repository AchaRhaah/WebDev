export const addCart = (product) => {
  return {
    type: "AddCART",
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
