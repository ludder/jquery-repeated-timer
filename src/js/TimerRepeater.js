/*
    *  Project    : JavaScript Timer Repeater
    *  Description: JavaScript Timer Repeater jQuery plugin
    *  Repository : https://github.com/ludder/jquery-repeated-timer
    *  Author     : Tom Greuter - www.tomgreuter.nl
    *  License    : MIT
    *  jQueryBP   : https://github.com/zenorocha/jquery-boilerplate
 */

;(function ( $, window, undefined ) {

        var timerRepeater = 'timerRepeater',
                document   = window.document,
                defaults   = {
                    timeout_notification: 2000
                };

        function TimerRepeater( element, options ) {
            this.element = element;

            this.options = $.extend( {}, defaults, options) ;

            this._defaults = defaults;
            this._name     = timerRepeater;
            this._version  = '0.1';

            this.init();
        }

        TimerRepeater.prototype.init = function () {
            return 2;
        };

        $.fn[timerRepeater] = function ( options, callback ) {
                return this.each(function () {
                        if (!$.data(this, 'plugin_' + timerRepeater)) {
                                $.data(this, 'plugin_' + timerRepeater, new TimerRepeater( this, options ));
                        }

                        $.fn[timerRepeater].init = TimerRepeater.prototype.init;

                        if (typeof callback == 'function') {
                            callback.call(this); // brings the scope to the callback
                        }
                });
        };

}(jQuery, window));