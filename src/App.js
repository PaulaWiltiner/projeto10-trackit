import React from "react";
import "./assets/styles/reset.css";
import GlobalStyle from "./assets/styles/globalStyle";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Habits from "./pages/Habits";
import Historic from "./pages/Historic";
import Today from "./pages/Today";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenContext from "./contexts/TokenContext";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [photo, setPhoto] = useState("");
  const [numPorcent, setNumPorcent] = useState(0);

  return (
    <TokenContext.Provider
      value={{ token, setToken, photo, setPhoto, numPorcent, setNumPorcent }}
    >
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          {token ? (
            <>
              <Route path="/habits" element={<Habits />} />
              <Route path="/" element={<Habits />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/habits" element={<Habits />} />
            </>
          )}
          <Route path="/register" element={<Register />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/today" element={<Today />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
