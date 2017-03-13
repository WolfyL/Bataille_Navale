var $canon = $('#canon');
var history = '';
var myName = $("#moi").val();
var b = 0;
var v = 0;

// Met à jour le message affiché à l´adversaire à chaque nouvelle
// lettre saisie dans l´input ´Mon nom´
$("#moi").keyup(function(event) {

    $("#megaphone").text(promptMessage(myName));
});


// GESTION ENTER ET COLORATION DE CASE
$('#canon').bind("enterKey", function(e) {

    var id = $canon.val();
    var colorDiv = $('#' + id).css('background-color');
    var boat = $('#' + id).text();


    $('#' + id).addClass("colorred");

    let fullSentence = promptMessage(myName) + id + '<br/>';
    $("#history").append(fullSentence);

    if (colorDiv == 'rgb(0, 0, 255)' && boat === '') {
        $("#history").append("PLOUF <br/>");
    }

    if (boat == 'B' && $('#' + id).hasClass("colorred")) {
        $("#history").append("TOUCHE <br/>");
        b += 1;
        console.log(b);
        if (b == 3) {
            $("#history").append("COULE <br/>");
        }
    }

    if (boat == 'V' && $('#' + id).hasClass("colorred")) {
        $("#history").append("TOUCHE <br/>");
        v += 1;
        console.log(b);
        if (v == 3) {
            $("#history").append("COULE <br/>");
        }
    }

    if (b == 3 && v == 3) {
        $("#history").append("WIN <br/>");
         $('#no-mans-land').append('<code>Consolation prize : click me ;)</code>');
        $("#no-mans-land").on("click", function() {
            $(this).css({
              // 'background-image' : 'url("trollinwolf.jpg"',
              'background-image' : 'url("http://25.media.tumblr.com/tumblr_m7swa6z5bb1rn95k2o1_400.gif")',
              'height' : '530px',
              'width' : '620px',
              'margin-left' : '200px'
             });
        });
    }



});

$('#canon').keyup(function(e) {
    if (e.keyCode == 13) {
        $(this).trigger("enterKey");
    }
});



// Génère le message diffusé à l´adversaire
function promptMessage(playerName) {
    if (playerName.length > 0) {
        return ">> " + playerName + " va attaquer en ";
    } else {
        return "> En attente d'un joueur";
    }
}
