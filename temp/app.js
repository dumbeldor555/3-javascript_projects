function main() {

  this.id = 1;
  this.name = 'aadil';

  this.state = {
    myName : 'ujef'
  }

}

main.prototype = {

getName: function() {

  console.log(this.state.myName);
}

}

const secondMain = new main();

secondMain.getName();