import React from "react";
import ReactDOM from "react-dom";
import "./ListTable.css";
import { Table, Button, List } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const TrainingList = ({ data: mockUsers, selectedId: key }) => {
  // console.log(key);
  const data = mockUsers;
  const filteredData =
    key.length > 0 ? data.filter((item) => key.includes(item.id)) : data;

  return (
    <div>
      <Table
        height={600}
        data={filteredData}
        onRowClick={(rowData) => {
          console.log(rowData.selectedId);
        }}
        // rowClassName={(rowData) =>
        //   rowData.id === selectedId ? "highlighted-row" : ""
        // }
      >
        <Column width={100}>
          <HeaderCell>UID</HeaderCell>
          <Cell dataKey="uid" />
        </Column>

        <Column width={200}>
          <HeaderCell>NAME</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={100}>
          <HeaderCell>BATCH</HeaderCell>
          <Cell dataKey="batch" />
        </Column>

        <Column width={100}>
          <HeaderCell>BRANCH</HeaderCell>
          <Cell dataKey="branch" />
        </Column>

        <Column width={100}>
          <HeaderCell>YEAR</HeaderCell>
          <Cell>
            {(rowData) => {
              return String(rowData.Year);
            }}
          </Cell>
        </Column>

        <Column width={400}>
          <HeaderCell>COLLEGE EMAIL</HeaderCell>
          <Cell dataKey="college_email" />
        </Column>

        <Column width={80} fixed="right">
          <HeaderCell>...</HeaderCell>
          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <Button
                appearance="link"
                onClick={() => alert(`id:${rowData.id}`)}
              >
                Edit
              </Button>
            )}
          </Cell>
        </Column>

        <Column width={80} fixed="right">
          <HeaderCell>...</HeaderCell>
          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <Button
                appearance="link"
                onClick={() => alert(`id:${rowData.id}`)}
              >
                Delete
              </Button>
            )}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default TrainingList;
