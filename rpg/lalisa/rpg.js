$( document ).ready(function() {
 resetAll();
 jQuery("#descri").html(jQuery("#pericias").html());
 jQuery(".smallinput").change(updateAll);
 updateAll();
});

function resetAll(){
 jQuery("#lvl").val(16);

 jQuery("#bonusMagico").val(0);

 jQuery("#for").val(10);
 jQuery("#des").val(14);
 jQuery("#con").val(14);
 jQuery("#int").val(10);
 jQuery("#sab").val(12);
 jQuery("#car").val(24);
 updateAll();
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
 bonusPm=2;
 bonusCa=9;
 jQuery("#cd-arcana").html(10+Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())+cdbonusArcana);
 jQuery("#cd-ilusao").html(10+Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())+cdbonusArcana+cdbonusIlusao);
 jQuery("#cd-encantamento").html(10+Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())+cdbonusArcana+cdbonusIlusao+cdbonusEncantamento);
 jQuery("#cd-arcana").html(10+Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())+cdbonusArcana);
 jQuery("#pv").html(8+parseInt(jQuery("#con-mod").html())+(parseInt(jQuery("#lvl").val()-1)*(2+parseInt(jQuery("#con-mod").html()))));
 jQuery("#pm").html(parseInt(jQuery("#car-mod").html())+(parseInt(jQuery("#lvl").val())*(6+bonusPm)));
 jQuery("#ca").html(10+parseInt(jQuery("#des-mod").html())+bonusCa+parseInt(jQuery("#bonusMagico").val()));

 //calculando pericias
 updatePericias();
};

function updatePericias(){
 bonusTreino=4;
 bonusRobe=4;
 jQuery("#acrobacia").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#des-mod").html())));
 jQuery("#adestramento").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())));
 jQuery("#atletismo").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#for-mod").html())));
 jQuery("#atuação").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())));
 jQuery("#cavalgar").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#des-mod").html())));
 jQuery("#conhecimento").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#int-mod").html())));
 jQuery("#cura").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#sab-mod").html())));
 jQuery("#diplomacia").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())));
 jQuery("#enganacao").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())+bonusTreino));
 jQuery("#fortitude").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#con-mod").html())+bonusRobe));
 jQuery("#furtividade").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#des-mod").html())));
 jQuery("#guerra").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#int-mod").html())));
 jQuery("#iniciativa").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#des-mod").html())+bonusTreino));
 jQuery("#intimidacao").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())));
 jQuery("#investigacao").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#int-mod").html())));
 jQuery("#intuicao").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#sab-mod").html())));
 jQuery("#jogatina").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#car-mod").html())));
 jQuery("#ladinagem").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#des-mod").html())));
 jQuery("#luta").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#for-mod").html())));
 jQuery("#misticismo").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#int-mod").html())+bonusTreino));
 jQuery("#nobreza").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#int-mod").html())));
 jQuery("#oficio").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#int-mod").html())));
 jQuery("#percepcao").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#sab-mod").html())));
 jQuery("#pilotagem").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#des-mod").html())));
 jQuery("#pontaria").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#des-mod").html())));
 jQuery("#reflexos").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#des-mod").html())+bonusRobe));
 jQuery("#religiao").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#sab-mod").html())));
 jQuery("#sobrevivencia").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#sab-mod").html())+bonusTreino));
 jQuery("#vontade").val("/r 1d20+"+(Math.floor(parseInt(jQuery("#lvl").val())/2)+parseInt(jQuery("#sab-mod").html())+bonusTreino+bonusRobe));
}

function displaySpell(spellname){
 if(spellname=="pericias"){
  jQuery("#descri").html(jQuery("#pericias").html());
 }else{
  jQuery("#descri").load('spells/'+spellname+'.html');
 }
 updateAll();
};

function clicktextbox(copyText) {
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  document.execCommand("copy");
};
