describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temperature', function(){
    expect(thermostat.temperature).toBe(20);
  });

  it('temperatur can be increased', function(){
    thermostat.increaseTemp();
    expect(thermostat.temperature).toEqual(21);
  });

  it('temperature can be decreased', function(){
    thermostat.decreaseTemp();
   expect(thermostat.temperature).toEqual(19); 
  });

  it('has a minimum temperature', function(){
    decreaseTemp(); 
    expect(function() { thermostat.decreaseTemp() }).toThrowError("Minimum temperature reached");
    expect(thermostat.temperature).toBe(10);
  });

  it('has a power saving mode which sets maximumTemp to 25', function(){
    expect(thermostat.maximumTemp).toBe(25);
    increaseTemp(); 
    expect(function(){ thermostat.increaseTemp() }).toThrowError('Maximum temperature reached');
  });

  it('when power saving mode is off maximumTemp = 32', function(){
    thermostat.togglePSM();
    expect(thermostat.powerSavingMode).toBe(false);
    expect(thermostat.maximumTemp).toBe(32);
  });

  it('resets temperature to 20', function(){
    increaseTemp();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('changes colour based upon power usage/temperature', function(){
    expect(thermostat.displayColour).toBe('yellow');
    decreaseTemp();
    expect(thermostat.displayColour).toBe('green');
    thermostat.reset();
    increaseTemp();
    expect(thermostat.displayColour).toBe('red');
  });

  function increaseTemp() {
    for(var i = 0; i<5; i++){
      thermostat.increaseTemp();
    } 
  };

  function decreaseTemp() {
     for(var i = 0; i<10; i++){
      thermostat.decreaseTemp();
    }    
  }
});
