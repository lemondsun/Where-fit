import React, { Component } from "react";

export default class UserInfo extends Component {
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
        <form  onSubmit={(e) => {
          e.preventDefault()
          this.props.handleUpdateUser(`${this.props.currentUser.id}`,this.state)
        }}>
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
          <button >Update your profile</button>
        </form>
      </div>
    );
  }
}