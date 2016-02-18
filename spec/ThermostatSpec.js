describe('Thermostat', function(){

  it('temperature is defined', function(){
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toBeDefined();
  });
});
