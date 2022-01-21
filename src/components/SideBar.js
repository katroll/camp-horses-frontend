import "../styles/SideBar.css"
import "../css/styles.css"
import { NavLink } from "react-router-dom";

function SideBar() {

    return (
        <div className="sidebar-container bg-blue-400">
            <NavLink to="newhorse">
              New Horse
            </NavLink>
            <NavLink to="horses">
              All Horses
            </NavLink>
        </div>
    )
}

export default SideBar;

