"use strict";

const countMovie = prompt("enter the number of films we watch", ""); 

const lastFilmsA = prompt("Input last watching movie", ""),
     filmScoreA = prompt("How do you like the movie from 1 to 10", ""),
     lastFilmsB = prompt("Input last watching movie", ""),
     filmScoreB = prompt("How do you like the movie from 1 to 10", "");

const personalMovieDB = {
        count : countMovie,
        movies : {},
        actors : {},
        genres : [],
        privat : false
    };
    
personalMovieDB.movies[lastFilmsA] = filmScoreA;
personalMovieDB.movies[lastFilmsB] = filmScoreB;

console.log(personalMovieDB);