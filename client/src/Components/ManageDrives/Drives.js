import React, { useState } from "react";
import ListTable from "../ListTable/ListTable";
import { mockUsers } from "../ListTable/mock";
import SearchBar from "../Search/Search";
import { Header } from "rsuite";

const data = mockUsers(200);

function Drives() {
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
        <SearchBar data={data} onSearch={handleSearch} />
      </Header>
      <ListTable
        data={data}
        selectedId={selectedId}
        clearSelectedId={clearSelectedIds}
      />
    </div>
  );
}

export default Drives;
