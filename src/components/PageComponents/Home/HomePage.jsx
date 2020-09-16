import React from "react";
import CarouselSection from "../../CarouselSection";
import FeaturesSection from "../../FeaturesSection";
import ContentCardsSection from "../../ContentCardsSection";
import TeamBiosSection from "../../TeamBiosSection";
import MenuSection from "../../MenuSection";
import HeroSection from "../../HeroSection";
import GallerySection from "../../GallerySection";
import ContactSection from "../../ContactSection";
import { navigateTo, Link } from "gatsby";
import FeaturedFoodCardSection from "../../FeaturedFoodCardSection";

const Homepage = (props) => {
  return (
    <>
      <CarouselSection
        items={[
          {
            image:
              "https://res.cloudinary.com/dexdumfqy/image/upload/v1600249189/rbl-art-designs/OCR-L-TacosManuel-0521-1-2600x1632_qx6z8d.jpg",
            caption: "Caption for the first image",
          },
          {
            image:
              "https://res.cloudinary.com/dexdumfqy/image/upload/v1600249189/rbl-art-designs/OCR-L-TacosManuel-0521-1-2600x1632_qx6z8d.jpg",
            caption: "Caption for the second image",
          },
          {
            image:
              "https://res.cloudinary.com/dexdumfqy/image/upload/v1600249189/rbl-art-designs/OCR-L-TacosManuel-0521-1-2600x1632_qx6z8d.jpg",
            caption: "Caption for the third image",
          },
        ]}
      />
      <FeaturedFoodCardSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Specials"
        subtitle=""
      />
      {/*<FeaturesSection
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
      />*/}
      {/*<ContentCardsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Content"
        subtitle=""
      />*/}
      {/*<TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />*/}
      <MenuSection
        bg="dark"
        textColor="white"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Menu Specials"
        subtitle=""
      />
      <HeroSection
        bg="warning"
        textColor="dark"
        size="md"
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600246423/rbl-art-designs/oaxaca-3128326_1920_muaiuw.png"
        bgImageOpacity={1}
        title="About Us"
        subtitle="Introductory paragraph about business"
        buttonText="Our Story"
        buttonColor="primary"
        image="https://i.pinimg.com/originals/a7/96/19/a79619dbab322191ed74d09954742a4c.jpg"
        buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/about");
        }}
      />
      <GallerySection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your title here"
        subtitle=""
      />
      {/*<FeaturesSection
        bg="primary"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      />*/}
      <ContactSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle="We strive to make our customers happy"
        buttonText="Send message"
        buttonColor="primary"
        showNameField={false}
        inputSize="md"
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213784.49429542263!2d-117.24342275680688!3d33.151577841821045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1312c27a9f5730e!2sAlberto&#39;s%20Mexican%20Food!5e0!3m2!1sen!2sus!4v1600247755831!5m2!1sen!2sus"
      />
    </>
  );
};

export default Homepage;
