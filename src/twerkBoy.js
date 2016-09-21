var twerkBoy = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.name = 'Twerk Boy';
  this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="twerkBoy showBorder"></div>');
  this.setPosition(top, left);
  this.location = [left, top];
};

twerkBoy.prototype = Object.create(MakeDancer.prototype);
twerkBoy.prototype.constructor = twerkBoy;

twerkBoy.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // this.$node.effect("explode", 10);
};

twerkBoy.prototype.setLocation = function (top, left) {
  this.setPosition(top, left);
};

// SnoopDogg.prototype.getInLine = function(top, left) {
//   this.$node.animate({top: top, left: left}, 1000);
// };

twerkBoy.prototype.getInPosition = function () {
  this.$node.animate({top: 600, left: 650}, 1000);
};