import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ActivityAddForm extends Component {
  state = {
    location_id: '',
    activityData: {
      name: '',
      date: '',
      description: '',
      duration: '',
      recommended: '',
      cost: '',
      completion: '',
      fitness_level: 0
    }
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      activityData: {
        ...prevState.activityData,
        [name]: value
      }
    }))

    this.setState({
      location_id: this.props.locationId.match.params.id
    })
  }


  render() {
    return (
      <div>
        <form id="activity-div-full" onSubmit={(e) => {
          e.preventDefault()
          this.props.handleAddActivity(this.props.locationId.match.params.id, this.state.activityData)
        }}>
          <div id="activity-div">
          <h2>Activity Add</h2>
          <label htmlFor="name">Activity Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.activityData.name}
            onChange={this.handleChange}
          />
          <label htmlFor="Date">Date on Activity</label>
          <input
            type="date"
            name="date"
            id="date"
            value={this.state.activityData.date}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Activity Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.activityData.description}
            onChange={this.handleChange}
          />
          <label htmlFor="duration">Activity Duration</label>
          <input
            type="text"
            name="duration"
            id="duration"
            value={this.state.activityData.duration}
            onChange={this.handleChange}
          />
          <label htmlFor="recommended">Do you Recommended?</label>
          <input
            type="text"
            name="recommended"
            id="recommended"
            value={this.state.activityData.recommended}
            onChange={this.handleChange}
          />
          <label htmlFor="cost">Activity Cost</label>
          <input
            type="text"
            name="cost"
            id="cost"
            value={this.state.activityData.cost}
            onChange={this.handleChange}
          />
          <label htmlFor="completion">Activity Completion</label>
          <input
            type="text"
            name="completion"
            id="completion"
            value={this.state.activityData.completion}
            onChange={this.handleChange}
          />
          <label htmlFor="fitness_level">Fitness Level</label>
          <input
            type="number"
            name="fitness_level"
            id="fitness_level"
            value={this.state.activityData.fitness_level}
            onChange={this.handleChange}
          />
            <button>Submit</button></div>
          <Link to="/user/:id/location/id/activity"><button id="cancel-that">Cancel this addition</button></Link>
        </form>

        
      </div>
    )
  }
}