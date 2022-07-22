// ADD

const pakList = document.getElementsByClassName("big-five-list-item");

pakList[0].addEventListener("click", function (x) {
  const voegtoeLion = document.createElement("li");
  // OK, EN WAT GA JE TOEVOEGEN:
  voegtoeLion.classList.add("spotted-animals-list-item");
  voegtoeLion.innerHTML = "Leeuw";
  // WAAR GA JE IETS TOEVOEGEN:
  const ulOnder = document.getElementById("spotted-animals-list");
  // VOEG TOE:
  ulOnder.appendChild(voegtoeLion);
});

// REMOVE

const verwijderEerste = document.getElementById("remove-first-item-button");

verwijderEerste.addEventListener("click", function (x) {
  // PAK DE OUDER:
  const ulOnder2 = document.getElementById("spotted-animals-list");
  // PAK HET KIND:
  const childOnder = ulOnder2.getElementsByTagName("li")[0];
  // VERWIJDER KIND
  ulOnder2.removeChild(childOnder);
});

// REMOVE ALL

const verwijderAlles = document.getElementById("remove-all-button");

verwijderAlles.addEventListener("click", function (x) {
  // PAK DE OUDER:

  let ulOnder2 = document.getElementById("spotted-animals-list");
  console.log("Ouder onder: ", ulOnder2);

  // PAK ALLE KINDEREN MET EEN FUNCTION en verwijder deze:
  let UlOnderItems = ulOnder2.getElementsByTagName("li")[0];

  console.log("Child UlOnderItems is: ", UlOnderItems);

  // Lengte x
  const element = document.getElementById("spotted-animals-list-item");
  console.log("element is: ", element);
  let numb = element.childNodes.length;
  console.log("lengte is", numb);

  for (x = 0; x < 100; x++) {
    let UlOnderItems = ulOnder2.getElementsByTagName("li")[0];

    console.log("Deze gaat nu verwijdert worden: ", UlOnderItems[x]);

    ulOnder2.removeChild(UlOnderItems)[x];

    console.log("na de verwijdering hele lijst: ", UlOnderItems[x]);
  }
});
