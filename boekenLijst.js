"use strict";


import bib from "./boeken.js";

console.log(bib);
let likedBooks = [];

const bibliotheek = {
    allBooks: bib,
    toRenderBooks: [],

    heartEmptyImgPath: "./heart_noFill.png",
    likedBooks: [],
    heartButtons: [],
    sortedBooks: [],
    userInput: "all",

    sort: false,
    filter: false,
    init() {
        this.render();

        this.addToLiked();

        document.getElementById('boekenLijst__filterAndSort__alfabetischSortButton').addEventListener('click', (e) => {
            e.preventDefault();
            this.sortAlphabeticatlly();
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
        const heartButtons = document.getElementsByClassName('heartIMG');
        console.log(heartButtons);

        heartButtons[0].addEventListener('click', () => {
            console.log('adding to liked');
            this.heartEmptyImgPath = "./filled_heart.png";
            console.log(this.heartEmptyImgPath);
            this.render();
        });

        console.log(this.sort);

    },

    filterByGenre() {
        console.log('filtering');
        const filteredBooks = this.allBooks.filter((e) => {
            if (this.userInput == "all") {
                return this.allBooks;
            }
            if (e.genre == this.userInput) {
                return true;
            }

        });
        this.filteredBooks = filteredBooks;
        console.log(filteredBooks);

        this.filter = true;
        this.render();


    },


    render() {
        this.toRenderBooks = this.allBooks;

        if (this.sort) {
            this.toRenderBooks = this.sortedBooks;
            console.log('sorting');
        }
        if (this.filter) {
            this.toRenderBooks = this.filteredBooks;
            console.log('filtering');
        }

        this.toRenderBooks.forEach((boek) => {
            console.log('rendering');
            let shortBeschrijving = boek.beschrijving.substr(0, 100);
            shortBeschrijving += "...";

            document.getElementById('boekenLijst__boekenWrapper').innerHTML += `<div class="boekenLijst__boekenWrapper__boek">
    <div>
        <img src="${boek.image_url}"  class ="boekenLijst__boekenWrapper__boek__img">
        <div class="boekenLijst__boekenWrapper__boek__img__heart">
            <img src =${this.heartEmptyImgPath} class ="heartIMG">
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

        this.filter = false;
        this.sort = false;
    },

    showLiked() {

    },

    sortAlphabeticatlly() {

        const soortedBooks = bib.sort((a, b) => {
            if (a.titel < b.titel) {
                return -1;
            } else {
                return 1;
            }
        });
        this.sortedBooks = soortedBooks;
        this.sort = true;
        console.log(this.sort);

        this.render();

    }


};

bibliotheek.init();

//display liked list


//onclick add to liked list list