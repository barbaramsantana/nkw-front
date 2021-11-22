import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './styled.css';
import logonkw from '../../img/logo.png';
import { IconContext } from 'react-icons';
import usercircle from '../../img/User_cicrle.svg';
import { getName } from '../../Auth';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const name = getName();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#FFFFFF' }}>
        <div className='navbar'>
          <img className="logonkw" src={logonkw} alt="logo nkw" className="img-fluid figure-img" width="100px" />
          <Link style={{textDecoration: 'none', color: '#8F9BB3'}} to='#' className='menu-bars'>
          <div onClick={showSidebar}>
          <img className="icone-perfil" src={usercircle} alt="icone-perfil" />
          <div className='ali'>
          Olá, {name}! 
          </div>
          </div>
           {// <FaIcons.FaBars onClick={showSidebar} />
}
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;