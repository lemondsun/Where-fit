import React from 'react';
import { Link } from 'react-router-dom';

export default function LocationList(props) {

  const items = props.locations.map((location) =>
    <div id="locationBox">
      <img id="locationImage"src={location.image_url} />
      <Link to={`user/${id}/location/${id}/activity/${id}`}><h2>{location.name}</h2></Link>
      <h4>{location.description}</h4>
      <h4>{location.adress_line1}</h4>
      <h4>{location.city}</h4>
      <h4>{location.state}</h4>
      <h4>{location.zip}</h4>
    </div>
  );
  return (
    <div id="location-list">
      {items}
    </div>
  )
}