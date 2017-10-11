var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.front = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



var queueMethods = {};
queueMethods.enqueue = function(value) {
  this[this.count] = value;
  this.count ++;
};

queueMethods.dequeue = function() {
  var output = this[this.front];
  delete this[this.front];
  this.front++;
  return output;
};

queueMethods.size = function() {
  var total = this.count - this.front;
  return total > 0 ? total : 0;
};

