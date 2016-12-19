'use strict';

/**
 * @ngdoc directive
 * @name secondApp.directive:header
 * @description
 * # header
 */
angular.module('secondApp')
  .directive('header', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('This is the Header directive');
        element.css("width", "100%")
        element.css("height", "50px");
        element.css("background-color", "grey");
      }
    };
  });
