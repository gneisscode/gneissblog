import { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { ContextProvider } from "./context/Context";
import { Context } from "./context/Context";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Write from "./pages/Write";
import Single from "./pages/Single";

function App() {
  axios.defaults.baseURL = `http://localhost:8000/api/`;
  const { user } = useContext(Context);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/gneissblog" element={<Home />} />
          <Route
            exact
            path="/gneissblog/admin"
            element={user ? <Dashboard /> : <Login />}
          />
          <Route
            exact
            path="/gneissblog/admin/write"
            element={user ? <Write /> : <Login />}
          />
          <Route exact path="/gneissblog/post/:id" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
