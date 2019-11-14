import React from "react";
import { Link } from "react-router-dom";

export default function LocationList(props) {
  // debugger;
  const items = props.locations.map(location => (
    <div id="locationBox" key={location.id}>
      <img id="locationImage" src={location.image_url} />
      {console.log(props.currentUser)}
      <Link
        to={`/user/${props.currentUser.id}/location/${location.id}/activity`}
        location={location.id}
      >
        <h2>{location.name}</h2>
      </Link>

      <h4>{location.description}</h4>
      <h4>{location.adress_line1}</h4>
      <h4>{location.city}</h4>
      <h4>{location.state}</h4>
      <h4>{location.zip}</h4>
      <Link to={`/user/${props.currentUser.id}/location/${location.id}/edit`}>
        <button id="location-edit-button">Edit</button>
      </Link>

      <Link to="/">
        <button onClick={props.handleLocationDelete} id="location-delete-button">
          Delete
        </button>
      </Link>
    </div>
  ));

  return (
    <div id="location-page">
      <div id="user-box">
        <img id="user-id"src={props.currentUserInfo.image_url} />
        <p>{props.currentUserInfo.fitness_level}</p>
        <p>{props.currentUserInfo.username}</p>
        <Link to={`/user/${props.currentUser.id}/location/add`}>
          <button id="location-add-button">Add Location</button>
        </Link>
      </div>
      {items}
    </div>
  );
}
