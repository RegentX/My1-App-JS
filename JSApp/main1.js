/*jslint node: true */
"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?: ");
let arr = [];
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: arr,
    privat: false
};

let namef = prompt("Один из последних просмотренных фильмов?", ""),
    assess = prompt("На сколько оцените его?", ""),
    namef2 = prompt("Один из последних просмотренных фильмов?", ""),
    assess2 = prompt("На сколько оцените его?", "");
personalMovieDB.movies[namef] = assess;
personalMovieDB.movies[namef2] = assess2;

console.log(personalMovieDB);