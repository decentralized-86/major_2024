import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoordinatorList from "./CoordinatorList";
import SearchBar from "../../../Search/Search";
import { Button, Header } from "rsuite";
import { getCoordinatorAction } from "../../../../redux/action/coordinatorControls";
import Popover from "@mui/material/Popover";
import { TextField } from "@mui/material";
import AddCoordinatorPopUp from "./AddCoordinator";

function CoordinatorDetails() {
  const [addEmails, setAddEmails] = useState([]);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0vh 5vw",
        width: "80vw",
        height: "91vh",
      }}
    >
      <Header>
        <h1 style={{ textAlign: "center", marginBottom: "1vh" }}>
          Coordinator Details
        </h1>
        <div
          style={{
            display: "flex",
            direction: "row",
            width: "63.84vw",
            justifyContent: "space-between",
            margin: "1vh 1vw",
          }}
        >
          <SearchBar
            data={coordinatorList}
            onSearch={handleSearch}
            clearSelectedId={clearSelectedIds}
          />
          <AddCoordinatorPopUp
            addEmails={addEmails}
            setAddEmails={setAddEmails}
          />
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
