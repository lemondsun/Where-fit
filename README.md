
<img src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1501605839/content-items/002/031/688/logo-megalodon-original.jpg?1501605839" align="left" title="Size Limit logo by Anton Lovchikov" width="150" height="150">

<p align="center">WHERE-FIT</p>
<p align="center">(っ◔◡◔)っ ♥ Made by the <img src="https://fontmeme.com/permalink/191108/47974a27d6decccb4ee886abf7b2ee88.png" width="400" height="40"> ♥</p>

<p align="center">Track your activities based on location, by Jason, Steve, Hector, John</p>
---
---

## Project Purpose:
Where-Fit is a website that uses location and fitness level to track and plan your activities. Pick and add the activities that interest you and we'll help you reach your fitness goals! 

## Features:
The features of our site includes naming of various activies based on  location, recommendations for different fitness levels, personal account that tracks your past activites. Can't find an activity? Just enter your location and find things going on around your area!

## Component Hierarchy

1. <App.js />
1a. <Header>
1b. <Footer>
2a. <Components/Activity />
2b. <Components/User />
2c. <Components/Location />



## ERD

<img src="./images/template.jpg" height="400" width="400">

### Wireframes
Welcome!
![](./images/LandingPage.jpg)
Come Register!
![](./images/RegisterForm.jpg)
Come Log In!
![](./images/LoginPage.jpg)
Look at your profile!
![](./images/ProfilePage.jpg)
Come check out what you can do!
![](./images/sample.jpg)
Where are you located? We conform to anyone around the globe
![](./images/LocationsPage.jpg)

## Challenges: 
-Populating accounts for the appication.
-SEED DATA INFO
-Group git 

## MVP 
-Allowing different user accounts.
-Tracking activites based on user information.
- Adding different locations.
- Adding different activites.

## Post-MVP 
-Geo-location!
-Carousel 

## Miscellaneous Technical Details

API Endpoint 

/ => Home Page, Locations, All Locations, Info Access(All locations for All users)

---

/:id => All Activity, info for selected locations(All Activities for specific Location)

/logon => User ID (id, Password, Token Id)

/register/ => id, password, token ID

---

From /register to /user

/user/:id/(edit/delete/location) (id, user id, tokens, list of my locations)

/user/:id/location/(new/:id/) (user tokens)

/user/:id/location/:id/(delete/edit) (location, token)

---

/user/:id/location/:id/activity (location Id, token, list of my activities for this location(All Info))

/user/:id/location/:id/activity/


<img src="https://media3.giphy.com/media/3o7TKR1b2X2JqJ6JDW/giphy.gif" align="center">