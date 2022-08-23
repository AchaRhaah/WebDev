import React from "react";
import "./App.css"
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./redux/cake/HooksCakeContainer";
function App() {
  return (
    <div className="App">
      <HooksCakeContainer />
    </div>
  );
}

export default App;
