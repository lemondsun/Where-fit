import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class ActivityEdit extends Component {
  state = {
    // location_id: '',
    // activityData: {
    id: '',
    name: '',
    date: '',
    description: '',
    duration: '',
    recommended: '',
    cost: '',
    completion: '',
    fitness_level: 0,
    location_id: ''
    // }
  }
  // findLocation = () => {
  //   this.props.activities.find(activity => {
  //     if (activity.id === parseInt(this.props.activityId)) { return (activity.location_id) }
  //   })
  // }

  setFormData = () => {
    if (this.props.activities.length) {
      const {
        id,
        name,
        date,
        description,
        duration,
        recommended,
        cost,
        completion,
        fitness_level = 0,
        locationId
        , ...otherData
      } = this.props.activities.find(activity => {
        return activity.id === parseInt(this.props.activityId)

      })

      this.setState({
        id: id,
        name: name,
        date: date,
        description: description,
        duration: duration,
        recommended: recommended,
        cost: cost,
        completion: completion,
        fitness_level: fitness_level,
        location_id: locationId
      })
    }
  }


  componentDidMount() {
    this.setFormData();
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })


  }

  componentDidUpdate(prevProps) {
    if (prevProps.activities !== this.props.activities) {
      this.setFormData();
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.handleEditActivity(this.state.location_id, this.state)
        }}>
          <h2>Activity Update</h2>
          <label htmlFor="name">Activity Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="date">Date on Activity</label>
          <input
            type="date"
            name="date"
            id="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Activity Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="duration">Activity Duration</label>
          <input
            type="text"
            name="duration"
            id="duration"
            value={this.state.duration}
            onChange={this.handleChange}
          />
          <label htmlFor="recommended">Do you Recommended?</label>
          <input
            type="text"
            name="recommended"
            id="recommended"
            value={this.state.recommended}
            onChange={this.handleChange}
          />
          <label htmlFor="cost">Activity Cost</label>
          <input
            type="text"
            name="cost"
            id="cost"
            value={this.state.cost}
            onChange={this.handleChange}
          />
          <label htmlFor="completion">Activity Completion</label>
          <input
            type="text"
            name="completion"
            id="completion"
            value={this.state.completion}
            onChange={this.handleChange}
          />
          <label htmlFor="fitness_level">Fitness Level</label>
          <input
            type="number"
            name="fitness_level"
            id="fitness_level"
            value={this.state.fitness_level}
            onChange={this.handleChange}
          />
          <button>Submit</button>

        </form>
        <Link to="/user/:id/location/id/activity"><button >Cancel</button></Link>
      </div>
    )
  }
}