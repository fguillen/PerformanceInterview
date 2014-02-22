'use strict';

var Page = function(interview, data){
  var self = this;

  self.id = data.id;
  self.title = data.title;
  self.kind = data.kind;
  self.body = data.body;
  self.interview = interview;
  self.url = "/pages/" + self.id;
  self.answer;

  self.answered = function(range_valid) {
    switch(self.kind) {
    case "radio_button":
      return self.answer != undefined;
    case "text":
      return self.answer != undefined;
    case "page":
      return true;
    }
  }

  self.get_answer = function(){
    switch(self.kind) {
    case "radio_button":
      return self.answer;
    case "text":
      return self.answer;
    case "page":
      return true;
    }
  }

  return self;
};