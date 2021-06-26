import './style.css';

// ### Cel ćwiczenia

// Przy pomocy kodu JavaScript, odwzoruj oryginał obrazu na płótnie powyżej.

// W pliku `index.js` pobrana została referencja do elementu nadrzędnego twojego płótna - jest to zmienna `fakeCanvas`. Od tej zmiennej możesz rozpocząć pracę przy odwzorowaniu obrazu. Powodzenia!

// Pamiętaj - to nauka, więc unikaj drogi na skróty:

// * nie modyfikuj struktury kodu HTML
// * nie modyfikuj styli CSS
// * nie kopiuj oryginału i nie wklejaj go w miejscep płótna ;)

const fakeCanvas = document.querySelectorAll('.fake-canvas .pixel');
const originalCanvas = document.querySelectorAll('.original-canvas .pixel');

originalCanvas.forEach((el, i) => {
  if (el.classList.value.includes('pixel-dot')) {
    fakeCanvas[i].classList.add('pixel-dot');
  }
});
