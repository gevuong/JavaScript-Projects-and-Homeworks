// Monkey patch the Array class and add a myInject method.
// In the JS exercises, you are required to use myForEach.
// So make sure you can write this for forEach opposed to a for loop!

Array.prototype.myInject = function (callback) {
  let accum = this.shift();
  this.forEach(function (el) {
    accum = callback(accum, el);
  });
  return accum;
};

// callback function is defined as function(a,b) { return a + b }
let test = [1,2,3,4].myInject(function(a, b) {
  return a + b;
});

console.log(test);
