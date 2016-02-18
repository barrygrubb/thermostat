describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it('increaseTemp increases the temperature', function(){
      thermostat.increaseTemp();
      expect(thermostat.temperature).toBe(21);
    });

    it('decreaseTemp decreases the temperature', function(){
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toBe(19);
    });

    it('can\'t decrease temperature below minimumTemp', function(){
      decreaseTemp();
      expect(function() { thermostat.decreaseTemp() }).toThrowError('Minimum temperature reached');
    });
    it('reset is defined', function(){
        expect(thermostat.reset).toBeDefined();
    });
  });

  describe('#powerSavingMode', function(){
    it('when in power saving mode maximumTemp = 25', function(){
      expect(thermostat.maximumTemp).toBe(25);
    });

    it('when not in power saving mode maximumTemp = 32', function(){
      thermostat.togglePSM();
      expect(thermostat.maximumTemp).toBe(32); 
    });
  });
  
  describe('#displayColour', function(){
    it('displays green when temperature < 18', function(){
      decreaseTemp();
      expect(thermostat.displayColour).toBe('green');
    });

    it('displays red when temperature >= 25', function(){
      increaseTemp();
      expect(thermostat.displayColour).toBe('red');
    });
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
  };
});

   
