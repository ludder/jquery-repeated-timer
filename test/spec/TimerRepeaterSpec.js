describe("TimerRepeater", function() {
  var timerrepeater;

  beforeEach(function() {
    timerrepeater = $("body").timerRepeater();
    timerrepeater = $.fn.timerRepeater;
  });

  it("should be able to play a Song", function() {
    expect(timerrepeater.init()).toEqual(false);
  });

});