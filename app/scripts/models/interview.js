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
    if(actual_page.end_page) {
      return null;

    } else if(actual_page.kind == "radio_button" && actual_page.get_selected_option()) {
      var page_id = actual_page.get_selected_option().branch_page;
      return self.page_by_id(page_id);

    } else {
      var page_index = indexOf(self.pages, function(element) { return element.id == actual_page.id })
      return self.pages[page_index + 1];

    }
  };

  self.previous_page = function(actual_page){
    var page_index = indexOf(self.pages, function(element) { return element.id == actual_page.id })
    return self.pages[page_index - 1];
  };

  self.create_completion = function(){
    var result =
      _.map(self.pages, function(page) {
        if(page.title && page.get_answer()) {
          return {
            page_title: "[" + page.id + "] " + page.title,
            answer: page.get_answer()
          };
        }
      });

    result = _.filter(result, function(e) { return e });

    return result;
  }

  self.send_completion = function(event){
    event.preventDefault();

    $("#sending_button").attr("disabled", true);
    $("#sending_button").html("Sending...");

    var completion_json = JSON.stringify(self.create_completion(), null, 2);

    console.log("Completion", completion_json);

    var opts = {
      message: {
        text: completion_json,
        subject: "[Performance Interview] new Answer",
        to: [
          {
            email: "fguillen.mail+performanceinterview@gmail.com",
            name: "FG",
            type: "to"
          }
        ],
        from_email: "fguillen.mail@gmail.com"
      }
    }

    var mandrill_client = new mandrill.Mandrill(API_KEY);
    mandrill_client.messages.send(
      opts,
      function(){ window.location = "#/thanks" },
      function(){ alert("Some error hapend trying to send your answers please contact with the admin: 'chmolano@gmail.com'"); }
    )
  }
};

// from: http://stackoverflow.com/q/7969031/316700
function indexOf(collection, filter) {
  for (var i = 0; i < collection.length; i++) {
    if(filter(collection[i], i, collection)) return i;
  }
  return -1;
}