import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ActivityAddForm extends Component {
  state = {
    location_id: '',
    name: '',
    date: '',
    description: '',
    duration: '',
    recommended: '',
    cost: '',
    completion: '',
    fitness_level: ''
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
    this.setState({
      location_id: this.props.locationId.match.params.id
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.handleAddActivity(this.props.locationId.match.params.id, this.state)
        }}>
          <h2>Activity Add</h2>
          <label htmlFor="name">Activity Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="Date">Date on Activity</label>
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
            type="text"
            name="fitness_level"
            id="fitness_level"
            value={this.state.fitness_level}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}