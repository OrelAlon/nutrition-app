import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as db from "../api/Data";

import UserDataResult from "../components/user/UserDataResult";
import Button from "../components/Button";

const UserResultPage = ({ bmr, confirmBmr }) => {
  const [userBmr, setUserBmr] = useState("");
  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();

    confirmBmr({ userBmr });
    db.writeData({ userBmr: userBmr || bmr });
    navigate("/weeklyDayPage");
  };

  return (
    <div>
      <form>
        <h3 id="wrapper">Your Result !</h3>

        <input
          className="resultInput"
          type="text"
          placeholder={bmr}
          value={userBmr}
          onChange={(e) => setUserBmr(e.target.value)}
        ></input>
        <p className="info">You can change our recommendations </p>
        <UserDataResult
          id={"protein"}
          val={Math.ceil(userBmr === "" ? bmr * 0.041 : userBmr * 0.041)}
        />
        <UserDataResult
          id={"carb"}
          val={Math.ceil(userBmr === "" ? bmr * 0.137 : userBmr * 0.137)}
        />
        <UserDataResult
          id={"fet"}
          val={Math.ceil(userBmr === "" ? bmr * 0.031 : userBmr * 0.031)}
        />
        <Link to="/weeklyDayPage">
          <Button
            color={"resultBtn"}
            value={"Confirm"}
            type={"submit"}
            classN={"btn btn-primary"}
            onClick={(e) => handleConfirm(e)}
          />{" "}
        </Link>
      </form>
    </div>
  );
};

export default UserResultPage;
