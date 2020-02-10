import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import tilesReducer from './tilesReducer';

const rootReducer = combineReducers({
  tiles: tilesReducer,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
