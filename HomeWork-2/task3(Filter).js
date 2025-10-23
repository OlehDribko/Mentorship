// 3️⃣ Завдання — Поліфіл для методу filter
// Мета: зрозуміти, як працюють вбудовані методи масивів і навчитися відтворювати їхню логіку самостійно.
// Умова:
// Реалізуй власну версію методу Array.prototype.filter.
// Вона повинна поводитись так само, як оригінальна.
// Вимоги:
// Метод приймає функцію callback(element, index, array).

// Повертає новий масив із елементами, які задовольняють умову.

// Не змінює початковий масив.

// Не можна використовувати оригінальний Array.prototype.filter.

// Оформити як Pull Request у GitHub.

// Успішне виконання — approved PR.

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
