function createAccumulator(value) {
  let totalValue = 0;
  return function sum(value) {
    totalValue += value;
    return totalValue;
  };
}

const add = createAccumulator();

console.log(add(3)); // Вивід: 3
console.log(add(5)); // Вивід: 8
console.log(add(20)); // Вивід: 28
console.log(createAccumulator(2));
// Homework #2 — Understanding Hoisting
// Task 1:
// console.log(a);
// const a = 5;
// 👉 Explain what error will be thrown and why it happens.
// >>>>>>> Відповідь
// помилка, у тому що змінна оголошена до її ініціалізації ( помилка ініціалізації)

// Task 2:
// console.log(b);
// var b = 10;
// 👉 Explain what the output will be and why.
// 🧠 Focus:
// Understand the difference between how const/let and var are hoisted.
//  >>>>>>Відповідь
//  Undefined - так, як значення змінної не присвоїно , а але вона знаходиться у глобальній області видимості (Window)

// Describe what TDZ (Temporal Dead Zone) means.

// >>>>>> Відповідь
// Це область видимості, у які не доступне значення змінної. У Контексті var це Локальна та глобальна. А у const/let - глобальна логкальна та блочна.
