import {useState} from 'react';

import './App.css';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';

import ScrollToTop from "react-scroll-to-top";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import filterMethod from '../../images/filter.png'
import mapMethod from '../../images/map.png'
import reduceMethod from '../../images/reduce.png'
import forEachMethod from '../../images/forEach.png'
import indexOfMethod from '../../images/indexOf.png'
import keysMethod from '../../images/keys.png'
import splitMethod from '../../images/split.png'
import spreadOperator from '../../images/spread.png'
import callbackFunction from '../../images/callback.png'
import closureFunction from '../../images/closure.png'
import recursionFunction from '../../images/recursion.png'
import doWhileCycle from '../../images/do while.png'
import forInForOfCycle from '../../images/for in for of.png'
import whileCycle from '../../images/while.png'
import ternaryExpressions from '../../images/ternary-expressions.png'
import isEqualLength from '../../images/is-equal-length.png'
import fetchRequest from '../../images/fetch.png'
import randomNumber from '../../images/random-number.png'
import arrayWithoutEmptyStrings from '../../images/array-without-empty-strings.png'
import arrayWithUniqueValues from '../../images/array-with-unique-values.png'
import shuffledArray from '../../images/shuffled-array.png'
import falsyValues from '../../images/falsy-values.png'
import fibonaccioCycle from '../../images/fibonaccio-cycle.png'
import findMaxValue from '../../images/find-max-number.png'
import fizzBuzzTask from '../../images/fizz-buzz-task.png'
import letterFinder from '../../images/letter-finder.png'
import isEmptyObject from '../../images/is-empty-object.png'
import Classes from '../../images/classes.png'
import banWordsFilter from '../../images/ban-words-filter.png'
import promise from '../../images/promise.png'
import arrayWithUniqueValuesV2 from '../../images/array-with-unique-values_v2.0.png'
import fibonaccioCycleV2 from '../../images/fibonaccio-cycle_v2.0.png'
import arrayWithUniqueValuesV3 from '../../images/array-with-unique-values_v3.0.png'
import euclideanAlgorithm from '../../images/euclidean-algorithm.png'
import isIsogram from '../../images/is-isogram.png'
import digitalClock from '../../images/digital-clock.jpg'
import switchCase from '../../images/switch-case.png'
import reactSearchPattern from '../../images/search-pattern_react.png'
import categoryReactPattern from '../../images/categories-pattern_react.png'
import useEffectWithAllArgs from '../../images/useEffectWithAllArgs.png'
import gettingInfoFromApi from '../../images/gettingInfoFromApi.png'
import gettingInfoFromApiKY from '../../images/gettingInfoFromApiKY.png'
import rrt_input_1 from '../../images/rrt_input_1.png'
import rrt_input_2 from '../../images/rrt_input_2.png'
import rrt_input_3 from '../../images/rrt_input_3.png'
import rrt_input_4 from '../../images/rrt_input_4.png'
import rrt_input_5 from '../../images/rrt_input_5.png'
import rrt_input_6 from '../../images/rrt_input_6.png'
import props_destructurization from '../../images/props_destructurization.png'
import conditional_rendering from '../../images/conditional_rendering.png'
import discriminant_formula from '../../images/discriminant_formula.png'
import node_email_sender from '../../images/node_email_sender.png'
import includesMethod from '../../images/includes.png'

const content = [
  {image: filterMethod, caption: {en: 'Array.prototype.filter()', ua: 'Array.prototype.filter()'}, text: {en: 'filter is a method that creates a new unique array with specific criteria based on the selected array', ua: 'filter - це метод, що створює новий унікальний масив з чіткими критеріями на основі обранного масиву'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'}, type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let filteredArray = array.filter(
  language => {
    if (language.length === 2) return true
  }
) 

console.log(filteredArray)`},
  {image: mapMethod, caption: {en: 'Array.prototype.map()', ua: 'Array.prototype.map()'}, text: {en: 'map is a method that creates a new unique array with some distinct changes in it', ua: 'map - це метод, що створює новий унікальний массиву з якимись чіткими змінами у ньому'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map'}, type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let mappedArray = array.map( 
  language => { 
    return language + ':)' 
  }
) 

console.log(mappedArray)`},
  {image: reduceMethod, caption: {en: 'Array.prototype.reduce()', ua: 'Array.prototype.reduce()'}, text: {en: 'reduce is a method that applies an explicit criterion (reducer) to each array element and returns a single resulting final value', ua: 'reduce - це метод, що застосовує чіткий критерій (reducer) до кожного елементу масиву та повертає одне резултативне кінцеве значення'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce'}, type: 'method', code: 
`const array = [1, 2, 3, 4, 5] 
const total = array.reduce( 
  (accumulator, element) => { 
    return accumulator + element 
  }
) 

console.log(total)`},
  {image: forEachMethod, caption: {en: 'Array.prototype.forEach()', ua: 'Array.prototype.forEach()'}, text: {en: 'forEach is a method that populates a distinct variable for each array element', ua: 'forEach - це метод, що виповнює чітку змінну для кожного елементу масиву'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach'}, type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let forEachedArray = array.forEach( 
  language => console.log(language + ' :)') 
) 

console.log(forEachedArray)`},
  {image: indexOfMethod, caption: {en: 'Array.prototype.indexOf()', ua: 'Array.prototype.indexOf()'}, text: {en: 'indexOf is a method that finds the closest index of the item you are looking for', ua: 'indexOf - це метод, що шукає найблищий індекс item`а, котрий ви шукаєте'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf'}, type: 'method', code: 
`const array = [1, 2, 3, 4, 5] 
console.log(array.indexOf(2, 0))`},
  {image: keysMethod, caption: {en: 'Object.keys()', ua: 'Object.keys()'}, text: {en: 'keys is a method that shows all the keys of an object or array', ua: 'keys - це метод, що показую усі ключі об`єкта чи массива'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys'}, type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
const object = { 
  1: 'JS', 
  2: 'TS', 
  3: 'C#', 
  4: 'Java' 
} 

console.log(Object.keys(array)) 
console.log(Object.keys(object))`},
  {image: splitMethod, caption: {en: 'String.prototype.split()', ua: 'String.prototype.split()'}, text: { en: 'split is a method that converts a string into an array', ua: 'split - це метод, що перетворює строку у масив'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split'}, type: 'method', code: 
`let string = 'Hello World' 
let splitedString = string.split(' ') 

console.log(splitedString)`},
  {image: spreadOperator, caption: {en: 'Spread syntax', ua: 'Spread синтаксис'}, text: {en: 'spread (...) is an operator that allows you to expand the elements available for iteration', ua: 'spread (...) - це оператор, що дозволяє розширити доступні для ітерації елементи'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_syntax', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax'}, type: 'operator', code: 
`const array = [1, 1, 2, 3, 5, 8] 
const object = {name: 'Alex', age: '20'} 
const string = 'Hello World' 
const newArray = [...array, 13, 21, 34, 55] 
const newObject = {...object, skills: ['Dev']} 
const newStringArray = [...string] 

function multiply(a, b) { 
  return a * b 
} 

let numbers = [2, 3] 

console.log(newArray) 
console.log(newObject) 
console.log(newStringArray) 
console.log(multiply(...numbers))`},
  {image: callbackFunction, caption: {en: 'Callback', ua: 'Колбек'}, text: {en: 'callback is a function that is passed as an argument to (for example) another function. Further, this callback function is used (for example) as outputting some information to the console', ua: 'callback - це функція, яку передають у якості аргументу до (наприклад) іншої функції. Далі цю callback функцію використовують (наприклад), як відображення якоїсь інформації у консоль'}, link: {en: 'https://developer.mozilla.org/en/docs/Glossary/Callback_function', ua: 'https://developer.mozilla.org/ru/docs/Glossary/Callback_function'}, type: 'function', code: 
`function getUsers(callback) {
  fetch('https://jsonplaceholder.typicode.com/users')  
  .then((response) => { 
    return response.json() 
    }
  )  
  .then((data) => { 
      callback(data) 
    }
  ) 
} 

function showUsers(data) { 
  data.forEach(user => console.log(user.name)) 
} 

getUsers(showUsers)`},
  {image: closureFunction, caption: {en: 'Closure', ua: 'Замикання'}, text: {en: 'Closure is the creation of a local function in another function for later use of it with data', ua: 'Замикання - це створення локальної функції в інщій функції для подалих використовувань її з даними'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Closures#:~:text=%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B8,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%2C%20%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%20%D0%B5%D1%91%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures#:~:text=%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B8,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%2C%20%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%20%D0%B5%D1%91%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.'}, type: 'function', code: 
`function init() {
  let name = 'Name' 
  function showName() { 
    console.log(name) 
  } 
  
  showName() 
} 

init()`},
  {image: recursionFunction, caption: {en: 'Recursion', ua: 'Рекурсія'}, text: {en: 'Recursion is a function call to itself', ua: 'Рекурсія - це виклик функції у собі'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Errors/Too_much_recursion', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Errors/Too_much_recursion'}, type: 'function', code: 
`let num = 0 
function init() { 
  num ++  
  console.log(num)  
  if (num === 100) return  
  init() 
} 

init()`},
  {image: doWhileCycle, caption: {en: 'do... while', ua: 'do... while'}, text: {en: 'do... while is a loop very similar to the while loop, but with a different syntax. The idea is that the loop will repeat until the condition is not true', ua: 'do... while - це цикл, дуже схожий на цикл while, але з іншим синстаксисом. Ідея полягає в тому, що цикл буде повторюватися поки умова не буде значенням true'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/do...while', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while'}, type: 'cycle', code: 
`let result = '' 
let i = 0 
do { 
  i++ 
  result = result + i 
} while (i < 5) 

console.log(result)`},
  {image: forInForOfCycle, caption: {en: 'for in / for of', ua: 'for in / for of'}, text: {en: 'The difference between `for in` and `for of` is that for in is responsible for indexes and for of is responsible for values', ua: 'Різниця між `for in` і `for of` полягая в тому, що for in відповідає за індекси, а for of відповідає за значення'}, link: {en: '#', ua: '#'}, type: 'cycle', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
for (const index in array) { 
  console.log(index) 
} 

for (const value of array) { 
  console.log(value) 
}`},
  {image: whileCycle, caption: {en: 'while', ua: 'while'}, text: { en: 'while is a loop that will repeat until the condition is not true', ua: 'while - це цикл, буде повторюватися поки умова не буде значенням true'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while'}, type: 'cycle', code: 
`let i = 0 
while (i <= 3) { 
  console.log(i) 
  i++ 
}`},
  {image: ternaryExpressions, caption: {en: 'Ternary expressions', ua: 'Умовний оператор'}, text: {en: 'Ternary expressions are a concise replacement of the if/else condition', ua: 'Тернарні вирази - це лаконічна заміна умови if/else'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'}, type: 'operator', code: 
`function isEqual(string1, string2) { 
  let out = '' 

  string1.length === string2.length 
    ? out = 'strings are equal' 
    : out = 'strings are not equal' 

  return out 
} 

console.log(isEqual('hello', 'world')) 
console.log(isEqual('bye', 'world'))`},
  {image: isEqualLength, caption: {en: 'Array.length()', ua: 'Array.length()'}, text: {en: 'length is a method that displays the length of the array', ua: 'length - це метод, що показую довжину масиву'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/length'}, type: 'method', code: 
`function isBigger(string1, string2) { 
  return string1.length === string2.length 
} 

console.log(isBigger('hello', 'world')) 
console.log(isBigger('bye', 'world'))`},
  {image: fetchRequest, caption: {en: 'fetch', ua: 'fetch'}, text: {en: 'fetch is a request to the server', ua: 'fetch - це запит на сервер'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/API/Fetch_API/Using_Fetch', ua: 'https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch'}, type: 'request', code: 
`function getUsers() { 
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { 
      return response.json() 
    })
    .then(data => data.forEach(user => console.log((user.name)))) 
} 
  
getUsers()`},
  {image: randomNumber, caption: {en: 'Math.floor() + Math.random()', ua: 'Math.floor() + Math.random()'}, text: {en: 'floor is a Math method that rounds a number to the nearest smaller integer. random is a Math method that helps find a random number in a specific range', ua: 'floor - це метод Math, котрий округлює число до найблищого меньшого цілого числа. random - це метод Math, котрий допомагає знайти випадкове число в конкретному діапазоні'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/random', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random'}, type: 'method', code: 
`function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min) 
} 

console.log(randomNumber(0, 10)) 
console.log(randomNumber(12, 99))`},
  {image: arrayWithoutEmptyStrings, caption: {en: 'Filtering empty strings from the array', ua: 'Фільтрація порожніх рядків із масиву'}, text: {en: 'This is a function that finds all false values ​​using the filter method and a Boolean value', ua: 'Це функція, що знаходить усі неправильні (false) значення за допомогою методу filter та значення Boolean'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`const dirtyArray = ['JS', '', 'TS', '', '', 'PHP'] 
const clearArray = dirtyArray.filter(Boolean) 

console.log(clearArray)`},
  {image: arrayWithUniqueValues, caption: {en: 'Filtering of unique values ​​in the array', ua: 'Фільтрація унікальних значень в масиві'}, text:{en: 'This is a function that filters values ​​using the filter and Set methods', ua: 'Це функція, що фільтрує значення за допомогою метода filter та Set'} , link: {en: '#', ua: '#'}, type: 'task', code: 
`const dirtyArray = ['JS', 'TS', 'TS', 'PHP', 'PYTHON', 'TS'] 
let arrayWithUniqueValues = [... new Set(dirtyArray)] 

console.log(arrayWithUniqueValues)`},
  {image: shuffledArray, caption: {en: 'Shuffling elements in an array', ua: 'Переміщення елементів у масиві'}, text: {en: 'This is a function that shuffles all the values ​​in an array through the sort method', ua: 'Це функція, що перемішує усі значення у масиві через метод sort'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`const array = ['JS', 'TS', 'PHP', 'PYTHON', 'Java'] 
const shuffledArray = array.sort( 
  () => Math.random() - 0.5 
) 

console.log(shuffledArray)`},
  {image: falsyValues, caption: {en: 'Falsy values', ua: 'Хибні значення'}, text: {en: 'Invalid values ​​that correspond to false in Boolean format', ua: 'Невірні значення, що у Boolean форматі відповідають false'}, link: {en: 'https://developer.mozilla.org/en/docs/Glossary/Falsy', ua: 'https://developer.mozilla.org/ru/docs/Glossary/Falsy'}, type: 'task', code: 
`const falsyValues = [
  '', 0, null, undefined, NaN, false
]`},
  {image: fibonaccioCycle, caption: {en: 'Fibonaccio cycle', ua: 'Цикл Фібоначчі'}, text: {en: 'This is a cycle in which two previous numbers form the next', ua: 'Це цикл у якому два попередніх числа утворюють наступне'}, link: {en: 'https://www.programiz.com/javascript/examples/fibonacci-series', ua: 'https://www.programiz.com/javascript/examples/fibonacci-series'}, type: 'task', code: 
`function fibonaccioCycle(limit) { 
  let a = 0 
  let b = 1 
  let result = b 
  let out = '' 
  
  while (result < limit) { 
    out += result + ' ' 
    result = a + b 
    a = b 
    b = result 
  } 

  return out 
} 

console.log(fibonaccioCycle(100))`},
  {image: findMaxValue, caption: {en: 'Finding the largest number in an array', ua: 'Знаходження найбільшого числа в масиві'}, text: {en: 'This is a function that finds the largest number in an array using a loop', ua: 'Це функція, що знаходить найбільше число у масиві за допомогою цикла'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`const numberArray = [1, 7, 26, 4, 82, 19] 
function findMaxNumber(array) { 
  let maxNumber = array[0] 
  
  for (const number of array) { 
    if (maxNumber < number) maxNumber = number 
  } 
  return maxNumber 
} 

console.log(findMaxNumber(numberArray))`},
  {image: fizzBuzzTask, caption: {en: 'Finding multiples', ua: 'Пошук кратних'}, text: {en: 'This is a function that finds numbers that are multiples of 3, 5 and 3 and 5 at once', ua: 'Це функціі, що знаходиь числа кратним 3, 5 та 3 і 5 одразу'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`const fizzBuzz = (limit) => { 
  let out = '' 
  
  for (let i = 0; i < limit; i++) { 
    if (i === 0) out = ''
    else if (i % 3 === 0) out += ' fizz' 
    else if (i % 5 === 0) out += ' buzz' 
    else if (i % 3 === 0 && i % 5 === 0) out += ' fizzbuzz' 
    else out += ' ' + i 
  } 
  
  return out 
} 

console.log(fizzBuzz(11)) 
console.log(fizzBuzz(22))`}, 
  {image: letterFinder, caption: {en: 'Search for a letter in a word', ua: 'Пошук букви в слові'}, text: {en: 'This function searches for letters in a word', ua: 'Ця функція шукає букви у слові'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`function letterFinder(word, letter) { 
  let firstCondition = typeof word === 'string' && word.length >= 2 
  let secondCondition = typeof word === 'string' && letter.length === 1
  
  if (firstCondition && secondCondition) { 
    for (let i = 0; i < word.length; i++) { 
      if (word[i] == letter) return 'Letter ' + '"' + letter + '"' + ' found at index ' + i 
      else return 'Letter ' + '"' + letter + '"' + ' not found' 
    } 
  } else return 'Please pass correct arguments to the function' 
}

console.log(letterFinder([], []))
console.log(letterFinder('cat', 'c'))
console.log(letterFinder('cat', 'd'))`}, 
  {image: isEmptyObject, caption: {en: 'Checking the object for emptiness', ua: "Перевірка об'єкта на порожнечу"}, text: {en: 'This function checks the object for void via Object.keys() + .length', ua: 'Ця функція перевіряє об`єкт на порожнечу через Object.keys() + .length'}, link: {en: '#', ua: '#'}, type: 'lifehack', code: 
`function isEmptyObject(object) { 
  return Object.keys(object).length === 0 
} 

let schedule = {} 
console.log(isEmptyObject(schedule)) 

schedule['8:30'] = 'get up' 
console.log(isEmptyObject(schedule))`}, 
  {image: Classes, caption: {en: 'Class', ua: 'Клас'}, text: {en: 'A class is syntactic sugar over JavaScript`s existing prototype inheritance mechanism', ua: 'Клас - це синтаксичний цукор над існуючим у JavaScript механізмом прототипного наслідування'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes'}, type: 'OOP', code: 
`class Vacation { 
  constructor(destination, length) { 
    this.destination = destination
    this.length = length 
  } 
  
  print() { 
    console.log(this.destination + ' will take ' + this.length + ' days') 
  } 
} 

const americanTrip = new Vacation('Santiago', 7) 
americanTrip.print() 

class Expeditions extends Vacation { 
  constructor(destination, length, gear) { 
    super(destination, length) 
    this.gear = gear 
  } 
  
  print() { 
    super.print() 
    console.log( 
      'Bring your ' + this.gear.join(', ')
    ) 
  } 
} 

const africanExpedition = new Expeditions('Mali', 14, ['special suite', 'backpack', 'road map']) 
africanExpedition.print()`},
  {image: banWordsFilter, caption: {en: 'Filtering ban words', ua: 'Фільтрування заборонених слів'}, text: {en: 'This function filters out ban words using the includes method', ua: 'Ця функція фільтрує бан-слова за допомогою метода includes'}, link: {en: '#', ua: '#'}, type: 'lifehack', code: 
`const banWordsArray = [ 
  'JS', 
  'TS', 
  'Java', 
  'Pascal', 
  'C++' 
] 

function banWordsFilter(sentence) { 
  let out = '' 
  let splitedSentence = sentence.split(' ') 
  
  for (const word of splitedSentence) { 
    out += ' ' 
    if (banWordsArray.includes(word)) { 
      for (let i = 0; i < word.length; i++) { 
        out += '*' 
      } 
    } else out += word 
  } return out 
} 
  
console.log(banWordsFilter('Pascal is a dead language'))
console.log(banWordsFilter('The best functional language is Java'))`},
  {image: promise, caption: {en: 'Promise', ua: 'Promise'}, text: {en: 'The Promise object is used for deferred and asynchronous requests', ua: 'Об`єкт Promise використовується для відкладених і ансинхронних запитів'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise'}, type: 'request', code: 
`let usersPromise = new Promise((resolve, reject) => { 
  fetch('https://jsonplaceholder.typicode.com/users') 
    .then(data => { 
      data !== undefined 
        ? resolve(data.json()) 
        : reject(new Error()) 
    }) 
  }
) 
    
let postsPromise = new Promise((resolve, reject) => { 
  fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(data => { 
      data !== undefined 
        ? resolve(data.json()) 
        : reject(new Error()) 
    }) 
  }
) 

Promise.all([usersPromise, postsPromise])
  .then(data => { 
    console.log(data) 
  }
)`},
  {image: fibonaccioCycleV2, caption: {en: 'Fibonaccio cycle v2.0', ua: 'Цикл Фібоначчі v2.0'}, text: {en: 'This is a cycle in which two previous numbers form the next', ua: 'Це цикл у якому два попередніх числа утворюють наступне'}, link: {en: 'https://www.programiz.com/javascript/examples/fibonacci-series', ua: 'https://www.programiz.com/javascript/examples/fibonacci-series'}, type: 'task', code: 
`function fibonaccioCycle(amount) { 
  return new Array(amount).fill(0).reduce( 
    (accumulator, zero, index) => [...accumulator, index < 2 
      ? 1 
      : accumulator[index - 1] + accumulator[index -2]], []).join(' ') 
} 

console.log(fibonaccioCycle(10))`},
  {image: arrayWithUniqueValuesV2, caption: {en: 'Filtering of unique values ​​in the array v2.0', ua: 'Фільтрація унікальних значень в масиві v2.0'}, text: {en: 'This is a function that filters values ​​using the filter and indexOf methods', ua: 'Це функція, що фільтрує значення за допомогою метода filter та indexOf'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`const userArray = [ 
  'Alex', 
  'Mike', 
  'Jane', 
  'Mike', 
  'Alex' 
] 

let uniqueArray = userArray.filter(
  (user, index) => { 
    return index === userArray.indexOf(user) 
  }
) 

console.log(uniqueArray)`},
  {image: arrayWithUniqueValuesV3, caption: {en: 'Filtering of unique values ​​in the array v3.0', ua: 'Фільтрація унікальних значень в масиві v3.0'}, text: {en: 'This is a function that filters values ​​using the reduce and includes method', ua: 'Це функція, що фільтрує значення за допомогою метода reduce та includes'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`const userArray = [ 
  'Alex', 
  'Mike', 
  'Jane', 
  'Mike', 
  'Alex' 
] 

let uniqueArray = userArray.reduce(
  (uniqueUser, user) => { 
    return uniqueUser.includes(user) 
      ? uniqueUser 
      : [...uniqueUser, user] 
  }, []
) 

console.log(uniqueArray)`},
  {image: euclideanAlgorithm, caption: {en: 'Euclid`s algorithm', ua: 'Алгоритм Евкліда'}, text: {en: 'This is a function that finds the lowest common multiple for two numbers', ua: 'Це функція, що знаходить НСК для двух чисел'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`function euclideanAlgorithm(numberOne, numberTwo) { 
  let out = [] 
  
  if (numberOne > numberTwo) { 
    while (numberOne > numberTwo) { 
      numberOne -= numberTwo 
      out.push(numberOne + ' ') 
      while (numberOne < numberTwo) { 
        numberTwo -= numberOne 
        out.push(numberOne + ' ') 
      } 
    } 
  } else if (numberOne < numberTwo) { 
    while (numberOne < numberTwo) { 
      numberTwo -= numberOne 
      out.push(numberOne + ' ') 
      while (numberOne > numberTwo) { 
        numberOne -= numberTwo 
        out.push(numberOne + ' ') 
      } 
    } 
  } else { 
    out = 'Numbers are equal' 
  } 
  
  return out.pop() 
} 

console.log(euclideanAlgorithm(124, 28)) 
console.log(euclideanAlgorithm(18, 24))`},  
  {image: isIsogram, caption: {en: 'Isogram check', ua: 'Перевірка ізограми'}, text: {en: 'This is a function that checks a word for an isogram. That is, whether there are repeated letters in the word', ua: 'Це функція, що перевіряє слово на ізограму. Тобто чи є у слові повторювальні літери'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`function isIsogram(word) { 
  let separatedWord = word.split('') 
  let settedWord = [...new Set(separatedWord)] 
  
  return separatedWord.length === settedWord.length 
} 

console.log(isIsogram('Dermatoglyphics')) 
console.log(isIsogram('moose')) 
console.log(isIsogram('aba'))`},  
  {image: digitalClock, caption: {en: 'Digital clock', ua: 'Цифровий годинник'}, text: {en: 'An interactive clock made using setInterval()', ua: 'Інтерактивний годинник, котрий зроблений за допомогою setInterval()'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`<!DOCTYPE html> 
<html lang="en"> 
<head> 
  <meta charset="UTF-8"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Document</title> 
</head> 
<body> 
  <div class="clock"></div> 
  <script> setInterval(() => { 
    let date = new Date() 
    const clock = document.querySelector(".clock") 
    clock.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() 
  }) 
</script> 
</body> 
</html>`},  
  {image: switchCase, caption: {en: 'switch', ua: 'switch'}, text: {en: 'switch is a loop that compares expressions with the cases listed in its environment and then issues the corresponding statement', ua: 'switch - це цикл, що зрівнює вирази з випадками, перерахованими у середені її, а потім випонює відповідне інструкції'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch'}, type: 'cycle', code: 
`function getDirection(language) { 
  switch (language) { 
    case 'JS': 
    case 'TS': 
      return 'FrontEnd' 
      break 
    case 'C#': 
      return 'BackEnd' 
      break 
    case 'Python': 
      return 'Data Science' 
      break 
    default: 
      return 'Language is undefind' 
  } 
} 

console.log(getDirection('JS')) 
console.log(getDirection('Python')) 
console.log(getDirection('Dart'))`},
  {image: reactSearchPattern, caption: {en: 'React Search Pattern', ua: 'Зразок (паттерн) Пошуковику у Реакт'}, text: {en: 'This design pattern provides a search input where an event is passed through the onChange() attribute, i.e. the letters to search for. Next, these letters go to useState(), which is used to process the search query', ua: 'Цей паттерн проєктування передбачає пошуковий інпут куди через атрибут onChange() передається подію, тобто літери для пошуку. Далі ці літери переходять до useState() з допомогою якого і робиться оброблення пошукового запиту'}, link: {en: '#', ua: '#'}, type: 'React', code: 
`import {useState} from 'react' 

const Filter = ({content = []}) => { 
  const [value, setValue] = useState('') 
  const filteredContent = content.filter( 
    item => { 
      return item.caption.toLowerCase().includes(value.toLowerCase()) 
    } 
  ) 
  
  return ( 
    <div className='Filter'> 
      <input 
        type='text' 
        onChange={(event) => setValue(event.target.value)} 
      /> 
      
      <div className='output'> 
        <ul> 
          {filteredContent.length === 0 
            ? <h4>Nothing has found</h4> 
            : filteredContent.map( item => <li key={item.caption}>{item.caption} {item.text}</li> 
          )} 
        </ul> 
      </div> 
    </div> 
  ) 
} 

export default Filter`},
  {image: categoryReactPattern, caption: {en: 'React Categories Pattern', ua: 'Зарозок (паттерн) Категорій у Реакт'}, text: {en: 'This design pattern provides a set of various buttons that can change categories. This is all done using useState(), where the initial index of the standard category is written', ua: 'Цей паттерн проєктування передабачає набір різноманітних кнопок, що можуть змінювати категорії. Це все проходить за допомогою useState(), куди записуються початковий індекс стандартної катергорії'}, link: {en: '#', ua: '#'}, type: 'React', code: 
`import {useState} from 'react' 
import './Categories.css' 

const categories = [ 
  'all', 
  'filter', 
  'map', 
  'reduce' 
] 

const Categories = ({content = []}) => { 
  const [activeCategory, setActiveCategory] = useState(0) 
  const categoriesButtons = categories.map( 
    (item, index) => 
      <button 
        key={item} 
        className={activeCategory === index 
          ? 'active' 
          : ''} 
        onClick={() => setActiveCategory(index)} 
      > 
      {item} 
      </button> 
  ) 

  const categoriedContent = content.filter( 
    contentItem => { 
      if (activeCategory === 0) return contentItem 
      if (categories[activeCategory] === contentItem.category) return true 
    } 
  ) 
  
  return ( 
    <div className="Categories"> 
      <div className="categories-buttons"> {categoriesButtons} </div> 
      <div className="output"> 
        {categoriedContent.map( 
          item => <h2 key={item.category}>{item.text}</h2> 
        )} 
      </div> 
    </div> 
  )
}

export default Categories`},

  {image: useEffectWithAllArgs, caption: {en: 'All about useEffect()', ua: 'Все про UseEffect()'}, text: {en: 'An effect hook allows you to perform side effects in a functional component', ua: 'Хук ефектів дозволяє виконувати побічні ефекти у функціональному компоненті'}, link: {en: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/', ua: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/'}, type: 'React', code: 
`
// componentDidMount
useEffect(() => {
  console.log('components did mount')
}, [])

// componentDidUpdate (only for currentVariable)
useEffect(() => {
  console.log('currentVariable did update')
}, [currentVariable])

// componentDidUpdate (for all components)
useEffect(() => {
  console.log('components did update')
})

// componentDidMount + componentWillUnmount
useEffect(() => {
  console.log('component did mount')
  return () => {
    console.log('component will unmount')
  }
}, [])`},

{image: gettingInfoFromApi, caption: {en: 'Getting info from API', ua: 'Отримуємо інформацію з API серверу'}, text: {en: 'UseState() and useEffect() can be used to retrieve information from the API and record its state for future use', ua: 'За допомогою useState() та useEffect() можно отримати інформацію з API та записати її state для майбутнього використовування'}, link: {en: '#', ua: '#'}, type: 'React', code: 
`
import {useState, useEffect} from 'react'

const UserList = () => {
    let [users, setUsers] = useState([])
    useEffect(() => getUsers, [])

    const getUsers = () => {
        let link = 'https://jsonplaceholder.typicode.com/users'
        fetch(link)
        .then((response) => {
            return response.json()
        })
        .then((response) => setUsers(response))
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UserList`},

{image: gettingInfoFromApiKY, caption: {en: 'Getting info from API by KY.js library', ua: 'Отримуємо інформацію з API серверу за допомогою KY.js бібліотеки'}, text: {en: 'UseState() and useEffect() can be used to retrieve information from the API and record its state for future use. And the information itself can be taken using the KY.js library', ua: 'За допомогою useState() та useEffect() можно отримати інформацію з API та записати її state для майбутнього використовування. А саму інформацію можно взяти за допомогою бібліотеки KY.js'}, link: {en: 'https://github.com/sindresorhus/ky', ua: 'https://github.com/sindresorhus/ky'}, type: 'React', code: 
`
import {useState, useEffect} from 'react'
import ky from 'ky'

const api = ky.create({
    prefixUrl: "https://jsonplaceholder.typicode.com/"
})

const UserListKY = () => {
    const [users, setUsers] = useState([])
    useEffect(() => getUsers, [])

    async function getUsers () {
        try {
            const arrayOfUsers = await api.get('users').json()
            setUsers(arrayOfUsers)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users by KY</button>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UserListKY`},

{image: [rrt_input_1, rrt_input_2, rrt_input_3, rrt_input_4, rrt_input_5, rrt_input_6], caption: {en: 'React Redux-Toolkit mini form app', ua: 'Робимо міні проект Форми за допомогою біліотеки Реакт Redux-Toolkit'}, text: {en: 'This is a small project that uses Redux-Toolkit technology. This project represents input (where something is written) with output (where something is output)', ua: 'Це маленький проект, де використовується технологія Redux-Toolkit. Цей проект представляє input (куди пишуть щось) з output (куди виводять щось)'}, link: {en: 'https://redux.js.org/', ua: 'https://redux.js.org/'}, type: 'React', code: [
`
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'

import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
`,
`
import Input from './components/Input'
import Output from './components/Output'

const App = () => {
  return (
    <div>
      <Input />
      <Output />
    </div>
  )
}

export default App`,
`
import {configureStore} from '@reduxjs/toolkit'
import TextReducer from './TextSlice'

export default configureStore({
    reducer: {
        text: TextReducer
    }
})`,
`
import {createSlice} from '@reduxjs/toolkit'
export const TextSlice = createSlice({
    name: 'text',
    initialState: {
        value: ''
    },
    reducers: {
        textAdditor: (state, action) => {
            return {...state, value: action.payload}
        }
    }
})

export const {textAdditor} = TextSlice.actions
export const selectText = state => state.text.value
export default TextSlice.reducer`,
`
import {createRef} from 'react'
import {useDispatch} from 'react-redux'
import {textAdditor} from '../store/TextSlice'

const Input = () => {
    const textInput = createRef()
    const dispatch = useDispatch()

    function addText() {
        dispatch(textAdditor(textInput.current.value))
    }

    return (
        <div>
            <input type="text" ref={textInput} />        
            <button onClick={addText}>Push</button>
        </div>
    )
}

export default Input`,
`
import {useSelector} from "react-redux"

const Output = () => {
    const value = useSelector(state => state.text.value)
    return (
        <div>
            {value}
        </div>
    )
}

export default Output`,
]},

{image: props_destructurization, caption: {en: 'React props destructurization', ua: "Деструктурізація props об'єктів у Реакті"}, text: {en: 'Destructuring props objects in React is a very important part. Destructuring is used to make the code easier to read', ua: "Деструктурізація props об'єктів у Реакті дуже важлива частина. Щоб полегшити читабельність коду застосовують деструктурізацію"}, link: {en: 'https://reactpatterns.com/', ua: 'https://reactpatterns.com/'}, type: 'React', code: 
`
// <Destructurization skills={['Frontend', 'DevOps', 'Project Manager]} id='1' name='Alex' />
const Destructurization = ({skills, ...userInfo}) => {
  return <ul><li>{userInfo.id}. {userInfo.name} is a {skills.join(', ')} developer</li></ul>
}

export default Destructurization`
},

{image: conditional_rendering, caption: {en: 'Conditional rendering', ua: 'Умовний рендеринг'}, text: {en: 'Conditional rendering is a special syntax in React, where there are conditions under which it is possible to adjust the rendering of individual parts of the code', ua: 'Умовний рендеринг - це спеціальний синтаксис у Реакті, де є умови при яких можливо регулювати рендеринг окремих частин коду'}, link: {en: 'https://reactpatterns.com/', ua: 'https://reactpatterns.com/'}, type: 'React', code: 
`
const ConditionalRendering = () => {
  return (
      <div>
          {5 > 3 && <span>Rendered when 'truthy'</span>} {/* if */}
          {5 < 3 || <span>Rendered when 'falsy'</span>} {/* unless */}
          {
              5 > 3 
                  ? (<span>Rendered when 'truthy'</span>) // if
                  : (<span>Rendered when 'falsy'</span>) // else
          }
          {
              5 < 3
                  ? (<span>Rendered when 'truthy'</span>) // if
                  : (<span>Rendered when 'falsy'</span>) // else
          }
      </div>
  )
}

export default ConditionalRendering`
},

{image: discriminant_formula, caption: {en: 'Discriminant Formula', ua: 'Формула Дискримінанту'}, text: {en: 'The function for finding the roots of a quadratic equation using the Discriminant Formula is made using the methods of the Math class. Namely Math.pow() - power (numbers), Math.sqrt() - root (numbers)', ua: 'Функція для знаходження коренів квадратного рівняння за допомогою Формула Дискримінанту зробленна за допомогою методів класа Math. А саме Math.pow() - степінь(числа), Math.sqrt() - корінь(числа)'}, link: {en: 'https://en.wikipedia.org/wiki/Discriminant', ua: 'https://uk.wikipedia.org/wiki/%D0%94%D0%B8%D1%81%D0%BA%D1%80%D0%B8%D0%BC%D1%96%D0%BD%D0%B0%D0%BD%D1%82'}, type: 'task', code: 
`
function discriminantFormula(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c
  let x1
  let x2

  if (D < 0) {
      return 'x1 = ∅; x2 = ∅'
  } 
  
  else {
      x1 = (-b + Math.sqrt(D, 2)) / (2 * a)
      x2 = (-b - Math.sqrt(D, 2)) / (2 * a)
      return "x1 = " + x1 + "; x2 = " + x2
  }
}

console.log(discriminantFormula(1, -6, 5))
console.log(discriminantFormula(1, -0, 5))`},

{image: node_email_sender, caption: {en: 'Email sender on Node.js', ua: 'Відправник на електронну пошту на Node.js'}, text: {en: 'This program uses the nodemailer library, which helps to easily send information to e-mail', ua: 'Ця програма застосовую бібліотеку nodemailer, котра допомогає легко відсилати інформацію на електронну пошту'}, link: {en: 'https://github.com/nodemailer/nodemailer', ua: 'https://github.com/nodemailer/nodemailer'}, type: 'Node.js', code: 
`
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'you@example.com',
        pass: 'your_password'
    }
})

const mailOptions = {
    from: 'you@example.com',
    to: 'user@example.com',
    subject: 'Title',
    text: 'Email content'
}

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
})`},

{image: includesMethod, caption: {en: 'Array.prototype.includes()', ua: 'Array.prototype.includes()'}, text: {en: 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate', ua: 'Метод includes() визначає, чи містить масив певне значення серед своїх записів, повертаючи true або false відповідно'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes'}, type: 'method', code: 
`
const array = [1, 4, 'hello', 77, 'WoRld']

console.log(array.includes(4))
console.log(array.includes('hello'))
console.log(array.includes('world'))
console.log(array.includes('WoRld'))

const string = 'helloWorld'

console.log(array.includes('hello'))
console.log(array.includes('world'))`},
]

const languages = [
  'en',
  'ua'
]

function App() {
  const [activeLanguage, setActiveLanguage] = useState(0)
    
  const languageButtons = languages.map(
      (language, index) => 
          <button 
              className={activeLanguage === index ? `language-button selected` : 'language-button'} 
              key={language} 
              onClick={() => setActiveLanguage(index)}
          >
              {language}
          </button>
  )
  return (
    <div className="App">
      <Router>
        <Header activeLanguage={activeLanguage}/>
        <div className="language-option">
          {languageButtons}
        </div>
        <Routes>
          <Route exact path="/" element={<Main content={content} activeLanguage={activeLanguage}/>}/>
          <Route path="/aboutus" element={<AboutUs activeLanguage={activeLanguage}/>}/>
        </Routes>
      </Router>
      <ScrollToTop
       smooth
       viewBox="0 0 32 32"
       svgPath="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z" 
      />
    </div>
  );
}

export default App;
