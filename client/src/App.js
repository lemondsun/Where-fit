import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import { indexHome, showHome, loginUser, registerUser, verifyUser, showUser, putUser, destroyUser, indexLocation, showLocation, postLocation, putLocation, destroyLocation, indexActivity, showActivity, postActivity, putActivity, destroyActivity } from './services/api-helper';
import LoginForm from './components/LoginForm';

import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    currentUser: {},
    locations: [],
    activities: [],
    user_id: null,
    location_id: null,
    activity_id: null
  }


  handleLogin = async (loginData) => {
    const resp = await loginUser(loginData);
    const currentUser = resp
    this.setState({ currentUser })
    if (this.state.currentUser.username) {
      this.props.history.push(`/user/${this.state.currentUser.id}/location`)
    }
    else {
      this.props.history.push(`/login`)
    }

  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
    if (this.state.currentUser.username) {
      this.props.history.push(`/user/${this.state.currentUser.id}/location`)
    }
    else {
      this.props.history.push(`/register`)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
    if (this.state.currentUser.username) {
      this.props.history.push(`/user/${this.state.currentUser.id}/location`)
    }
    else {
      this.props.history.push(`/`)
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: {}
    })
    localStorage.removeItem('authToken')
    this.props.history.push(`/`)
  }

  componentDidMount = async () => {
    // this.handleVerify()

    const locations = await indexHome()
    this.setState({ locations })
  }

  render() {
    return (
      <div className="App">
        <Header
          user={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/login' render={() => <LoginForm
          handleLogin={this.handleLogin}
        />} />

        <Route exact path='/register' render={() => <RegisterForm
          handleRegister={this.handleRegister}
        />} />


        <Route exact path='/' render={() => <HomePage locations={this.state.locations} />} />
        {/* <Route path='/:id' render={() => <HomePage locations={this.state.locations}  />} /> */}

        {/* //location page route  */}
      <Route path='/location'
            render={() =>
              <LocationList
                locations={this.state.locations} 
                handleClick = {this.handleClick}
            />} />


        {/* <Route exact path='/register' render={() => <RegisterForm user={this.state.user} handleChange={this.handleChange} handleRegister={this.handleRegister}/>}/> */}

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
