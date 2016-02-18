describe('Thermostat', function(){

  it('has a starting temperature', function(){
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toBe(20);
  });

});
