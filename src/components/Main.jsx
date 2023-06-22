import Splash from "../pages/Splash";
import Home from "./Home";
import { Route, Routes, Navigate } from "react-router-native";
import Search from "./Search";
import Details from "./Details";
import Saved from "./Saved";
import Profile from "./Profile";
import Register from "./Register";
import Login from "./Login";
import { useSelector } from "react-redux";

const Main = () => {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <>
      {isLoading && <Splash />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default Main;
