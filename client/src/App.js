import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import { indexHome, showHome, loginUser, registerUser, verifyUser, showUser, patchUser, destroyUser, indexLocation, showLocation, postLocation, putLocation, destroyLocation, indexActivity, showActivity, postActivity, putActivity, destroyActivity } from './services/api-helper';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ActivityList from './components/ActivityList';
import LocationList from './components/LocationList';
import LocationAddForm from './components/LocationAddForm';
import LocationEdit from './components/LocationEdit';

class App extends Component {
  state = {
    currentUser: {},
    locations: [],
    allLocations: [],
    activities: [],
    user_id: null,
    location_id: null,
    activity_id: null,
    currentLocation: {}
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

  handleAddLocation = async (postdata) => {
    const currentLocation = await postLocation(this.state.currentUser.id, postdata);
    this.setState(prevState => ({
      locations: [...prevState.locations, currentLocation]
    }))
    this.props.history.push(`/user/${this.state.currentUser.id}/location`)
  }

  handleLocationClick = async (id) => {
    console.log("selected location id", id)
    const currentLocation = await showLocation(id, id);
    console.log("selected location current", currentLocation)
    if (currentLocation) {
      this.setState({ currentLocation })
    }
    console.log("selected location", currentLocation)
    this.props.history.push(`/user/${this.state.currentUser.id}/location/${this.state.currentLocation.id}/edit`)
  }

  handleEditLocation = async (id, putData) => {
    const updatedLocation = await putLocation(id,putData);
    if (updatedLocation) {
      this.setState({ updatedLocation })
      this.setState(prevState => ({
        locations: prevState.locations.map(location => location.id === parseInt(updatedLocation.id) ? updatedLocation : location)
      }))
    }
    this.props.history.push(`/user/${this.state.currentUser.id}/location`)
  }
  handleUpdateUser = async (id, putData) => {

    console.log(id, putData, "yurr")
    debugger;
    const currentUser = await patchUser(id, putData);
    if (currentUser) {
      this.setState({ currentUser });
    }
    this.props.history.push(`/user`);
  };

  handleLocationDelete = async (event) => {
    const id = event.target.id;
    console.log("dleteid", id)
    const currentlocation = await destroyLocation(id, id);
    this.setState(prevState => ({
      locations: prevState.locations.filter(location => {
        return location.id !== parseInt(id)
      })
    }))
    this.props.history.push(`/user/${this.state.currentUser.id}/location`)

  }


  render() {
    return (
      <div className="App">
        <Header
          user={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/' render={() => <HomePage locations={this.state.allLocations} />} />

        <Route exact path='/login' render={() => <LoginForm
          handleLogin={this.handleLogin}
        />} />

        <Route exact path='/register' render={() => <RegisterForm
          handleRegister={this.handleRegister}
        />} />

        <Route exact path='/user/:id/location'
          render={() =>
            <LocationList
              locations={this.state.locations}
              currentUser={this.state.currentUser}
              handleLocationClick={this.handleLocationClick}
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

        {/* <Route exact path='/user/:id/location/add'
          render={() => <LocationAddForm
            currentUser={this.state.currentUser}
            handleAddLocation={this.handleAddLocation} />} /> */}
            <Route
            exact
              path="/user/:id"
              render={(props) => (
                <UserInfo
                  id={props.match.params.id}
                  currentUser={this.state.currentUser}
                  handleUpdateUser={this.handleUpdateUser}
                />
              )}
            />

        {/* <Link to={`/user/${props.currentUser.id}/location/${location.id}/delete`}><button>Delete</button></Link> */}

        {/* <Route exact path='/register' render={() => <RegisterForm user={this.state.user} handleChange={this.handleChange} handleRegister={this.handleRegister}/>}/> */}

        {/* <Route path={`/user/${this.state.currentUser.id}/location/${${this.state.currentlocation.id}}/activity`} render={() => <AcitivtyList activities={this.state.activities} />} /> */}

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
