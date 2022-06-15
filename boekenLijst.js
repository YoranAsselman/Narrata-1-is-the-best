"use strict";

import bib from "./boeken.js";

console.log(bib);

bib.forEach((boek) => {
    let shortBeschrijving = boek.beschrijving.substr(0, 100);
    shortBeschrijving += "...";
    console.log(shortBeschrijving);
    document.getElementById('boekenLijst__boekenWrapper').innerHTML += `<div class="boekenLijst__boekenWrapper__boek">
    <div>
        <img src="${boek.image_url}"  class ="boekenLijst__boekenWrapper__boek__img">
        <div class="boekenLijst__boekenWrapper__boek__img__heart">
            <img src ="./heart_noFill.png">
        </div>
    </div>
    <div class="boekenLijst__boekenWrapper__boek__info">
        <h2>${boek.titel}</h2>
        <p>${shortBeschrijving}</p>
        <div class="boekenLijst__boekenWrapper__boek__info__buttons">
            <p class="boekenLijst__boekenWrapper__boek__info__buttons__leesNiveau button">
                ${boek.leesniveau}
            </p>
            <p class="boekenLijst__boekenWrapper__boek__info__buttons__genre button">
                ${boek.genre}
            </p>
        </div>
    </div>
    </div>`;
});