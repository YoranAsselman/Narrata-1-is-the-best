"use strict";


import bib from "./boeken.js";

console.log(bib);

let likedBooks = [];

const bibliotheek = {
    allBooks: bib,
    toRenderBooks: bib,
    /*    toRenderBooks: [],

       heartEmptyImgPath: "./heart_noFill.png",
       likedBooks: [],
       heartButtons: [],

       sortedBooks: [],
       filteredBooks: [],
       userInput: "all",

       sort: false,
       filter: false,
       liked: false,
    */

    applyAll() {

        this.render();
        this.toRenderBooks = this.allBooks;

    },

    init() {

        this.applyAll();


        document.getElementById('alfabetisch').addEventListener('click', (e) => {
            e.preventDefault();
            this.sortAlphabeticatlly();
        });

        document.getElementById('liked').addEventListener('click', (e) => {
            e.preventDefault();
            this.liked = true;
        });

        let filterGenre = document.getElementsByName('genre');
        filterGenre.forEach((book) => {
            book.addEventListener('click', (event) => {
                this.userInput = event.target.value;
                console.log(this.userInput);
                this.filterByGenre();
            });
        });
    },

    addToLiked() {
        const heartButtons = document.getElementsByName('heartIMG');
        console.log(heartButtons);
        let id = 0;
        heartButtons.forEach((heart) => {
            heart.addEventListener('click', () => {
                console.log('adding to liked');
                console.log(heart);
                heart.src = "./filled_heart.png";
                id += 1;
                likedBooks.push(this.allBooks[id]);
                this.applyAll();
            });
        })
        console.log(likedBooks);
        /*       heartButtons.forEach((book) => {
        
        });
 */



    },

    filterByGenre() {

        this.toRenderBooks = this.allBooks.filter((e) => {
            if (this.userInput == "all") {
                return this.allBooks;
            } else if (e.genre == this.userInput) {
                return true;
            }

        });

        this.render();


    },


    render() {

        let html = "";
        this.toRenderBooks.forEach((boek) => {
            console.log(boek.heartIconPath);
            let shortBeschrijving = boek.beschrijving.substr(0, 100);
            shortBeschrijving += "...";

            html += `<div class="boekenLijst__boekenWrapper__boek">
    <div>
        <img src="${boek.image_url}"  class ="boekenLijst__boekenWrapper__boek__img">
        <div class="boekenLijst__boekenWrapper__boek__img__heart">
            <img src =${boek.heartIconPath} name ="heartIMG">
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

        document.getElementById('boekenLijst__boekenWrapper').innerHTML = html;
        this.toRenderBooks = this.allBooks;
        this.addToLiked();

    },

    showLiked() {

    },

    sortAlphabeticatlly() {
        console.log('sroting')
        this.toRenderBooks = bib.sort((a, b) => {
            if (a.titel < b.titel) {
                return -1;
            } else {
                return 1;
            }
        });
        console.log(this.sort);

        this.applyAll();

    }


};

bibliotheek.init();

//display liked list


//onclick add to liked list list