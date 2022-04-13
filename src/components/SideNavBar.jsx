import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <>
      <div className="">
        <Link to="/">
          <div id="mySidenav" className="sidenav">
            <span href="#" id="start">
              Change My Details
            </span>
          </div>
        </Link>
        <Link to="/weeklyPage">
          <div id="mySidenav" className="sidenav">
            <span href="#" id="about">
              My-Week 📅
            </span>
          </div>
        </Link>
        <Link to="/recipeSearch">
          <div id="mySidenav" className="sidenav">
            <span href="#" id="recipe">
              Search-Recipe 🔍
            </span>
          </div>
        </Link>
      </div>{" "}
    </>
  );
};

export default SideNavBar;
