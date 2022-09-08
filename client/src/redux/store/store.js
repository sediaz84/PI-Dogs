import reducer from '../reducer/reducer.js';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';



const store =  createStore(reducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store;