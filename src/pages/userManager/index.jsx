import React from "react";
import { Provider } from "mobx-react";
import store from "./stores/";
import UserManager from "./components/userManager";
import CatchError from "../../components/catchError";

const Index = (props) => {
  return (
    <Provider {...store}>
      <CatchError>
        <UserManager {...props}></UserManager>
      </CatchError>
    </Provider>
  );
};

export default Index;
