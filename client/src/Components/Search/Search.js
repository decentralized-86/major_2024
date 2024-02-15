import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import ReactSearchBox from "react-search-box";
import "./sb.css";

const Search = ({ data, onSearch }) => {
  const searchData = data.map((data) => ({
    key: data.id,
    value: data.name,
  }));

  const searchDataUID = data.map((data) => ({
    key: data.id,
    value: data.UID,
  }));

  const searchDataYear = data.map((data) => ({
    key: data.id,
    value: data.Year,
  }));

  const handleSelect = (record) => {
    onSearch(record.item.key);
  };

  return (
    <div className="searchbox">
      <ReactSearchBox
        placeholder="Name"
        autoFocus={true}
        leftIcon={<SearchIcon />}
        iconBoxSize={"25px"}
        data={searchData}
        onSelect={handleSelect}
      />
      <ReactSearchBox
        placeholder="UID"
        autoFocus={true}
        leftIcon={<SearchIcon />}
        iconBoxSize={"25px"}
        data={searchDataUID}
        onSelect={handleSelect}
      />
      <ReactSearchBox
        placeholder="Year"
        autoFocus={true}
        leftIcon={<SearchIcon />}
        iconBoxSize={"25px"}
        data={searchDataYear}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default Search;
