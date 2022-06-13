import React from 'react'
import {createRoot} from "react-dom/client";
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'

import App from './App'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store= createStore(reducers, compose(applyMiddleware(thunk)));


// ReactDOM.createRoot(
//     <Provider store={store}>
//      <React.StrictMode>
//         <App />
//         </React.StrictMode>
//     </Provider>
// , document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);