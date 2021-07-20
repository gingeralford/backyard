import React, { useState } from 'react';
import profilePic from '../assets/motherDaugherGarden.jpg';
import image0 from '../assets/butterLettuce.jpg';
import image1 from '../assets/potatoes.jpg';
import image2 from '../assets/carrots.jpg';
import plus from '../assets/plus-circle.svg';

const Profile = (props) => {
    const {users, messages} = props;
    return ( 
        <div style={{backgroundColor: "white"}}>
            <div style={{ height: "20px"}}></div>
            <h1>{users[0].username}</h1>

            <img src={profilePic} alt="Mother and Daughter digging in the dirt" width="100%"className="feedImg"/>

            <div className="profileInfo">{users[0].bio}</div>
            <div style={{ height: "20px"}}></div>

            <div className="profileTitle"><b>Current Produce</b></div>
            
            <div className="messageRow">
            
                <div className="msgText">
                <img src={plus} alt="plus" width="30px" height="30px" className="msgIcon" style={{ boxShadow: "none"}}/>
                    Add Produce
                </div>
            </div>
            <div style={{ height: "10px"}}></div>

            <div className="messageRow">
                <div className="msgText">
                    <img src={image0} alt="produce" width="30px" height="30px" className="msgIcon"/>
                    
                    {users[0].produce[0].produce_title}
                </div>
            </div>
            <div style={{ height: "10px"}}></div>
            <div className="messageRow">
                <div className="msgText">
                    <img src={image2} alt="produce" width="30px" height="30px" className="msgIcon"/>
                    
                    Rainbow Carrots
                </div>
            </div>
    
            <div style={{ height: "20px"}}></div>
            <div className="profileTitle"><b>Previous Produce</b></div>
            
            <div className="messageRow">
                <div className="msgText">
                    <img src={image1} alt="produce" width="30px" height="30px" className="msgIcon"/>
                    
                    Russet Potatoes
                </div>
            </div>
            <div style={{ height: "20px"}}></div>
        </div>
     );
}
 
export default Profile;