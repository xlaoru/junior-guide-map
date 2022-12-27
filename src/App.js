import './App.css';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Header from './components/Header';

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
import isIsogram from './images/is-isogram.jpg'

const content = [
  {image: filterMethod, caption: 'filter', text: 'Filter - создание нового массива + выбор / фильтрация элемента и удаление его (с разной длинной)', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter', type: 'method', code: "const array = ['JS', 'TS', 'C#', 'Java'] let filteredArray = array.filter(language => {if (language.length === 2) return true}) console.log(filteredArray)"},
  {image: mapMethod, caption: 'map', text: 'Map - создание нового массива на основе выбранного (с одинаковой длинной)', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map', type: 'method', code: "const array = ['JS', 'TS', 'C#', 'Java'] let mappedArray = array.map( language => { return language + ':)' } ) console.log(mappedArray)"},
  {image: reduceMethod, caption: 'reduce', text: 'Reduce - метод, который применяет функцию reducer() к каждому элементу массива, возвращая одно результирующее значение ', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce', type: 'method', code: "const array = [1, 2, 3, 4, 5] const total = array.reduce( (accumulator, element) => { return accumulator + element }) console.log(total)"},
  {image: forEachMethod, caption: 'forEach', text: 'ForEach - метод, который выполняет указанную функцию один раз для каждого элемента в массиве', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach', type: 'method', code: "const array = ['JS', 'TS', 'C#', 'Java'] let forEachedArray = array.forEach( language => console.log(language + ' :)') ) console.log(forEachedArray)"},
  {image: indexOfMethod, caption: 'indexOf', text: 'indexOf - метод, который ищет ближайший индекс item`а, который вы ищете', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf', type: 'method', code: "const fiboArray = [1, 1, 2, 3, 5, 8] console.log(fiboArray.indexOf(2, 0))"},
  {image: keysMethod, caption: 'keys', text: 'Keys - метод, который показывает все ключи объекта или массива', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys', type: 'method', code: "const array = ['JS', 'TS', 'C#', 'Java'] const object = { 1: 'JS', 2: 'TS', 3: 'C#', 4: 'Java' } console.log(Object.keys(array)) console.log(Object.keys(object))"},
  {image: splitMethod, caption: 'split', text: 'Split - метод, который превращает строку в массив', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split', type: 'method', code: "let string = 'Hello World' let splitedString = string.split(' ') console.log(splitedString)"},
  {image: spreadOperator, caption: 'spread', text: 'Spread - синтаксис, который позволяет расширять доступные для итерации элементы', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax', type: 'operator', code: "const array = [1, 1, 2, 3, 5, 8] const object = {name: 'Alex', age: '20'} const string = 'Hello World' const newArray = [...array, 13, 21, 34, 55] const newObject = {...object, skills: ['Dev']} const newStringArray = [...string] function multiply(a, b) { return a * b } let numbers = [2, 3] console.log(newArray) console.log(newObject) console.log(newStringArray) console.log(multiply(...numbers))"},
  {image: callbackFunction, caption: 'callback', text: 'Callback-функция - функция, которую передают в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия', link: 'https://developer.mozilla.org/ru/docs/Glossary/Callback_function', type: 'function', code: "function: getUsers(callback) { fetch('https://jsonplaceholder.typicode.com/users')  .then((response) => { return response.json() })  .then((data) => { callback(data) }) } function showUsers(data) { data.forEach(user => console.log(user.name)) } getUsers(showUsers)"},
  {image: closureFunction, caption: 'closure', text: 'Замыкание - создание функции внутри другой функции для дальнейших манипуляций ею с локальными данными (из "внешний" функции)', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures#:~:text=%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B8,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%2C%20%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%20%D0%B5%D1%91%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.', type: 'function', code: "function init() { let name = 'Name' function showName() { console.log(name) } showName() } init()"},
  {image: recursionFunction, caption: 'recursion', text: 'Рекурсия - вызов функции в себе же', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Errors/Too_much_recursion', type: 'function', code: "let num = 0 function init() { num ++  console.log(num)  if (num === 100) return  init() } init()"},
  {image: doWhileCycle, caption: 'do while', text: 'Do... While - почти тот же самый цикл While, но с другим синтаксисом', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while', type: 'cycle', code: "let result = '' let i = 0 do { i++ result = result = i } while (i < 5) console.log(result)"},
  {image: forInForOfCycle, caption: 'for in / for of', text: 'Разница между "for in" и "for of". for in => индексы. for of => значения', link: '#', type: 'cycle', code: "const array = ['JS', 'TS', 'C#', 'Java'] for (const index in array) { console.log(index) } for (const value of array) { console.log(value) }"},
  {image: whileCycle, caption: 'while', text: 'While - цикл, который делает действие до того момента, пока условие остаётся FALSE', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while', type: 'cycle', code: "let i = 0 while (i <= 3) { console.log(i) i++ }"},
  {image: ternaryExpressions, caption: 'Тернарые выражения', text: 'Условный (тернарный) оператор - краткая замена if/else, которая часто встречается в React. Пример: условие ? выражение1 : выражение2', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator', type: 'operator', code: "function isEqual(string1, string2) { let out = '' string1.length === string2.length ? out = 'strings are equal' : out = 'strings are not equal' return out } console.log(isEqual('hello', 'world')) console.log(isEqual('bye', 'world'))"},
  {image: isEqualLength, caption: 'length', text: 'Length - метод, который показывает длину массива', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length', type: 'method', code: "function isBigger(string1, string2) { return string1.length === string2.length } console.log(isBigger('hello', 'world')) console.log(isBigger('bye', 'world'))"},
  {image: fetchRequest, caption: 'fetch', text: 'Fetch - это запрос на сервер', link: 'https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch', type: 'request', code: "function getUsers() { fetch('https://jsonplaceholder.typicode.com/users').then((response) => { return response.json() }).then(data => data.forEach(user => console.log((user.name))) ) } getUsers()"},
  {image: randomNumber, caption: 'Math.floor + Math.random', text: 'Math.floor - это метод, который округляет число до ближайшего меньшего целого числа. Math.random - это метод, который позволяет легко найти случайное число в определенном диапазоне', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random', type: 'exercise', code: "function randomNumber(min, max) { return Math.floor(Math.random() * (max - min) + min) } console.log(randomNumber(0, 10)) console.log(randomNumber(12, 99))"},
  {image: arrayWithoutEmptyStrings, caption: 'Фильтрация пустых строк из массива', text: 'Это функция, которая находит все ложно подобное (пустые в это случаи) значения и не пропускает их', link: '#', type: 'exercise', code: "const dirtyArray = ['JS', '', 'TS', '', '', 'PHP'] const clearArray = dirtyArray.filter(Boolean) console.log(clearArray)"},
  {image: arrayWithUniqueValues, caption: 'Фильтрация уникальных значений в массиве', text: 'Это функция, которая фильтрует уникальные значения через Set', link: '#', type: 'exercise', code: "const dirtyArray = ['JS', 'TS', 'TS', 'PHP', 'PYTHON', 'TS'] let arrayWithUniqueValues = [... new Set(array)] console.log(arrayWithUniqueValues)"},
  {image: shuffledArray, caption: 'Перемешивание элементов в массиве', text: 'Это функция, которая перемешивает все значения в массиве через метод sort', link: '#', type: 'exercise', code: "const array = ['JS', 'TS', 'PHP', 'PYTHON', 'Java'] const shuffledArray = array.sort( () => Math.random() - 0.5 ) console.log(shuffledArray)"},
  {image: falsyValues, caption: 'Ложно подобные значение', text: 'Ложно подобные (falsy) значение — значение, которое становится false в булевом контексте', link: 'https://developer.mozilla.org/ru/docs/Glossary/Falsy', type: 'exercise', code: "const falsyValues = ['', 0, null, undefined, NaN, false]"},
  {image: fibonaccioCycle, caption: 'Цикл Фибоначчи', text: 'Цикл Фибоначчи - это цикл, где два последних числа создают следующее число', link: 'https://www.programiz.com/javascript/examples/fibonacci-series', type: 'lifehack', code: "function fibonaccioCycle(limit) { let a = 0 let b = 1 let result = b let out = '' while (result < limit) { out += result + ' ' result = a + b a = b b = result } return out } console.log(fibonaccioCycle(100))"},
  {image: findMaxValue, caption: 'Нахождение самого большого числа в массиве', text: 'Это функция, которая находит самое большое значение в массиве через цикличный перебор', link: '#', type: 'exercise', code: "const numberArray = [1, 7, 26, 4, 82, 19] function findMaxNumber(array) { let maxNumber = array[0] for (const number of array) { if (maxNumber < number) maxNumber = number } return maxNumber } console.log(findMaxNumber(numberArray))"},
  {image: fizzBuzzTask, caption: 'Нахождение кратных чисел', text: 'Нахождение кратных чисел для 3 и 5', link: '#', type: 'exercise', code: "const fizzBuzz = (limit) => { let out = '' for (let i = 0; i < limit; i++) { if (i % 3 === 0) out += ' fizz' else if (i % 5 === 0) out += ' buzz' else if (i % 3 === 0 && i % 5 === 0) out += ' fizzbuzz' else out += ' ' = i } return out } console.log(fizzBuzz(11)) console.log(fizzBuzz(22))"}, 
  {image: letterFinder, caption: 'Поиск буквы в слове', text: 'Поиск одной буквы в определенном слове', link: '#', type: 'exercise', code: "function letterFinder(word, letter) { let firstCondition = typeof word === 'string' && word.length >= 2 let secondCondition = typeof word === 'string' && letter.length === 2 if (firstCondition && secondCondition) { for (let i = 0; i < word.length; i++) { if (word[i] == letter) return `Letter '${letter}' found at index ${i}` else return `Letter '${letter}' not found` } } else return 'Please pass correct arguments to the function' }"}, 
  {image: isEmptyObject, caption: 'Проверка объекта на пустоту', text: 'Проверка объекта на пустоту через Object.keys() + .length', link: '#', type: 'lifehack', code: "function isEmptyObject(object) { return Object.keys(object).length === 0 } let schedule = {} console.log(isEmptyObject(schedule)) schedule['8:30'] = 'get up' console.log(isEmptyObject(schedule))"}, 
  {image: Classes, caption: 'Class', text: 'синтаксический сахар над существующим в JavaScript механизмом прототипного наследования', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes', type: 'OOP', code: "class Vacation { constructor(destination, length) { this.destination = destinationthis.length = length } print() { console.log(`${this.destination} will take ${this.length} days`) } } const americanTrip = new Vacation('Santiago', 7) americanTrip.print() class Expeditions extends Vacation { constructor(destination, length, gear) { super(destination, length) this.gear = gear } print() { super.print() console.log( `Bring your ${this.gear.join(', ')}` ) } } const africanExpedition = new Expeditions('Mali', 14, ['special suite', 'backpack', 'road map']) africanExpedition.print()"},
  {image: banWordsFilter, caption: 'Фильтрация бан-слов', text: 'Фильтрация бан-слов происходит через цикл for of и includes', link: '#', type: 'lifehack', code: "const banWordsArray = [ 'JS', 'TS', 'Java', 'Pascal', 'C++' ] function banWordsFilter(sentence) { let out = '' let splitedSentence = sentence.split(' ') for (const word of splitedSentence) { out += ' ' if (banWordsArray.includes(word)) { for (let i = 0; i < word.length; i++) { out += '*' } } else out += word } return out } console.log(banWordsFilter('Pascal is a dead language')) // > ****** is a dead language console.log(banWordsFilter('The best functional language is Java')) // > The best functional language is ****"},
  {image: promise, caption: 'Promise', text: 'Объект Promise используется для отложенных и асинхронных вычислений', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise', type: 'request', code: "let usersPromise = new Promise((resolve, reject) => { fetch('https://jsonplaceholder.typicode.com/users') .then(data => { data !== undefined ? resolve(data.json()) : reject(new Error()) }) }) let postsPromise = new Promise((resolve, reject) => { fetch('https://jsonplaceholder.typicode.com/posts') .then(data => { data !== undefined ? resolve(data.json()) : reject(new Error()) }) }) Promise.all([usersPromise, postsPromise]).then(data => { console.log(data) }) // > (2) [Array(10), Array(100)]"},
  {image: fibonaccioCycleV2, caption: 'Цикл Фибоначчи v2.0', text: 'Цикл Фибоначчи - это цикл, где два последних числа создают следующее число', link: 'https://www.programiz.com/javascript/examples/fibonacci-series', type: 'exercise', code: "function fibonaccioCycle(amount) { return new Array(amount).fill(0).reduce( (accumulator, zero, index) => [...accumulator, index < 2 ? 1 : accumulator[index - 1] + accumulator[index -2]], []).join(' ') } console.log(fibonaccioCycle(10)) // > 1 1 2 3 5 8 13 21 34 55"},
  {image: arrayWithUniqueValuesV2, caption: 'Фильтрация уникальных значений в массиве v2.0', text: 'Это функция, которая фильтрует уникальные значения через filter', link: '#', type: 'exercise', code: "const userArray = [ 'Alex', 'Mike', 'Jane', 'Mike', 'Alex' ] let uniqueArray = userArray.filter((user, index) => { return index === userArray.indexOf(user) }) console.log(uniqueArray) // > ['Alex', 'Mike', 'Jane']"},
  {image: arrayWithUniqueValuesV3, caption: 'Фильтрация уникальных значений в массиве v3.0', text: 'Это функция, которая фильтрует уникальные значения через includes', link: '#', type: 'exercise', code: "const userArray = [ 'Alex', 'Mike', 'Jane', 'Mike', 'Alex' ] let uniqueArray = userArray.reduce((uniqueUser, user) => { return uniqueUser.includes(user) ? uniqueUser : [...uniqueUser, user] }, []) console.log(uniqueArray) // > ['Alex', 'Mike', 'Jane']"},
  {image: isIsogram, caption: 'Проверка на Изограму', text: 'Функция на проверку слова на Изограму', link: '#', type: 'exercise', code: ""},  
]

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main content={content}/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
