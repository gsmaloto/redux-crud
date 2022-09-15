import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Table from "./components/Table";
import { useSelector } from "react-redux";

function App() {
  const userLogged = useSelector((state) => state.auth);
  // console.log("user logged ");
  return (
    <div className="App">
      {!userLogged.id ? (
        <Login />
      ) : (
        <>
          <Header />
          <Table />
        </>
      )}
    </div>
  );
}

export default App;
