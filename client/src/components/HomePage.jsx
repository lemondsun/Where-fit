import React from 'react'
import { Link } from 'react-router-dom'
export default function HomePage(props) {
  return (

    <div>
      
      {props.locations && (
        <>
        <h1>Register or Login to view more</h1>
          {props.locations.map(location => (
            
            <div>
              
            <img id="" src={location.image_url}></img>
            <h2>{location.name}</h2>
            <h2>{location.description}</h2>
            </div>
          ))}
        </>
      )}

    </div>
  


  
   
  )
}
