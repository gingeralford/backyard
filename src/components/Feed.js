import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import image0 from '../assets/butterLettuce.jpg';
import image1 from '../assets/tomatoes.jpg';
import image2 from '../assets/strawberries.jpg';
import image3 from '../assets/mint.jpg'
import {Button, Modal, InputGroup, FormControl} from 'react-bootstrap'
import send from '../assets/sendIcon.svg';
import plus from '../assets/plus-circle.svg';
import minus from '../assets/minus-circle.svg';

const Feed = (props) => {
    const { users, messages} = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cartNum, setcartNum] = useState(0);


    return ( 
       <>
        <Modal show={show} onHide={handleClose} centered >
            <Modal.Header closeButton>
            <Modal.Title className="modalName">{users[2].username}
            
            <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700" 
                    />
            </Modal.Title>
            
            </Modal.Header>
            <Modal.Body>
                <InputGroup>
                    {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
                    <FormControl as="textarea" aria-label="With textarea" placeholder="message to grower."/>
                    
                </InputGroup>
            <div className="feedBtm">
                <div className="produceTitle" style={{ textAlign: "center", marginTop: "20px"}}>
                    {users[2].produce[0].produce_title}
                </div>
            </div>
            <div className="feedBtm">
                <div className="produceTitle">
                    ${users[2].produce[0].price} {users[0].produce[0].measurement}
                </div>

                
                <div className="produceBtn" style={{width: "82px"}}>
                    <img src={minus} alt="subtract from cart" onClick={() => {setcartNum(cartNum-1)}}/>
                    &nbsp;{cartNum}&nbsp;
                    <img src={plus} alt="add to cart" onClick={() => {setcartNum(cartNum+1)}}/>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px"}}>
            <Button className="produceBtn" onClick={handleClose} >
                        Contact <img src={send} alt="send" />
            </Button>
            </div>
            </Modal.Body>
        </Modal>

        
        <div id="feedPage">      
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
                            <div className="produceBtn" onClick={handleShow}>Contact</div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="feedItem">
                <div className="feedTitle">
                    <span style={{float: "left"}}>{users[3].username}</span>
                    <span style={{float: "right"}}>{users[3].location}</span>
                </div>
                <img src={image3} alt="" width="100%" className="feedImg" />
                <div className="feedInfo">
                    {users[3].produce[0].produce_info}
                    <div className="feedBtm">
                        <div className="produceTitle">{users[3].produce[0].produce_title}
                        <br />
                        {users[3].produce[0].price} {users[3].produce[0].measurement}
                        </div>
                        <div style={{alignSelf: "center"}}>
                            <div className="produceBtn" onClick={handleShow}>Contact</div>
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
                            <div className="produceBtn" onClick={handleShow}>Contact</div>
                        </div>
                        
                    </div>
                </div>
            </div>

            
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
                            <div className="produceBtn" onClick={handleShow}>Contact</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Feed;