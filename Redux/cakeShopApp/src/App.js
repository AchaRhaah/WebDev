import React from "react";
import "./App.css"
import { Provider } from 'react-redux'
import store from "./redux/store";
// import CakeContainer from "./components/CakeContainer";
import HooksCakeConainer from "./components/HooksCakeConainer";
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <HooksCakeConainer />
      </div>
    </Provider>
  );
}

export default App;
