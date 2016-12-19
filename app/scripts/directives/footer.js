'use strict';

/**
 * @ngdoc directive
 * @name secondApp.directive:footer
 * @description
 * # footer
 */
angular.module('secondApp')
  .directive('footer', function () {
    return {
      template: '<div>FOOTER</div>',
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        element.text('this is the footer directive');
        element.css("position", "absolute");
        element.css("bottom", "0");
        element.css("width", "100%")
        element.css("height", "50px");
        element.css("background-color", "yellow");
      }
    };
  });
