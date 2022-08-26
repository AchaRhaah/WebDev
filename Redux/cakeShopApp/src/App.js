import React from "react";
import "./App.css"
import { Provider } from 'react-redux'
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
// import HooksCakeConainer from "./components/HooksCakeConainer";
// import IcecreamContainer from "./components/IcecreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
