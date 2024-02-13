import { SearchIcon } from "@heroicons/react/outline";
import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import "./sb.css";

export default class SearchBar extends Component {
  data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  render() {
    return (
      <ReactSearchBox
        style={{ width: "100%" }}
        placeholder="Search"
        autoFocus={true}
        leftIcon={<SearchIcon />}
        iconBoxSize={"25px"}
        data={this.data}
        callback={(record) => console.log(record)}
      />
    );
  }
}

// https://www.npmjs.com/package/react-search-box
