import { createGlobalStyle } from 'styled-components';

const paleGrey = '#f2f2f2';
const lightGrey = '#B1B0B5';
const darkGrey = '#4f4f4f';
const accentGreen = '#33d399';

export const GlobalStyles = createGlobalStyle`
/* reset css */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



body {
    font-family: 'SF UI Text',-apple-system,BlinkMacSystemFont,"Helvetica Neue","Segoe UI","Oxygen","Ubuntu","Cantarell","Open Sans",sans-serif;
	font-size: 18px;
	color: #020202;
	line-height: 1.3;
  }


h1,
h2,
h3 {
  margin-bottom: 1em;
}

ul {
  list-style: none;
}

a {
		color: #B1B0B5;
    text-decoration: none;
    & :visited {
			color: #B1B0B5;
    }
  }

p{
	line-height: 30.4px;
	margin-bottom: 1em;
}

p:last-child{
	margin-bottom: 0;
}

p a, .blog-post-content a{
	color: #33d399;
	cursor:pointer;
}

.blog-post-content img{
    max-width: 100%;
    height: 314px;
    display: inline-block;
}

.blog-post-content p {
	line-height: 1.756;
}

.blog-post-content ul {
	list-style: disc;
	padding-left: 2em;
	margin-bottom: 1em;
}

blockquote{
	padding: 0 1em;
	color: #B1B0B5;
	border-left: 0.25em solid #f2f2f2;
	margin-bottom: 1em;
}

.gatsby-highlight-code-line {
  background-color: #feb;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid #f99;
}


.gatsby-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
}
`;
