import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//import { useRouter } from "./../util/router.js";

import { navigateTo, Link } from 'gatsby'

function CarouselSection(props) {
//  const router = useRouter();

  return (
    <Carousel>
      {props.items.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt={item.caption} />
          <Carousel.Caption>
            {/*<Row>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    navigateTo("/menu");
                  }}
                >
                  Button
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    navigateTo("/menu");
                  }}
                >
                  Button
                </Button>
              </Col>
                </Row>*/}
            <Row>
              <Col>
                <p>{item.caption}</p>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselSection;
