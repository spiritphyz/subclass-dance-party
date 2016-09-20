// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // var dancer = {};
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  console.log('this.$node is: ', this.$node);

  this.step();
  // makedancer.prototype.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  // MakeDancer.prototype.setPosition.call(this, top, left);

  // return dancer;
};

var test = function() {
  console.log('hello');
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  console.log('accessing old step');
  var context = this;
  // setTimeout(this.step.bind(context), context.timeBetweenSteps);
  setTimeout(this.step.bind(context), this.timeBetweenSteps);
  // setInterval(this.step, 1000);
};


MakeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };
  console.log('this.$node inside setPosition is: ', this.$node);
  this.$node.css(styleSettings);
};