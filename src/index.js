import React from "react";
import ReactDom from "react-dom"
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import {rootReducer} from "./redux/rootReducer";
import App from "./App";
import "./styles.css"

const store = createStore(
    rootReducer, compose(
        applyMiddleware(
            thunk
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDom.render(app, document.getElementById("root"));