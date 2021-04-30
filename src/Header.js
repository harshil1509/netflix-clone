import React from 'react';
import './Header.css';

export default function Header({handleLogout}) {
   

    const handleClick = () =>{
        handleLogout();
    }
    return (
        <div className="header">
          
           <img className="header__logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="Netflix logo"/>
           <img className = "header__avt"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Logo"
                
            />
            <button onClick={handleClick} className="header__button">Logout</button>
          
        </div>
    )
}
