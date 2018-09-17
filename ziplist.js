const tList1 = ['a', 'b', 'c'];
const tList2 = [1, 2, 3];

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}
console.log(zipList(tList1, tList2));

function zipListTheSimpleWay(list1, list2) {
  /*
  _.ziplist(*arrays) will Merges together the values of each of the arrays with the values at the corresponding position
  _.flatten(array, [shallow]) will Flattens a nested array (the nesting can be to any depth)
  */
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(tList1, tList2));
