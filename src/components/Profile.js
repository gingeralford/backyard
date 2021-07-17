import React, { useState } from 'react';
import profilePic from '../assets/motherDaugherGarden.jpg';
import image0 from '../assets/butterLettuce.jpg';

const Profile = (props) => {
    const {users, messages} = props;
    return ( 
        <div style={{backgroundColor: "white"}}>
            <div style={{ height: "20px"}}></div>
            <h1>{users[0].username}</h1>

            <img src={profilePic} alt="Mother and Daughter digging in the dirt" width="100%"className="feedImg"/>

            <div className="profileInfo">{users[0].bio}</div>
            <div style={{ height: "20px"}}></div>
            <div className="feedTitle"><b>Current Produce</b></div>

            <div className="messageRow">
                <div className="msgText">
                    <img src={image0} alt="produce" width="30px" height="30px" className="msgIcon"/>
                    
                    {users[0].produce[0].produce_title}
                </div>
            </div>
            <div style={{ height: "20px"}}></div>
        </div>
     );
}
 
export default Profile;