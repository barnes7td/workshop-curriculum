var addItem = function(item, groceryList) {
  if (groceryList.indexOf(item) === -1){
    groceryList.push(item);
  }
  return groceryList;
};

var reverseSortedList = function(array) {
  return array.sort().reverse();
};
