import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <Features
          items={[
            {
              foodPic:
                "https://thegirlonbloor.com/wp-content/uploads/2018/05/The-Best-Carne-Asada-Fries-3-500x375.jpg",
              title: "Taco Plate",
              subtitle: "subtitle",
              iconClass: "fas fa-gem",
              iconColor: "warning",
            },
            {
              foodPic: "https://thegirlonbloor.com/wp-content/uploads/2018/05/The-Best-Carne-Asada-Fries-3-500x375.jpg",
              title: "California Burrito",
              subtitle: "subtitle",
              iconClass: "fas fa-charging-station",
              iconColor: "danger",
            },
            {
              foodPic: "https://thegirlonbloor.com/wp-content/uploads/2018/05/The-Best-Carne-Asada-Fries-3-500x375.jpg",
              title: "Rolled Tacos",
              subtitle: "subtitle",
              iconClass: "fas fa-adjust",
              iconColor: "primary",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default FeaturesSection;
