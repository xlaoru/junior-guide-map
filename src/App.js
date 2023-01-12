import './App.css';
import Filter from './components/Filter';
import AboutUs from './components/AboutUs';
import Header from './components/Header';

import ScrollToTop from "react-scroll-to-top";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import filterMethod from './images/filter.png'
import mapMethod from './images/map.png'
import reduceMethod from './images/reduce.png'
import forEachMethod from './images/forEach.png'
import indexOfMethod from './images/indexOf.png'
import keysMethod from './images/keys.png'
import splitMethod from './images/split.png'
import spreadOperator from './images/spread.png'
import callbackFunction from './images/callback.png'
import closureFunction from './images/closure.png'
import recursionFunction from './images/recursion.png'
import doWhileCycle from './images/do while.png'
import forInForOfCycle from './images/for in for of.png'
import whileCycle from './images/while.png'
import ternaryExpressions from './images/ternary-expressions.png'
import isEqualLength from './images/is-equal-length.png'
import fetchRequest from './images/fetch.png'
import randomNumber from './images/random-number.png'
import arrayWithoutEmptyStrings from './images/array-without-empty-strings.png'
import arrayWithUniqueValues from './images/array-with-unique-values.png'
import shuffledArray from './images/shuffled-array.png'
import falsyValues from './images/falsy-values.png'
import fibonaccioCycle from './images/fibonaccio-cycle.png'
import findMaxValue from './images/find-max-number.png'
import fizzBuzzTask from './images/fizz-buzz-task.png'
import letterFinder from './images/letter-finder.png'
import isEmptyObject from './images/is-empty-object.png'
import Classes from './images/classes.png'
import banWordsFilter from './images/ban-words-filter.png'
import promise from './images/promise.png'
import arrayWithUniqueValuesV2 from './images/array-with-unique-values_v2.0.png'
import fibonaccioCycleV2 from './images/fibonaccio-cycle_v2.0.png'
import arrayWithUniqueValuesV3 from './images/array-with-unique-values_v3.0.png'
import euclideanAlgorithm from './images/euclidean-algorithm.png'
import isIsogram from './images/is-isogram.png'
import digitalClock from './images/digital-clock.jpg'
import switchCase from './images/switch-case.png'
import reactSearchPattern from './images/search-pattern_react.png'
import categoryReactPattern from './images/categories-pattern_react.png'
import useEffectWithAllArgs from './images/useEffectWithAllArgs.png'
import gettingInfoFromApi from './images/gettingInfoFromApi.png'

const content = [
  {image: filterMethod, caption: 'filter', text: {ua: 'filter - це метод, що створює новий унікальний масив з чіткими критеріями на основі обранного масиву', en: 'filter is a method that creates a new unique array with specific criteria based on the selected array'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter', type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let filteredArray = array.filter(
  language => {
    if (language.length === 2) return true
  }
) 

console.log(filteredArray)`},
  {image: mapMethod, caption: 'map', text: {ua: 'map - це метод, що створює новий унікальний массиву з якимись чіткими змінами у ньому', en: 'map is a method that creates a new unique array with some distinct changes in it'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map', type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let mappedArray = array.map( 
  language => { 
    return language + ':)' 
  }
) 

console.log(mappedArray)`},
  {image: reduceMethod, caption: 'reduce', text: {ua: 'reduce - це метод, що застосовує чіткий критерій (reducer) до кожного елементу масиву та повертає одне резултативне кінцеве значення', en: 'reduce is a method that applies an explicit criterion (reducer) to each array element and returns a single resulting final value'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce', type: 'method', code: 
`const array = [1, 2, 3, 4, 5] 
const total = array.reduce( 
  (accumulator, element) => { 
    return accumulator + element 
  }
) 

console.log(total)`},
  {image: forEachMethod, caption: 'forEach', text: {ua: 'forEach - це метод, що виповнює чітку змінну для кожного елементу масиву', en: 'forEach is a method that populates a distinct variable for each array element'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach', type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let forEachedArray = array.forEach( 
  language => console.log(language + ' :)') 
) 

console.log(forEachedArray)`},
  {image: indexOfMethod, caption: 'indexOf', text: {ua: 'indexOf - це метод, що шукає найблищий індекс item`а, котрий ви шукаєте', en: 'indexOf is a method that finds the closest index of the item you are looking for'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf', type: 'method', code: 
`const array = [1, 2, 3, 4, 5] 
console.log(array.indexOf(2, 0))`},
  {image: keysMethod, caption: 'keys', text: {ua: 'keys - це метод, що показую усі ключі об`єкта чи массива', en: 'keys is a method that shows all the keys of an object or array'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys', type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
const object = { 
  1: 'JS', 
  2: 'TS', 
  3: 'C#', 
  4: 'Java' 
} 

console.log(Object.keys(array)) 
console.log(Object.keys(object))`},
  {image: splitMethod, caption: 'split', text: {ua: 'split - це метод, що перетворює строку у масив', en: 'split is a method that converts a string into an array'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split', type: 'method', code: 
`let string = 'Hello World' 
let splitedString = string.split(' ') 

console.log(splitedString)`},
  {image: spreadOperator, caption: 'spread', text: {ua: 'spread (...) - це оператор, що дозволяє розширити доступні для ітерації елементи', en: 'spread (...) is an operator that allows you to expand the elements available for iteration'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax', type: 'operator', code: 
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
  {image: callbackFunction, caption: 'callback', text: {ua: 'callback - це функція, котру передають у якості аргументу до (наприклад) іншої функції. Далі цю callback функцію використовують (наприклад), як вивиодження якоїсь інформації у консоль', en: 'callback is a function that is passed as an argument to (for example) another function. Further, this callback function is used (for example) as outputting some information to the console'}, link: 'https://developer.mozilla.org/ru/docs/Glossary/Callback_function', type: 'function', code: 
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
  {image: closureFunction, caption: 'closure', text: {ua: 'Замикання - це створення локальної функції в інщій функції для подалих використовувань її з даними', en: 'Closure is the creation of a local function in another function for later use of it with data'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures#:~:text=%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B8,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%2C%20%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%20%D0%B5%D1%91%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.', type: 'function', code: 
`function init() {
  let name = 'Name' 
  function showName() { 
    console.log(name) 
  } 
  
  showName() 
} 

init()`},
  {image: recursionFunction, caption: 'recursion', text: {ua: 'Рекурсія - це виклик функції у собі', en: 'Recursion is a function call to itself'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Errors/Too_much_recursion', type: 'function', code: 
`let num = 0 
function init() { 
  num ++  
  console.log(num)  
  if (num === 100) return  
  init() 
} 

init()`},
  {image: doWhileCycle, caption: 'do while', text: {ua: 'do... while - це цикл, дуже схожий на цикл while, але з іншим синстаксисом. Ідея полягає в тому, що цикл буде повторюватися поки умова не буде значенням true', en: 'do... while is a loop very similar to the while loop, but with a different syntax. The idea is that the loop will repeat until the condition is not true'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while', type: 'cycle', code: 
`let result = '' 
let i = 0 
do { 
  i++ 
  result = result + i 
} while (i < 5) 

console.log(result)`},
  {image: forInForOfCycle, caption: 'for in / for of', text: {ua: 'Різниця між `for in` і `for of` полягая в тому, що for in відповідає за індекси, а for of відповідає за значення', en: 'The difference between `for in` and `for of` is that for in is responsible for indexes and for of is responsible for values'}, link: '#', type: 'cycle', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
for (const index in array) { 
  console.log(index) 
} 

for (const value of array) { 
  console.log(value) 
}`},
  {image: whileCycle, caption: 'while', text: {ua: 'while - це цикл, буде повторюватися поки умова не буде значенням true', en: 'while is a loop that will repeat until the condition is not true'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while', type: 'cycle', code: 
`let i = 0 
while (i <= 3) { 
  console.log(i) 
  i++ 
}`},
  {image: ternaryExpressions, caption: 'Ternary expressions', text: {ua: 'Тернарні вирази - це лаконічна заміна умови if/else', en: 'Ternary expressions are a concise replacement of the if/else condition'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator', type: 'operator', code: 
`function isEqual(string1, string2) { 
  let out = '' 

  string1.length === string2.length 
    ? out = 'strings are equal' 
    : out = 'strings are not equal' 

  return out 
} 

console.log(isEqual('hello', 'world')) 
console.log(isEqual('bye', 'world'))`},
  {image: isEqualLength, caption: 'length', text: {ua: 'length - це метод, що показую довжину масиву', en: 'length is a method that displays the length of the array'}, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length', type: 'method', code: 
`function isBigger(string1, string2) { 
  return string1.length === string2.length 
} 

console.log(isBigger('hello', 'world')) 
console.log(isBigger('bye', 'world'))`},
  {image: fetchRequest, caption: 'fetch', text: {ua: 'fetch - це запит на сервер', en: 'fetch is a request to the server'}, link: 'https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch', type: 'request', code: 
`function getUsers() { 
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { 
      return response.json() 
    })
    .then(data => data.forEach(user => console.log((user.name)))) 
} 
  
getUsers()`},
  {image: randomNumber, caption: 'Math.floor + Math.random', text: {ua: 'floor - це метод Math, котрий округлює число до найблищого меньшого цілого числа. random - це метод Math, котрий допомагає знайти випадкове число в конкретному діапазоні', en: 'floor is a Math method that rounds a number to the nearest smaller integer. random is a Math method that helps find a random number in a specific range'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random', type: 'exercise', code: 
`function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min) 
} 

console.log(randomNumber(0, 10)) 
console.log(randomNumber(12, 99))`},
  {image: arrayWithoutEmptyStrings, caption: 'Filtering empty strings from the array', text: {ua: 'Це функція, що знаходить усі неправильні (false) значення за допомогою методу filter та значення Boolean', en: 'This is a function that finds all false values ​​using the filter method and a Boolean value'}, link: '#', type: 'exercise', code: 
`const dirtyArray = ['JS', '', 'TS', '', '', 'PHP'] 
const clearArray = dirtyArray.filter(Boolean) 

console.log(clearArray)`},
  {image: arrayWithUniqueValues, caption: 'Filtering of unique values ​​in the array', text:{ua: 'Це функція, що фільтрує значення за допомогою метода filter та Set', en: 'This is a function that filters values ​​using the filter and Set methods'} , link: '#', type: 'exercise', code: 
`const dirtyArray = ['JS', 'TS', 'TS', 'PHP', 'PYTHON', 'TS'] 
let arrayWithUniqueValues = [... new Set(dirtyArray)] 

console.log(arrayWithUniqueValues)`},
  {image: shuffledArray, caption: 'Shuffling elements in an array', text: {ua: 'Це функція, що перемішує усі значення у масиві через метод sort', en: 'This is a function that shuffles all the values ​​in an array through the sort method'}, link: '#', type: 'exercise', code: 
`const array = ['JS', 'TS', 'PHP', 'PYTHON', 'Java'] 
const shuffledArray = array.sort( 
  () => Math.random() - 0.5 
) 

console.log(shuffledArray)`},
  {image: falsyValues, caption: 'Falsy values', text: {ua: 'Невірні значення, що у Boolean форматі відповідають false', en: 'Invalid values ​​that correspond to false in Boolean format'}, link: 'https://developer.mozilla.org/ru/docs/Glossary/Falsy', type: 'exercise', code: 
`const falsyValues = [
  '', 0, null, undefined, NaN, false
]`},
  {image: fibonaccioCycle, caption: 'Fibonaccio cycle', text: {ua: 'Це цикл у якому два попередніх числа утворюють наступне', en: 'This is a cycle in which two previous numbers form the next'}, link: 'https://www.programiz.com/javascript/examples/fibonacci-series', type: 'exercise', code: 
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
  {image: findMaxValue, caption: 'Finding the largest number in an array', text: {ua: 'Це функція, що знаходить найбільше число у масиві за допомогою цикла', en: 'This is a function that finds the largest number in an array using a loop'}, link: '#', type: 'exercise', code: 
`const numberArray = [1, 7, 26, 4, 82, 19] 
function findMaxNumber(array) { 
  let maxNumber = array[0] 
  
  for (const number of array) { 
    if (maxNumber < number) maxNumber = number 
  } 
  return maxNumber 
} 

console.log(findMaxNumber(numberArray))`},
  {image: fizzBuzzTask, caption: 'Finding multiples', text: {ua: 'Це функціі, що знаходиь числа кратним 3, 5 та 3 і 5 одразу', en: 'This is a function that finds numbers that are multiples of 3, 5 and 3 and 5 at once'}, link: '#', type: 'exercise', code: 
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
  {image: letterFinder, caption: 'Search for a letter in a word', text: {ua: 'Ця функція шукає букви у слові', en: 'This function searches for letters in a word'}, link: '#', type: 'exercise', code: 
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
  {image: isEmptyObject, caption: 'Checking the object for emptiness', text: {ua: 'Ця функція перевіряє об`єкт на порожнечу через Object.keys() + .length', en: 'This function checks the object for void via Object.keys() + .length'}, link: '#', type: 'lifehack', code: 
`function isEmptyObject(object) { 
  return Object.keys(object).length === 0 
} 

let schedule = {} 
console.log(isEmptyObject(schedule)) 

schedule['8:30'] = 'get up' 
console.log(isEmptyObject(schedule))`}, 
  {image: Classes, caption: 'Class', text: {ua: 'Клас - це синтаксичний цукор над існуючим у JavaScript механізмом прототипного наслідування', en: 'A class is syntactic sugar over JavaScript`s existing prototype inheritance mechanism'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes', type: 'OOP', code: 
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
  {image: banWordsFilter, caption: 'Filtering ban words', text: {ua: 'Ця функція фільтрує бан-слова за допомогою метода includes', en: 'This function filters out ban words using the includes method'}, link: '#', type: 'lifehack', code: 
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
  {image: promise, caption: 'Promise', text: {ua: 'Об`єкт Promise використовується для відкладених і ансинхронних запитів', en: 'The Promise object is used for deferred and asynchronous requests'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise', type: 'request', code: 
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
  {image: fibonaccioCycleV2, caption: 'Fibonaccio cycle v2.0', text: {ua: 'Це цикл у якому два попередніх числа утворюють наступне', en: 'This is a cycle in which two previous numbers form the next'}, link: 'https://www.programiz.com/javascript/examples/fibonacci-series', type: 'exercise', code: 
`function fibonaccioCycle(amount) { 
  return new Array(amount).fill(0).reduce( 
    (accumulator, zero, index) => [...accumulator, index < 2 
      ? 1 
      : accumulator[index - 1] + accumulator[index -2]], []).join(' ') 
} 

console.log(fibonaccioCycle(10))`},
  {image: arrayWithUniqueValuesV2, caption: 'Filtering of unique values ​​in the array v2.0', text: {ua: 'Це функція, що фільтрує значення за допомогою метода filter та indexOf', en: 'This is a function that filters values ​​using the filter and indexOf methods'}, link: '#', type: 'exercise', code: 
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
  {image: arrayWithUniqueValuesV3, caption: 'Filtering of unique values ​​in the array v3.0', text: {ua: 'Це функція, що фільтрує значення за допомогою метода reduce та includes', en: 'This is a function that filters values ​​using the reduce and includes method'}, link: '#', type: 'exercise', code: 
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
  {image: euclideanAlgorithm, caption: 'Euclid`s algorithm', text: {ua: 'Це функція, що знаходить НСК для двух чисел', en: 'This is a function that finds the lowest common multiple for two numbers'}, link: '#', type: 'exercise', code: 
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
  {image: isIsogram, caption: 'Isogram check', text: {ua: 'Це функція, що перевіряє слово на ізограму. Тобто чи є у слові повторювальні літери', en: 'This is a function that checks a word for an isogram. That is, whether there are repeated letters in the word'}, link: '#', type: 'exercise', code: 
`function isIsogram(word) { 
  let separatedWord = word.split('') 
  let settedWord = [...new Set(separatedWord)] 
  
  return separatedWord.length === settedWord.length 
} 

console.log(isIsogram('Dermatoglyphics')) 
console.log(isIsogram('moose')) 
console.log(isIsogram('aba'))`},  
  {image: digitalClock, caption: 'Digital clock', text: {ua: 'Інтерактивний годинник, котрий зроблений за допомогою setInterval()', en: 'An interactive clock made using setInterval()'}, link: '#', type: 'exercise', code: 
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
  {image: switchCase, caption: 'switch', text: {ua: 'switch - це цикл, що зрівнює вирази з випадками, перерахованими у середені її, а потім випонює відповідне інструкції', en: 'switch is a loop that compares expressions with the cases listed in its environment and then issues the corresponding statement'}, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch', type: 'cycle', code: 
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
  {image: reactSearchPattern, caption: 'React Search Pattern', text: {ua: 'Цей паттерн проєктування передбачає пошуковий інпут куди через атрибут onChange() передається подію, тобто літери для пошуку. Далі ці літери переходять до useState() з допомогою якого і робиться оброблення пошукового запиту', en: 'This design pattern provides a search input where an event is passed through the onChange() attribute, i.e. the letters to search for. Next, these letters go to useState(), which is used to process the search query'}, link: '#', type: 'React Pattern', code: 
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
  {image: categoryReactPattern, caption: 'React Categories Pattern', text: {ua: 'Цей паттерн проєктування передабачає набір різноманітних кнопок, що можуть змінювати категорії. Це все проходить за допомогою useState(), куди записуються початковий індекс стандартної катергорії', en: 'This design pattern provides a set of various buttons that can change categories. This is all done using useState(), where the initial index of the standard category is written'}, link: '#', type: 'React Pattern', code: 
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
  ); 
}; 

export default Categories;`},

  {image: useEffectWithAllArgs, caption: 'All about useEffect', text: {ua: 'Хук ефекту дозволяє вам виконувати побічні ефекти в функціональному компоненті', en: 'An effect hook allows you to perform side effects in a functional component'}, link: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/', type: 'React Pattern', code: 
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

{image: gettingInfoFromApi, caption: 'Getting info from API', text: {ua: 'За допомогою useState() та useEffect() можно отримати інформацію з API та записати її state для майбутнього використовування', en: 'UseState() and useEffect() can be used to retrieve information from the API and record its state for future use'}, link: '#', type: 'React Pattern', code: 
`
import {useState, useEffect} from 'react';

const GettingInfoFromApi = () => {
  let [users, setUsers] = useState([])

  useEffect (() => getUsers, [])

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
      <button onClick={getUsers}>users</button>
      <ul>
        {users.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default GettingInfoFromApi;`},
]

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Filter content={content}/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
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
