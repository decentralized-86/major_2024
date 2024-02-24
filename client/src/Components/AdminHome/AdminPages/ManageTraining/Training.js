import React, { useState } from "react";
import SearchBar from "../StudentDetails/Search/Search";
import { Header } from "rsuite";

const data = 1;

function AdminManageTrainings() {
  const [selectedId, setSelectedId] = useState([]);
  const handleSearch = (record) => {
    setSelectedId((prevIds) => [...prevIds, record]); // update the state with the selected ID
  };
  const clearSelectedIds = () => {
    setSelectedId([]); // clear the array
  };
  return (
    <div>
      <Header>
        {/* <SearchBar
          data={data}
          onSearch={handleSearch}
          clearSelectedId={clearSelectedIds}
        /> */}
      </Header>
      Manage Training
    </div>
  );
}

export default AdminManageTrainings;
