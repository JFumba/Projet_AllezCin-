/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/*$(document).ready(function(){
  // put the popup at the start of the body
  $('#ageWrapper').prependTo($('body'));

  // check if the age has already been verified
  if (($.cookie('age')) !== 'true') { $('#ageWrapper').addClass('ageConfirmed'); }

  // if the "yes" button is clicked, add a cookie and hide the popup
  $('#ageOkay').click(function() {
    $.cookie('age', 'true', { expires: 1, path: '/' });
    $('#ageWrapper').removeClass('ageUnknown');
  });

  // if the "no" button is clicked, take the user elsewhere
  $('#ageBad').click(function() {
    window.location.href="https://www.imdb.com/" ;
  });
});*/
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}