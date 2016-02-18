var DEFAULT_TEMP;
var MINIMUM_TEMP;
var MAXIMUM_TEMP_PSM_ON;
var MAXIMUM_TEMP_PSM_OFF;
var YELLOW_GREEN_THRESHHOLD;

function Thermostat(){
  DEFAULT_TEMP = 20;
  MINIMUM_TEMP = 10;
  MAXIMUM_TEMP_PSM_ON = 25;
  MAXIMUM_TEMP_PSM_OFF = 32;
  YELLOW_GREEN_THRESHHOLD = 18;
  this.temperature = DEFAULT_TEMP;
  this.minimumTemp = MINIMUM_TEMP;
  this.powerSavingMode = true;
  this.maximumTemp = MAXIMUM_TEMP_PSM_ON;
  this.displayColour = 'yellow';
}

Thermostat.prototype.increaseTemp = function(){
  if(this.temperature === this.maximumTemp){
    throw new Error('Maximum temperature reached');
  }
  else {
    this.temperature ++;
    this._updateDisplayColour();
  }
};

Thermostat.prototype.decreaseTemp = function(){
  if(this.temperature === this.minimumTemp){
    throw new Error('Minimum temperature reached');
  }
  else {
    this.temperature --;
    this._updateDisplayColour();
  }
};

Thermostat.prototype.togglePSM = function(){
  this.powerSavingMode = !this.powerSavingMode;
  this._setMaxTemp();
};

Thermostat.prototype._setMaxTemp = function(){
  this.powerSavingMode ? this.maximumTemp = MAXIMUM_TEMP_PSM_ON : this.maximumTemp = MAXIMUM_TEMP_PSM_OFF;
};

Thermostat.prototype.reset = function(){
  this.temperature = DEFAULT_TEMP;
};

Thermostat.prototype._updateDisplayColour = function(){
  if(this.temperature < YELLOW_GREEN_THRESHHOLD){
    this.displayColour = 'green';
  }
  else if(this.temperature < MAXIMUM_TEMP_PSM_ON){
    this.displayColour = 'yellow';
  }
  else {
    this.displayColour = 'red';
  }
};
