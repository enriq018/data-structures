

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //Check if bucket exists
  if (!Array.isArray(this._storage[index])) {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  } else {
    var flag = false;
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        flag = true;
      }
      if (i === this._storage[index].length - 1 && !flag) {
        this._storage[index].push([k, v]);
      }
    }
  }
    //If so
      //If a key repeats,
        //Iterate through the entire bucket
        //If the key is found
          //Reassign arr[1] to our input value
      //Else
        //Push [key, value]
};

HashTable.prototype.retrieve = function(k) {
  console.log(this._storage);
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var flag = undefined;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      flag = this._storage[index][i][1];
    }
  }
  return flag;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      //get the index
      //splice (index, 1)
      console.log('before splice: ', this._storage[index]);
      this._storage[index].splice(this._storage[index][i], 1);
      console.log('after splice: ', this._storage[index]);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


