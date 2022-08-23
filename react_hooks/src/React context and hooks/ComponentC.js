import React from "react";
import { nameContext } from "./ComponentB";

export function ComponentC() {
  return (
    <div>
      <nameContext.Consumer>{(value) => <h1>{value}</h1>}</nameContext.Consumer>
    </div>
  );
}
