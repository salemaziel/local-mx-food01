import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//import { useRouter } from "./../util/router.js";
//import BackgroundImage from "./BackgroundImage";

import SectionHero from './SectionHero'
import { navigateTo, Link } from 'gatsby'
import './CarouselSection.scss'

function CarouselSection(props) {
//  const router = useRouter();
const {
  bgImage,
  bgImageOpacity,
  bgImageRepeat,
  className,
  children,
  ...otherProps
} = props;
  return (
    <Carousel>
      {props.items.map((item, index) => (
        <Carousel.Item key={index}>
          <SectionHero
          bg=""
          textColor=""
          bgImage={item.image}
          bgImageRepeat=""
          size="lg"
          className=""
          bgImageOpacity="1">
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
          </SectionHero>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselSection;
