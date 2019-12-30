import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import logo from '../assets/images/logo.svg';
import chakraTheme from '../theme';
import { GlobalStyles } from '../utils/injectGlobalStyles';
import Footer from './Footer';
import Header from './Header';

const theme = {
  colorPrimary: '#33d399',
  colorPaleGrey: '#f2f2f2',
  colorLightGrey: '#bdbdbd',
  colorDarkGrey: '#4f4f4f',
  fontSmall: '14px',
  fontNormal: '18px',
  fontMedium: '32px',
  fontLarge: '36px',
  defaultOpacity: '0.8',
  defaultTransitionTime: '0.6s'
};

const Layout = ({ children, location, data }) => {
  const domain = 'https://itsricardo.com';

  return (
    <div>
      <GlobalStyles />
      <Helmet
        title='Ricardo Abreu'
        meta={[
          {
            name: 'description',
            content: 'Software developer building web and mobile apps'
          },
          {
            name: 'keywords',
            content:
              'developer, software, music, blogging, mobile development, web development, reactjs'
          }
        ]}
      >
        <link
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          rel='stylesheet'
          integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
          crossorigin='anonymous'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Open+Sans'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Lato '
        />
      </Helmet>
      {location.pathname === '/' && (
        <Helmet
          meta={[
            {
              property: 'og:title',
              content: 'Ricardo Abreu'
            },
            {
              property: 'og:description',
              content: 'Software developer building web and mobile apps'
            },
            {
              property: 'og:image',
              content: `${logo}`
            },
            {
              property: 'og:url',
              content: `${domain + location.pathname}`
            },
            {
              name: 'twitter:title',
              content: 'Ricardo Abreu'
            },
            {
              name: 'twitter:description',
              content: 'Software developer building web and mobile apps'
            },
            {
              name: 'twitter:image',
              content: `${logo}`
            },
            {
              name: 'twitter:url',
              content: `${domain + location.pathname}`
            },
            {
              name: 'twitter:card',
              content: `${logo}`
            }
          ]}
        />
      )}

      <ThemeProvider theme={theme}>
        <ChakraThemeProvider theme={chakraTheme}>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </ChakraThemeProvider>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
