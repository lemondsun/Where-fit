import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

  return (
    <div id="header">
      <div id="header-link-div">
        <Link id="header-link" className="header-link" to="/"><button className="home-button">Home</button></Link>
      </div>
      <h1 id="header-text" className="header-title">Where - Fit</h1>


      {props.user.username && (
        <div id="header-links-loggedin">
            <h2 id="header-welcome"
            className="header-link">Welcome {props.user.username}</h2>
          <Link id="header-user" className="header-link"
            to={`/user/${props.user.id}`}>User Info</Link>
          <button
            className="header-logout"
            onClick={props.handleLogout}>Logout</button>
          
        </div>
      )}
      {!props.user.username && (
        
          <Link id="header-login" className="header-link"
            to="/login">Account</Link>
        
      )}

    </div>
  )
}