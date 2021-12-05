$( document ).ready(function() {
 resetAll();
 jQuery("#descri").load('spells/pericias.html');
 jQuery(".smallinput").change(updateAll);
 updateAll();
});

function resetAll(){
 jQuery("#lvl").val(14);

 jQuery("#bonusMagico").val(0);

 jQuery("#for").val(10);
 jQuery("#des").val(14);
 jQuery("#con").val(14);
 jQuery("#int").val(10);
 jQuery("#sab").val(12);
 jQuery("#car").val(24);
}

function updateAll(){
 //primeiro os modificadores
 jQuery("#for-mod").html('+'+(parseInt(jQuery("#for").val())-10)/2);
 jQuery("#des-mod").html('+'+(parseInt(jQuery("#des").val())-10)/2);
 jQuery("#con-mod").html('+'+(parseInt(jQuery("#con").val())-10)/2);
 jQuery("#int-mod").html('+'+(parseInt(jQuery("#int").val())-10)/2);
 jQuery("#sab-mod").html('+'+(parseInt(jQuery("#sab").val())-10)/2);
 jQuery("#car-mod").html('+'+(parseInt(jQuery("#car").val())-10)/2);

 //calculando os CDs
 cdbonusArcana=2;
 cdbonusIlusao=2;
 cdbonusEncantamento=4;
 bonusPm=1;
 bonusCa=9;
 jQuery("#cd-arcana").html(10+Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())+cdbonusArcana);
 jQuery("#cd-ilusao").html(10+Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())+cdbonusArcana+cdbonusIlusao);
 jQuery("#cd-encantamento").html(10+Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())+cdbonusArcana+cdbonusIlusao+cdbonusEncantamento);
 jQuery("#cd-arcana").html(10+Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())+cdbonusArcana);
 jQuery("#pv").html(8+parseInt(jQuery("#con-mod").html())+(parseInt(jQuery("#lvl").val()-1)*(2+parseInt(jQuery("#con-mod").html()))));
 jQuery("#pm").html(parseInt(jQuery("#car-mod").html())+(parseInt(jQuery("#lvl").val())*(6+bonusPm)));
 jQuery("#ca").html(10+parseInt(jQuery("#des-mod").html())+bonusCa+parseInt(jQuery("#bonusMagico").val()));
};

function displaySpell(spellname){
 jQuery("#descri").load('spells/'+spellname+'.html');
 updateAll();
};

function clicktextbox(copyText) {
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  document.execCommand("copy");
};
