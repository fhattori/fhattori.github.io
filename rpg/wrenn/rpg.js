$( document ).ready(function() {
});

function opendescr(ele){
  var element = ele.querySelector('.description');
  if (element.classList.contains("description-hide")){
    element.classList.remove("description-hide");
  }else{
    element.classList.add("description-hide");
  }
}

