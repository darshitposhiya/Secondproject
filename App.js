import React from "react";
import Routes from "./src/Navigation/Routes";
import { Provider } from "react-redux";
import { Store } from "./src/Redux/Store";


const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>



  )
};


export default App;