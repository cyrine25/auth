import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const Profile = () => {
  const { user,isAuth } = useSelector((state) => state.authReducer);
  return (
    <div>
      {!isAuth?<Redirect to='/login' />:<Card style={{ width: "18rem" }}>
        <span>{user.name[0]}</span>
        <Card.Body>
          <Card.Title>{user.name+' '+user.lastName}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
        </Card.Body>
      </Card>}
    </div>
  );
};

export default Profile;
