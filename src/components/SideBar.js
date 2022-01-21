import "../styles/SideBar.css"
import { NavLink } from "react-router-dom";

function SideBar() {

    return (
        <div className="sidebar-container">
            <NavLink to="newhorse">
              New Horse
            </NavLink>
        </div>
    )
}

export default SideBar;

