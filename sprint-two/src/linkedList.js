var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  //create container for new node 
    var newNode = Node(value);
    //conditinal check for head and tail
    //if both null: set new node to both 
    if (!list.head && !list.tail) {
      list.head = newNode;
      list.tail = newNode;
    //if one exists
    } else {
    //get current tail, set its next prop to newnode
      var current = list.tail;
      current.next = newNode;  
      //reassign list.tail to newnode
      list.tail = newNode; 
    } 
  };

  list.removeHead = function() {
  //store list.head in a variable
    var currentHead = list.head;
    //check if the head and tail are equal
    //if so, set both to null
    //return stored head
    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
      return currentHead.value;
    } else {
      var newHead = currentHead.next;
      currentHead.next = null;
      list.head = newHead;
      return currentHead.value;
    } 

  //else
    
    //store list.head.next
    //list.head.next = null
    //list.head = to stored list.head.next
    //return stored list.head.next
  };

  list.contains = function(target) {
    var recursion = function(obj, target) {

      if (obj.next === null) {
        if (obj.value === target) { return true; }
        return false;
      }
      if (obj.value === target) {
        return true;
      }
      return recursion(obj.next, target);
    };
    return recursion(list.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
