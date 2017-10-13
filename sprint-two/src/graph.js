

// Instantiate a new graph
var Graph = function() { 
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
  this.storage[node].value = node;
  this.storage[node].edge = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var obj = this.storage[node].value;
  return obj === node;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // var context = this;
  // this.storage[node].edge.forEach(function(el) {
  //   context.removeEdge(node, el);
  // });
  this.storage[node].edge.forEach(el => this.removeEdge(node, el));
  delete this.storage[node].value;

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].edge.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var array = this.storage[fromNode].edge;
  this.storage[fromNode].edge.splice(array.indexOf(fromNode), 1);
  var arr = this.storage[toNode].edge;
  this.storage[toNode].edge.splice(arr.indexOf(toNode), 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // console.log('==========', Object.keys(this.storage));
  Object.keys(this.storage).forEach(el => cb(el));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


