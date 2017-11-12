import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import { injectGlobalStyles } from "../utils/injectGlobalStyles";
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colorPrimary: "#33d399",
  colorPaleGrey: "#f2f2f2",
  colorLightGrey: "#bdbdbd",
  colorDarkGrey: "#4f4f4f",
  fontSmall: "14px",
  fontNormal: "18px",
  fontMedium: "32px",
  fontLarge: "36px",
  defaultOpacity: "0.8",
  defaultTransitionTime: "0.6s"
};

// injectGlobalStyles();

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Codenakama"
      meta={[
        {
          name: "description",
          content: "Software developer building web and mobile apps"
        },
        {
          name: "keywords",
          content:
            "developer, software, music, blogging, mobile development, web development, reactjs"
        }
      ]}
    >
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open+Sans"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lato "
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        {children()}
        <Footer />
      </div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
