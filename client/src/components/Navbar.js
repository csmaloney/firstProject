import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import Dropdown from './Dropdown';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import axios from 'axios';
import NavButton from './NavButton';


function Navbar() {
  const [ click, setClick ] = useState(false);
  const [ dropdown, setDropdown ] = useState(false);
  const [ isLoginClicked, setIsLoginClicked ] = useState(false);
  const [ isRegistrationClicked, setIsRegistrationClicked] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({});
  const [ userId, setUserId ] = useState(localStorage.getItem('userId'));
  const [ accessToken, setAccessToken ] = useState(localStorage.getItem('accessToken'));
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const handleHomeClick = () => {
  //   navigate("/");
  //   window.location.reload(false);
  // };

  // const handleLoginClick = () => {
  //   setIsLoginClicked(!isLoginClicked)
  //   setIsRegistrationClicked(false)
  // };

  // const handleRegistrationClicked = () => {
  //   setIsLoginClicked(false)
  //   setIsRegistrationClicked(true)
  // }
  // const handleLogin = () => {

  // }



//=====LOGS OUT USER, REMOVES SESSION DATA AND THEN NAVIGATES BACK HOME=====


  useEffect(() => {
    axios.get(
      `http://localhost:8000/api/users/${userId}`,
      {headers:
        { "Authorization": `Bearer ${accessToken}`}
      },
      {withCredentials: true}
    )
    .then((res) => {
      console.log(res);
      setCurrentUser(res.data.user);
    })
    .catch(err => console.log(err))
  }, [])

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (


    <>
      <nav className='navbar1'>

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={require('../assets/lnslogo.png')} className='lns-logo' alt='lord and sons logo'></img>
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <div className='mid-nav'>
          <input type={'search'} className='search-bar' 
            placeholder='Search...' alt='search bar' />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/account/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Account
            </Link>
          </li>
{/* 
          {userId ? 
          <div>

              <NavButton onClickHandler={handleLogout}>Logout</NavButton>
          </div>
        :
          <div>
              <NavButton onClickHandler={handleLoginClick}>Login</NavButton>
          </div>
          
        }
        {isLoginClicked && <LoginForm 
        onClickHandler={handleRegistrationClicked}
        formErrors={formErrors}
        />}
        {isRegistrationClicked && <RegistrationForm 
        onSubmitHandler={handleRegistration}
        formErrors={formErrors}
        />} */}

        </ul>
      </nav>
    </>
  );
}

export default Navbar;