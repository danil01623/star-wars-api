import React from "react";
import Root from "./Routes/index";
import Header from "./Layout/Header";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Root />
    </div>
  );
};

export default App;
