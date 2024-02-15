import React from "react";
import ReactDOM from "react-dom";
import "./ListTable.css";
import { Table, Button, List } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const ListTable = ({ data: mockUsers, selectedId: key, clearSelectedId }) => {
  // console.log(key);
  const data = mockUsers;
  const filteredData =
    key.length > 0 ? data.filter((item) => key.includes(item.id)) : data;

  return (
    <div>
      <Button onClick={clearSelectedId}>Clear Selected IDs</Button>
      <Table
        height={600}
        data={filteredData}
        onRowClick={(rowData) => {
          // console.log(rowData.selectedId);
        }}
        // rowClassName={(rowData) =>
        //   rowData.id === selectedId ? "highlighted-row" : ""
        // }
      >
        <Column width={60} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={150}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={150}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={100}>
          <HeaderCell>UID</HeaderCell>
          <Cell dataKey="UID" />
        </Column>

        <Column width={100}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column width={150}>
          <HeaderCell>Year</HeaderCell>
          <Cell>
            {(rowData) => {
              return String(rowData.Year);
            }}
          </Cell>
        </Column>

        <Column width={300}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
        <Column width={80} fixed="right">
          <HeaderCell>...</HeaderCell>

          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <Button
                appearance="link"
                onClick={() => alert(`id:${rowData.id}`)}
              >
                View
              </Button>
            )}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default ListTable;
