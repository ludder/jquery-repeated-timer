describe("Timer", function() {
  var timer;

  beforeEach(function() {
   timer = $("body").timer();
   timer = $.fn.timer;
    console.log(timer);
  });

  it("should be able to play a Song", function() {
    expect(timer.startTimer()).toEqual(false);
  });

});