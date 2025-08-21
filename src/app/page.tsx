"use client";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Contacts from "./pages/Contacts/Contacts";

export default function Home() {
  return (
    <div className="home">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
