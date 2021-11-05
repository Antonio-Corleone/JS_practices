//Flat n-depth array
var arr = [1, 2, [3, [4, 5], 6], 7, [8, 9], [[[10]]]];

//Using flat() method with parameter is Infinity
console.log('Using flat(Infinity) method', arr.flat(Infinity));

//Using method reduce() and isArray() method of Array Obj in Javascript
function Flatten(arr){
  return arr.reduce(function(accumulator, current){
    if (Array.isArray(current)){
      return accumulator.concat(Flatten(current));
    }
    return accumulator.concat(current);
  }, [])
}

console.log('Using method reduce() & isArray()', Flatten(arr));

//Using arrow function
var myFlatten = (arr) => arr.reduce((accumulator, current) => accumulator.concat(Array.isArray(current) ? Flatten(current) : current), []);

console.log('Using arrow function', myFlatten(arr));
