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
    for(var i = 0; i<10; i++){
      thermostat.decreaseTemp();
    }
    expect(function() { thermostat.decreaseTemp() }).toThrowError("Minimum temperature reached");
    expect(thermostat.temperature).toBe(10);
  });
});
