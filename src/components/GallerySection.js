import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import GalleryPhotos from "./GalleryPhotos";

function GallerySection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container
        /*style={{
          maxWidth: "768px",
        }}*/
      >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <GalleryPhotos />
      </Container>
    </Section>
  );
}

export default GallerySection;
