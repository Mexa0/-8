// Задача 1. Упаковка товаров
// Выполни это задание в файле task-1.js
// Напиши функцию isEnoughCapacity(products, containerSize), которая вычисляет, поместятся ли все товары в контейнер при упаковке.
// Функция принимает два параметра:
// ●	products — объект, в котором ключи содержат названия товаров, а их значения — количество этих товаров. Например, { apples: 2, grapes: 4 }.
// ●	containerSize — число, максимальное количество единиц товаров, которое может вместить контейнер.
// Функция должна вернуть результат проверки, поместятся ли все товары в контейнер. То есть нужно посчитать общее количество товаров в объекте products и вернуть true, если оно меньше или равно containerSize, и false, если больше.
// Вставь код ниже после объявления своей функции для проверки её работы. В консоль будут выведены результаты её вызовов.

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false

// function isEnoughCapacity(products, containerSize) {
//   let totalProducts = 0;

//   for (let key in products) {
//     totalProducts += products[key];
//   }

//   return totalProducts <= containerSize;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
// --------------------------------------------------------------------------------------------------------------------------------- //
// Задача 2. Расчёт калорий
// Выполни это задание в файле task-2.js
// Напиши функцию calcAverageCalories(days), которая возвращает среднесуточное количество калорий, которые спортсмен потреблял в течение недели. Функция принимает один параметр: days — массив объектов. Каждый объект описывает день недели и количество калорий, потреблённых спортсменом в этот день.
// Вставь код ниже после объявления своей функции для проверки её работы. В консоль будут выведены результаты её вызовов.

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

// function calcAverageCalories(days) {
//   if (days.length === 0) return 0;

//   let totalCalories = 0;

//   for (let i = 0; i < days.length; i++) {
//     totalCalories += days[i].calories;
//   }

//   return totalCalories / days.length;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// --------------------------------------------------------------------------------------------------------------------------------- //

// Задача 3. Профиль игрока
// Выполни это задание в файле task-3.js
// Объект profile описывает профиль пользователя на игровой платформе. В его свойствах хранятся имя профиля username и количество активных часов playTime, проведённых в игре.

// const profile = {
//     username: "Jacob",
//     playTime: 300,
// };

// Дополните объект profile методами для работы с его свойствами:
// 1.	Метод changeUsername(newName) должен принимать строку (новое имя) в параметре newName и изменять значение свойства username на новое. Ничего не возвращает.
// 2.	Метод updatePlayTime(hours) должен принимать число (количество часов) в параметре hours и увеличивать на это значение свойство playTime. Ничего не возвращает.
// 3.	Метод getInfo() должен возвращать строку в формате: <Username> has <amount> active hours!, где <Username> — это имя профиля, а <> — количество игровых часов.
// Возьми код ниже и вставь после объявления своей функции для проверки её работы. В консоль будут выведены результаты её работы.
// javascript
// CopyEdit
// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// ❌ //
// --------------------------------------------------------------------------------------------------------------------------------- //
