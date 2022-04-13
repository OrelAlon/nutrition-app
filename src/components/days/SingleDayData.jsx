import { useEffect } from "react";
import * as db from "../../api/Data";

import ProgressBar from "@ramonak/react-progress-bar";

const SingleDayData = ({ data }) => {
  useEffect(() => {
    getBmr();
  }, []);
  const getBmr = () => {
    const data = db.readData();
    return data.userBmr;
  };
  const calc = Math.ceil((data / getBmr()) * 100);
  return (
    <div className="dataBox">
      <p>Your Calories Progress For Today:</p>
      <ProgressBar completed={calc} bgColor={calc > 50 ? "red" : "green"} />
    </div>
  );
};

export default SingleDayData;
