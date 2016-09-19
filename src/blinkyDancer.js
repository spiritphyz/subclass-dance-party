var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // var blinkyDancer = MakeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.oldStep = MakeDancer.prototype.step;

  // console.log('old:', this.step);
  // console.log('old:', this.oldStep);
  // console.log('new:', this.step;)

  // return blinkyDancer;
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log('new:', this.step);
  // this.oldStep();
  MakeDancer.prototype.step();
  // this.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};