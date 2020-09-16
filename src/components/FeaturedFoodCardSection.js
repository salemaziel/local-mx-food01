import React from "react";
import Section2 from "./Section2";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import FeaturedFoodCards from "./FeaturedFoodCards";

function FeaturedFoodCardSection(props) {
  return (
    <Section2
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container fluid>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <FeaturedFoodCards
          items={[
            {
              headerImage: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "Carne Asada Tacos",
              role: "$4.99",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
            },
            {
              headerImage: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
              name: "Carne Asada Tacos",
              role: "$4.99",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
            },
            {
              headerImage: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg",
              avatarImage: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Carne Asada Tacos",
              role: "$4.99",
              bio:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
            },
          ]}
        />
      </Container>
    </Section2>
  );
}

export default FeaturedFoodCardSection;
