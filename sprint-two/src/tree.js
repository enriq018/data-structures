var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var output = [];
  var recursion = function(obj, target) {
    if (obj.value === target) {
      output.push(true);
    }
    if (obj.children) {
      for (var i = 0; i < obj.children.length; i++) {
        recursion(obj.children[i], target);  
      }
    }
  };
  recursion(this, target);
  return output[0] === true ? true : false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
