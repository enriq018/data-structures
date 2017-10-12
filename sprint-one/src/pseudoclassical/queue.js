var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.front = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var output = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return output;
};

Queue.prototype.size = function() {
  var total = this.count - this.front;
  return total > 0 ? total : 0;
};
