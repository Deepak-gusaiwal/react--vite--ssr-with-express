import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/:name" element={<User/>} />
      </Routes>
    </>
  );
};

export default App;
