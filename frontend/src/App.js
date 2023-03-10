// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {KEY} from "./localKey";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId" element={<VideoPage/>} />
      </Routes>
    </div>

  );
}

export default App;
