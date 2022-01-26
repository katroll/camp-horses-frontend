import "../styles/SideBar.css"
import "../css/styles.css"
import { NavLink } from "react-router-dom";

function SideBar() {

    return (
        <div className="flex flex-col w-40 bg-blue-400">
            <NavLink to="/newhorse" className="antialiased">
              New Horse
            </NavLink>
            <NavLink to="/horses" className="antialiased">
              All Horses
            </NavLink>
        </div>
    )
}

export default SideBar;

