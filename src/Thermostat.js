function Thermostat(){
  this.temperature = 20;
  this.minimumTemp = 10;
}

Thermostat.prototype.increaseTemp = function(){
  this.temperature ++;
};

Thermostat.prototype.decreaseTemp = function(){
  if(this.temperature === this.minimumTemp){
    throw new Error('Minimum temperature reached');
  }
  else {
    this.temperature --;
  }
};
