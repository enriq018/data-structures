var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

queueMethods.dequeue = function() {
  var indexArray = Object.keys(this.storage);
  var minIndex = Math.min(...indexArray);
  var minValue = this.storage[minIndex];
  delete this.storage[minIndex];
  return minValue;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};
