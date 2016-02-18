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
});
