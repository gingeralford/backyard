import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Sitebar from './components/Sitebar';
import Splash from './components/Splash';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      bio: "",
      lat_long: "39.15803027800127, -86.53611144457453",
      location: "0.5mi",
      rating: 4.0,
      rating_count: 14
    },
    {
      id: 2,
      username: "Green Thumb Family",
      email: "greenthumb@email.com",
      password: "stuff",
      bio: "Our family of three share a garden with our retired next door neighbor. We have 5 raised beds between us and mostly just grow from spring to late summer. We grow 100% organic!",
      lat_long: "39.15803027800127, -86.53611144457453",
      location: "0.8mi",
      rating: 4.2,
      rating_count: 21
    },
    {
      id: 3,
      username: "East 3rd Community Garden",
      email: "eastthird@email.com",
      password: "stuff",
      bio: "We are a community garden located at the corner of East Third and Calliope. We take new members once a month during the growing season, and love to host events for schoolkids to get them involved in local growing.",
      lat_long: "39.15803027800127, -86.53611144457453",
      location: "1.3mi",
      rating: 4.8,
      rating_count: 180
    }
  ]

//hardcoded data for produce/images
  const produce = [
    {
      id: 1,
      user_id : 1,
      produce_title : "Butter Lettuce (Aunt Mae's Bibb)",
      produce_info: "Fresh Heirloom variety (Aunt Mae's Bibb) Butter Lettuce. Grown 100% organically, no chemicals, by myself and my neighbor.",
      quantity: 22,
      price: 3.00,
      measurement: "each",
      picture_url: "./assets/butterLettuce.jpg"
    },
    {
      id: 2,
      user_id : 2,
      produce_title : "Early Rose Tomatoes",
      produce_info: "Our small variety heirloom Rose Tomatoes are just coming into season. We have some ripe, but we also have green tomatoes for frying.",
      quantity: 8,
      price: 2.00,
      measurement: "lb",
      picture_url: "./assets/tomatoes.jpg"
    },
    {
      id: 3,
      user_id : 3,
      produce_title : "Strawberries by the basket",
      produce_info: "We have our small strawberries available, probalby only for this week. Super sweet!",
      quantity: 8,
      price: 4.00,
      measurement: "lb",
      picture_url: "./assets/strawberries.jpg"
    },
  ]

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
    <Router>
    <div className="App">
      <Sitebar />
        <Splash />
        <Route path='/messages' exact component={Message} />
    </div>
    </Router>

  );
}

export default App;
