import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from './redux/store';
import firebase from "firebase/app";

import App from "./App";
import {
  createFirestoreInstance,
} from "redux-firestore";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { firebaseConfig } from "./config/fbConfig";
const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
