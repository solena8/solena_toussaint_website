function generateStyles() {
  const style = document.createElement("style");
  style.textContent = `
    @import url("https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200..700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Raleway+Dots&family=Yanone+Kaffeesatz:wght@200..700&display=swap");
    <body>
        .container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 20vh 20vh; 
      }

      h1 {
        grid-area: 1 / 2 / 2 / 5; /
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: "Raleway Dots", sans-serif;
        text-transform: uppercase;
        font-weight: 500;
      }

      .menu_accueil {
        grid-area: 2 / 2 / 3 / 5; 
        display: flex;
        justify-content: space-around; 
        align-items: center;
        text-align: center;
        font-family: "Yanone Kaffeesatz", sans-serif;
        font-weight: 300;
        font-size: 22px;
        list-style: none;
      }

   
     
  `;
  document.head.appendChild(style);
}

function generateNavbar() {
  const navbarHTML = `
    <header class="container">
      <h1><a href="index.html">Soléna Toussaint</a></h1>
      <nav class="menu_accueil">
          <li class="menu_items" id="menu_présentation">
            <a href="/presentation.html">Présentation</a>
          </li>
          <li class="menu_items" id="menu_illustration">
            <a href="/illustration.html">Illustrations</a>
          </li>
          <li class="menu_items" id="menu_bd">
            <a href="/bd_comics.html">BD et comics</a>
          </li>
          <li class="menu_items" id="menu_origami">
            <a href="/origami.html">Origami</a>
          </li>
          <li class="menu_items" id="menu_code">
            <a href="/coding.html">Code</a>
          </li>
          <li class="menu_items" id="menu_autre_projets">
            <a href="/autres_projets.html">Autres projets</a>
          </li>
      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
}

// Generate styles and navbar on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  generateStyles();
  generateNavbar();
});
