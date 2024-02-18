import { LineChart } from "./Analytics/LineChart/Line";
import React from "react";
import { Piechart } from "./Analytics/Piechart/Pie";
import NumberAnalysis from "./Analytics/NumericalAnalysis/Number";

function Dashboard() {
  return (
    <div className="flex flex-col lg:items- sm:w-[100%] sm:justify-between sm:items-center sm:h-[90vh] sm:py-2">
      <h1>Placement Analysis</h1>
      <NumberAnalysis />
      <div
        className="flex lg:flex-row lg:align-center lg:justify-around lg:w-[85vw] lg:py-4
      sm:flex-col sm:justify-center sm:items-center  sm:w-[80vw] "
      >
        <LineChart />
        <Piechart />
      </div>
    </div>
  );
}

export default Dashboard;