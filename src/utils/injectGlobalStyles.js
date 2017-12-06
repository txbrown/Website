import { injectGlobal } from "styled-components";

const paleGrey = "#f2f2f2";
const lightGrey = "#bdbdbd";
const darkGrey = "#4f4f4f";
const accentGreen = "#33d399";

export const injectGlobalStyles = injectGlobal`
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
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
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
		color: #bdbdbd;
    text-decoration: none;
    & :visited {
			color: #bdbdbd;
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
}

.blog-post-content img{
	max-width: 100%;
}

.blog-post-content ul {
	list-style: disc;
	padding-left: 2em;
	margin-bottom: 1em;
}

blockquote{
	padding: 0 1em;
	color: #bdbdbd;
	border-left: 0.25em solid #f2f2f2;
	margin-bottom: 1em;
}


`;
