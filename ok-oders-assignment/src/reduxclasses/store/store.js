import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import AsteroidReducers from '../reducers/AsteroidReducers';

const store = createStore(AsteroidReducers, applyMiddleware(thunk));

export default store;