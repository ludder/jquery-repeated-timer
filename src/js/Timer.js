/*
 *  Project    : JavaScript Timer
 *  Description: JavaScript Timer  jQuery plugin
 *  Repository : https://github.com/ludder/jquery-repeated-timer
 *  Author     : Tom Greuter - www.tomgreuter.nl
 *  License    : MIT
 *  jQueryBP   : https://github.com/zenorocha/jquery-boilerplate
 */
;(function($, window, undefined) {

  var timer = 'timer',
    document = window.document,
    defaults = {
      timeout_notification: 2000
    },
    counter = 10,
    timing,
    pausing,
    roundtrips = 0;

  function Timer(element, options) {
    this.element = element;

    this.options = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = timer;
    this._version = '0.1';

    this.init();

    $("body").bind('counter_down', function() {
      console.log('ended!');
      roundtrips++;
      if (roundtrips >2 && pausing) {
        console.log('klaar!');
        return;
      }
      if (timing) {
        Timer.startPause(5);
      } else {
        Timer.startTimer(10);
      }
    });

    Timer.startTimer(10);
  }

  Timer.prototype.init = function() {
    return 2;
  };

  Timer.startTimer = function(sec) {
    timing = true;
    pausing = false;
    Timer.count(sec);
    return true;
  };

  Timer.startPause = function(sec) {
    timing = false;
    pausing = true;
    Timer.count(sec);
  };

  Timer.count = function(counter_start) {
    if (counter_start) {
      counter = counter_start;
    }
    setTimeout( function() {
      counter--;
      if (counter > 0) {
        $("#timer").html(counter);
        Timer.count();
        if (pausing && counter < 4) {
          document.getElementById("pause").play();
        }
      } else {
        if (timing) {
          document.getElementById("end-sound").play();
        }
        $("body").trigger('counter_down');
      }
    }, 1000);
  };

  $.fn[timer] = function(options, callback) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + timer)) {
        $.data(this, 'plugin_' + timer, new Timer(this, options));
      }

      $.fn[timer].startTimer = Timer.startTimer;

      // $.fn[timer].init = Timer.prototype.init;
      if (typeof callback == 'function') {
        callback.call(this); // brings the scope to the callback
      }
    });
  };

}(jQuery, window));
