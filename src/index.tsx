import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

let store = setupStore()
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);