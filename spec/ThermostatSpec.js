describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('temperature is defined', function(){
    expect(thermostat.temperature).toBeDefined();
  });

  it('increaseTemp is defined', function(){
    expect(thermostat.increaseTemp).toBeDefined();
  });

  it('increaseTemp increases the temperature', function(){
    thermostat.increaseTemp();
    expect(thermostat.temperature).toBe(21);
  });

  it('decraseTemp is defined', function(){
    expect(thermostat.decreaseTemp).toBeDefined();
  });

  it('decreaseTemp decreases the temperature', function(){
    thermostat.decreaseTemp();
    expect(thermostat.temperature).toBe(19);
  });

  it('minimum temperature is defined', function(){
    expect(thermostat.minimumTemp).toBeDefined();
  });

  it('can\'t decrease temperature below minimumTemp', function(){
    for(var i = 0; i<10; i++){
      thermostat.decreaseTemp();
    }
    expect(function() { thermostat.decreaseTemp() }).toThrowError('Minimum temperature reached');
  });
});
