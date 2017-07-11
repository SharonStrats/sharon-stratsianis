    var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
var fitColumns = require('isotope-fit-columns');
// make Isotope a jQuery plugin
jQueryBridget( 'isotope', Isotope, $ );

     $(window).on('load', function() {
      $('.grid').isotope({
        layoutMode: 'masonry',
        itemSelector: '.item',
        masonry: {
        	columnWidth: 377,
        	gutterWidth: 5
        }
      });
     });