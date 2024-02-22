import React, { useState } from "react";
import SearchBar from "../StudentDetails/Search/Search";
import { Header } from "rsuite";

const data = 0;

function AdminJobPosts() {
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
      Job Post
    </div>
  );
}

export default AdminJobPosts;
