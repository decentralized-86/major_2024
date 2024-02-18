import React, { useState, useEffect } from "react";
import StudentList from "../ListTable/StudentList";
import { mockUsers } from "../ListTable/mock";
import SearchBar from "../Search/Search";
import { Header } from "rsuite";
import Axios from "axios";

const data = mockUsers(200);

function StudentListTable() {
  const [selectedId, setSelectedId] = useState([]);
  const handleSearch = (record) => {
    setSelectedId((prevIds) => [...prevIds, record]); // update the state with the selected ID
  };
  // const clearSelectedIds = () => {
  //   setSelectedId([]); // clear the array
  // };
  return (
    <div>
      <Header>
        <SearchBar
          data={data}
          onSearch={handleSearch}
          // clearSelectedId={clearSelectedIds}
        />
      </Header>
      <StudentList data={data} selectedId={selectedId} />
    </div>
  );
}

export default StudentListTable;
