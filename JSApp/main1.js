/*jslint node: true */
"use strict";
let numberOfFilms;
let i;
function start(){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?: ");
    while (numberOfFilms == '' || numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?: ");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (i=0;i<2;i++){
        let namef = prompt("Один из последних просмотренных фильмов?", ""),
            assess = prompt("На сколько оцените его?", "");
        
        if (namef != null && assess != null && namef.length < 50 && assess.length < 50 && namef != '' && assess != ''){
            personalMovieDB.movies[namef] = assess;
            console.log("alright");
        }else{
            i--;
            console.log("error");
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        alert("There are too much u should watch! Keep watchin!");
    }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        alert("You are a classic viewer!");
    }else if(personalMovieDB.count > 30){
        alert("You are a movie buff");
    }else{
        console.log("ERROR");
        alert("ERROR");
    }
}
detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

function ShowDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    for (i=1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
/*let namef = prompt("Один из последних просмотренных фильмов?", ""),
    assess = prompt("На сколько оцените его?", ""),
    namef2 = prompt("Один из последних просмотренных фильмов?", ""),
    assess2 = prompt("На сколько оцените его?", "");
personalMovieDB.movies[namef] = assess;
personalMovieDB.movies[namef2] = assess2;

console.log(personalMovieDB);*/