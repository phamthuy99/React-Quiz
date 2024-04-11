import SideBar from "./SideBar"
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import './Admin.scss'

function Admin() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admind-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admind-content">
                <div className="admin-header">
                    <FaBars style={{ cursor: "pointer" }} onClick={() => setCollapsed(!collapsed)} />

                </div>
                <div className="admin-name">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
export default Admin