import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

//MiddleWare:中间件-->调用异步接口
//redux-thunk:dispatch（action函数）
const configureStore = preloadedState => {
  return createStore(reducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
