import React from "react";
import Todopresenter from "./Todo.presenter";
import { useAuth } from "../../../utils/hook/useAuth";

const Todocontainer = () => {
  useAuth();
  return <Todopresenter />;
};

export default Todocontainer;
