    var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
var fitColumns = require('isotope-fit-columns');
// make Isotope a jQuery plugin
jQueryBridget( 'isotope', Isotope, $ );

      $('.grid').isotope({
        layoutMode: 'fitColumns',
        itemSelector: '.item'
      });
     