import './Desktop.css'
import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom';
import { Badge,Tooltip } from '@mui/material';
/*import LOGO from '../../Assets/Images/E-logo.png';*/

const DesktopNavigation = () => {
  return (
    <>
      <nav className='nav'>
        <div className="logo">
          <Link to='/'>
            <span >MS1620</span>
            {/* <img src={LOGO} alt="1" /> */}
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items">
            <li className="nav-links">
              <NavLink to='/'>
                <span className='nav-icon-span'>  Home</span>
              </NavLink>
            </li>
            <li className="nav-links">
              <Tooltip title='Cart'>
                <NavLink to="/cart">
                  <span className='nav-icon-span'>Cart    <Badge > <AiOutlineShoppingCart className='nav-icon' /></Badge></span>
                </NavLink>
              </Tooltip>
            </li>
            <li className="nav-links">
              <Tooltip title='Wishlist'>
                <NavLink to="/wishlist">
                  <span className='nav-icon-span'>Wishlist  <Badge> <AiOutlineHeart className='nav-icon' /></Badge></span>
                </NavLink>
              </Tooltip>
            </li>
                <li className="nav-links">
                    <Tooltip title='Profile'>
                      <NavLink to='/login'>
                        <span className='nav-icon-span'> <CgProfile style={{ fontSize: 29, marginTop: 7,marginRight:10 }} /></span>
                      </NavLink>
                    </Tooltip>
               </li>
          </ul>
        </div>
      </nav >
    </>

  )
}

export default DesktopNavigation