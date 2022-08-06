import React, { useContext } from "react";
import {UserContext, ChannelContext} from '../../App'
import ComponentF from "./ComponentF";
const ComponentE = () => {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      <br />
      {user} - {channel}
      {/* <ComponentF /> */}
    </div>
  );
};

export default ComponentE;
