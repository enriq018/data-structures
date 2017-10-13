
var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
  
};


BinarySearchTree.prototype.insert = function(value) {

//fix rec after lunch 
//Capture val arg
//Wrap below in recursive function
  var recursion = function(tree, value) {
  //console.log(tree, value);
    if (value < tree.value) {
      if (tree.left) {
        recursion(tree.left, value);
      } else {
        tree.left = new BinarySearchTree(value);
      } 
    } 

    if (value > tree.value) {
      if (tree.right) {
        recursion(tree.right, value);
      } else {
        tree.right = new BinarySearchTree(value);
      }
    }
  };
//Call recurisve function on val
  recursion(this, value);
};

BinarySearchTree.prototype.contains = function(value) {
  
  var recursion = function(tree, value) {
    if (tree.value === value) {
      return true;
    }
    if (value < tree.value) { 
      if (tree.left) {
        return recursion(tree.left, value);
      }
    } else {
      if (tree.right) {
        return recursion(tree.right, value);
      }
    }
  };
  return recursion(this, value) === true ? true : false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var recursion = function(tree, cb) {
    cb(tree.value);

    if (tree.left) {
      recursion(tree.left, cb);
    }
    if (tree.right) {
      recursion(tree.right, cb);
    }
  };
  recursion(this, cb);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
