import * as actionsType from "./../constants/pagination";

export const getTotalPage = (value) => {
  return {
    type: actionsType.GET_TOTAL_PAGE,
    payload: { data: value },
  };
};
