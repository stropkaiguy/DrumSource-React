import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageVideo from "./pages/HomePage";

import GearPage from "./pages/GearPage";
import LearnPage from "./pages/LearnPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePageVideo />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="gear" element={<GearPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
