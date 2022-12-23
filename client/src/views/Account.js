import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import NavButton from '../components/NavButton';


const Account = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("logout clicked");
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        navigate("/");
        window.location.reload(false)
      };

    const [ userId, setUserId ] = useState(localStorage.getItem('userId'));
    const [ accessToken, setAccessToken ] = useState(localStorage.getItem('accessToken'));


  return (
    <div>
        {userId ? 
          <div>

              <NavButton onClickHandler={handleLogout}>Logout</NavButton>
          </div>
        :
            <LoginForm />
        }
    </div>
  )
}

export default Account
