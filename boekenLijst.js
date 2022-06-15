"use strict";

import bib from "boekenLijst.js";

console.log(bib);

bib.forEach((boek) => {
    document.getElementById('boekenLijst__boekenWrapper').innerHTML = `<div class="boekenLijst__boekenWrapper__boek">
    <div class="boekenLijst__boekenWrapper__boek__img">
        <img src="${boek.img_url}">
        <div class="boekenLijst__boekenWrapper__boek__img__heart">
            INSERT HEART HERE
            <img>
        </div>
    </div>
    <div class="boekenLijst__boekenWrapper__boek__info">
        <h2>${boek.titel}</h2>
        <h2>${boek.beschrijving}</h2>
        <div class="boekenLijst__boekenWrapper__boek__info__buttons">
            <p class="boekenLijst__boekenWrapper__boek__info__buttons__leesNiveau button">
                ${boek.leesNiveau}
            </p>
            <p class="boekenLijst__boekenWrapper__boek__info__buttons__genre">
                ${boek.genre}
            </p>
        </div>
    </div>
    </div>`
});