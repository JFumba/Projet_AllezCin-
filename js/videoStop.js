$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var urlStand = $("#vidStand").attr('src');
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#modalStand").on('hide.bs.modal', function(){
        $("#vidStand").attr('src', '');
    });
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#modalStand").on('show.bs.modal', function(){
        $("#vidStand").attr('src', urlStand);
    });

    // idem pour Pi
    var urlPi = $("#vidPi").attr('src');
    $("#modalPi").on('hide.bs.modal', function(){
        $("#vidPi").attr('src', '');
    });
    $("#modalPi").on('show.bs.modal', function(){
        $("#vidPi").attr('src', urlPi);
    });

    // idem pour Blood
    var urlBlood = $("#vidBlood").attr('src');
    $("#modalBlood").on('hide.bs.modal', function(){
        $("#vidBlood").attr('src', '');
    });
    $("#modalBlood").on('show.bs.modal', function(){
        $("#vidBlood").attr('src', urlBlood);
    });

    // idem pour Borat
    var urlBorat = $("#vidBorat").attr('src');
    $("#modalBorat").on('hide.bs.modal', function(){
        $("#vidBorat").attr('src', '');
    });
    $("#modalBorat").on('show.bs.modal', function(){
        $("#vidBorat").attr('src', urlBorat);
    });

    // idem pour Mother
    var urlMother = $("#vidMother").attr('src');
    $("#modalMother").on('hide.bs.modal', function(){
        $("#vidMother").attr('src', '');
    });
    $("#modalMother").on('show.bs.modal', function(){
        $("#vidMother").attr('src', urlMother);
    });

    // Movie Shop Slide 1
    // var urlSlide1 = $("#movShopVid1").attr('src');
    // $("#shopCarousel").on('hide.bs.carousel', function(){
    //     $("#movShopVid1").attr('src', '');
    // });
    // $("#shopCarousel").on('show.bs.carousel', function(){
    //     $("#movShopVid1").attr('src', urlSlide1);
    // });
});
