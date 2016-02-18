function Thermostat(){
  this.temperature = 20;
  this.minimumTemp = 10;
  this.powerSavingMode = true;
  this.maximumTemp = 25;
}

Thermostat.prototype.increaseTemp = function(){
  if(this.temperature === this.maximumTemp){
    throw new Error('Maximum temperature reached');
  }
  else {
    this.temperature ++;
  }
};

Thermostat.prototype.decreaseTemp = function(){
  if(this.temperature === this.minimumTemp){
    throw new Error('Minimum temperature reached');
  }
  else {
    this.temperature --;
  }
};

Thermostat.prototype.togglePSM = function(){
  this.powerSavingMode = !this.powerSavingMode;
  this._setMaxTemp();
};

Thermostat.prototype._setMaxTemp = function(){
  this.powerSavingMode ? this.maximumTemp = 25 : this.maximumTemp = 32;
};
