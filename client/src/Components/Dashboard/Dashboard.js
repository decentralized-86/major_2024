import { LineChart } from "../Analytics/LineChart/Line";
import React from "react";
import { Piechart } from "../Analytics/Piechart/Pie";
import NumberAnalysis from "../Analytics/NumericalAnalysis/Number";

function Dashboard() {
  return (
    <div>
      <h1>Placement Analysis</h1>
      <NumberAnalysis />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2em",
        }}
      >
        <LineChart />
        <Piechart />
      </div>
    </div>
  );
}

export default Dashboard;
