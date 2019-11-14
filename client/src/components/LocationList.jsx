import React from 'react';
import  { Link} from 'react-router-dom'



export default function LocationList(props) {
  const items = props.locations.map((location) =>
    <div id="locationBox" key= {location.id}>
      <img id="locationImage" src={location.image_url} />

      <Link to={`/user/${props.currentUser.id}/location/${location.id}/activity`}
        id={location.id}>
        <h2>{location.name}</h2>
      </Link>

      <h4>{location.description}</h4>
      <h4>{location.adress_line1}</h4>
      <h4>{location.city}</h4>
      <h4>{location.state}</h4>
      <h4>{location.zip}</h4>
      <Link to={`/user/${props.currentUser.id}/location/${location.id}/edit`}>
        <button
          id={location.id}>Edit</button>
      </Link>

      <Link to="/">
        <button onClick={props.handleLocationDelete}
          id={location.id}>Delete</button>
      </Link>

    </div>
  );

  return (
    <div id="location-page">
      {items}
      <Link to={`/user/${props.currentUser.id}/location/add` }><button id="location-add-button">Add</button></Link>
    </div>
  )

  }
