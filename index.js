// console.log( "" + 1 + 0) //"10"
// console.log( "0" - 1 + 0) //0-1+0=-1
// console.log( true + false) //1
// console.log( 6 + "3")  //"63"
// console.log( "2" * "3") //6
// console.log( 4 + 5 + "px") //"9px"
// console.log( "$" + 4 + 5) //"$45"
// console.log( "4" - 2 )// 2
// console.log( "4px" - 2 )// NaN
// console.log( "  -9  " + 5 )//"  -9  5"
// console.log( "  -9  " - 5 )//-14
// console.log( null + 1 )//1
// console.log( undefined + 1) //NaN
// console.log( " \t \n" - 2) //-2

// console.log(typeof NaN)

// console.log(1 + "" + 2 + "" + 3   )

// // <----DZ----> 

// console.log("5" + 3 - 1) //"53"-1=52
// console.log("10px" + 2) //"10px2"
// console.log("10px" - 2) //NaN
// console.log(null + "5") //5 ?
// console.log(undefined + "5") //NaN ?
// console.log(false + "true") //1 ?
// console.log(true + "1") //2 ?
// console.log("4" * null) //0
// console.log("6" / "2" + "px") //"3px"
// console.log("3" * "2" - "1") //5
// console.log("5" + 2 * "3") //21 ?
// console.log("5" - 2 + "3") //6 ?
// console.log(" 10 " - " 2 ") //8
// console.log("5px" - "2px") //NaN
// console.log(null + undefined) //NaN
// // 1. null + 1
// console.log(null + 1); //1

// // 2. undefined + 1
// console.log(undefined + 1); //NaN

// // 3. "10" + 5
// console.log("10" + 5); //"105"

// // 4. "10" - 5
// console.log("10" - 5); //5

// // 5. true + false
// console.log(true + false); //1

// // 6. "5" * "2"
// console.log("5" * "2"); //10

// // 7. "5" + 2 * 3
// console.log("5" + 2 * 3); //56

// // 8. "5" - 2 + 3
// console.log("5" - 2 + 3); //6

// // 9. "5" + (2 console.lo+ 3)
// console.log("5" + (2 + 3)); //55
// // для выполнения, необходимо прочитать до 2.12 
// //                 ||
// //                 \/

// !!"false" + !!"true" //true
// true == "1" //true
// false == "0" //true
// "5" / [] //infinity
// "5" - [] //5
// "5" + [] //"5[]"
// 5 + {} //"5[objectObject]"
// 5 - {} //NaN
// "5" + {} //"5[objectObject]"
// "5" - {} //NaN
// {} + [] //"[objectObject]"
// [] + {} //"[objectObject]"
// {} - [] //NaN
// [] - {} //NaN
// ([] == false) + 1 //2
// ({} + []) - 5 //NaN
// ([] == ![]) + 1 //2

// // дочитать полностью до 2.18

// //Упражнения 2.9

// console.log(5 > 4) //true
// console.log("ананас" > "яблоко") //false
// console.log("2" > "12") //false ?
// console.log(undefined == null) //true
// console.log(undefined === null) //false
// console.log(null == "\n0\n") //true ?
// console.log(null === +"\n0\n") //false

// // 1.
// console.log(false == 0); // true

// // 2.
// console.log(false === 0); // false

// // 3.
// console.log("0" == false); // true

// // 4.
// console.log(Boolean("0")); // false ???

// // 5.
// console.log(null > 0); // false

// // 6.
// console.log(null == 0); // false

// // 7.
// console.log(null >= 0); // true

// // 8.
// console.log(undefined > 0); // false

// // 9.
// console.log(undefined == 0); // false

// // 10.
// console.log(undefined >= 0); // false

// //Упражнения 2.10

// console.log(if ("0") {
//   alert( 'Привет' );
// })

// // 1. Проверка четности числа
// // Условие:
// // Напиши программу, которая запрашивает у пользователя число и проверяет, является ли это число четным.
// // ✅ Если число четное — вывести Число четное.
// // ❌ Иначе — Число нечетное.
// let num = 1
// if (num%2 === 0) {
// console.log("Число четное")
// }
// else {
// console.log("Число нечетное")
// }
// // 2. Проверка на совершеннолетие
// // Условие:
// // Запросить возраст пользователя.
// // Если возраст 18 и больше — вывести Совершеннолетний, иначе — Несовершеннолетний.
// let age = 19
// if (age >= 18) {
// console.log("Совершеннолетний")
// }
// else {
// console.log("Несовершеннолетний")
// }
// let age = 19
// (age >= 18) ? console.log("Совершеннолетний"): console.log("Несовершеннолетний")
// // 3. Сравнение двух чисел
// // Условие:
// // Запросить у пользователя два числа и сравнить их.
// // Вывести, какое число больше, меньше, или если они равны.
// let num1 = 1
// let num2 = 2
// if (num1 > num2) {
// console.log("Первое число больше второго")
// }
// else if (num1 < num2) {
// console.log("Первое число меньше второго")
// }
// else {
// console.log("Числа равны")
// }
// // 4. Проверка на положительное число
// // Условие:
// // Запросить число.
// // Вывести, является ли оно положительным, отрицательным или нулем.
// let num = 9
// if (num > 0) {
// console.log("Положительное число")
// }
// else if (num < 0) {
// console.log("Отрицательное число")
// }
// else {
// console.log("Нуль")
// }
// // 5. Определение дня недели
// // Условие:
// // Запросить число от 1 до 7.
// // Вывести соответствующий день недели.
// let num = 10
// if (num === 1) {
// console.log("Понедельник")
// }
// else if (num === 2) {
// console.log("Вторник")
// }
// else if (num === 3) {
// console.log("Среда")
// }
// else if (num === 4) {
// console.log("Четверг")
// }
// else if (num === 5) {
// console.log("Пятница")
// }
// else if (num === 6) {
// console.log("Суббота")
// }
// else if (num === 7) {
// console.log("Воскресение")
// }
// else {
// console.log("Введите число от 1 до 7")
// }
// // 6. Проверка логина и пароля
// // Условие:
// // Запросить логин и пароль.
// // Если логин "admin" и пароль "1234" — вывести Авторизация успешна.
// // Иначе — Неверный логин или пароль.
// let login = "admin"
// let password = "12345"
// if (login == "admin" && password == "1234") {
// console.log("Авторизация успешна")
// }
// else {
// console.log("Неверный логин или пароль")
// }
// // 7. Определение времени суток
// // Условие:
// // Запросить время (от 0 до 23).
// // Вывести соответствующее время суток:

// // Ночь
// // Утро
// // День
// // Вечер
// let hour = 24
// if (hour >= 0 && hour < 6) {
// console.log("Ночь")
// }
// else if (hour >= 6 && hour < 12) {
// console.log("Утро")
// }
// else if (hour >= 12 && hour < 18) {
// console.log("День")
// }
// else if (hour >= 18 && hour <= 23) {
// console.log("Вечер")
// }
// else {
// console.log("Введите число от 0 до 23")
// }
// // 8. Проверка високосного года
// // Условие:
// // Запросить у пользователя год и проверить, является ли он високосным:

// // Год делится на 4, но не делится на 100
// // Или делится на 400
// let year = 200
// if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0 ) {
// console.log("Високосный год")
// }
// else {
// console.log("Невисокосный год")
// }
// // 9. Определение сезона по месяцу
// // Условие:
// // Запросить у пользователя номер месяца (1–12) и вывести сезон:

// // Зима
// // Весна
// // Лето
// // Осень
// let monthnum = 12
// if (monthnum == 12 || monthnum == 1 || monthnum == 2) {
// console.log("Зима")
// }
// else if (monthnum >= 3 && monthnum <= 5) {
// console.log("Весна")
// }
// else if (monthnum >= 6 && monthnum <= 8) {
// console.log("Лето")
// }
// else if (monthnum >= 9  && monthnum <= 11) {
// console.log("Осень")
// }
// else {
// console.log("Введите число от 1 до 12")
// }
// // 10. Простая калькуляция
// // Условие:
// // Запросить два числа и один из операторов +, -, *, /.
// // Выполнить указанную операцию и вывести результат.

// let a = 12
// let b = 0
// let operator = "/"
// if (operator === "+") {
// console.log(a+b)
// }
// else if (operator === "-") {
// console.log(a-b)
// }
// else if (operator === "*") {
// console.log(a*b)
// }
// else if (operator === "/" && (b != 0)) {
// console.log(a/b)
// }
// else {
// console.log("На ноль делить нельзя")
// }


// // && - ищет первый false и возвращает, либо последний true
// // || - ищет первый true и возвращает, либо последний false
// // !

// // console.log( true && true && false && true)
// // console.log( false || false || false || false)

// console.log( 1 && NaN || "hello" && 0 || true)  // true

// console.log((4 > 2) && (8 < 16) || ("А" === "а") && !(2 === "2")); // true

// let value = { name: "Алиса" };
// console.log(value && value.name && value.name === "Алиса") // true

// console.log("Слон" && NaN && 0); //

// let a = 3, b = -2;
// console.log(!(a > 0 || b > 0)); //

// // let foo = () => 'Функция выполнена';
// // console.log(false || foo());  //

// console.log(0 && 2 || true); //

// let x = 5;
// console.log((x > 3) && (x < 10) || (x === 5));  //

// console.log(!("Птица" || "Рыба") && !("Собака" && "Кошка")); //

// console.log("Кот" || "Собака" && "Попугай"); //

// console.log(null && undefined); //


// let i = 0
// while (i < 10) {
//   console.log(i)
//   i += 0.5
// }

// let arr = [3, 5, 10, 4, 5, 7]

// console.log (arr[2])

// for (let i = 0; i < arr.length; i++) {
// console.log (arr[i])
// }
// // Подсчет суммы чисел от 1 до N
// // Условие:
// // Запросить число N.
// // С помощью цикла while посчитать сумму чисел от 1 до N.
// // 📤 Вывести результат.

// let N = 10
// let i = 0
// let sum = 0
// while (i <= N) {
//  sum += i 
// i++
// }
//   console.log(sum)
// let N = 10
// let i = 0
// while (i <= N) {
//   i++
// }
// console.log(N*(N+1)/2)
// // 2. Вывод четных чисел
// // Условие:
// // Запросить число N.
// // С помощью for вывести все четные числа от 1 до N.

// let N = 10

// for (let i = 1; i <= N; i++) {
// if (i%2 === 0) {
// console.log (i)
// }
// }

// // 3. Факториал числа
// // Условие:
// // Запросить число N.
// // С помощью while посчитать факториал N!.
// // 📤 Вывести результат.
// let N = 5
// let i = 1
// let fact = 1
// while (i <= N) {
//  fact = fact * i 
// i++
// }
//   console.log(fact)

// // 4. Вывод чисел в обратном порядке
// // Условие:
// // Запросить число N.
// // С помощью for вывести все числа от N до 1.
// let N = 10

// for (let i = N; i >= 1; i--) {
// console.log (i)
// }

// // 5. Подсчет суммы четных чисел от 1 до N
// // Условие:
// // Запросить число N.
// // С помощью while посчитать сумму всех четных чисел от 1 до N.
// // 📤 Вывести результат.
// let N = 10
// let i = 0
// let sum = 0
// while (i <= N) {
// if (i%2 === 0)
// {
// sum += i }
// i++
// }
//   console.log(sum)

// // 8. Нахождение максимального числа
// // Условие:
// // Запросить у пользователя N чисел.
// // С помощью while найти максимальное из них.
// // 📤 Вывести результат.
// for (let i = 0; i < arr.length; i++)

// let i = 0
// let arr = [1, 15, 10, 4, 5, 7]
// let max = arr[i]
// while (i < arr.length) {
// i++
// if (arr[i] >= max) {max = arr[i]}
// }
//   console.log(max)
// // 10. Сумма цифр числа
// // Условие:
// // Запросить число.
// // С помощью while посчитать сумму всех цифр этого числа.
// // 📤 Вывести результат.
// let N = 25
// let i = 0
// let numToSt = "" + N
// let sum = 0
// while (i < numToSt.length) {
// sum += +numToSt[i]
// i++
// }
//   console.log(sum)


// // 11. Вывод степеней числа
// // Условие: Запросить число N и число K. С помощью for вывести все степени числа K от 1 до N (K¹, K², …, Kᴺ).

// let N = 10
// let K = 2

// for (let i = 1; i <= N; i++) {
// console.log (i**K)
// }

// // 12. Подсчет произведения нечетных чисел
// // Условие: Запросить число N. С помощью while найти произведение всех нечетных чисел от 1 до N.
// let N = 10
// let i = 1
// let sum = 1
// while (i <= N) {
// if (i%2 != 0)
// {
// sum *= i }
// i++
// }
//   console.log(sum)
// // 13. Обратная таблица умножения
// // Условие: Запросить число N. С помощью for вывести таблицу умножения для этого числа в обратном порядке (от 10 до 1).
// let N = 10

// for (let i = N; i >= 1; i--) {
// console.log(`${N} x ${i} = ${N * i}`) // ?
// }
// // 14. Сумма чисел, кратных 3 или 5
// // Условие: Запросить число N. С помощью while найти сумму всех чисел от 1 до N, которые делятся на 3 или 5.
// let N = 10
// let i = 1
// let sum = 0
// while (i <= N) {
// if (i%3 === 0 || i%5 === 0)
// {
// sum += i }
// i++
// }
//   console.log(sum)
// // 15. Подсчет количества цифр
// // Условие: Запросить число. С помощью while посчитать, сколько цифр в этом числе.
// let N = 25
// let i = 0
// let numToSt = "" + N
// let count = 0
// while (i < numToSt.length) {
// count = count + 1
// i++
// }
//   console.log(count)
// // 16. Числа-палиндромы
// // Условие: Запросить число N. С помощью for вывести все числа от 1 до N, которые читаются одинаково слева направо и справа налево.
// let N = 55
// let numToSt = "" + N
// for (let i = 1; i <= N; i++) {
// if (numToSt === numToSt + 1) {
// console.log (numToSt)
// }
// }
// // 17. Обратное число
// // Условие: Запросить число. С помощью while вывести его цифры в обратном порядке.

// // 18. Сумма квадратов чисел
// // Условие: Запросить число N. С помощью for найти сумму квадратов всех чисел от 1 до N.

// // 19. Числа, сумма цифр которых четная
// // Условие: Запросить число N. С помощью for вывести все числа от 1 до N, сумма цифр которых — четная.

// // 20. Игра «Угадай число»
// // Условие: Задать случайное число от 1 до 100. С помощью while дать пользователю возможность угадывать его, подсказывая «Больше» или «Меньше» до тех пор, пока он не угадает.

// let i = 0;
// while (i != 10) {
//   console.log (+i.toFixed(1))
//   i += 0.2;
//   i = +i.toFixed(1)
// }
// function random(min, max) {
//   return min+(Math.random()*(max-min));
// }
// console.log (random(10,15))

// let arr = [1,2,3]
// console.log (arr.at(-1))

// const newArr = [10, 2, 5, 20, -3]

// const min = () => {
// let minimum = newArr[0]
// for (let i = 0; i < newArr.length; i++){
// if (newArr[i] <= minimum) {minimum = newArr[i]}}
// return minimum
// } 

// console.log(min(newArr)) // -3


// let i = 0
// let arr = [1, 15, 10, 4, 5, 7]
// let max = arr[i]
// while (i < arr.length) {
// i++
// if (arr[i] >= max) {max = arr[i]}
// }
const newArr = [10, 2, 5, 20, -3] 

const max = () => {
  let maximum = newArr[0]
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] >= maximum) {
      maximum = newArr[i]
    }
  }
  return maximum
} 
console.log(max(newArr)) // 20


// Создать массив из чисел от 1 до 10 и вывести его в консоль.

// ... [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const arrCreator = () => {
  let arr = []
  for (let i = 1; i <= 10; i++) {
    arr.push (i)
  }
  return arr
}
console.log(arrCreator())

// Найти максимальное и минимальное число в массиве [10, 3, 7, 15, 2].
const newArr = [10, 3, 7, 15, 2] 

const max = () => {
  let maximum = newArr[0]
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] >= maximum) {
      maximum = newArr[i]
    }
  }
  return maximum
} 

const min = () => {
  let minimum = newArr[0]
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] <= minimum) {
      minimum = newArr[i]
    }
  }
  return minimum
} 
console.log(max(newArr)) 
console.log(min(newArr)) 
// Развернуть массив [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1].

const newArr = [1, 2, 3, 4, 5] 
const nNewArr = []
 const reverse = (arr) => {
  for (let i = newArr.length - 1; i >= 0; i--) {
  nNewArr.push (newArr[i])
  }
    return  nNewArr
} 
console.log(reverse(newArr))


const newArr = [1, 2, 3, 4, 5] 
let toCenterLeft = 0
let toCenterRight = newArr.length - 1

while (toCenterRight > toCenterLeft) {
  const val = newArr[toCenterLeft]
  newArr[toCenterLeft] = newArr[toCenterRight]
  newArr[toCenterRight] = val
  toCenterLeft++
  toCenterRight--
}

console.log(newArr)

const newArr = [1, 2, 3, 4, 5] 
console.log(newArr.reverse())

// Удалить первый и последний элемент массива [10, 20, 30, 40, 50].
const newArr = [10, 20, 30, 40, 50, 60, 70, 80] 
console.log(newArr.slice(-5))

const delFirstLast = (arr) => {
  let deleteFirstLast = newArr[0]
  newArr.splice(0, 1)
  newArr.splice(newArr.length - 1, 1)
  return newArr
} 
console.log(delFirstLast([...newArr]))

// Посчитать количество четных чисел в массиве [1, 2, 3, 4, 5, 6].
const newArr = [1, 2, 3, 4, 5, 6] 

const countEvenNumbers = () => {
  let count = 0
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 === 0) {
      count++
    }
  }
  return count
} 
console.log (count)

// Объединить два массива [1, 2, 3] и [4, 5, 6].

console.log([1, 2, 3].concat([4, 5, 6]))

// Получить новый массив, где каждый элемент массива [1, 2, 3, 4] умножен на 2.

const newArr = [1, 2, 3, 4] 

const doubleArr = () => {
  let double = []
for (let i = 0; i < newArr.length; i++) {
double.push (newArr[i] * 2)
  
  }
  return double 
} 
console.log (doubleArr())
console.log (parseInt("50ajhvjgc8"))


console.log (++"50ajhvjgc8")