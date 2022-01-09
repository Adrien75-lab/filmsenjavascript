window.onload = function () {
  /*
    une fonction qui prend en paramètre un nombre
    et affiche dans le catalogue le film associé
    à ce nombre
    <div class="film">
          <img src="/assets/images/Intouchables.jpg" alt="Intouchables" />
          <h3>Test titre</h3>
        </div>
  */
  for (var i = 0; i < filmData.length; i++) {
    createFilm(i);
  }
  function createFilm(number) {
    var someFilm = filmData[number];

    // Creation d'un film
    var film = document.createElement("div");
    film.className = "film";
    film.id = number + "-film";

    // Creation de l'image;
    var image = document.createElement("img");
    image.src = someFilm.image;
    image.alt = someFilm.title;

    // creation du titre du film
    var titre = document.createElement("h3");
    titre.innerHTML = someFilm.title;

    film.appendChild(image);
    film.appendChild(titre);
    document.getElementById("films").appendChild(film);
  }

  var input = document.getElementsByTagName("input");
  var films = document.getElementById("films");
  input[0].addEventListener("keyup", recherche);
  input[1].addEventListener("mouseup", checkbox);
  films.addEventListener("mouseover", survolFilm);

  function recherche(event) {
    var inputValue = event.target.value;
    inputValue = inputValue.toLowerCase();

    // input n'est pas vide
    for (var i = 0; i < filmData.length; i++) {
      var titre = filmData[i].title;
      titre = titre.toLowerCase();
      var film = document.getElementById(i + "-film");
      if (titre.includes(inputValue) == false) {
        film.style.display = "none";
      } else {
        film.style.display = "inline-block";
      }
    }
  } // fin fonction recherche
  function checkbox(event) {
    var details = document.getElementById("details");
    console.log(event.target.checked);
    if (event.target.checked) {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }
  function survolFilm(event){
      var elementSurvolee = event.target;
      console.log(elementSurvolee);
  }
};
