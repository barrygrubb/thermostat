describe('Thermostat', function(){

  it('temperature is defined', function(){
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toBeDefined();
  });

  it('increaseTemp is defined', function(){
    var thermostat = new Thermostat();
    expect(thermostat.increaseTemp).toBeDefined();
  });

  it('increaseTemp increases the temperature', function(){
    var thermostat = new Thermostat();
    thermostat.increaseTemp();
    expect(thermostat.temperature).toBe(21);
  });
});
