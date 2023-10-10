import React from 'react';
import {Link} from 'react-router-dom'
import user from '../../Images/user-icon.png';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
            <div className='logo'>REACT-REDUX-MOVIE-APP  </div>
            </Link>
            <div className="user-image" >
                <img src={user} alt="user-icon"/>
            </div>
        </div>
    )
}

export default Header;