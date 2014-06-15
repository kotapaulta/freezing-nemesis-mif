/*global alert*/
window.onload = function() {
  'use strict';

  var elements = function(){
    var self = {};

    self.elements = function(selector){
      self.selectedElements = document.querySelectorAll(selector);
      return self;
    };

    self.first = function(){
      self.node = self.selectedElements[0];
      return self;
    };

    self.text = function(){
      return self.node.textContent;
    };
    return self;
  };

  var by = {
    'tag': function(selector){
      return selector;
    },

    'css': function(selector){
      return selector;
    },

    'attr': function(sel1,sel2){
      return '['+ sel1 + '=' + '\'' +sel2 + '\']';
    }
  };

  if (elements(by.tag('header'))
    .elements(by.css('.user-block'))
    .elements(by.attr('ng-model', 'email'))
    .first()
    .text() === 'a@x.com') {
    alert('Задание выполнено!');
  }

};



