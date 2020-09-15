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
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="© 2019 Company"
            logo="https://uploads.divjoy.com/logo.svg"
          />
        </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
