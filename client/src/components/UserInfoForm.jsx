import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {showUser} from '../services/api-helper'

export default class UserInfoForm extends Component {
  state = {
    email: "",
    fitness_level: "",
    image_url: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
  };

 
  render() {
    return (
      <div>
        <form id="user-form" onSubmit={(e) => {
          e.preventDefault()
          this.props.handleUpdateUser(this.props.id, this.state)
        }}>
          <div id="form-div">
          <label htmlFor="image_url">Pofile Picture</label>
          <input
            name="image_url"
            type="text"
            value={this.state.image_url}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="fitness_level">Your Fitness Level</label>
          <select
            name="fitness_level"
            value={this.state.fitness_level}
            onChange={this.handleChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <label htmlFor="email">Your Email</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          >
          </input>
          <Link to="/user/:id/location"><button >Update your profile</button></Link>
          </div>
        </form>
        <Link to="/user/:id/location"><button >Cancel</button></Link>

      </div>
    );
  }
}