import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchFoodSearch } from "../api/ApiFatch";
import * as db from "../api/Data";

import SingleDayData from "../components/days/SingleDayData";
import Spinner from "../components/Spinner";
import FoodPic from "../components/css/img/food.jpg";

import { RiDeleteBinLine } from "react-icons/ri";
import { BiCalendarWeek } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { ImSearch } from "react-icons/im";

import "../components/css/page.css";

const SelectedDayPage = () => {
  const params = useParams();

  const [food, setFood] = useState("");
  const [hints, setHints] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [calOfDay, setCalOfDay] = useState(0);
  const [errorMsg, setErrorMsg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    displayFood();
  }, []);

  useEffect(() => {}, [calOfDay]);

  const addFood = (foodData) => {
    const data = readData();
    if (!data.days) {
      data.days = {};
    }
    if (!data.days[params.nameOfDay]) {
      data.days[params.nameOfDay] = [];
    }
    data.days[params.nameOfDay].push(foodData);
    writeData(data);

    displayFood();
  };

  const onSearchFood = async (e) => {
    e.preventDefault();
    if (food === "") {
      setErrorMsg("Please Search somthing...");
    }
    try {
      setIsLoading(true);
      const data = await fetchFoodSearch(food);
      if (data.hints.length < 1) {
        return setErrorMsg("No food with such name...");
      }
      setErrorMsg("");
      const hints = data.hints.slice(0, 3);

      setHints(hints);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };
  const onCloseSearchFood = () => setHints([]);

  const displayFood = () => {
    const data = db.readData();

    const localFoodList = data.days[params.nameOfDay] || [];
    setFoodList(localFoodList);
    if (localFoodList.length > 0) {
      const sumCal = data.days[params.nameOfDay].reduce(
        (accumalator, meal) => accumalator + meal.nutrients.ENERC_KCAL,
        0
      );

      setCalOfDay(sumCal);
    }
  };

  const onDelete = (label) => {
    const data = readData();
    const foodIndex = data.days[params.nameOfDay].findIndex(
      (f) => f.label === label
    );
    data.days[params.nameOfDay].splice(foodIndex, 1);
    writeData(data);
    foodList.length > 0 && displayFood();
  };

  const readData = () => {
    const jsonData = localStorage.getItem("data");
    const data = JSON.parse(jsonData);
    return data;
  };

  const writeData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };
  // displayFood();

  return (
    <div onSubmit={onSearchFood}>
      <div className="title">
        <h1 className="dayTitle">{params.nameOfDay}</h1>
      </div>

      <SingleDayData data={calOfDay} />

      <div className="saveFoodContainer">
        {foodList.map((food, index) => (
          <div key={index} className="foodBoxInfo">
            <h2>{food.label}</h2>{" "}
            <p>Calories: {Math.ceil(food.nutrients.ENERC_KCAL)}</p>
            <RiDeleteBinLine
              className="iconDel"
              onClick={() => onDelete(food.label)}
            ></RiDeleteBinLine>
          </div>
        ))}
        <form>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search your Food here..."
              value={food}
              onChange={(event) => setFood(event.target.value)}
            ></input>
            <span className="btn" onClick={onSearchFood}>
              <ImSearch className="fa " />
            </span>
            <span href="#" className="btn" onClick={onCloseSearchFood}>
              <AiOutlineClose className="fa " />
            </span>
            <Link to="/weeklyPage">
              <span href="#" className="btn">
                <BiCalendarWeek className="fa " />
              </span>
            </Link>
          </div>
          {errorMsg.length > 0 && <div className="errorMsg">{errorMsg}</div>}
        </form>
        {isLoading && <Spinner />}
        <section className="section">
          <div className="foodContainer">
            <div className="grid">
              {hints.map((h) => (
                <div key={h.food.label} className="card hoverCard">
                  <img
                    className="card__image"
                    src={!h.food.image ? FoodPic : h.food.image}
                  />
                  <img src="../img/food.jpg" alt="" />{" "}
                  <div className="card__data">
                    <div className="card__info">
                      <h2>{h.food.label}</h2>
                      <div className="gram-div">
                        <p>Protein: {Math.ceil(h.food.nutrients.PROCNT)} g</p>

                        <p>Fat: {Math.ceil(h.food.nutrients.FAT)} g</p>
                        <p>Carbs: {Math.ceil(h.food.nutrients.CHOCDF)} g</p>
                      </div>
                    </div>
                    <h3 className="card__cal">
                      Calories: {Math.ceil(h.food.nutrients.ENERC_KCAL)}
                    </h3>
                    <button
                      onClick={() => addFood(h.food)}
                      className="card__add"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SelectedDayPage;
