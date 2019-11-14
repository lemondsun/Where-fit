import React, { Component } from 'react'


export default class LocationAddForm extends Component {
  state = {
    user_id: null,
    name: null,
    image_url: null,
    description: null,
    address_line1: null,
    address_line2: null,
    city: null,
    state: null,
    zip: null
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
    this.setState({
      user_id: this.props.currentUser.id
    })
    
  }


  render() {
    return (

      <div id="location-add">
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.handleAddLocation(this.state)
        }}>
          <h2 id="location-name">Location Add</h2>
          <label htmlFor="name"  >Location Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="image_url">Location Picture</label>
          <input
            type="image_url"
            name="image_url"
            id="image_url"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Location Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="address_line1">Location Address Line 1</label>
          <input
            type="text"
            name="address_line1"
            id="address_line1"
            value={this.state.address_line1}
            onChange={this.handleChange}
          />
          <label htmlFor="address_line2">Location Address Line 2</label>
          <input
            type="text"
            name="address_line2"
            id="address_line2"
            value={this.state.address_line2}
            onChange={this.handleChange}
          />
          <label htmlFor="city">Location Address Line 2</label>
          <input
            type="text"
            name="city"
            id="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            value={this.state.state}
            onChange={this.handleChange}
          />
          <label htmlFor="zip">Zip</label>
          <input
            type="text"
            name="zip"
            id="zip"
            value={this.state.zip}
            onChange={this.handleChange}
          />
          <button>Submit</button>

   



        </form>
      </div>
    )
  }
}