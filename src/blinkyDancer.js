var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {

  this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.step();
  // MakeBlinkyDancer.prototype.step.call(this);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // MakeDancer.prototype.step();
  this.oldStep();
  // MakeDancer.prototype.step();
  // this.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};

/* stepping through the logic
var x = new MakeBlinkyDancer();
MakeBlinkyDancer.prototype.__proto__ = MakeDancer.prototype
x.__proto__ = MakeBlinkyDancer.prototype
x.oldStep = super.step
x.timebetweensteps = tgimebetweensteps
x.$node = $<span>
x.step()
*/