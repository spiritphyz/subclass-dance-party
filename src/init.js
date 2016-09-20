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
      var maxHeight = $('body').height() - 220;      
      return Math.floor(Math.random() * (maxHeight - 440)) + 440;
    };

    makeRandomLeft = function() {
      // var maxWidth = $('body').width();      
      var maxWidth = 1500;      
      return Math.floor(Math.random() * (maxWidth - 180)) + 0;
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
    /** max 10 per line is good */
    // var leftPosition = 0;
    var leftPosition = 600;
    var rightPosition = 1300;
    // var leftY = 600;
    var leftY = 400;
    var rightY = 600;
    var angle = 0;
    var vertAngle = 90;
    var leftCounter = 0;
    var rightcounter = 0;
    // var groupOfTen = window.dancers.slice(0, 9);
    // var remainingDancers = window.dancers.slice(9);
    // for (var i = 0; i < window.dancers.length; i++) {
    // window.dancers[0].exitLeft();
    for (var i = 0; i < window.dancers.length; i++) {
      
      if (window.dancers[i].name === 'Snoop Dogg' || window.dancers[i].name === 'Left Shark') {
        if (leftCounter <= 10) {
          leftCounter++;
          window.dancers[i].getInLine(leftY, leftPosition);
          leftPosition -= 60;
          leftY += 30;
        } else {
          window.dancers[i].exitLeft();
        }

      } else if (window.dancers[i].name === 'Carlton Banks') {
        window.dancers[i].getInLine(rightY, rightPosition);
        rightPosition -= 50;
        rightY -= 25;
      }
    }

    // for (var i = 10; i < remainingDancers.length + 9; i++) {
    //   if (window.dancers[i].name === 'Snoop Dogg' || window.dancers[i].name === 'Left Shark') 
    // }

  });
});


/** angular line
    if (window.dancers[i].name === 'Snoop Dogg' || window.dancers[i].name === 'Left Shark') {
        if (leftCounter <= 10) {
          leftCounter++;
          window.dancers[i].getInLine(leftY, leftPosition);
          angle += 15;
          leftPosition += Math.cos(angle) + 70;
          // leftY -= 25;
          vertAngle -= 5;
          leftY -= Math.sin(vertAngle) + 20;
        } else {
          window.dancers[i].exitLeft();
        }
*/

