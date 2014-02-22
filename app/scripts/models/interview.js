'use strict';

var Interview = function(data){
  var self = this;

  self.pages =
    _.map(data, function(data){
      return new Page(self, data);
    });

  self.first_page = function(){
    return _.first(self.pages);
  };

  self.page_by_id = function(page_id){
    return _.findWhere(self.pages, { id: page_id });
  };

  self.next_page = function(actual_page){
    var page_index = indexOf(self.pages, function(element) { return element.id == actual_page.id })
    return self.pages[page_index + 1];
  };

  self.previous_page = function(actual_page){
    var page_index = indexOf(self.pages, function(element) { return element.id == actual_page.id })
    return self.pages[page_index - 1];
  };

  self.create_completion = function(){
    var result =
      _.map(self.pages, function(page) {
        return {
          page_id: page.id,
          value: page.get_answer()
        };
      });

    return result;
  }

  self.send_completion = function(){
    //For development purposes: Don't go further than the latest question
    event.preventDefault();

    $.ajax ({
      type:"POST",
      contentType: 'application/json',
      url: APP_CONFIG["api_url"] + "/interviews/" + self.id + "/completions",
      data: JSON.stringify(self.create_completion()),
      success: function(){ /**/},
      error: function(){ /**/ }
    });
  }
};

// from: http://stackoverflow.com/q/7969031/316700
function indexOf(collection, filter) {
  for (var i = 0; i < collection.length; i++) {
    if(filter(collection[i], i, collection)) return i;
  }
  return -1;
}