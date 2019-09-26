import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className="navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to='/'>Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/squares'>Squares</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/time'>Time</Link></li>
                <li className="nav-item"><Link className="nav-link" to='/time_picker'>Time picker</Link></li>
            </ul>
        </div>
    );
}

export default Header;