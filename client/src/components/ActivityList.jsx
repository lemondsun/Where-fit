import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export default class ActiviyList extends Component {

  componentDidMount = async () => {
    console.log(this.props)
    this.props.getActivities(this.props.locationId.match.params.id)
  }

  render() {
    console.log('in activity list', this.props)
    return (

      <div id="activity-list" >
        {this.props.activities && (
          this.props.activities.map((activity) => (
            <div id="activityBox" key={activity.id}>
              <h2>{activity.name}</h2>
              <h4>{activity.description}</h4>
              <h4>{activity.duration}</h4>
              <h4>{activity.recommended}</h4>
              <h4>{activity.cost}</h4>
              <h4>{activity.completion}</h4>
              <h4>{activity.fitness_level}</h4>
              <Link to={`/user/${this.props.currentUser.id}/location/${this.props.locationId.match.params.id}/activity/${activity.id}/edit`}>
                <button
                  id={activity.id}>Edit</button>
              </Link>

              <Link to="/">
                <button onClick={this.props.handleActivityDelete}
                  id={activity.id}>Delete</button>
              </Link>

            </div>
          ))
        )
        }
        <Link to={`/user/${this.props.currentUser.id}/location/${this.props.locationId.match.params.id}/activity/add`}>
          <button id={this.props.locationId.match.params.id}>Add</button>
          hello
        </Link>

      </div>
    )
  }
}