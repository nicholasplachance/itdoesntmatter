import { link } from "fs";

function linksBuilder(links) {
  // Loop over links and dynamically create the list of links
  // Using a template literal build out list item markup
  let linksHTML = '';
  for ( let i = 0; i < links.length; i++ ) {
    linksHTML += `<li><a href="./">${links[i]}</a></li>`
  }
  return linksHTML;
}


export default function(st) {
  return `<nav>
  <span id="hamburger-icon" class="fas fa-hamburger is-hidden--desktop"></span>
  <ul class="is-hidden--mobile show-on--desktop">
  ${linksBuilder(st.links)}
  </ul>
  </nav>`
}

{/* <li><a href="./index.html">Home</a></li>
  <li><a href="./about/">About</a></li>
  <li><a href="./contact/">Contact</a></li>
  <li><a href="./blog/">Blog</a></li>
  <li><a href="./gallery/">Gallery</a></li> */}
