import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button, CardSubtitle
} from 'reactstrap';
import UserModal from "./UserModal";

const UserCard = ({user}) => {
  const [showModal,setShowModal]=useState(false) 
  const toggle = () => setShowModal(!showModal)

  return (
 <div>
   <Card >
        <div className="img-container">
          <div className="img-text">
        </div>
      </div>
      <CardBody>     
        <CardTitle>{user.name}</CardTitle>
        <CardSubtitle>&#64;{user.username}</CardSubtitle>
        <Button onClick={toggle}>More Info</Button>
      </CardBody>
    </Card>
    <UserModal user={user} isOpen={showModal} toggle={toggle}/>
 </div>
  );
};

export default UserCard;