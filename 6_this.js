var temp1 = {
  printMessage: function(){
    console.log("sup");
    console.log(this);
    // this == { printMessage: [Function] }
  }
}

temp1.printMessage();
//default calling context is global
function tempFunction(){
  console.log("uhh");
  console.log(this===global);
}

tempFunction();