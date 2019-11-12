import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import { indexHome, showHome, loginUser, registerUser, verifyUser, showUser, putUser, destroyUser, indexLocation, showLocation, postLocation, putLocation, destroyLocation, indexActivity, showActivity, postActivity, putActivity, destroyActivity } from './services/api-helper';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';

class App extends Component {
  state = {
   
  currentUser: null,
    password: null,
    locations: [],
    activities: [],
    user_id: null,
    location_id: null,
    activity_id: null
  }


  

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    console.log(currentUser,"hello")
    this.setState({ currentUser })
    // this.state.history.push(`/`)

  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    console.log(currentUser, registerData)
    this.setState({ currentUser })
    // this.state.history.push('/')
  }

  handleChange = (e) => {
    console.log("yurr",e.target)
    const { name, value } = e.target;
    this.setState({ [name]: value })

  }
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }
  // handleLogout = () => {
  //   this.setState({
  //     currentUser: null
  //   })
  //   localStorage.removeItem('authToken')
  // }

  componentDidMount= async () => {
    // this.handleVerify()
    // if (!currentUser) {

    // }
    const locations = await indexHome()
    this.setState({locations})
  }

  


  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <HomePage locations={this.state.locations} />} />
        {/* <Route path='/:id' render={() => <HomePage locations={this.state.locations}  />} /> */}
        
        <form onSubmit={(e) => {
        e.preventDefault()
        this.handleRegister(this.state)
      }}>
        <h2>Register</h2>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
            value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Submit</button>
        </form>
        

      
        
        <form onSubmit={(e) => {
        e.preventDefault()
        this.handleLogin(this.state)
      }}>
        <h2>login</h2>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
      
        
    {/* //location page route  */}
      <Route path='/location'
            render={() =>
              <LocationList
                locations={this.state.locations} 
                handleClick = {this.handleClick}
            />} />




        


        {/* <Route exact path='/register' render={() => <RegisterForm user={this.state.user} handleChange={this.handleChange} handleRegister={this.handleRegister}/>}/> */}
      </div>
    );
  }
}

export default App;
