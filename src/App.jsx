import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import NotFoundPage from "./components/pages/NotFoundPage";

const App = () => {
  const authUser = true;
  return (
    <>
      {authUser && <Header />}
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/login" element={LoginPage} />
        <Route path="/signup" element={SignUpPage} />
        <Route path="/transaction/:id" element={""} />
        <Route path="*" element={NotFoundPage} />
      </Routes>
    </>
  );
};

export default App;
