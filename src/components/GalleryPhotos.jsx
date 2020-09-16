import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImageGallery from "react-image-gallery";

import galleryStyle from "./gallery.module.css";

import {
  GatsbyIcon,
  StockTaco01_2

} from "../images/index";

class GalleryPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0",
    };
  }
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const images = [
      {
        original: StockTaco01_2,
        thumbnail: StockTaco01_2,
      },
      {
        original: StockTaco01_2,
        thumbnail: StockTaco01_2,
      },
      {
        original: StockTaco01_2,
        thumbnail: StockTaco01_2,
      },
      {
        original: StockTaco01_2,
        thumbnail: StockTaco01_2,
      },
      {
        original: StockTaco01_2,
        thumbnail: StockTaco01_2,
      },
      {
        original: StockTaco01_2,
        thumbnail: StockTaco01_2,
      },
      {
        original: StockTaco01_2,
        thumbnail: StockTaco01_2,
      },
      {
        original: StockTaco01_2,
        thumbnail: StockTaco01_2,
      },
      {
        original: StockTaco01_2,
        thumbnail: StockTaco01_2,
      },
    ];
    return (
        <>
      {/*<section className={galleryStyle.GallerySection}>
        <Container className={galleryStyle.GalleryContainer}>*/}
          {/*<Container className={galleryStyle.GalleryContainer}>*/}
          <Row>
            <Col>
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                startIndex={0}
                items={images}
                infinite={true}
                showNav={true}
                showThumbnails={true}
                thumbnailPosition="bottom"
                showFullscreenButton={true}
                showBullets={true}
                showIndex={true}
              />
            </Col>
          </Row>
         {/*</Container>
        {/*</Container>* /}
         </section>*/}
      </>
    );
  }
}

export default GalleryPhotos;
