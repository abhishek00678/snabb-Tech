import React from "react";
import Fields from "./components/Fields";
import UserTable from "./components/UserTable";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Fields />
      <UserTable />
    </div>
  );
};

export default App;
