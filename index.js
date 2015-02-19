var $ = require('jquery');

$(function(){
  var orderString = $('script[type="text/x-qblog-category-order"]').text().replace(/^\s+|\s+$/g, '');

  var $categories = $('.qblog_categories');

  var order = $(orderString.split("\n"))
    .map(function(){
      return this.replace(/^\s+|\s+$/g, '');
    })
    .filter(function(){
      var categoryName = this;
      var found = false;
      $categories.children().each(function(i, el){
        if ($(el).text().indexOf(categoryName) === 0) {
          found = true;
          return false;
        }
      });
      return found;
    }).get();

  $(order).each(function(){
    var categoryName = this;
    $categories.children().each(function(i, el){
      if ($(el).text().indexOf(categoryName) === 0) {
        $(el).appendTo($categories);
        return false;
      }
    });
  });


});
