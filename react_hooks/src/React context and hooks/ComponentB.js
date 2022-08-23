import React from "react";
import { ComponentA } from "./ComponentA";
export const nameContext = React.createContext();

export function ComponentB({ name }) {
  return (
    <div>
      <nameContext.Provider value={name}>
        <ComponentA />
      </nameContext.Provider>
    </div>
  );
}
