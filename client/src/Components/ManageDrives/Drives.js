import React, { useState } from "react";
import ListTable from "../ListTable/ListTable";
import { mockUsers } from "../ListTable/mock";
import SearchBar from "../Search/Search";
import { Header } from "rsuite";

const data = mockUsers(200);

function Drives() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <Header>
        <SearchBar data={data} onSearch={(id) => setSelectedId(id)} />
      </Header>
      <ListTable data={data} selectedId={selectedId} />
    </div>
  );
}

export default Drives;
