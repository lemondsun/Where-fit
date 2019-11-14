import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { indexHome, showHome, loginUser, registerUser, verifyUser, showUser, patchUser, destroyUser, indexLocation, showLocation, postLocation, putLocation, destroyLocation, indexActivity, showActivity, postActivity, putActivity, destroyActivity } from './services/api-helper';
import LoginForm from './components/LoginForm';
import UserInfoForm from './components/UserInfoForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import LocationList from './components/LocationList';
import LocationAddForm from './components/LocationAddForm';
import LocationEdit from './components/LocationEdit';
import ActivityList from './components/ActivityList';
import ActivityAddForm from './components/ActivityAddForm';
import ActivityEdit from './components/ActivityEdit';

class App extends Component {
  state = {
    currentUser: {},
    locations: [],
    allLocations: [],
    activities: [],
    user_id: null,
    location_id: null,
    activity_id: null,
    currentLocation: {},
    currentActivity: {}
  }

  // let getData = { "user_id": this.state.currentUser.Id }

  componentDidMount = async () => {
    // this.handleVerify()
    const allLocations = await indexHome()
    this.setState({ allLocations })
  }

  handleLogin = async (loginData) => {
    const resp = await loginUser(loginData);
    const currentUser = resp
    this.setState({ currentUser })
    const getData = { "user_id": this.state.currentUser.id }
    if (this.state.currentUser.username) {
      const getlocations = async () => {
        const locations = await indexLocation(this.state.currentUser.id, getData)
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
      const getlocations = async () => {
        const getData = this.state.currentUser.id
        const locations = await indexLocation(this.state.currentUser.id, getData)
        this.setState({ locations })
      }
      getlocations()
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

  handleUpdateUser = async (id, putData) => {
    const currentUser = await patchUser(id, putData);
    if (currentUser) {
      this.setState({ currentUser });
    }
    this.props.history.push(`/user`);
  };

  handleAddLocation = async (postdata) => {
    const currentLocation = await postLocation(this.state.currentUser.id, postdata);
    this.setState(prevState => ({
      locations: [...prevState.locations, currentLocation]
    }))
    this.props.history.push(`/user/${this.state.currentUser.id}/location`)
  }



  handleEditLocation = async (id, putData) => {
    const updatedLocation = await putLocation(id, putData);
    if (updatedLocation) {
      this.setState({ updatedLocation })
      this.setState(prevState => ({
        locations: prevState.locations.map(location => location.id === parseInt(updatedLocation.id) ? updatedLocation : location)
      }))
    }
    this.props.history.push(`/user/${this.state.currentUser.id}/location`)
  }

  handleLocationDelete = async (event) => {
    const id = event.target.id;
    const currentlocation = await destroyLocation(id, id);
    this.setState(prevState => ({
      locations: prevState.locations.filter(location => {
        return location.id !== parseInt(id)
      })
    }))
    this.props.history.push(`/user/${this.state.currentUser.id}/location`)
  }

  handleAddActivity = async (locationId, postdata) => {
    const currentActivity = await postActivity(this.state.currentUser.id, locationId, postdata);
    this.setState(prevState => ({
      activities: [...prevState.activities, currentActivity]
    }))
    this.props.history.push(`/user/${this.state.currentUser.id}/location/${locationId}/activity`)
  }

  handleEditActivity = async (id, putData) => {
    const updatedActivity = await putActivity(this.state.currentUser.id, putData);
    if (updatedActivity) {
      this.setState({ updatedActivity })
      this.setState(prevState => ({
        activities: prevState.activities.map(activity => activity.id === parseInt(updatedActivity.id) ? updatedActivity : activity)
      }))
    }
    this.props.history.push(`/user/${this.state.currentUser.id}/location/${updatedActivity.locationId}/activity`)
  }


  handleActivityDelete = async (event) => {
    const id = event.target.id;
    const currentActivity = await destroyActivity(id, id);
    this.setState(prevState => ({
      activities: prevState.activities.filter(activity => {
        return activity.id !== parseInt(id)
      })
    }))
    this.props.history.push(`/user/${this.state.currentUser.id}/location/${this.props.location_id}/activity`)
  }


  getActivities = async (locationId) => {
    const activities = await indexActivity(this.state.currentUser.id, locationId);
    this.setState({ activities })
    return (activities)
  }
  
  displayUser = async (id, getData) => {
    const currentUser = await showUser(id, getData)
    this.setState({ currentUser })
  }





  render() {
    return (
      <div className="App">
        <Header
          user={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/' render={() => <HomePage locations={this.state.allLocations} currentUser={this.state.currentUser} />} />

        <Route exact path='/login' render={() => <LoginForm
          handleLogin={this.handleLogin}
        />} />

        <Route exact path='/register' render={() => <RegisterForm
          handleRegister={this.handleRegister}
        />} />

        <Route
          exact
          path="/user/:id"
          render={(props) => (
            <UserInfoForm
              id={props.match.params.id}
              currentUser={this.state.currentUser}
              handleUpdateUser={this.handleUpdateUser}
            />
          )}
        />

        <Route exact path='/user/:id/location'
          render={() =>
            <LocationList
              locations={this.state.locations}
              currentUser={this.state.currentUser}
              handleLocationDelete={this.handleLocationDelete}
            />} />

        <Route exact path='/user/:id/location/add'
          render={() => <LocationAddForm
            currentUser={this.state.currentUser}
            handleAddLocation={this.handleAddLocation} />} />

        <Route exact path='/user/:id/location/:id/edit'
          render={(props) => <LocationEdit
            currentUser={this.state.currentUser}
            locations={this.state.locations}
            locationId={props.match.params.id}
            handleEditLocation={this.handleEditLocation}
          />
          } />

        <Route exact path='/user/:id/location/:id/activity'
          render={(props) => <ActivityList
            currentUser={this.state.currentUser}
            activities={this.state.activities}
            handleActivityClick={this.handleActivityClick}
            handleActivityDelete={this.handleActivityDelete}
            locationId={props}
            getActivities={this.getActivities}
          />} />

        <Route exact path='/user/:id/location/:id/activity/add'
          render={(props) => <ActivityAddForm
            currentUser={this.state.currentUser}
            locationId={props}
            handleAddActivity={this.handleAddActivity} />} />

        <Route exact path='/user/:id/location/:id/activity/:id/edit'
          render={(props) => <ActivityEdit
            activities={this.state.activities}
            activityId={props.match.params.id}
            handleEditActivity={this.handleEditActivity}

          />
          } />



        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
