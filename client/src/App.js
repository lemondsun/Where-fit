import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import { indexHome, showHome, loginUser, registerUser, verifyUser, showUser, putUser, destroyUser, indexLocation, showLocation, postLocation, putLocation, destroyLocation, indexActivity, showActivity, postActivity, putActivity, destroyActivity } from './services/api-helper';
import LoginForm from './components/LoginForm';

import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ActivityList from './components/ActivityList';
import LocationList from './components/LocationList';
import LocationAddForm from './components/LocationAddForm';

class App extends Component {
  state = {
    currentUser: {},
    locations: [],
    userLocations: [],
    activities: [],
    user_id: null,
    location_id: null,
    activity_id: null,
    currentLocation: null
  }

  // let getData = { "user_id": this.state.currentUser.Id }


  handleLogin = async (loginData) => {
    const resp = await loginUser(loginData);
    const currentUser = resp
    this.setState({ currentUser })
    const getData = { "user_id": this.state.currentUser.id }
    if (this.state.currentUser.username) {
      console.log('here', this.state.currentUser)
      const getlocations = async () => {
        console.log({ "user_id": this.state.currentUser.id }, "hello2")
        const locations = await indexLocation(this.state.currentUser.id, getData)

        console.log(locations, "hello", locations)
        this.setState({ locations })
      }

      getlocations()
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
  handleAddLocation = async (postdata) => {
    console.log('in handleaddlocation', postdata)
    const currentLocation = await postLocation(this.state.currentUser.id, postdata);
    this.setState(prevState => ({
      locations: [...prevState.locations, currentLocation]
    }))
    this.props.history.push(`/user/${this.state.currentUser.id}/location`)
  }

  handleEditLocation = async () => {
    const currentLocation = await putLocation();
    if (currentLocation) {
      this.setState({ currentLocation })
    }
    this.props.history.push(`/user/${this.state.currentUser.id}/location`)
  }

  ShowLocation = async () => {
    const currentLocation = await showLocation();
    if (currentLocation) {
      this.setState({ currentLocation })
    }
    this.props.history.push(`/user/${this.state.currentUser.id}/location/${this.state.currentLocation.id}`)
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
        <Route exact path='/user/:id/location'
          render={() =>
            <LocationList
              locations={this.state.locations}
              currentUser ={this.state.currentUser}
            />} />
        <Route exact path='/user/:id/location/add'
          render={() => <LocationAddForm
            currentUser={this.state.currentUser}
            handleAddLocation={this.handleAddLocation} />} />


        {/* <Route exact path='/register' render={() => <RegisterForm user={this.state.user} handleChange={this.handleChange} handleRegister={this.handleRegister}/>}/> */}

        {/* <Route path={`/user/${this.state.currentUser.id}/location/${${this.state.currentlocation.id}}/activity`} render={() => <AcitivtyList activities={this.state.activities} />} /> */}

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
