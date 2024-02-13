import { SearchIcon } from "@heroicons/react/outline";
import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import "./sb.css";

export default class SearchBar extends Component {
  render() {
    const searchData = this.props.data.map((data) => ({
      key: data.id,
      value: data.name,
    }));

    const searchDataUID = this.props.data.map((data) => ({
      key: data.id,
      value: data.UID,
    }));

    const searchDataYear = this.props.data.map((data) => ({
      key: data.id,
      value: data.Year,
    }));

    return (
      <div className="searchbox">
        <ReactSearchBox
          placeholder="Name"
          autoFocus={true}
          leftIcon={<SearchIcon />}
          iconBoxSize={"25px"}
          data={searchData}
          callback={(record) => console.log(record)}
        />
        <ReactSearchBox
          placeholder="UID"
          autoFocus={true}
          leftIcon={<SearchIcon />}
          iconBoxSize={"25px"}
          data={searchDataUID}
          callback={(record) => console.log(record)}
        />
        <ReactSearchBox
          placeholder="Year"
          autoFocus={true}
          leftIcon={<SearchIcon />}
          iconBoxSize={"25px"}
          data={searchDataYear}
          callback={(record) => console.log(record)}
        />
      </div>
    );
  }
}

// https://www.npmjs.com/package/react-search-box
