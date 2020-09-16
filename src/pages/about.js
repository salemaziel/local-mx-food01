import React from "react";
import { Col, Row, Card, ListGroup, Container } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
    <Row>
      <Col>
        <h1>About</h1>
        <p>This is a basic gatsby starter</p>
      </Col>
    </Row>
    <Row>
      {/*<Col md="6">
        <Card>
          <Card.Body>
            <Card.Title>Features</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>
                  Uses react-bootstrap and thats it
                </ListGroup.Item>
                <ListGroup.Item>
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Card>
          <Card.Body>
            <Card.Title>More Information</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item action href="https://github.com/salemaziel/">Visit the demo page</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
</Col>*/}
    </Row>
    </Container>
  </Layout>
);

export default AboutPage;
