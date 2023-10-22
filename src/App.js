import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import UserPage from './pages/UserPage'
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/users/:id" element={<UserPage/>}></Route>

        {/* Navigate: redirecciona */}
        <Route path="/pacientes" element={<Navigate to="/users"/>}></Route>

        <Route path="/dashboard/*" element={<Dashboard/>}>
            <Route path="welcome" element={<p>WELCOME!!!</p>}></Route>
            <Route path="goodbye" element={<p>Sdios :v</p>}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
