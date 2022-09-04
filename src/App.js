import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Video from "./components/Video/Video";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
