class BoardMember{
  construction(name, homeState, training)
  this.name = name
  this.homeState = homeState
  this.training = training
}

veto(){return `No, I disagree`}
approve(){return ``}
doCharity(){return ``}
releasePressStatement(){return ``}
sayHi(){return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was tained in ${this.training}`}


class Ceo extends BoardMember{
  hireEmployee(){return 'Welcome aboard!'}
}
