
$(function() {
    var $button = $('.feature_series .filtres button').click(function() {
      $button.not(this).removeClass('filtre_active');
      $(this).toggleClass('filtre_active');
    });
  });

var numFeatSeries = document.getElementById("numFeatSeries");
var twelveSeries = document.querySelectorAll(".feature_series_container .row > div:nth-last-child(-n + 12)");

function toggleSeries(){
    if(numFeatSeries.innerHTML === "Show more"){
        for(i = 0; i < twelveSeries.length; i++){
            twelveSeries[i].style.display = "block";
            numFeatSeries.innerHTML = "Show less";
        }
    }else{
        for(i = 0; i < twelveSeries.length; i++){
            numFeatSeries.innerHTML = "Show more";
            twelveSeries[i].style.display = "none";
    }
    }
};


var viewComedy = document.getElementById("viewComedy");
var viewDrama = document.getElementById("viewDrama");
var viewThriller = document.getElementById("viewThriller");
var viewAdventure = document.getElementById("viewAdventure");
var viewSciFi = document.getElementById("viewSciFi");
var allSeries = document.querySelectorAll(".feature_series_container .row > div");

function filterSeriesAll(){
    for(var i = 0; i < allSeries.length; i++){
            allSeries[i].style.display = "block";
    }
    numFeatSeries.style.display = "inline-block";
    numFeatSeries.innerHTML = "Show less"
}


function filterSeriesFantasy(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var genre1 = allSeries[i].classList[3];
        var genre2 = allSeries[i].classList[4];
        var genre3 = allSeries[i].classList[5];
        if (genre1 === "Fantasy" || genre2 === "Fantasy" || genre3 === "Fantasy"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesSciFi(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var genre1 = allSeries[i].classList[3];
        var genre2 = allSeries[i].classList[4];
        var genre3 = allSeries[i].classList[5];
        if (genre1 === "SciFi" || genre2 === "SciFi" || genre3 === "SciFi"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesDrama(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var genre1 = allSeries[i].classList[3];
        var genre2 = allSeries[i].classList[4];
        var genre3 = allSeries[i].classList[5];
        if (genre1 === "Drama" || genre2 === "Drama" || genre3 === "Drama"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesComedy(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var genre1 = allSeries[i].classList[3];
        var genre2 = allSeries[i].classList[4];
        var genre3 = allSeries[i].classList[5];
        if (genre1 === "Comedy" || genre2 === "Comedy" || genre3 === "Comedy"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesAdventure(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var genre1 = allSeries[i].classList[3];
        var genre2 = allSeries[i].classList[4];
        var genre3 = allSeries[i].classList[5];
        if (genre1 === "Adventure" || genre2 === "Adventure" || genre3 === "Adventure"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesThriller(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var genre1 = allSeries[i].classList[3];
        var genre2 = allSeries[i].classList[4];
        var genre3 = allSeries[i].classList[5];
        if (genre1 === "Thriller" || genre2 === "Thriller" || genre3 === "Thriller"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}
