
// $(function() {
//     var $button = $('.feature_movies .filtres button').click(function() {
//       $button.not(this).removeClass('filtre_active');
//       $(this).toggleClass('filtre_active');
//     });
//   });

var numFeatMovs = document.getElementById("numFeatMovs");
var twelveMovs = document.querySelectorAll(".feature_movies_container .row > div:nth-last-child(-n + 18)");

// console.log(twelveMovs.length);

function toggleMovies(){
    if(numFeatMovs.innerHTML === "Show more"){
        for(i = 0; i < twelveMovs.length; i++){
            twelveMovs[i].style.display = "block";
            numFeatMovs.innerHTML = "Show less";
        }
    }else{
        for(i = 0; i < twelveMovs.length; i++){
            numFeatMovs.innerHTML = "Show more";
            twelveMovs[i].style.display = "none";
    }
    }
};

var showFantasy = document.getElementById("showFantasy");
var showComedy = document.getElementById("showComedy");
var showDrama = document.getElementById("showDrama");
var showThriller = document.getElementById("showThriller");
var showAdventure = document.getElementById("showAdventure");
var showSciFi = document.getElementById("showSciFi");
var allMovs = document.querySelectorAll(".feature_movies_container .row > div");


// console.log(allMovs.classList[3]);

function filterMovAll(){
    for(var i = 0; i < allMovs.length; i++){
            allMovs[i].style.display = "block";
    }
    numFeatMovs.style.display = "inline-block";
    numFeatMovs.innerHTML = "Show less"
}


function filterMovFantasy(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var genre1 = allMovs[i].classList[3];
        var genre2 = allMovs[i].classList[4];
        var genre3 = allMovs[i].classList[5];
        if (genre1 === "Fantasy" || genre2 === "Fantasy" || genre3 === "Fantasy"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
    $('.feature_movies .filtres button').not('#showFantasy').removeClass('filtre_active');
    $('#showFantasy').toggleClass('filtre_active');
}

function filterMovSciFi(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var genre1 = allMovs[i].classList[3];
        var genre2 = allMovs[i].classList[4];
        var genre3 = allMovs[i].classList[5];
        if (genre1 === "SciFi" || genre2 === "SciFi" || genre3 === "SciFi"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
    $('.feature_movies .filtres button').not('#showSciFi').removeClass('filtre_active');
    $('#showSciFi').toggleClass('filtre_active');
}

function filterMovDrama(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var genre1 = allMovs[i].classList[3];
        var genre2 = allMovs[i].classList[4];
        var genre3 = allMovs[i].classList[5];
        if (genre1 === "Drama" || genre2 === "Drama" || genre3 === "Drama"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
    $('.feature_movies .filtres button').not('#showDrama').removeClass('filtre_active');
    $('#showDrama').toggleClass('filtre_active');
}

function filterMovComedy(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var genre1 = allMovs[i].classList[3];
        var genre2 = allMovs[i].classList[4];
        var genre3 = allMovs[i].classList[5];
        if (genre1 === "Comedy" || genre2 === "Comedy" || genre3 === "Comedy"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
    $('.feature_movies .filtres button').not('#showComedy').removeClass('filtre_active');
    $('#showComedy').toggleClass('filtre_active');
}

function filterMovAdventure(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var genre1 = allMovs[i].classList[3];
        var genre2 = allMovs[i].classList[4];
        var genre3 = allMovs[i].classList[5];
        if (genre1 === "Adventure" || genre2 === "Adventure" || genre3 === "Adventure"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
    $('.feature_movies .filtres button').not('#showAdventure').removeClass('filtre_active');
    $('#showAdventure').toggleClass('filtre_active');
}

function filterMovThriller(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var genre1 = allMovs[i].classList[3];
        var genre2 = allMovs[i].classList[4];
        var genre3 = allMovs[i].classList[5];
        if (genre1 === "Thriller" || genre2 === "Thriller" || genre3 === "Thriller"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
    $('.feature_movies .filtres button').not('#showThriller').removeClass('filtre_active');
    $('#showThriller').toggleClass('filtre_active');
}
