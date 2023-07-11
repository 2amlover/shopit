import React from 'react';
import './Desktop.css';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';
import { Badge,Button, Tooltip } from '@mui/material';
import ELogo from '../Assets/Images/logo3.png';



const DesktopNavigation = ({ isLoggedIn }) => {
return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img src={ELogo} alt="E Logo" style={{ width: '200px', height: 'auto' }} />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items">
            <li className="nav-links">
              <NavLink to="/">
                <span className="nav-icon-span">Home</span>
              </NavLink>
            </li>
            <li className="nav-links">
              <Tooltip title="Cart">
                <NavLink to="/cart">
                  <span className="nav-icon-span">
                    Cart <Badge> <AiOutlineShoppingCart className='nav-icon' /></Badge>
                  </span>
                </NavLink>
              </Tooltip>
            </li>
            <li className="nav-links">
              <Tooltip title="Wishlist">
                <NavLink to="/wishlist">
                  <span className="nav-icon-span">
                    Wishlist <Badge> <AiOutlineHeart className='nav-icon' /></Badge>
                  </span>
                </NavLink>
              </Tooltip>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-links">
                  <Tooltip title="Profile">
                    <NavLink to="/profile">
                      <span className="nav-icon-span">
                        <CgProfile style={{ fontSize: 29, marginTop: 7, marginRight: 10 }} />
                      </span>
                    </NavLink>
                  </Tooltip>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                  <Button variant='contained' className='nav-icon-span' sx={{ marginBottom: 1 }} endIcon={<CgLogOut />}>
                   <h4>logout</h4> 
                  </Button>
                </li>
              </>
            ) : (
              <li className="nav-links">
                <Tooltip title="Profile">
                  <NavLink to="/login">
                    <span className="nav-icon-span">
                      <CgProfile style={{ fontSize: 29, marginTop: 7, marginRight: 10 }} />
                    </span>
                  </NavLink>
                </Tooltip>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavigation;
