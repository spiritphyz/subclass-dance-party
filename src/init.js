$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    makeRandomTop = function() {
      var maxHeight = $('body').height();      
      return Math.floor(Math.random() * (maxHeight - 375)) + 375;
    };

    makeRandomLeft = function() {
      // var maxWidth = $('body').width();      
      var maxWidth = 1500;      
      return Math.floor(Math.random() * (maxWidth - 200)) + 0;
    };

    makeRandomTime = function() {
      return Math.random() * 1000;
    };

    var dancer = new dancerMakerFunction(
      makeRandomTop(), makeRandomLeft(), makeRandomTime()
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.moveToLine').on('click', function(event) {
    var leftPosition = 0;
    // var rightPosition = 1300;
    var rightPosition = 1300;
    var leftY= 600;
    var rightY= 600;
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].name === 'Snoop Dogg' || window.dancers[i].name === "Left Shark") {
        window.dancers[i].getInLine(leftY, leftPosition);
        leftPosition += 50;
        leftY -= 25;
      } else if (window.dancers[i].name === 'Carlton Banks') {
        window.dancers[i].getInLine(rightY, rightPosition);
        rightPosition -= 50;
        rightY -= 25;
      }
    }
  });
});

