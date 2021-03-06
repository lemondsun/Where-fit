import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

  return (
    <div id="header">
      <div id="header-link-div">
        <Link id="header-link" className="header-link" to="/"><button className="home-button">Home</button></Link>
      </div>
      <h1  className="header-title">Where - Fit</h1>


      {props.user.username && (
        <div id="header-links-loggedin">
            <h2 id="header-welcome">Welcome {props.user.username}</h2>
          <Link id="profile-button" to={`/user/${props.user.id}/location`}><button>Profile</button></Link>
          <Link id="header-user" 
            to={`/user/${props.user.id}`}><button>User Info</button></Link>
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