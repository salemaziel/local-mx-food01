import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import Avatar from "./Avatar";
import "./FeaturedFoodCards.scss";

function FeaturedFoodCards(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          className="py-3 d-flex align-items-stretch"
          key={index}
        >
          <Card /*style={{whiteSpace: "normal",
          border: '0',
                        /*boxShadow: 'inset 0 0 0 2px rgba(144, 144, 144, 0.25)'* / padding: '0'}}*/ >

              <Card.Img variant="top" src={item.headerImage} fluid={true} />
            <Card.Body className="d-flex flex-column text-center align-items-center p-4">
              {/*<div className="FeaturedFoods__avatar-wrapper">
                <Avatar src={item.avatarImage} alt={item.name} size="128px" />
      </div>*/}
              <h3 className="font-weight-bold mb-0 mt-4">{item.name}</h3>
              <small>{item.role}</small>
              <Card.Text className="mt-4">{item.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default FeaturedFoodCards;
