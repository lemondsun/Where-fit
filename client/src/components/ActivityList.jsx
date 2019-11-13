import React from 'react';
import { Link } from 'react-router-dom'



export default function LocationList(props) {
  console.log(props)
  const items = props.locations.map((activity) =>
      <div id="activityBox" key={activity.id}>
      <h2>activity.name</h2>
      <h4>activity.date</h4>
      <h4>activity.description</h4>
      <h4>activity.duration</h4>
      <h4>activity.recommended</h4>
      <h4>activity.cost</h4>
      <h4>activity.completion</h4>
      <h4>activity.fitness_level</h4>
        <Link to={`/user/${props.currentUser.id}/location/${props.locationId}/activity/${activity.id}/edit`}>
          <button
            id={activity.id}>Edit</button>
        </Link>

        <Link to="/">
          <button onClick={props.handleActivityDelete}
            id={activity.id}>Delete</button>
        </Link>

    </div>
      );
    
      return (
    <div id="activity-list">
        {items}
        <Link to={`/user/${props.currentUser.id}/location/actvity/add`}><button>Add</button></Link>
      </div>
      )
    
      }
    
    
    
    
    
    
