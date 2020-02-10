const setTilesFilter = (sFilter) => {
  return {
      type: "SET_TILES_FILTER",
      payload: sFilter
  };
};

const resetTilesFilter = () => {
  return {
      type: "RESET_TILES_FILTER"
  };
};

export default {
  setTilesFilter,
  resetTilesFilter
};