import React, { useState, useEffect } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  if (path != "/")
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar" onClick={showSidebar}>
            <Link to="#" className="menubars">
              <FaIcons.FaAngleRight size={60} color={"#ffffff"} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <MdIcons.MdOutlineArrowBackIosNew size={40} />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar;
