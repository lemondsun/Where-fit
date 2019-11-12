import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

  return (
    <div id="header">
      <div id="header-link-div">
        <Link id="header-link" className="header-link" to="/">Home</Link>
      </div>
      <h1 id="header-text" className="header-text">WhereFit</h1>


      {props.user.username && (
        <div id="header-links-loggedin">
          
          <Link id="header-user" className="header-link"
            to={`/user/${props.user.id}`}>User Info</Link>
          <button
            className="header-logout"
            onClick={props.handleLogout}>Logout</button>
          <h2 id="header-welcome"
            className="header-link">Welcome {props.user.username}</h2>
        </div>
      )}
      {!props.user.username && (
        <div id="header-links-notlogged-in">
          <Link id="header-login" className="header-link"
            to="/login">Login/Register</Link>
        </div>
      )}

    </div>
  )
}