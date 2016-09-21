var twerkGirl = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.name = 'Twerk Girl';
  this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="twerkGirl showBorder"></div>');
  this.setPosition(top, left);
  this.location = [left, top];
};

twerkGirl.prototype = Object.create(MakeDancer.prototype);
twerkGirl.prototype.constructor = twerkGirl;

twerkGirl.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // this.$node.effect("explode", 10);
};

twerkGirl.prototype.setLocation = function (top, left) {
  this.setPosition(top, left);
};

// SnoopDogg.prototype.getInLine = function(top, left) {
//   this.$node.animate({top: top, left: left}, 1000);
// };

twerkGirl.prototype.getInPosition = function () {
  this.$node.animate({top: 650, left: 850}, 1000);
};