window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }
    context.beginPath(); //On démarre un nouveau tracé.
    context.arc(50, 50, 25, 0, Math.PI*2); //On trace la courbe délimitant notre forme
    context.fillStyle = "#181818"
    context.fill();
    context.closePath();
    context.beginPath(); //On démarre un nouveau tracé.
    context.lineWidth=5;
    context.arc(50, 50, 25, 0, Math.PI*2); //On trace la courbe délimitant notre forme
    context.strokeStyle = "red"
    context.stroke();
    context.closePath();
    context.beginPath();
    context.fillStyle = "white";
    context.moveTo(50, 37.5);
    context.lineTo(62.5, 50);
    context.lineTo(55, 50);
    context.lineTo(55, 62.5);
    context.lineTo(45, 62.5);
    context.lineTo(45, 50);
    context.lineTo(37.5, 50);
    context.lineTo(50, 37.5);
    context.fill();
    context.closePath();
}
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.canvas').fadeIn();
        } else {
            $('.canvas').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.canvas').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        $('.canvas').hide();
        return false;
    });

});
$('#contactSub').click(function () {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var comment = document.getElementById('comment').value;
  alert("First name : "+firstName+ "\nLast name : "+lastName + "\nEmail : " + email + "\nSubject : " + subject);
});
