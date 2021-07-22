import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Sitebar from './components/Sitebar';
import Splash from './components/Splash';
import ScrolltoTop from './components/ScrolltoTop'; 
import { HashRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MessagesMenu from './components/MessagesMenu';
import Profile from './components/Profile';
import Feed from './components/Feed';
import './App.css';
// import { ChatEngine } from 'react-chat-engine';
import Message from './components/Message';


function App() {

  //hardcoded data for users
  const users = [
    {
      id: 1,
      username: "Sunset Hills Farm",
      email: "sunsethills@email.com",
      password: "stuff",
      bio: "We have a 12 acre farm just outside of Anderson, IN where we grow produce for all 4 seasons. Our kids love to contribute...it's a family affair. Reach out at any time for more information on our growing processes.",
      lat_long: "39.15803027800127, -86.53611144457453",
      location: "1.3mi",
      rating: 4.0,
      rating_count: 14,
      produce: [{
        id: 1,
        user_id : 1,
        produce_title : "Butter Lettuce (Aunt Mae's Bibb)",
        produce_info: "Fresh Heirloom variety (Aunt Mae's Bibb) Butter Lettuce. Grown 100% organically, no chemicals, by myself and my neighbor.",
        quantity: 22,
        price: 3.00,
        measurement: "each",
        picture_url: '../assets/butterLettuce.jpg'
      }]
    },
    {
      id: 2,
      username: "Green Thumb Family",
      email: "greenthumb@email.com",
      password: "stuff",
      bio: "Our family of three share a garden with our retired next door neighbor. We have 5 raised beds between us and mostly just grow from spring to late summer. We grow 100% organic!",
      lat_long: "39.15803027800127, -86.53611144457453",
      location: "0.5mi",
      rating: 4.2,
      rating_count: 21,
      produce: [{
        id: 2,
        user_id : 2,
        produce_title : "Early Rose Tomatoes",
        produce_info: "Our small variety heirloom Rose Tomatoes are just coming into season. We have some ripe, but we also have green tomatoes for frying.",
        quantity: 8,
        price: 2.00,
        measurement: "lb",
        picture_url: "./assets/tomatoes.jpg"
      }],
    },
    {
      id: 3,
      username: "East 3rd Community Garden",
      email: "eastthird@email.com",
      password: "stuff",
      bio: "We are a community garden located at the corner of East Third and Calliope. We take new members once a month during the growing season, and love to host events for schoolkids to get them involved in local growing.",
      lat_long: "39.15803027800127, -86.53611144457453",
      location: "1.0mi",
      rating: 4.8,
      rating_count: 180,
      produce: [{
        id: 3,
        user_id : 3,
        produce_title : "Strawberries by the basket",
        produce_info: "We have our small strawberries available, probably only for this week. Super sweet!",
        quantity: 8,
        price: "4.00",
        measurement: "lb",
        picture_url: "./assets/strawberries.jpg"
      }]
    },
    {
      id: 4,
      username: "Swanky Smith",
      email: "smithswanky@email.com",
      password: "stuff",
      bio: "We are a community garden located at the corner of East Third and Calliope. We take new members once a month during the growing season, and love to host events for schoolkids to get them involved in local growing.",
      lat_long: "39.15803027800127, -86.53611144457453",
      location: "0.8mi",
      rating: 4.1,
      rating_count: 10,
      produce: [{
        id: 4,
        user_id : 4,
        produce_title : "Wild Mint",
        produce_info: "I have so much wild mint growing in my yard right now. It's totally free, just don't take more than you need.",
        quantity: 20,
        price: "FREE",
        measurement: "",
        picture_url: ""
      }]
    }
  ]

//hardcoded data for produce/images


  //hardcoded data for messages
  const messages = [
    {
      id: 1,
      user_id: 1,
      other_acct: 1,
      message: "hello"
    },
    {
      id: 2,
      user_id: 1,
      other_acct: 2,
      message: "hi"
    },
    {
      id: 3,
      user_id: 1,
      other_acct: 3,
      message: "hiya"
    },

  ]


  return (

    <div className="App">

      <Router >
        <ScrolltoTop />
        <Sitebar />

        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          
          <Route path='/messages' exact component={Message} messages={messages} users={users}/>

          <Route exact path="/feed">
            <Feed messages={messages} users={users}/>
          </Route>
          <Route exact path="/profile">
            <Profile messages={messages} users={users}/>
          </Route>
        </Switch>
        
      </Router >

    </div>
  );
}

export default App;
