import { Link } from "react-router-dom";

import * as db from "../../api/Data";

const DayDisplayInfo = ({ nameOfDay }) => {
  const readBmr = () => {
    const data = db.readData();
    return data.userBmr;
  };

  const calOfDay = () => {
    const data = db.readData();
    const days = data.days;

    if (!days) {
      return 0;
    }
    if (!days[nameOfDay]) {
      return 0;
    }
    //days[nameOfDay].map((day) => console.log(day));
    const totalDaily = days[nameOfDay].reduce(
      (accumalator, meal) => accumalator + meal.nutrients.ENERC_KCAL,
      0
    );
    return totalDaily;
  };
  calOfDay();
  return (
    <Link to={`/weeklyDayPage/${nameOfDay}`}>
      <div className="divDay">
        <p className="alignleft">{nameOfDay} </p>
        <p className="alignright">
          Remaining calories: {readBmr() - calOfDay()}
        </p>
      </div>
    </Link>
  );
};

export default DayDisplayInfo;
