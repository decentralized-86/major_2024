import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoordinatorList from "./CoordinatorList";
import SearchBar from "../../../Search/Search";
import { Button, Header } from "rsuite";
import { getCoordinatorAction } from "../../../../redux/action/coordinatorControls";

function CoordinatorDetails() {
  const dispatch = useDispatch();
  const coordinatorList = useSelector(
    (state) => state.coordinatorControls?.coordinators
  );
  const [selectedId, setSelectedId] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false);

  useEffect(() => {
    dispatch(getCoordinatorAction());
  }, [dispatch, deleteStatus]);

  const handleSearch = (record) => {
    setSelectedId((prevIds) => [...prevIds, record]);
  };
  const clearSelectedIds = () => {
    setSelectedId([]);
  };

  return (
    <div>
      <Header>
        <h1 style={{ textAlign: "center", marginBottom: "1vh" }}>
          Coordinator Details
        </h1>
        <div style={{ display: "flex", direction: "row" }}>
          <SearchBar
            data={coordinatorList}
            onSearch={handleSearch}
            clearSelectedId={clearSelectedIds}
          />
          <Button>ADD Coordinator</Button>
        </div>
      </Header>
      <CoordinatorList
        data={coordinatorList}
        selectedId={selectedId}
        setDeleteStatus={setDeleteStatus}
      />
    </div>
  );
}

export default CoordinatorDetails;
