import React from 'react';
import { Link } from 'react-router-dom';
// import  exImg1 from '../assets/splashExImg.png';




const Splash = (props) => {
    return ( 
    <div>
        <div className="heroImg" >
            {/* <img src={heroImg} alt="colorful and exotic produce in a farmstand" height="100%" className="heroImg"/> */}
        </div>
        
        <div className="splashText">
        
            <div className="navstyle fadein" style={{padding: "10px 0", textAlign: "center"}}>The future of food is local, again.</div>

            <p>Backyard is an app for those who love fresh local fruits and vegetables. Find out what veg is available near you, sell or share your own produce, and see how beautiful local food can be.</p>


        </div>
        <div style={{ height: "550px"}}></div>
        <div className="secondBackground"></div>

            <div className="splashText splashSell">
            <div className="navstyle fadein" style={{padding: "10px 0", textAlign: "center"}}>Eat Close to Home</div>

            Produce from your local grocery store chain (whether it is organic or conventional) travels on average <i>1500 miles from the farm to your plate. </i> With backyard you can get fresh local produce directly from the people who grew it. 
            {/* <img src={exImg1} alt="screenshot of app - user is selling strawberries" width="140px" style={{ objectFit: "contain"}}/> */}
            </div>
            <div style={{ height: "500px"}}></div>
            {/* <Link to="/feed"><span className="joinBtn">Join</span></Link> */}
            <div style={{ height: "100px"}}></div>
        
        <div className="thirdBackground"></div>
        <div className="splashText splashSell" style={{ position: "sticky"}}>
            <div className="navstyle fadein" style={{padding: "10px 0", textAlign: "center"}}>Sell what you grow</div>

            Backyard encourages you to grow your own food...and sell or share it with others.
            Grow more tomatoes than you can use? <i>Show the world.</i> Have a small farm and want your crops to reach more of your community members? <i>Reach them now.</i>
            {/* <img src={exImg1} alt="screenshot of app - user is selling strawberries" width="140px" style={{ objectFit: "contain"}}/> */}
            </div>
            <div style={{ height: "500px"}}></div>
            <Link to="/feed"><span className="joinBtn">Join</span></Link>
            <div style={{ height: "100px"}}></div>
        
    </div> );
}
 
export default Splash;