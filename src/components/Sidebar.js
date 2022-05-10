import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__element'>
                <h3>Setting</h3>
            </div>
            <div className='sidebar__element'>
                <NavLink to='/updatePassword'>Change Password</NavLink>
            </div>
            <div className='sidebar__element'>
                <NavLink to='/updateName'>Change Name</NavLink>
            </div>

            {/* <div><img src={} /></div> */}
        </div>
    );
};
export default Sidebar;