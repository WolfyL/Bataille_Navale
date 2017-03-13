var $canon = $('#canon');
var history = '';
var myName = $("#moi").val();

// Met à jour le message affiché à l´adversaire à chaque nouvelle
// lettre saisie dans l´input ´Mon nom´
$("#moi").keyup(function(event) {

    $("#megaphone").text(promptMessage(myName));
});


// GESTION ENTER ET COLORATION DE CASE
$('#canon').bind("enterKey", function(e) {

    var id = $canon.val();
    console.log(id);
    $('#' + id).addClass("colorred");

    let fullSentence = promptMessage(myName) + id + '<br/>';
    $("#history").append(fullSentence);

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
