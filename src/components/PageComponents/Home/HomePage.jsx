import React from "react";
import CarouselSection from "../../CarouselSection";
import FeaturesSection from "../../FeaturesSection";
import ContentCardsSection from "../../ContentCardsSection";
import TeamBiosSection from "../../TeamBiosSection";
import MenuSection from "../../MenuSection";
import HeroSection from "../../HeroSection";
import GallerySection from "../../GallerySection";
import ContactSection from "../../ContactSection";
import { navigateTo, Link } from 'gatsby'

const Homepage = (props) => {

return(
<>
<CarouselSection
        items={[
          {
            image: "http://source.unsplash.com/7v_lSDRaOO0/1200x600",
            caption: "Caption for the first image",
          },
          {
            image: "http://source.unsplash.com/PvCO2IXlXBs/1200x600",
            caption: "Caption for the second image",
          },
          {
            image: "http://source.unsplash.com/KgjcndVr7tU/1200x600",
            caption: "Caption for the third image",
          },
        ]}
      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
      />
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
        bgImage=""
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
        subtitle="We strive to make our customers happy! And no, we didn't know about the similarly titled movie. Please stop asking about that."
        buttonText="Send message"
        buttonColor="primary"
        showNameField={false}
        inputSize="md"
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.176569329384!2d115.64515051624444!3d-33.340336599257625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2e1d6e1f2832f7%3A0xe4813eb823ccbe30!2sFlorist+Gump!5e0!3m2!1sen!2sus!4v1564947283991!5m2!1sen!2sus"
      />


</>
)
}

export default Homepage
