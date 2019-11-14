import React from 'react'
import { Link } from 'react-router-dom'
export default function HomePage(props) {
  return (

    <div id="home-background">
      
      {props.locations && (
        <>
          
          
          {props.locations.map(location => (
            <div key={location.id} className="home-locations">
              <img className="home-img" src={location.image_url} alt={location.name}></img>
              <h2 className="home-name">{location.name}</h2>
              <h2 className="home-desc">{location.description}</h2>
              <Link to="/login"><h3>Login to view more</h3></Link>
            </div>
          ))}
        </>
      )}

    </div>





  )
}
