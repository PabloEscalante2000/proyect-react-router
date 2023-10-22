import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "active";
              } else {
                return "";
              }
            }}
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "blue";
              } else {
                return "";
              }
            }}
            to="/users"
          >
            users
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "active";
              } else {
                return "";
              }
            }}
            to="/"
          >
            home
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
