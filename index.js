import './style.css';

// ### Cel ćwiczenia

// Przy pomocy kodu JavaScript, odwzoruj oryginał obrazu na płótnie powyżej.

// W pliku `index.js` pobrana została referencja do elementu nadrzędnego twojego płótna - jest to zmienna `fakeCanvas`. Od tej zmiennej możesz rozpocząć pracę przy odwzorowaniu obrazu. Powodzenia!

// Pamiętaj - to nauka, więc unikaj drogi na skróty:

// * nie modyfikuj struktury kodu HTML
// * nie modyfikuj styli CSS
// * nie kopiuj oryginału i nie wklejaj go w miejscep płótna ;)

const PIXEL_COLOR = '#e44d4d';

const fakeCanvas = document.querySelector('.fake-canvas');
console.log(fakeCanvas);

const originalCanvas = document.querySelectorAll('.original-canvas .flex-row');
console.log(originalCanvas);

originalCanvas.forEach((el, i) => {
  console.log(el, i);
  // el.forEach((element, i) => {
  //   console.log(element);
  // });
});
