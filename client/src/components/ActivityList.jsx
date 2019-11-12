import React from 'react'
import { Link } from 'react-router-dom'

export default function ActivityList(props) {
  const list = props.activities.map((activity) =>
    <div className="activity-div">
      <img src={activity.image_url} />
      {/* <Link to={`user/${id}/location/${id}/activity/${id}`}><h2>{activity.name}</h2></Link> */}
      <p>{activity.description}</p>
      <p>{activity.address_line1}</p>
      <p>{activity.address_line2}</p>
      <p>{activity.city}</p>
      <p>{activity.state}</p>
      <p>{activity.zip}</p>
    </div>
  );
  return (
    <div>
      {list}
    </div>
  )
}