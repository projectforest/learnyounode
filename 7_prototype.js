function User(){
  this.username = "";
  this.hp = 100;
  this.heal = function heal(targetUser){
    targetUser.hp += 1;
    console.log(this.username + " healed 1 hp to " + targetUser.username);
  }
}

var temp1 = new User();
var temp2 = new User();

temp1.username = "bjerg";
temp2.username = "dyrus";

temp1.heal(temp2);
console.log(temp2.hp);

User.prototype.falcon_punch = function falcon_punch(targetUser){
  targetUser.hp -= 10;
  console.log(this.username + " falcon punched " + targetUser.username);
}

temp2.falcon_punch(temp1);
console.log(temp1.hp);

User.prototype.mana = 50;
console.log(temp1.mana);