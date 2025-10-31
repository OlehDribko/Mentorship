Array.prototype.myFilter = function myArray(callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

const arr = [1, 3, 4, 8, 14];

const newArr = arr.filter((element, index, array) => element > 2);
console.log(newArr);

const myprotoArr = arr.myFilter((element, index, array) => element > 2);
console.log(myprotoArr);
