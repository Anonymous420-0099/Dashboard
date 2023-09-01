import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import ReactApexCharts from "react-apexcharts";
import { UilTimes } from "@iconscout/react-unicons";
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <LayoutGroup>
      {expanded ? (
        <Expanded
          key="expanded"
          parm={props}
          setExp={() => setExpanded(false)}
        />
      ) : (
        <Compacted
          key="compacted"
          parm={props}
          setExp={() => setExpanded(true)}
        />
      )}
    </LayoutGroup>
  );
};
const Compacted = ({ key, parm, setExp }) => {
  return (
    <motion.div
      className="Ccard"
      style={{
        background: parm.color.backGround,
        boxShadow: parm.color.boxShadow
      }}
      onClick={setExp}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar value={parm.barValue} text={parm.barValue} />
        <span>{parm.title}</span>
      </div>
      <div className="details">
        <parm.png />
        <span>${parm.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};
const Expanded = ({ key, parm, setExp }) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto"
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35
      },

      fill: {
        colors: ["#fff"],
        type: "gradient"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ["white"]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      grid: {
        show: true
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      }
    }
  };

  return (
    <motion.div
      className="Ecard"
      style={{
        background: parm.color.backGround,
        boxShadow: parm.color.boxShadow
      }}
      transition={{ delay: 5, type: "ease" }}
      layoutId="expandableCard"
    >
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <UilTimes
          style={{
            color: "white",
            cursor: "pointer"
          }}
          onClick={setExp}
        />
      </div>
      <span>{parm.title}</span>
      <div className="Ccontainer">
        <ReactApexCharts
          series={parm.series}
          type="area"
          options={data.options}
        />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};
export default Card;
