import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import { FaGem, FaGithub } from 'react-icons/fa';
//import sidebarBg from '../../assets/bg2.jpg';
import { DiReact } from 'react-icons/di'
import { MdDashboard } from 'react-icons/md'
import './SideBar.scss'
import { Link } from "react-router-dom";

const SideBar = (props) => {
    const { collapsed, toggled, handleToggleSidebar } = props;
    //const { image } = props;
    return (
        <>
            <ProSidebar
                //image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '24px',
                            // textTransform: 'uppercase',
                            // fontWeight: 'bold',
                            // fontSize: 14,
                            // letterSpacing: '1px',
                            // overflow: 'hidden',
                            // textOverflow: 'ellipsis',
                            // whiteSpace: 'nowrap',

                        }}
                    >
                        <DiReact size={'3em'} color={'00bfff'} />

                        {/* <span>Menu</span> */}
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        // suffix={<span className="badge red">New</span>}
                        >
                            Dashboard
                            <Link to="/admins" />
                        </MenuItem>
                        {/* <MenuItem icon={<FaGem />}> components </MenuItem> */}
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaGem />}
                            title={"Features"}
                        >
                            <MenuItem>Manage Users <Link to="/admins/manage-users" /> </MenuItem>
                            <MenuItem>Manage Quiz Test</MenuItem>
                            <MenuItem>Manage Quiz Quest</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>

                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar >
        </>
    )
}

export default SideBar;