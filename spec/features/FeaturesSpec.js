describe('Thermostat', function(){

  it('has a starting temperature', function(){
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toBe(20);
  });

  it('temperatur can be increased', function(){
    var thermostat = new Thermostat();
    thermostat.increaseTemp();
    expect(thermostat.temperature).toEqual(21);
  });
});
