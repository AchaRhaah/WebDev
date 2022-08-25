import React from "react";
import "./App.css"
import { Provider } from 'react-redux'
import store from "./redux/store";
// import CakeContainer from "./components/CakeContainer";
import HooksCakeConainer from "./components/HooksCakeConainer";
import IcecreamContainer from "./components/IcecreamContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
