import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserLandingPage from "./pages/UserLandingPage";
import UserResultPage from "./pages/UserResultPage";
import WeeklyDayPage from "./pages/WeeklyDayPage";
import SelectedDayPage from "./pages/SelectedDayPage";
import RecipeSearchPage from "./pages/RecipeSearchPage";

import SideNavBar from "./components/SideNavBar";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <SideNavBar />
          <Routes>
            <Route path="/" element={<UserLandingPage />} />
            <Route path="/userResult" element={<UserResultPage />} />
            <Route path="/weeklyDayPage" element={<WeeklyDayPage />} />
            <Route
              path={`/weeklyDayPage/:nameOfDay`}
              element={<SelectedDayPage />}
            />
            <Route path="/recipeSearch" element={<RecipeSearchPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
