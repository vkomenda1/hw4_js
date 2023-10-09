

// Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

    function checkNumberProducts(hamburger, hamburgerWithPotation){
    
    if(hamburger >= 3 && hamburgerWithPotation >= 1){
        console.log("Ми поїли");
    }else{
        console.log("Ми йдемо в інше кафе");
    }
}

    checkNumberProducts(3, 1);
    
// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

function priceRange(prices1, prices2) {
if(prices1 >= 1000 && prices2 <= 1900){
  console.log("Діапазон цін відповідає умові від " + prices1 + " до " + prices2);
}else{
    console.log("Діапазон цін не відповідає умові від " + prices1 + " до " + prices2);
  }
}

    priceRange(1000, 1900);
    
// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

function priceRangeIsNotFound(macbookPrice) {
if(macbookPrice < 1000 || macbookPrice > 1900){
    console.log("Діапазон цін не знаходиться від 1000 до 1900");
}else{
    console.log("Діапазон цін знаходиться від 1000 до 1900");
}

if(!(macbookPrice >= 1000 && macbookPrice <= 1900)) {
    console.log("Діапазон цін не знаходиться від 1000 до 1900")
} else {
    console.log("Діапазон цін знаходиться від 1000 до 1900");
  }
}

      priceRangeIsNotFound(900);

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

function getSeasons(season) {
if(season == 1){
    console.log("Spring");
}else if(season == 2){
    console.log("Summer");
}else if(season == 3){
    console.log("Fall")
}else if(season == 4){
    console.log("Winter")
}else{
    console.log("Incorrect number of season")
}
}

    getSeasons(2);


// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

 function getAVG(a, b, c) {
 if ((a >= b && a <= c) || (a >= c && a <= b)) {
    
    // a - середнє значення
     avg = a;
 } else if ((b >= a && b <= c) || (b >= c && b <= a)) {
     // b - середнє значення
     avg = b;
 } else {
     // c - середнє значення
     avg = c;
 }
 console.log("Середнє не арифметичне значення: " + avg);
}
    getAVG(60, 30, 90);

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

function getWeek(dayOfTheWeekNumber) {
      switch(dayOfTheWeekNumber){
          case 1:
              console.log('Monday');
              break;
          case 2:
              console.log('Tuesday');
              break;
          case 3:
              console.log('Wednesday');
              break;
          case 4:
              console.log('Thursday');
              break;
          case 5:
              console.log('Friday');
              break;
          case 6:
              console.log('Saturday');
              break;
          case 7:
              console.log('Sunday');
              break;
          default:
              console.log('incorrectly');
              break;
        }
}

    getWeek(7);

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

function calculate (num1, operator, num2){
    switch (operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
    if(num2 !==0){
        return num1 / num2;
    }else{
        return "Error: division by zero ";
    }default: 
    return "Error: invalid operation";
}
    
}
const result = calculate(10, "+", 20);
console.log("Result:", result);


// 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.

function moveValue(val1, val2) {    
    for (let i = 1; i <= 5; i++) {
        val1.push(val2[i - 1]); 
    }
    console.log(val1);
}

moveValue([], [1, 2, 3, 4, 5]);

// 9. Напишіть 2 цикли.
//    За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
//    За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.

function getEvenNumbers(val1, val2, val3) {
for(let i = val1; i <= val2; i++){
    if(i % 2 == 0){
        val3.push(i);
    }
}
console.log(val3);
}

getEvenNumbers(1, [9], [])


function getOddNumbers(val1, val2, val3) {
    for(let i = val1; i <= val2; i++){
        if(i % 2 !== 0){
            val3.push(i);
        }
    }
    console.log(val3);
    }
    
    getOddNumbers(1, [9], [])
    


// 10. Оголоcіть та ініціалізуйте змінну total = 0.
//     Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
//     const myArr = [2, 3, 4, 5, 6];

function addValue(total, myArr) {
    for(let i = 0; i < myArr.length; i++){
    total += myArr[i];
}
console.log(total);
}

addValue(0, [2, 3, 4, 5, 6])


// 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

//     const arr = [ [1, 2], [3, 4], [5, 6] ];

//     Console output:
//     1
//     2
//     3
//     4
//     5
//     6

const arr = [[1, 2], [3, 4], [5, 6]];

function getEveryElement(arr) {
for(let i = 0; i < arr.length; i++){
    for(let b = 0; b < arr[i].length; b++){
        console.log(arr[i][b]);
    }
}
}

   getEveryElement(arr);

// 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
//     Використайте для цього вкладені цикли for.

//     Наприклад:
//     const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
//     const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
//     const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

//     const arr = [[1, 2], [3, 4], [5, 6, 7]];

//     let product = 1;

//     // тут має бути ваше рішення

//     console.log(product);

const arr1 = [[1], [2], [3]];
const arr2 = [[1, 2], [3, 4], [5, 6, 7]];
const arr3 = [[5, 1], [0.2, 4, 0.5], [3, 9]];

function calculateArr(arr){
 let product = 1;
   
    for(let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

console.log(calculateArr(arr1)); //Результат: 6
console.log(calculateArr(arr2)); //Результат: 5040
console.log(calculateArr(arr3)); //Результат: 54




// 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

function regularExpression(params) {
let text = "regular expression"
let pattern = /[aeiouy]/gi;
let vowels = text.match(pattern);
console.log(vowels);
}

regularExpression();

// 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

function getEnding(number, endings) {
    if (number % 10  === 1 || number % 10 === 101 || number === 1001 || number === 0.1) {
        return endings[0];
    } else if (number % 10 >= 2 && number % 10 <= 4 || number % 10 === 0.02 && number % 10 === 0.04 || number % 10 >= 22 && number % 10 <= 44 || number % 10 === 0.32 ){
        return endings[1];
    } else if ((number % 10 >= 5 && number % 10 <= 9) || number % 10 === 10 || number % 10 === 1000 || number % 10 === 11 || number % 10 === 111 || number % 10 === 1111 || number % 10 === 2000) {
        return endings[2];
    } else {
        return endings[3];
        }
}

function convertMetersToKilometers(meters) {
    const kilometers = meters / 1000;
    const endingMeters = getEnding(meters, ['метр', 'метри', 'метрів', 'метра']);
    const endingKilometers = getEnding(kilometers, ['кілометр', 'кілометри', 'кілометрів', 'кілометра']);
    console.log(`${meters} ${endingMeters} це ${kilometers} ${endingKilometers}`);
}

convertMetersToKilometers(0.32);
