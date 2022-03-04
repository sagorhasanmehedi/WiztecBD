import { Mycontext } from "../Context/Authprovider";
import { useContext } from "react";

const UseAuth = () => {
  return useContext(Mycontext);
};

export default UseAuth;
