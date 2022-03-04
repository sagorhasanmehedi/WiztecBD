import { createContext } from "react";
import usefirebase from "../Hook/Usefirebase";

export const Mycontext = createContext();

const Authprovider = ({ children }) => {
  return (
    <Mycontext.Provider value={usefirebase()}>{children}</Mycontext.Provider>
  );
};

export default Authprovider;
