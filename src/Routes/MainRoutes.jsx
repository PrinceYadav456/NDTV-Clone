import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Pages/Home/Home";
import Letest from "../Pages/letest/Letest";
import Tech from "../Pages/tech/Tech";
import Cricket from "../Pages/cricket/Cricket";
import Business from "../Pages/business/Business";
import Movies from "../Pages/movies/Movies";
import Data1 from "../Pages/india/Data1";
import NotFound from "../Pages/NotFound/NotFound";
import Seacrch from "../Pages/Search/Seacrch";
import ShowSearch from "../Pages/SearchItem/ShowSearch";

const MainRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest" element={<Letest />} />
        <Route path="/hindi" element={<Letest />} />
        <Route path="/business" element={<Business />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/food" element={<Letest />} />
        <Route path="/crypto" element={<Letest />} />
        <Route path="/webStories" element={<Letest />} />
        <Route path="/education" element={<Letest />} />
        <Route path="/auto" element={<Letest />} />
        <Route path="/swasth" element={<Letest />} />
        <Route path="/lifestyle" element={<Letest />} />
        <Route path="/health" element={<Letest />} />
        <Route path="/shopping" element={<Letest />} />
        <Route path="/art" element={<Letest />} />
        <Route path="/livetv" element={<Letest />} />
        <Route path="/covid" element={<Letest />} />
        <Route path="/opinion" element={<Letest />} />
        <Route path="/video" element={<Letest />} />
        <Route path="/cities" element={<Letest />} />
        <Route path="/world" element={<Letest />} />
        <Route path="/offbeat" element={<Letest />} />
        <Route path="/trends" element={<Letest />} />
        <Route path="/photos" element={<Letest />} />
        <Route path="/south" element={<Letest />} />
        <Route path="/people" element={<Letest />} />
        <Route path="/science" element={<Letest />} />
        <Route path="/jobs" element={<Letest />} />
        <Route path="/weather" element={<Letest />} />
        <Route path="/tvSchedule" element={<Letest />} />
        <Route path="/trains" element={<Letest />} />
        <Route path="/india" element={<Data1 />} />

        <Route path="/Search/:Search" element={<Seacrch />} />
        <Route path="/SearchPage" element={<ShowSearch />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <div style={{ height: "1000px" }}></div>
    </>
  );
};

export default MainRoutes;
