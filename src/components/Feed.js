import image0 from '../assets/butterLettuce.jpg';
import image1 from '../assets/tomatoes.jpg';
import image2 from '../assets/strawberries.jpg';

const Feed = (props) => {
    const { users, messages} = props;
    

    return ( 
       
        <div id="feedPage">
            <div className="feedItem">
                <div className="feedTitle">
                    <span style={{float: "left"}}>{users[0].username}</span>
                    <span style={{float: "right"}}>{users[0].location}</span>
                </div>
                <img src={image0} alt="" width="100%" className="feedImg" />
                <div className="feedInfo">
                    {users[0].produce[0].produce_info}
                    <div className="feedBtm">
                        <div className="produceTitle">{users[0].produce[0].produce_title}
                        <br />
                        ${users[0].produce[0].price} {users[0].produce[0].measurement}
                        </div>
                        <div style={{alignSelf: "center"}}>
                            <div className="produceBtn">Contact</div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="feedItem">
                <div className="feedTitle">
                    <span style={{float: "left"}}>{users[1].username}</span>
                    <span style={{float: "right"}}>{users[1].location}</span>
                </div>
                <img src={image1} alt="" width="100%" className="feedImg" />
                <div className="feedInfo">
                    {users[1].produce[0].produce_info}
                    <div className="feedBtm">
                        <div className="produceTitle">{users[1].produce[0].produce_title}
                        <br />
                        ${users[1].produce[0].price} {users[1].produce[0].measurement}
                        </div>
                        <div style={{alignSelf: "center"}}>
                            <div className="produceBtn">Contact</div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="feedItem">
                <div className="feedTitle">
                    <span style={{float: "left"}}>{users[2].username}</span>
                    <span style={{float: "right"}}>{users[2].location}</span>
                </div>
                <img src={image2} alt="" width="100%" className="feedImg" />
                <div className="feedInfo">
                    {users[2].produce[0].produce_info}
                    <div className="feedBtm">
                        <div className="produceTitle">{users[2].produce[0].produce_title}
                        <br />
                        ${users[2].produce[0].price} {users[2].produce[0].measurement}
                        </div>
                        <div style={{alignSelf: "center"}}>
                            <div className="produceBtn">Contact</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Feed;