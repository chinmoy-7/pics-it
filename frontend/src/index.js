import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { AuthContextProvider } from "./Context/AuthContext";
import '../node_modules/react-toastify/dist/ReactToastify.css';
// import 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/feed" element={<Feed />}/>
    </Routes>
  </AuthContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
