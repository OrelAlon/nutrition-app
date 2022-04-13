import DayDisplayInfo from "../components/days/DayDisplayInfo";

const WeeklyDayPage = () => {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  // const [daysWeek, setDaysWeek] = useState(week);

  return (
    <div className="divWeek">
      <div className="title">
        <h1 className="dayTitle">My Week</h1>
      </div>
      <div>
        {daysOfWeek.map((day, index) => (
          <DayDisplayInfo key={index} nameOfDay={day}>
            {" "}
          </DayDisplayInfo>
        ))}
      </div>
    </div>
  );
};

export default WeeklyDayPage;
