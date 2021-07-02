import * as actionsType from "./../constants/ui";
export const showLoading = () => {
  return {
    type: actionsType.SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: actionsType.HIDE_LOADING,
  };
};
