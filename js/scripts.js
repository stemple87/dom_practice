$(document).ready(function() {
  $("button#hellocat").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#hellodog").click(function() {
    $("ul#dog").prepend("<li>Woof!</li>");

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
  });


  });
});
