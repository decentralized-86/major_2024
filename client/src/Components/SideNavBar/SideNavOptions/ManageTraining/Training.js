import React, { useState } from "react";
import TrainingList from "../ListTable/TrainingList";
import { mockUsers } from "../ListTable/mock";
import SearchBar from "../Search/Search";
import { Header } from "rsuite";

const data = mockUsers(200);

function Training() {
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
        <SearchBar
          data={data}
          onSearch={handleSearch}
          clearSelectedId={clearSelectedIds}
        />
      </Header>
      <TrainingList data={data} selectedId={selectedId} />
    </div>
  );
}

export default Training;
