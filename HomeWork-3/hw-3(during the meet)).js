function name() {
  return () => {
    this;
  };
}

console.log(name());

const foo = function () {
  return this;
};

console.log(foo());

Array.prototype.myMap = function myArray(callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);

    newArr.push(result);
  }

  return newArr;
};

const arr = ["1", "2", "3", "4"];

console.log(arr.myMap((arr, index, array) => arr * 2));

function foo() {
  let value = 0;

  return () => {
    return (value += 1);
  };
}

const newValue = foo();
const result = newValue();

function a() {
  return 2;
}

const b = a();
