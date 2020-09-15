import React from "react";
import HomePage from '../components/PageComponents/Home/HomePage'
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <HomePage />
  </Layout>
);

export default IndexPage;
