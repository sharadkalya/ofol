import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './routes';

const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App;
