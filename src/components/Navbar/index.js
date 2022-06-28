import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';
import logonkw from '../../img/logo.png';
import { getName } from '../../Auth';
import Sidebar from '../Sidebar';
import './styled.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const name = getName();

  const showSidebar = () => setSidebar(!sidebar);

  const history = useHistory();
  const home = () => {
    history.push("/home");
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#FFFFFF' }}>
        <div className='navbar'>
          {/* <img className="logonkw" src={logonkw} alt="logo nkw" className="img-fluid figure-img" width="100px" /> */}
          <button className='home-button' onClick={home}>
          <img src={logonkw} alt="logo nkw" className="img-fluid figure-img" width="100px" />
          </button>

          <Link style={{textDecoration: 'none', color: '#8F9BB3'}} to='#' className='menu-bars'>
          <div className='ali' onClick={showSidebar}>
          Olá, {name}! 
          <IoIosMenu size="2em" color="#8F9BB3"/>
          </div>
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