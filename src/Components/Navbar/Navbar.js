import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from '../StateProvider';
import { auth } from '../../Firebase';
import './Navbar.css';
import Login from '../Login/Login';


function Navbar() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (

        <nav className='navbar'>

            <Link to="/" >
                <img
                    className="navbar__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt=""
                />
            </Link >

            <div className="navbar__search">
                <input type="text" className="navbar__searchInput" />
                <SearchIcon className="navbar__searchIcon" />
            </div>

            <div className="navbar__navlinks">

                <Link to={!user && "/login"} className="navbar__link">
                    <div onClick={login} className="navbar__option">
                        <span className="navbar__optionFirst">Hello {user?.email}</span>
                        <span className="navbar__optionSecond">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link to="/" className="navbar__link">
                    <div className="navbar__option">
                        <span className="navbar__optionFirst">Returns</span>
                        <span className="navbar__optionSecond"> & Orders</span>
                    </div>
                </Link>
                <Link to="/" className="navbar__link">
                    <div className="navbar__option">
                        <span className="navbar__optionFirst">Your</span>
                        <span className="navbar__optionSecond">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="navbar__link">
                    <div className="navbar__optionBasket">
                        <ShoppingCart className="navbar__shoppingCartIcon" />
                        <span className="navbar__optionSecond navbar__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>

            <div className="navbar__basket">

            </div>

        </nav >





    )
}

export default Navbar
