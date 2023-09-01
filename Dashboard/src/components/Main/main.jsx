import React from "react";
import "./main.css";
import Card from "../Card/Card";
import Table from "../table/table";
import { cardsData } from "../../Data/Data";
const Main = () => {
  return (
    <div className="main">
      <h1>Dashboard</h1>
      <div className="Pcont">
        {cardsData.map((card, i) => {
          return (
            <div className="wrapper">
              <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
              />
            </div>
          );
        })}
      </div>
      <Table />
    </div>
  );
};
export default Main;
