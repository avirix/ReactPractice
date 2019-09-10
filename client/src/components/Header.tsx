import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to='/'>Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>
            </ul>
        </div>
    );
}

export default Header;