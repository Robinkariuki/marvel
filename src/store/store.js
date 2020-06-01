import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/comicsReducer'
const store = createSrore(reducer,composeWithDevTools(applyMiddleware(thunk),));




export default  store