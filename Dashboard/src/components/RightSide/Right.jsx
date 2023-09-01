import React from "react";
import "./Right.css";
import Updates from "../Updates/Updates";
import CustomerReview from "../customerReview/customerReview";
const Right = () => {
  return (
    <div className="RSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div className="CR">
        <h3>Customer Reviews</h3>
        <CustomerReview />
      </div>
    </div>
  );
};
export default Right;
