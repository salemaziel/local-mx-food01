import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Features(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} lg={4} className="px-4" key={index}>
          <div className="py-3">
            <div className="display-4 mb-4">
              <img src={`${item.foodPic}`} style={{width: '100%'}}/>
            </div>
            {/*<div className={`text-${item.iconColor} display-4 mb-4`}>
              <i className={`${item.iconClass}`} />
      </div>*/}
            <h4 className="mb-4">{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Features;
