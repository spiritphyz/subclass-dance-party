$(document).ready(function() {
  window.dancers = [];
  window.battleLeft = [];
  window.battleRight = [];
  window.twerkBoyRef = [];
  window.twerkGirlRef = [];
  window.flag = true;
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

    // // for (var i = 0; i < 40; i++) {
    //   var dancer = new dancerMakerFunction(
    //   makeRandomTop(), makeRandomLeft(), makeRandomTime())
    //   // );

    //   window.dancers.push(dancer);
    //   $('body').append(dancer.$node);
    // }

  });

  $('.moveToLine').on('click', function(event) {
    // if (!window.flag) {
    /** max 10 per line is good */
    var leftPosition = 540;
    var rightPosition = 740;
    var leftY = 400;
    var rightY = 400;
    var angle = 0;
    var vertAngle = 90;
    var leftCounter = 0;
    var rightcounter = 0;


    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].name === 'Snoop Dogg') {
        var styleSettingsSnoop = {
          width: 'auto',
          height: '200',
          'z-index': 'auto',
          content: 'url(./src/snoop.gif)'
        };
        if (leftCounter < 10) {
          leftCounter++;
          window.battleLeft.push(window.dancers[i]);
          window.dancers[i].getInLine(leftY, leftPosition);
          window.dancers[i].$node.css(styleSettingsSnoop);
          leftPosition -= 60;
          leftY += 30;
        } else {
          window.dancers[i].exitLeft();
        }

      } else if (window.dancers[i].name === 'Left Shark') {
        if (leftCounter < 9) {
          leftCounter++;
          window.battleLeft.push(window.dancers[i]);
          window.dancers[i].getInLine(leftY, leftPosition);
          // window.dancers[i].$node.css(styleSettingsSnoop);
          leftPosition -= 60;
          leftY += 30;
        } else {
          window.dancers[i].exitLeft();
        }

      } else if (window.dancers[i].name === 'Carlton Banks') {
        var styleSettings = {
          width: 'auto',
          height: '225',
          'z-index': 'auto',
          content: 'url(./src/carlton.gif)'
        };
        
        if (rightcounter < 10) {
          rightcounter++;
          window.battleRight.push(window.dancers[i]);
          window.dancers[i].getInLine(rightY, rightPosition);
          window.dancers[i].$node.css(styleSettings);
          rightPosition += 60;
          rightY += 30;
        } else {
          window.dancers[i].exitRight();
        }
      }
    }
    if (window.twerkBoyRef.length > 0) {
      window.twerkBoyRef[twerkBoyRef.length - 1].exitLeft();
      window.twerkBoyRef.pop();
    }
    if (window.twerkGirlRef.length > 0) {
      window.twerkGirlRef[twerkGirlRef.length - 1].exitRight();
      window.twerkGirlRef.pop();
    }
    window.flag = true;
    // }
  });




  $('.startBattle').on('click', function(event) {
    if (window.flag) {
      var snoopIndexList = [];
      for (var i = 0; i < window.battleLeft.length; i++) {
        if (window.battleLeft[i].name === 'Snoop Dogg') {
          snoopIndexList.push(i);
        }
      }
      var randomIndex = Math.floor(Math.random() * snoopIndexList.length);
      var designatedSnoopIdx = snoopIndexList[randomIndex];
      var snoopy = window.battleLeft[designatedSnoopIdx];
      var styleSettings = {
        'z-index': 101,
        content: 'url(./src/cooldancer.gif)',
        width: '450px',
        height: 'auto'
      };
      snoopy.$node.css(styleSettings);
      snoopy.beginBattleLeft();


  ////////////////////////////////////////////////

      var carltonIndexList = [];
      for (var i = 0; i < window.battleRight.length; i++) {
        if (window.battleRight[i].name === 'Carlton Banks') {
          carltonIndexList.push(i);
        }
      }
      var randomIndex = Math.floor(Math.random() * carltonIndexList.length);
      var designatedCarltonIdx = carltonIndexList[randomIndex];
      var heyCarlton = window.battleRight[designatedCarltonIdx];
      var carlStyle = {
        'z-index': 99,
        content: 'url(./src/carltonTwerk.gif)',
        width: '250px',
        height: 'auto'
      };
      heyCarlton.$node.css(carlStyle);
      heyCarlton.beginBattleRight();

      var makeTwerkBoy = window['twerkBoy'];
      var twerkerBoy = new makeTwerkBoy(360, 360);
      window.twerkBoyRef.push(twerkerBoy);
      $('body').append(twerkerBoy.$node);
      twerkerBoy.getInPosition();

      var makeTwerkGirl = window['twerkGirl'];
      var twerkerGirl = new makeTwerkGirl(400, 900);
      window.twerkGirlRef.push(twerkerGirl);
      $('body').append(twerkerGirl.$node);
      twerkerGirl.getInPosition();

      window.flag = false;
    }
  });

  // $('.createTwentyDancers').on('click', function(event) {
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  //   // get the maker function for the kind of dancer we're supposed to make
  //   var dancerMakerFunction = window[dancerMakerFunctionName];

  //   // make a dancer with a random position

  //   makeRandomTop = function() {
  //     var maxHeight = $('body').height() - 220;      
  //     return Math.floor(Math.random() * (maxHeight - 440)) + 440;
  //   };

  //   makeRandomLeft = function() {
  //     // var maxWidth = $('body').width();      
  //     var maxWidth = 1500;      
  //     return Math.floor(Math.random() * (maxWidth - 180)) + 0;
  //   };

  //   makeRandomTime = function() {
  //     return Math.random() * 1000;
  //   };

  //   for (var i = 0; i < 40; i++) {
  //     var dancer = new dancerMakerFunction(
  //       makeRandomTop(), makeRandomLeft(), makeRandomTime()
  //     );

  //     window.dancers.push(dancer);
  //     $('body').append(dancer.$node);
  //   }
  // });


});

// createTwentyDancers


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

