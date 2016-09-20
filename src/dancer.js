// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  // setTimeout(this.step.bind(context), context.timeBetweenSteps);
  setTimeout(this.step.bind(context), this.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  // var styleSettings = {
  //   top: top,
  //   left: left
  // };
  var styleSettings = {
    top: top,
    left: left,
    // 'z-index': -1
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.getInLine = function(top, left) {
  this.$node.animate({top: top, left: left}, 1000);
};

MakeDancer.prototype.exitLeft = function() {
  this.$node.animate({left: '-=2500'}, 700);
};

MakeDancer.prototype.exitRight = function() {
  this.$node.animate({left: '+=2500'}, 700);
};

MakeDancer.prototype.beginBattleLeft = function() {
  this.$node.animate({top: '550', left: '500'}, 700);
};