// [ Based off of jquery-boilerplate ]( https://github.com/jquery-boilerplate/jquery-boilerplate )
;(function ( $, window, document, undefined ) {

  "use strict";

  var pluginName = "fork_me_silly",
    defaults = {
      position: 'right',
      color: undefined, // random
      text:  undefined, // random
  };

  var textOptions = [
    "Fork me silly!",
    "Fork me baby!",
    "Fork me maybe?",
  ];

  var colorOptions = [
    'black',
    'red',
    'blue',
    'green',
    'orange',
    'purple',
    'grey',
    //'white', // Disabled, because it only looks good with dark themes!
  ]

  var arrayRand = function(items) {
    return items[Math.floor(Math.random()*items.length)]
  }

  // The actual plugin constructor
  function Plugin ( element, options ) {
    this.element = element;
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  // Avoid Plugin.prototype conflicts
  $.extend(Plugin.prototype, {
    init: function () {
      var $e = $(this.element)

      $e.addClass('fork_me_ribbon');
      $e.addClass( this.settings.color || arrayRand(colorOptions) );
      $e.addClass( this.settings.position );

      $e.find("a").eq(0).html( this.settings.text || arrayRand(textOptions) )
    },
  });

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[ pluginName ] = function ( options ) {
    return this.each(function() {
      if ( !$.data( this, "plugin_" + pluginName ) ) {
        $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
      }
    });
  };

})( jQuery, window, document );
