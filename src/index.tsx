import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from "./App";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua&display=swap');html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Inknut Antiqua', serif;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
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
* {
  box-sizing: border-box;
}
body {
  font-weight: 200;
  font-family: 'Inknut Antiqua', serif;
  color: #eceae8;
  line-height: 1.3;
  background-color: #eceae8;
  font-size: 2vw;
}
a {
  text-decoration:none;
  color:inherit;
}

img{
  width: 50vw;
  // margin: 0 7vw;
}

h1{
  font-weight: normal;
}

@media only screen and (max-width: 768px){
  body{
    font-size: 22px;
  }
}
`;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <React.StrictMode>
    <RecoilRoot>
          <GlobalStyle />
          <App />
    </RecoilRoot>
  </React.StrictMode>
  </div>
);
