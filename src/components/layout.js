/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
//import { Container } from "react-bootstrap";
//import { ProvideAuth } from "../util/auth.js";
//import { Switch, Route, Router } from "../util/router.js";

import Header from "./header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer
            bg="success"
            textColor="light"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            copyright="© 2020"
            logo="https://res.cloudinary.com/dexdumfqy/image/upload/v1600246731/rbl-art-designs/albertos-logo-2_fqr69v.png"
          />
        </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
