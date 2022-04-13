import { useState } from "react";
import UserInput from "../components/user/UserInput";
import UserGender from "../components/user/UserGender";
import UserResultPage from "../pages/UserResultPage";
import Button from "../components/Button";

import HealthyFood from "../components/css/img/healthyFood.jpg";

import "../App.css";
import "../components/css/user.css";

const UserLandingPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    height: "",
    weight: "",
    age: "",
    // gender: '',
  });
  const [error, setError] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  const [gender, setGender] = useState("");
  const [Bmr, setBmr] = useState("");
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value,
    });
  };
  const handleCheck = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setGender(id);
    }
  };

  const calculateBmr = (e, userInfo, gender) => {
    e.preventDefault();
    const { age, height, weight } = userInfo;

    if (
      userInfo.name &&
      userInfo.height &&
      userInfo.weight &&
      userInfo.age &&
      gender !== ""
    ) {
      setError("");
      setDisplayResult(!displayResult);
      if (gender === "female") {
        const bmrResult = 655 + 4.35 * weight + 4.7 * height - 4.7 * age;

        setBmr(Math.ceil(bmrResult));
      } else {
        const bmrResult = 66 + 6.23 * weight + 12.7 * height - 6.8 * age;

        setBmr(Math.ceil(bmrResult));
      }
    } else {
      setError("Please fill the form");
    }
  };
  const updateBmr = (e) => {
    setSelected(e.userBmr);
    // passBmr(selected);
  };

  return (
    <div className="landingContainer">
      {!displayResult && (
        <div className="wrapper">
          <h1>Let's Start Our Journey !</h1>
        </div>
      )}

      {!displayResult && (
        <form id="myForm" onSubmit={(e) => calculateBmr(e, userInfo, gender)}>
          <UserInput
            id={"name"}
            type={"text"}
            label={"Name"}
            value={userInfo.id}
            handleChange={handleChange}
            className={"form-control"}
          />
          <UserInput
            id={"height"}
            type={"number"}
            label={"Height"}
            value={userInfo.id}
            handleChange={handleChange}
            className={"form-control"}
          />
          <UserInput
            id={"weight"}
            type={"number"}
            label={"Weight"}
            value={userInfo.id}
            handleChange={handleChange}
            className={"form-control"}
          />
          <UserInput
            id={"age"}
            type={"number"}
            label={"Age"}
            value={userInfo.id}
            handleChange={handleChange}
            className={"form-control"}
          />

          <ul className="form-gender">
            <UserGender
              id={"female"}
              type="radio"
              value={userInfo.id}
              src={"female"}
              handleCheck={handleCheck}
            />
            <UserGender
              id={"male"}
              type="radio"
              value={userInfo.id}
              handleCheck={handleCheck}
            />
            {/* DO ICON!!! */}
          </ul>
          {error !== "" && <div className="errorMsg">Please Fill All</div>}
          <div className="btnDiv">
            <Button
              value={"Reset"}
              type={"reset"}
              color={"red"}
              classN={"btn btn-primary"}
            />
            <Button
              value={"Save"}
              color={"green"}
              type={"submit"}
              classN={"btn btn-primary"}
              onClick={(e) => calculateBmr(e, userInfo, gender)}
            />
          </div>
        </form>
      )}
      {displayResult && (
        <div>
          <div className="showResultContent">
            <UserResultPage bmr={Bmr} confirmBmr={updateBmr} />
          </div>
          <img className="healthyFoodImg" src={HealthyFood} alt="" />
        </div>
      )}
    </div>
  );
};

export default UserLandingPage;
