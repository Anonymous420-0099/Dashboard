import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
const Sidebar = () => {
  const [Expanded, setExpanded] = useState(false);
  const [Selected, setSelected] = useState(0);
  const variantsV = {
    true: {
      left: "0"
    },
    false: {
      left: "-60%"
    }
  };
  return (
    <>
      <div
        className="bars"
        style={Expanded ? { left: "51%" } : { left: "0" }}
        onClick={() => setExpanded(!Expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={variantsV}
        animate={window.innerWidth <= 768 ? `${Expanded}` : ""}
      >
        <div className="logo">
          <img src={logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        <div className="menu">
          {SidebarData.map((item, i) => {
            return (
              <div
                className={Selected === i ? "menuItem active" : "menuItem"}
                onClick={() => setSelected(i)}
                key={i}
              >
                <item.icon />
                <span>{item.headings}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Sidebar;
