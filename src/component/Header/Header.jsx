import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <div className="lg:mx-40">
            <div className="navbar bg-base-300 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/login">Login</Link></li>
                             
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">DigitalChef</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/">About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {user ? <div className='flex items-center'><div className="w-10 rounded-full ">
                        <img src="data:image/png;base64,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"/>
                    </div>
                    <button className="btn btn-sm btn-accent"  onClick={handleLogOut}>LogOut</button>
                    </div> :
                        <Link to="/login"><button className="btn btn-sm btn-accent">Login</button> </Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;