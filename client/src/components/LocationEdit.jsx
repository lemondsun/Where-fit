import React, { Component } from 'react'

export default class LocationEdit extends Component {
  state = {
    id: '',
    name: '',
    image_url: '',
    description: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    zip: ''
  }
  setFormData = () => {
    if (this.props.locations.length) {
      const {
        id,
        name,
        image_url,
        description,
        address_line1,
        address_line2,
        city,
        state,
        zip
        , ...otherData
      } = this.props.locations.find(location => {
        return location.id === parseInt(this.props.locationId)
      })
      this.setState({
        id: id,
        name: name,
        image_url: image_url,
        description: description,
        address_line1: address_line1,
        address_line2: address_line2,
        city: city,
        state: state,
        zip: zip
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
    if (prevProps.locations !== this.props.locations) {
      this.setFormData();
    }
  }


  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.handleEditLocation(this.props.locationid, this.state)
      }}>
        <h2>Location Edit</h2>
        <label htmlFor="name">Location Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
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
    )
  }
}