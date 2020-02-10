const tilesReducer = (state = '', action) => {
  switch(action.type){
      case 'SET_TILES_FILTER':
        return {
            ... state,
            sFilter: action.payload
        };
      case "RESET_TILES_FILTER":
        return {
            ... state,
            sFilter: ''
        };
      default:
          return state;
  }
};

export default tilesReducer;
