var count=0;

var numberOfButtons = document.querySelectorAll(".btn").length;

for(i=0; i<numberOfButtons; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    var buttonHTML = this.innerHTML;
    numbers(buttonHTML);
  });
};

function numbers(action){
  if(action=="increase"){
    count++
  }if(action=="decrease"){
    count--
  }if(action=="reset"){
    count=0;
  }if(count>0){
    document.querySelector("#value").style.color="green";
  }else if(count<0){
    document.querySelector("#value").style.color="red";
  }else{
    document.querySelector("#value").style.color="";
  }

  document.querySelector("#value").textContent = count;

};
