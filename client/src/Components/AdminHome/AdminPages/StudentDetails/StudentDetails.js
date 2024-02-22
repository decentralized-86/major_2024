import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentList from "./StudentList";
import SearchBar from "./Search/Search";
import { Header } from "rsuite";
import { getUsersAction } from "../../../../redux/action/auth";

function AdminStudentList() {
  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.auth?.users?.studentList);
  const [selectedId, setSelectedId] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false);

  useEffect(() => {
    dispatch(getUsersAction());
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
        <SearchBar
          data={studentList}
          onSearch={handleSearch}
          clearSelectedId={clearSelectedIds}
        />
      </Header>
      <StudentList
        data={studentList}
        selectedId={selectedId}
        setDeleteStatus={setDeleteStatus}
      />
    </div>
  );
}

export default AdminStudentList;
