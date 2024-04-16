import SideBar from "./SideBar"
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import './Admin.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admind-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admind-content">
                <div className="admin-header">
                    <FaBars style={{ cursor: "pointer", width: '24px', height: '24px' }} onClick={() => setCollapsed(!collapsed)} />

                </div>
                <div className="admin-name">
                    <Outlet />
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div>
    )
}
export default Admin