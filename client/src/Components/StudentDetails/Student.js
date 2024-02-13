import React from "react";
import { Header } from "rsuite";
import SearchBar from "../Search/Search";

function Student() {
  return (
    <div>
      <Header>
        <SearchBar />
      </Header>
      Student Details
    </div>
  );
}

export default Student;
