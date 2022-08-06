import "./App.css";
import React from 'react'
import ComponentC from "./hooks/useContext/ComponentC";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Acha"}>
        <ChannelContext.Provider value={"Rha'ah"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default App;
