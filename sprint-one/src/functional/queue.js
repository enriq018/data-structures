var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    var keysArray = Object.keys(storage);
    var minIndex = Math.min(...keysArray);
    var minValue = storage[minIndex];
    delete storage[minIndex];
    return minValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
