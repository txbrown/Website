import React from "react";
import Container from "../components/Container";
import Layout from "../components/layout";

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
