import './Desktop.css'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Badge, Button, Dialog, DialogActions, DialogContent, Menu, MenuItem, Slide, Tooltip, Typography } from '@mui/material';
import { ContextFunction } from '../Context/Context';
import { toast } from 'react-toastify';
import { getCart, getWishList, handleLogOut, handleClickOpen, handleClose, Transition } from '../Constants/Constant'

const DesktopNavigation = () => {

  const { cart, setCart, wishlistData, setWishlistData } = useContext(ContextFunction)
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate()
  let authToken = localStorage.getItem('Authorization');
  let setProceed = authToken !== null ? true : false
  useEffect(() => {
    getCart(setProceed, setCart, authToken)
    getWishList(setProceed, setWishlistData, authToken)
  }, [])


  return (
    <>
      <nav className='nav'>
        <div className="logo">
          <Link to='/'>
            <span >TOPSHOP</span>
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
                  <span className='nav-icon-span'>Cart    <Badge badgeContent={setProceed ? cart.length : 0}> <AiOutlineShoppingCart className='nav-icon' /></Badge></span>
                </NavLink>
              </Tooltip>
            </li>
            <li className="nav-links">
              <Tooltip title='Wishlist'>
                <NavLink to="/wishlist">
                  <span className='nav-icon-span'>Wishlist  <Badge badgeContent={setProceed ? wishlistData.length : 0}> <AiOutlineHeart className='nav-icon' /></Badge></span>
                </NavLink>
              </Tooltip>
            </li>

           
                  <li className="nav-links">
                    <Tooltip title='Profile'>
                      <NavLink to='/update'>
                        <span className='nav-icon-span'>  <CgProfile style={{ fontSize: 29, marginTop: 7,marginRight:10 }} /></span>
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