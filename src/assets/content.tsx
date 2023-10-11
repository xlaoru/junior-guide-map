import { IContentItem } from '../utils/Interfaces'

import responsiveBreakpoints from './images/responsive-breakpoints.png'
import markup1 from './images/markup_1.jpg'
import markup2 from './images/markup_2.jpg'
import markup3 from './images/markup_3.jpg'
import markup4 from './images/markup_4.jpg'
import gapstyle from './images/gap-style.jpg'
import arraymethods_01 from './images/array-methods_01.jpg'
import arraymethods_02 from './images/array-methods_02.jpg'
import arraymethods_03 from './images/array-methods_03.jpg'
import flexboxstyle from './images/flexbox-style.jpg'
import objectfitstyle from './images/object-fit-style.jpg'
import nthchildselector from './images/nth-child-selector.jpg'
import basicsofhtml00 from './images/basics-of-html-00.jpg'
import basicsofhtml01 from './images/basics-of-html-01.jpg'
import basicsofhtml02 from './images/basics-of-html-02.jpg'
import basicsofhtml03 from './images/basics-of-html-03.jpg'
import basicsofhtml04 from './images/basics-of-html-04.jpg'
import basicsofhtml05 from './images/basics-of-html-05.jpg'
import basicsofhtml06 from './images/basics-of-html-06.jpg'
import fullscreensample from './images/fullscreensample.jpg'
import zoomhovereffect_01 from './images/zoomhovereffect_01.jpg'
import zoomhovereffect_02 from './images/zoomhovereffect_02.jpg'
import glassmorphism from './images/glassmorphism.jpg'
import gridlayout from './images/gridlayout.jpg'
import easyLoader from './images/easy-loader.jpg'
import InterfaceVSTypeAlias from './images/interface-vs-type-alias.jpg'
import awesomeForm from './images/awesome-form.png'
import fs_1 from "./images/folder-struct_1.jpg"
import fs_2 from "./images/folder-struct_2.jpg"
import fs_3 from "./images/folder-struct_3.jpg"
import fs_4 from "./images/folder-struct_4.jpg"
import apiArchitectural from './images/api-architectural.jpg'

const content: IContentItem[] = [
{title: {en: 'Array.prototype.filter()', ua: 'Array.prototype.filter()'}, body: {en: 'filter is a method that creates a new unique array with specific criteria based on the selected array.', ua: 'filter - це метод, що створює новий унікальний масив з чіткими критеріями на основі обранного масиву.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'}, type: 'method', data:
`const array = ['JS', 'TS', 'C#', 'Java'] 
let filteredArray = array.filter(
    language => {
        if (language.length === 2) return true
    }
) 

console.log(filteredArray)`},
{title: {en: 'Array.prototype.map()', ua: 'Array.prototype.map()'}, body: {en: 'map is a method that creates a new unique array with some distinct changes in it.', ua: 'map - це метод, що створює новий унікальний массиву з якимись чіткими змінами у ньому.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map'}, type: 'method', data: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let mappedArray = array.map( 
    language => { 
        return language + ':)' 
    }
) 
console.log(mappedArray)`},
{title: {en: 'Array.prototype.reduce()', ua: 'Array.prototype.reduce()'}, body: {en: 'reduce is a method that applies an explicit criterion (reducer) to each array element and returns a single resulting final value.', ua: 'reduce - це метод, що застосовує чіткий критерій (reducer) до кожного елементу масиву та повертає одне резултативне кінцеве значення.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce'}, type: 'method', data: 
`const array = [1, 2, 3, 4, 5] 
const total = array.reduce( 
    (accumulator, element) => { 
        return accumulator + element 
    }
) 

console.log(total)`},
{title: {en: 'Array.prototype.forEach()', ua: 'Array.prototype.forEach()'}, body: {en: 'forEach is a method that populates a distinct variable for each array element.', ua: 'forEach - це метод, що виповнює чітку змінну для кожного елементу масиву.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach'}, type: 'method', data: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let forEachedArray = array.forEach( 
    language => console.log(language + ' :)') 
) 

// console.log(forEachedArray)`},
{title: {en: 'Array.prototype.indexOf()', ua: 'Array.prototype.indexOf()'}, body: {en: 'indexOf is a method that finds the closest index of the item you are looking for.', ua: 'indexOf - це метод, що шукає найблищий індекс item`а, котрий ви шукаєте.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf'}, type: 'method', data: 
`const array = [1, 2, 3, 4, 5] 
console.log(array.indexOf(2, 0))`},
{title: {en: 'Object.keys()', ua: 'Object.keys()'}, body: {en: 'keys is a method that shows all the keys of an object or array.', ua: 'keys - це метод, що показую усі ключі об`єкта чи массива.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys'}, type: 'method', data: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
const object = { 
    1: 'JS', 
    2: 'TS', 
    3: 'C#', 
    4: 'Java' 
} 

console.log(Object.keys(array)) 
console.log(Object.keys(object))`},
{title: {en: 'String.prototype.split()', ua: 'String.prototype.split()'}, body: { en: 'split is a method that converts a string into an array.', ua: 'split - це метод, що перетворює строку у масив.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split'}, type: 'method', data: 
`let string = 'Hello World' 
let splitedString = string.split(' ') 

console.log(splitedString)`},
{title: {en: 'Spread operator', ua: 'Spread оператор'}, body: {en: 'spread (...) is an operator that allows you to expand the elements available for iteration.', ua: 'spread (...) - це оператор, що дозволяє розширити доступні для ітерації елементи.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_syntax', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax'}, type: 'operator', data: 
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
{title: {en: 'Callback', ua: 'Колбек'}, body: {en: 'callback is a function that is passed as an argument to (for example) another function. Further, this callback function is used (for example) as outputting some information to the console.', ua: 'callback - це функція, яку передають у якості аргументу до (наприклад) іншої функції. Далі цю callback функцію використовують (наприклад), як відображення якоїсь інформації у консоль.'}, link: {en: 'https://developer.mozilla.org/en/docs/Glossary/Callback_function', ua: 'https://developer.mozilla.org/ru/docs/Glossary/Callback_function'}, type: 'function', data: 
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
{title: {en: 'Closure', ua: 'Замикання'}, body: {en: 'Closure is the creation of a local function in another function for later use of it with data.', ua: 'Замикання - це створення локальної функції в інщій функції для подалих використовувань її з даними.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Closures#:~:text=%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B8,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%2C%20%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%20%D0%B5%D1%91%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures#:~:text=%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B8,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%2C%20%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%20%D0%B5%D1%91%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.'}, type: 'function', data: 
`function init() {
    let name = 'Name' 
    function showName() { 
        console.log(name) 
    } 

    showName() 
} 

init()`},
{title: {en: 'Recursion', ua: 'Рекурсія'}, body: {en: 'Recursion is a function call to itself.', ua: 'Рекурсія - це виклик функції у собі.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Errors/Too_much_recursion', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Errors/Too_much_recursion'}, type: 'function', data: 
`let num = 0 
function init() { 
    num ++  
    console.log(num)  
    if (num === 100) return  
    init() 
} 

init()`},
{title: {en: 'do... while', ua: 'do... while'}, body: {en: 'do... while is a loop very similar to the while loop, but with a different syntax. The idea is that the loop will repeat until the condition is not true.', ua: 'do... while - це цикл, дуже схожий на цикл while, але з іншим синстаксисом. Ідея полягає в тому, що цикл буде повторюватися поки умова не буде значенням true.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/do...while', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while'}, type: 'cycle', data: 
`let result = '' 
let i = 0 
do { 
    i++ 
    result = result + i 
} while (i < 5) 

console.log(result)`},
{title: {en: 'for in / for of', ua: 'for in / for of'}, body: {en: 'The difference between `for in` and `for of` is that for in is responsible for indexes and for of is responsible for values.', ua: 'Різниця між `for in` і `for of` полягая в тому, що for in відповідає за індекси, а for of відповідає за значення.'}, link: {en: '#', ua: '#'}, type: 'cycle', data: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
for (const index in array) { 
    console.log(index) 
} 

for (const value of array) { 
    console.log(value) 
}`},
{title: {en: 'while', ua: 'while'}, body: { en: 'while is a loop that will repeat until the condition is not true.', ua: 'while - це цикл, буде повторюватися поки умова не буде значенням true.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while'}, type: 'cycle', data: 
`let i = 0 
while (i <= 3) { 
    console.log(i) 
    i++ 
}`},
{title: {en: 'Ternary expressions', ua: 'Умовний оператор'}, body: {en: 'Ternary expressions are a concise replacement of the if/else condition.', ua: 'Тернарні вирази - це лаконічна заміна умови if/else.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'}, type: 'operator', data: 
`function isEqual(string1, string2) { 
    let out = '' 

    string1.length === string2.length 
        ? out = 'strings are equal' 
        : out = 'strings are not equal' 

    return out 
} 

console.log(isEqual('hello', 'world')) 
console.log(isEqual('bye', 'world'))`},
{title: {en: 'Array.length()', ua: 'Array.length()'}, body: {en: 'length is a method that displays the length of the array.', ua: 'length - це метод, що показую довжину масиву.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/length'}, type: 'method', data: 
`function isBigger(string1, string2) { 
return string1.length === string2.length 
} 

console.log(isBigger('hello', 'world')) 
console.log(isBigger('bye', 'world'))`},
{title: {en: 'fetch', ua: 'fetch'}, body: {en: 'fetch is a request to the server.', ua: 'fetch - це запит на сервер.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/API/Fetch_API/Using_Fetch', ua: 'https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch'}, type: 'request', data: 
`function getUsers() { 
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { 
    return response.json() 
    })
    .then(data => data.forEach(user => console.log((user.name)))) 
} 

getUsers()`},
{title: {en: 'Math.floor() + Math.random()', ua: 'Math.floor() + Math.random()'}, body: {en: 'floor is a Math method that rounds a number to the nearest smaller integer. random is a Math method that helps find a random number in a specific range.', ua: 'floor - це метод Math, котрий округлює число до найблищого меньшого цілого числа. random - це метод Math, котрий допомагає знайти випадкове число в конкретному діапазоні.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/random', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random'}, type: 'method', data: 
`function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min) 
} 

console.log(randomNumber(0, 10)) 
console.log(randomNumber(12, 99))`},
{title: {en: 'Filtering empty strings from the array', ua: 'Фільтрація порожніх рядків із масиву'}, body: {en: 'This is a function that finds all false values ​​using the filter method and a Boolean value.', ua: 'Це функція, що знаходить усі неправильні (false) значення за допомогою методу filter та значення Boolean.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
`const dirtyArray = ['JS', '', 'TS', '', '', 'PHP'] 
const clearArray = dirtyArray.filter(Boolean) 

console.log(clearArray)`},
{title: {en: 'Filtering of unique values ​​in the array', ua: 'Фільтрація унікальних значень в масиві'}, body:{en: 'This is a function that filters values ​​using the filter and Set methods.', ua: 'Це функція, що фільтрує значення за допомогою метода filter та Set.'} , link: {en: '#', ua: '#'}, type: 'task', data: 
`const dirtyArray = ['JS', 'TS', 'TS', 'PHP', 'PYTHON', 'TS'] 
let arrayWithUniqueValues = [... new Set(dirtyArray)] 

console.log(arrayWithUniqueValues)`},
{title: {en: 'Shuffling elements in an array', ua: 'Переміщення елементів у масиві'}, body: {en: 'This is a function that shuffles all the values ​​in an array through the sort method.', ua: 'Це функція, що перемішує усі значення у масиві через метод sort.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
`const array = ['JS', 'TS', 'PHP', 'PYTHON', 'Java'] 
const shuffledArray = array.sort( 
    () => Math.random() - 0.5 
) 

console.log(shuffledArray)`},
{title: {en: 'Falsy values', ua: 'Хибні значення'}, body: {en: 'Invalid values ​​that correspond to false in Boolean format.', ua: 'Невірні значення, що у Boolean форматі відповідають false.'}, link: {en: 'https://developer.mozilla.org/en/docs/Glossary/Falsy', ua: 'https://developer.mozilla.org/ru/docs/Glossary/Falsy'}, type: 'task', data: 
`const falsyValues = [
    '', 0, null, undefined, NaN, false
]`},
{title: {en: 'Fibonaccio cycle', ua: 'Цикл Фібоначчі'}, body: {en: 'This is a cycle in which two previous numbers form the next.', ua: 'Це цикл у якому два попередніх числа утворюють наступне.'}, link: {en: 'https://www.programiz.com/javascript/examples/fibonacci-series', ua: 'https://www.programiz.com/javascript/examples/fibonacci-series'}, type: 'task', data: 
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
{title: {en: 'Finding the largest number in an array', ua: 'Знаходження найбільшого числа в масиві'}, body: {en: 'This is a function that finds the largest number in an array using a loop.', ua: 'Це функція, що знаходить найбільше число у масиві за допомогою цикла.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
`const numberArray = [1, 7, 26, 4, 82, 19] 
function findMaxNumber(array) { 
    let maxNumber = array[0] 

    for (const number of array) { 
        if (maxNumber < number) maxNumber = number 
    } 
    return maxNumber 
} 

console.log(findMaxNumber(numberArray))`},
{title: {en: 'Finding multiples', ua: 'Пошук кратних'}, body: {en: 'This is a function that finds numbers that are multiples of 3, 5 and 3 and 5 at once.', ua: 'Це функціі, що знаходиь числа кратним 3, 5 та 3 і 5 одразу.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
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
{title: {en: 'Search for a letter in a word', ua: 'Пошук букви в слові'}, body: {en: 'This function searches for letters in a word.', ua: 'Ця функція шукає букви у слові.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
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
{title: {en: 'Checking the object for emptiness', ua: "Перевірка об'єкта на порожнечу"}, body: {en: 'This function checks the object for void via Object.keys() + .length.', ua: 'Ця функція перевіряє об`єкт на порожнечу через Object.keys() + .length.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
`function isEmptyObject(object) { 
    return Object.keys(object).length === 0 
} 

let schedule = {} 
console.log(isEmptyObject(schedule)) 

schedule['8:30'] = 'get up' 
console.log(isEmptyObject(schedule))`}, 
{title: {en: 'Class', ua: 'Клас'}, body: {en: 'A class is syntactic sugar over JavaScript`s existing prototype inheritance mechanism.', ua: 'Клас - це синтаксичний цукор над існуючим у JavaScript механізмом прототипного наслідування.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes'}, type: 'OOP', data: 
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
{title: {en: 'Filtering ban words', ua: 'Фільтрування заборонених слів'}, body: {en: 'This function filters out ban words using the includes method.', ua: 'Ця функція фільтрує бан-слова за допомогою метода includes.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
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
{title: {en: 'Promise', ua: 'Promise'}, body: {en: 'The Promise object is used for deferred and asynchronous requests.', ua: 'Об`єкт Promise використовується для відкладених і ансинхронних запитів.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise'}, type: 'request', data: 
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
{title: {en: 'Fibonaccio cycle v2.0', ua: 'Цикл Фібоначчі v2.0'}, body: {en: 'This is a cycle in which two previous numbers form the next.', ua: 'Це цикл у якому два попередніх числа утворюють наступне.'}, link: {en: 'https://www.programiz.com/javascript/examples/fibonacci-series', ua: 'https://www.programiz.com/javascript/examples/fibonacci-series'}, type: 'task', data: 
`function fibonaccioCycle(amount) { 
    return new Array(amount).fill(0).reduce( 
        (accumulator, zero, index) => [...accumulator, index < 2 
        ? 1 
        : accumulator[index - 1] + accumulator[index -2]], []).join(' ') 
} 

console.log(fibonaccioCycle(10))`},
{title: {en: 'Filtering of unique values ​​in the array v2.0', ua: 'Фільтрація унікальних значень в масиві v2.0'}, body: {en: 'This is a function that filters values ​​using the filter and indexOf methods.', ua: 'Це функція, що фільтрує значення за допомогою метода filter та indexOf.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
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
{title: {en: 'Filtering of unique values ​​in the array v3.0', ua: 'Фільтрація унікальних значень в масиві v3.0'}, body: {en: 'This is a function that filters values ​​using the reduce and includes method.', ua: 'Це функція, що фільтрує значення за допомогою метода reduce та includes.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
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
{title: {en: 'Euclid`s algorithm', ua: 'Алгоритм Евкліда'}, body: {en: 'This is a function that finds the lowest common multiple for two numbers.', ua: 'Це функція, що знаходить НСК для двух чисел.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
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
{title: {en: 'Isogram check', ua: 'Перевірка ізограми'}, body: {en: 'This is a function that checks a word for an isogram. That is, whether there are repeated letters in the word.', ua: 'Це функція, що перевіряє слово на ізограму. Тобто чи є у слові повторювальні літери.'}, link: {en: '#', ua: '#'}, type: 'task', data: 
`function isIsogram(word) { 
    let separatedWord = word.split('') 
    let settedWord = [...new Set(separatedWord)] 

    return separatedWord.length === settedWord.length 
} 

console.log(isIsogram('Dermatoglyphics')) 
console.log(isIsogram('moose')) 
console.log(isIsogram('aba'))`},  
{title: {en: 'Digital clock', ua: 'Цифровий годинник'}, body: {en: 'An interactive clock made using setInterval().', ua: 'Інтерактивний годинник, котрий зроблений за допомогою setInterval().'}, link: {en: '#', ua: '#'}, type: 'task', data: 
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
{title: {en: 'switch', ua: 'switch'}, body: {en: 'switch is a loop that compares expressions with the cases listed in its environment and then issues the corresponding statement.', ua: 'switch - це цикл, що зрівнює вирази з випадками, перерахованими у середені її, а потім випонює відповідне інструкції.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch'}, type: 'cycle', data: 
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
{title: {en: 'React Search Pattern', ua: 'Зразок (паттерн) Пошуковику у Реакт'}, body: {en: 'This design pattern provides a search input where an event is passed through the onChange() attribute, i.e. the letters to search for. Next, these letters go to useState(), which is used to process the search query.', ua: 'Цей паттерн проєктування передбачає пошуковий інпут куди через атрибут onChange() передається подію, тобто літери для пошуку. Далі ці літери переходять до useState() з допомогою якого і робиться оброблення пошукового запиту.'}, link: {en: '#', ua: '#'}, type: 'React', data: 
`import { useState } from "react";

interface IContentItem {
  title: string;
  body: string;
}

interface IDemoProps {
  content: IContentItem[];
}

export default function Demo({ content }: IDemoProps) {
  const [value, setValue] = useState("");

  const searchedContent = content.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <input
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search..."
      />
      <ul>
        {searchedContent.length === 0 ? (
          <h4>Nothing has found</h4>
        ) : (
          searchedContent.map((item, index) => (
            <li key={index}>
              {item.title}. {item.body}
            </li>
          ))
        )}
      </ul>
    </>
  );
}`},
{title: {en: 'React Filter Pattern', ua: 'Зарозок (паттерн) Категорій у Реакт'}, body: {en: 'This design pattern provides a set of various buttons that can change categories. This is all done using useState(), where the initial index of the standard category is written.', ua: 'Цей паттерн проєктування передабачає набір різноманітних кнопок, що можуть змінювати категорії. Це все проходить за допомогою useState(), куди записуються початковий індекс стандартної катергорії.'}, link: {en: '#', ua: '#'}, type: 'React', data: 
`import { useState } from "react";

const filters: string[] = ["all", "phone", "tablet", "laptop"];

interface IContentItem {
  title: string;
  body: string;
  filter: "all" | "phone" | "tablet" | "laptop";
}

interface IDemoProps {
  content: IContentItem[];
}

export default function Demo({ content }: IDemoProps) {
  const [activeFilter, setActiveFilter] = useState(0);

  const filterMenu = filters.map((item, index) => (
    <button
      key={item}
      onClick={() => setActiveFilter(index)}
      className={activeFilter === index ? "active" : ""}
    >
      {item}
    </button>
  ));

  const filteredContent = content.filter((item) => {
    if (activeFilter === 0) return item;
    if (filters[activeFilter] === item.filter) return true;
  });

  return (
    <>
      {filterMenu}
      <ul>
        {filteredContent.map((item, index) => (
          <li key={index}>
            {item.title} | {item.body}
          </li>
        ))}
      </ul>
    </>
  );
}`},

{title: {en: 'All about useEffect()', ua: 'Все про UseEffect()'}, body: {en: 'An effect hook allows you to perform side effects in a functional component.', ua: 'Хук ефектів дозволяє виконувати побічні ефекти у функціональному компоненті.'}, link: {en: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/', ua: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/'}, type: 'React', data: 
`// componentDidMount
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

{title: {en: 'Getting info from API', ua: 'Отримуємо інформацію з API серверу'}, body: {en: 'UseState() and useEffect() can be used to retrieve information from the API and record its state for future use.', ua: 'За допомогою useState() та useEffect() можно отримати інформацію з API та записати її state для майбутнього використовування.'}, link: {en: '#', ua: '#'}, type: 'React', data: 
`import {useState, useEffect} from 'react'

const Demo = () => {
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

export default Demo;`},
{title: {en: 'React Redux-Toolkit mini form app', ua: 'Робимо міні проект Форми за допомогою біліотеки Реакт Redux-Toolkit'}, body: {en: 'This is a small project that uses Redux-Toolkit technology. This project represents input (where something is written) with output (where something is outputed).', ua: 'Це маленький проект, де використовується технологія Redux-Toolkit. Цей проект представляє input (куди пишуть щось) з output (куди виводять щось).'}, link: {en: 'https://redux.js.org/', ua: 'https://redux.js.org/'}, type: 'React', data: [
`/* root index.js */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'

import App from './App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)`,
`/* App.js */
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
`/* store index.js */
import {configureStore} from '@reduxjs/toolkit'
import TextReducer from './TextSlice'

export default configureStore({
    reducer: {
        text: TextReducer
    }
})`,
`/* TextSlice.js */
import {createSlice} from '@reduxjs/toolkit'
export const TextSlice = createSlice({
    name: 'text',
    initialState: {
        value: ''
    },
    reducers: {
        textAdditor: (state, action) => {
            // ! State
            console.log('state:', state) // ? State itself.
            console.log('state.value:', state.value) // ? What is already stored in State.

            // * Reducer
            console.log('action:', action) // ? An object with a choice between a reducer type and a reducer value.
            console.log('action.type:', action.type) // ? The reducer itself, namely its name and type.
            console.log('action.payload:', action.payload) // ? What we get from the input using a reducer.
            
            return {...state, value: action.payload}
        }
    }
})

export const {textAdditor} = TextSlice.actions // ? Export of all action reducers.
export const selectText = state => state.text.value // ? Export of result value of State.
export default TextSlice.reducer // ? Export of all Slice.`,
`/* Input.js */
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
`/* Output.js */
import {useSelector} from "react-redux"
import {selectText} from "../store/TextSlice"

const Output = () => {
    const value = useSelector(selectText)
    return (
        <div>
            {value}
        </div>
    )
}

export default Output`,
]},

{title: {en: 'React props destructurization', ua: "Деструктурізація props об'єктів у Реакті"}, body: {en: 'Destructuring props objects in React is a very important part. Destructuring is used to make the code easier to read.', ua: "Деструктурізація props об'єктів у Реакті дуже важлива частина. Щоб полегшити читабельність коду застосовують деструктурізацію."}, link: {en: 'https://reactpatterns.com/', ua: 'https://reactpatterns.com/'}, type: 'React', data: [
`import Demo from "./Demo";

export default function App() {
  return (
    <div className="App">
      <Demo
        skills={["Front-End", "DevOps", "Project Manager"]}
        id={1}
        name={"Alex"}
      />
    </div>
  );
}
`,
`export default function Demo({ skills, ...userInfo }) {
    return (
      <ul>
        <li>
          {userInfo.id}. {userInfo.name} is a {skills.join(", ")} developer
        </li>
      </ul>
    );
  }
  `
]},

{title: {en: 'Conditional rendering', ua: 'Умовний рендеринг'}, body: {en: 'Conditional rendering is a special syntax in React, where there are conditions under which it is possible to adjust the rendering of individual parts of the code.', ua: 'Умовний рендеринг - це спеціальний синтаксис у Реакті, де є умови при яких можливо регулювати рендеринг окремих частин коду.'}, link: {en: 'https://reactpatterns.com/', ua: 'https://reactpatterns.com/'}, type: 'React', data: 
`export default function Demo() {
  return (
    <>
      {5 > 3 && <span>Renders when 'truthy'</span>}

      {5 < 3 || <span>Renders when 'falsy'</span>}

      {5 > 3 ? (
        <span>Rendered when 'truthy'</span> // if
      ) : (
        <span>Rendered when 'falsy'</span> // else
      )}
    </>
  );
}`
},

{title: {en: 'Discriminant Formula', ua: 'Формула Дискримінанту'}, body: {en: 'The function for finding the roots of a quadratic equation using the Discriminant Formula is made using the methods of the Math class. Namely Math.pow() - power (numbers), Math.sqrt() - root (numbers).', ua: 'Функція для знаходження коренів квадратного рівняння за допомогою Формула Дискримінанту зробленна за допомогою методів класа Math. А саме Math.pow() - степінь(числа), Math.sqrt() - корінь(числа).'}, link: {en: 'https://en.wikipedia.org/wiki/Discriminant', ua: 'https://uk.wikipedia.org/wiki/%D0%94%D0%B8%D1%81%D0%BA%D1%80%D0%B8%D0%BC%D1%96%D0%BD%D0%B0%D0%BD%D1%82'}, type: 'task', data: 
`function discriminantFormula(a, b, c) {
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

{title: {en: 'Email sender on Node.js', ua: 'Відправник на електронну пошту на Node.js'}, body: {en: 'This program uses the nodemailer library, which helps to easily send information to e-mail.', ua: 'Ця програма застосовую бібліотеку nodemailer, котра допомогає легко відсилати інформацію на електронну пошту.'}, link: {en: 'https://github.com/nodemailer/nodemailer', ua: 'https://github.com/nodemailer/nodemailer'}, type: 'Node.js', data: 
`const nodemailer = require('nodemailer')

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

{title: {en: 'Array.prototype.includes()', ua: 'Array.prototype.includes()'}, body: {en: 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.', ua: 'Метод includes() визначає, чи містить масив певне значення серед своїх записів, повертаючи true або false відповідно.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes'}, type: 'method', data: 
`const array = [1, 4, 'hello', 77, 'WoRld']

console.log(array.includes(4))
console.log(array.includes('hello'))
console.log(array.includes('hello', 3))
console.log(array.includes('WoRld'))

const string = 'helloWorld'

console.log(array.includes('hello'))
console.log(array.includes('world'))`},

{title: {en: 'Destructuring assignment', ua: 'Деструктуризаційне завдавання'}, body: {en: 'The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.', ua: 'Синтаксис присвоєння деструктуризації — це вираз JavaScript, який дає змогу розпаковувати значення з масивів або властивості з об’єктів у окремі змінні.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'}, type: 'operator', data: 
`const arr = [1, 1, 2, 3, 5]

const [a, b] = arr

console.log(a) // 1
console.log(b) // 1

const person = {
    name: 'Alex',
    age: 25,
    city: 'Kyiv'
}

const {name, age} = person

console.log(name) // Alex
console.log(age) // 25`},
{title: {en: 'Array.prototype.push()', ua: 'Array.prototype.push()'}, body: {en: 'The push() method adds one or more elements to the end of the array and returns the new length of the array.', ua: 'Метод push() додає один або більше елементів до кінця масиву і повертає нову довжину масиву.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push'}, type: 'method', data:
`let array = [1, 1, 2, 3, 5, 8]

array.push(13)
console.log(array)

array.push(21, 34, 55)
console.log(array)

console.log(array.push())`},
{title: {en: 'Array.prototype.pop()', ua: 'Array.prototype.pop()'}, body: {en: 'The pop() method removes the last element from the array and returns its value. The last element of the array, or undefined if the array is empty.', ua: 'Метод pop() видаляє останній елемент з масиву та повертає його значення. Останній елемент масиву або undefined, якщо масив порожній.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop#%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D0%BC%D0%BE%D0%B5_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop#%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D0%BC%D0%BE%D0%B5_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5'}, type: 'method', data:
`let array = [1, 1, 2, 3, 5, 8]

array.pop()
console.log(array)

console.log(array.pop())
console.log(array)`},

{title: {en: 'Children props in React', ua: 'Children props у Реакті'}, body: {en: 'Children lets you manipulate and transform the JSX you received as the children prop.', ua: 'Children дозволяють вам маніпулювати та перетворювати JSX, який ви отримали як дочірню props.'}, link: {en: 'https://react.dev/reference/react/Children', ua: 'https://react.dev/reference/react/Children'}, type: 'React', data:
`import React from "react";

interface IChildrenProps {
  children: React.ReactNode;
}

function Greeting({ children }: IChildrenProps) {
  return <>{children}</>;
}

function Alert({ children }: IChildrenProps) {
  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { className: "alert" });
      })}
    </>
  );
}

interface ITableProps {
  [key: string]: React.ReactNode;
}

function Table({ leftColumn, rightColumn }: ITableProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">{leftColumn}</div>
        <div className="col">{rightColumn}</div>
      </div>
    </div>
  );
}

export default function Demo() {
  return (
    <>
      <Greeting>
        <h1>Welcome!</h1>
        <h3>I hope we will be friends!</h3>
      </Greeting>

      <Alert>
        <h2>Today we have some special presents only for you!</h2>
      </Alert>

      <Table
        leftColumn={
          <Greeting>
            <p>How do you do?</p>
          </Greeting>
        }
        rightColumn={
          <Alert>
            <p>Sign in here and receive your presents:</p>
            <ul>
              <li>Exclusive 3 month subscription package</li>
              <li>Fully mentorship</li>
              <li>Unique development approaches</li>
            </ul>
          </Alert>
        }
      />
    </>
  );
}`},
{title: {en: 'Rerender props in React', ua: 'Ререндер props у Реакті'}, body: {en: 'The term "render-prop" refers to a technique in which React components share one code (function) among themselves by passing it through a prop. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.', ua: 'Термін “рендер-проп” відноситься до техніки, в якій React-компоненти розділяють між собою один код (функцію) передаючи її через проп. Компонент з рендер-пропом приймає функцію, яка повертає React-елемент, і викликає її замість реалізації власної рендер-логіки.'}, link: {en: 'https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop', ua: 'https://uk.legacy.reactjs.org/docs/render-props.html'}, type: 'React', data:
`import { useState } from "react";

function Alert({ count }) {
  return <h1>Count: {count}</h1>;
}

function Counter({ render }) {
  const [count, setCount] = useState(0);

  function adjustCount(amount) {
    setCount((prevCount) => {
      return prevCount + amount;
    });
  }

  return (
    <>
      <button onClick={() => adjustCount(1)}>+</button>
      <button onClick={() => adjustCount(-1)}>-</button>
      {render(count)}
    </>
  );
}

export default function Demo() {
  return (
    <>
      <Counter render={(count) => <Alert count={count} />} />
    </>
  );
}`},
{title: {en: 'Array.isArray()', ua: 'Array.isArray()'}, body: {en: 'The Array.isArray() static method determines whether the passed value is an Array.', ua: 'Статичний метод Array.isArray() визначає, чи є передане значення масивом.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray'}, type: 'method', data:
`const list1 = ['banana', 'apple', 'orange']
const list2 = 'banana, apple, orange'

console.log(Array.isArray(list1))
console.log(Array.isArray(list2))`},
{title: {en: 'Hunger Games app', ua: 'Додаток Голодні ігри'}, body: {en: 'This application is an analogue of the Hunger Games game, where you drive in participants and with each passed circle of participants, with a random probability, it becomes less and less.', ua: 'Цей додаток є аналогом гри Голодні ігри, де ви заганяєте учасників і з кожним пройденим колом учасників, з випадковою ймовірністю, стає все менше і менше.'}, link: {en: '#', ua: '#'}, type: 'task', data:
`import React, { useState } from 'react'

const HungerGamesApp = () => {
const [inputValue, setInputValue] = useState('')
const [wordList, setWordList] = useState([])
const [lostWord, setLostWord] = useState('')
const [winner, setWinner] = useState('')

function getWords(event) {
    setInputValue(event.target.value)
}

function setWords() {
    setWordList(inputValue.split(', '))
}

function startGame() {
    if (wordList.length === 1) {
    setWinner(wordList[0])
    }
    let randomNumber = Math.floor(Math.random() * wordList.length)
    setLostWord(wordList[randomNumber])
    let newWordList = wordList.filter((word, index) => {
    return index !== randomNumber
    })
    setWordList(newWordList)
}

return (
    <div>
    <h1>Hunger Games</h1>
    <input type="text" onChange={getWords} />
    <button onClick={setWords}>Add Words</button>
    <button onClick={startGame}>Play Game</button>
    <h3>Lost word: {lostWord === '' ? 'No lost word' : lostWord}</h3>
    {wordList.length === 0 ? <p>No Words</p> : wordList.map((word, index) => <p key={index}>{word}</p>)}
    {wordList.length === 0 ? <h1>{winner} won!!!</h1> : ''}
    </div>
);
};

export default HungerGamesApp`},
{title: {en: 'Spinner in React', ua: 'Spinner в Реакт'}, body: {en: 'Spinner in React is a very important thing. When information comes with a delay from the API, then some kind of stub is needed so that the user does not see an empty page.', ua: 'Spinner у React — це дуже важлива річ. Коли інформація надходить із затримкою від API, то потрібна якась заглушка, щоб користувач не бачив порожню сторінку.'}, link: {en: '#', ua: '#'}, type: 'React', data:
`const Spinner = () => {
return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto', background: 'none', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="translate(80,50)">
        <g transform="rotate(0)">
        <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="1">
        <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
        </circle>
        </g>
        </g><g transform="translate(71.21320343559643,71.21320343559643)">
        <g transform="rotate(45)">
        <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.875">
        <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
        </circle>
        </g>
        </g><g transform="translate(50,80)">
        <g transform="rotate(90)">
        <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.75">
        <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
        </circle>
        </g>
        </g><g transform="translate(28.786796564403577,71.21320343559643)">
        <g transform="rotate(135)">
        <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.625">
        <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
        </circle>
        </g>
        </g><g transform="translate(20,50.00000000000001)">
        <g transform="rotate(180)">
        <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.5">
        <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
        </circle>
        </g>
        </g><g transform="translate(28.78679656440357,28.786796564403577)">
        <g transform="rotate(225)">
        <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.375">
        <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
        </circle>
        </g>
        </g><g transform="translate(49.99999999999999,20)">
        <g transform="rotate(270)">
        <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.25">
        <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
        </circle>
        </g>
        </g><g transform="translate(71.21320343559643,28.78679656440357)">
        <g transform="rotate(315)">
        <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.125">
        <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
        <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
        </circle>
        </g>
        </g>
    </svg>
)
}

export default Spinner;`},
{title: {en: 'A small React + Redux.js Todo app', ua: 'Невеликий Todo додаток з Реакт + Redux.js'}, body: {en: 'This small app is made using React + Redux.js toolkit. NewTodoForm.js takes the data and passes it to the store and then TodoList.js takes it and renders it in TodoItem.js.', ua: 'Цей невеликий додаток зроблений за допомогою React + Redux.js toolkit. NewTodoForm.js приймає данні та передає їх у store а потім TodoList.js приймає їх й рендерить у TodoItem.js.'}, link: {en: 'https://redux.js.org/', ua: 'https://redux.js.org/'}, type: 'React', data:[
`/* index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
</React.StrictMode>,
document.getElementById('root')
);

reportWebVitals();`,
`/* App.js */
import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';

function App() {
const [text, setText] = useState('');
const dispatch = useDispatch();

const handleAction = () => {
    if(text.trim().length) {
    dispatch(addTodo({text}));
    setText('');
    }
}

return (
    <div className='App'>
    <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
    />
    <TodoList />
    </div>
);
}

export default App;`,
`/* store index.js */
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export default configureStore({
reducer: {
    todos: todoReducer,
},
});`,
`/* todoSlice.js */
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
            id: new Date().toISOString(),
            text: action.payload.text,
            completed: false,
            });
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    },
});

export const {addTodo, toggleComplete, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;`,
`/* NewTodoForm.js */
const NewTodoForm = ({ value, updateText, handleAction }) => {
return (
    <label>
    <input
        placeholer='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
    />
    <button onClick={handleAction}>Add todo</button>
    </label>
);
};

export default NewTodoForm;`,
`/* TodoList.js */
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
const todos = useSelector(state => state.todos.todos);

return (
    <ul>
    {todos.map((todo) => (
        <TodoItem
        key={todo.id}
        {...todo}
        />
    ))}
    </ul>
);
};

export default TodoList;`,
`/* TodoItem.js */
import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
const dispatch = useDispatch();

return (
    <li>
    <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
    />
    <span>{text}</span>
    <span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
);
};

export default TodoItem;`,
]},
{title: {en: 'All about useState()', ua: 'Все про useState()'}, body: {en: 'The useState() hook is a function in React used to add state to functional components. It takes an initial state value and returns an array containing the current state value and a function to update it. When this function is called, the component is re-rendered with the new state value, and state changes can be tracked and handled in the component.', ua: 'Хук useState() — це функція в React, яка використовується для додавання стану до функціональних компонентів. Він приймає початкове значення стану та повертає масив, що містить поточне значення стану та функцію для його оновлення. Коли ця функція викликається, компонент повторно візуалізується з новим значенням стану, і зміни стану можна відстежувати та обробляти в компоненті.'}, link: {en: 'https://legacy.reactjs.org/docs/hooks-state.html', ua: 'https://legacy.reactjs.org/docs/hooks-state.html'}, type: 'React', data:
`import { useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  function adjustCount(amount: number) {
    // Keeps track of the previous value
    setCount((prevValue) => {
      return prevValue + amount;
    });
  }

  function valueCatcher(text: string) {
    // Doesn't keep track of previous value
    setValue(text);
  }

  return (
    <>
      <div className="counter">
        <button onClick={() => adjustCount(-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => adjustCount(1)}>+</button>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={(event) => valueCatcher(event.target.value)}
        />
        <h5>{value}</h5>
      </div>
    </>
  );
}`},
{title: {en: 'Portals in React', ua: 'Портали у Реакті'}, body: {en: 'Portals let your components render some of their children into a different place in the DOM. This lets a part of your component “escape” from whatever containers it may be in. For example, a component can display a modal dialog or a tooltip that appears above and outside of the rest of the page.', ua: 'Портали дозволяють вашим компонентам відтворювати деякі їхні дочірні елементи в іншому місці в DOM. Це дозволяє частині вашого компонента «втекти» з будь-яких контейнерів, у яких він може знаходитися. Наприклад, компонент може відображати модальне діалогове вікно або спливаючу підказку, яка з’являється над і поза межами решти сторінки.'}, link: {en: 'https://react.dev/reference/react-dom/createPortal', ua: 'https://habr.com/ru/companies/smartprogress/articles/306096/'}, type: 'React', data:
`import { useState } from "react";
import ReactDOM from "react-dom";

function Portal({ children }) {
  const node = document.createElement("div");
  document.body.appendChild(node);

  return ReactDOM.createPortal(children, node);
}

function Form() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: ""
  });

  function loadData(event) {
    event.preventDefault();

    let userEmail = event.target.elements.email.value;
    let userPassword = event.target.elements.password.value;
    let userName = event.target.elements.name.value;

    setUser({
      email: userEmail,
      password: userPassword,
      name: userName
    });
  }

  return (
    <div className="Form">
      <div className="container">
        <form onSubmit={(event) => loadData(event)}>
          <h1>Sign In</h1>
          <label>
            Email
            <input type="email" name="email" placeholder="Email..." />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="Password..." />
          </label>
          <label>
            Name
            <input type="text" name="name" placeholder="Name..." />
          </label>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
      {user.email !== "" && user.name !== "" && user.password !== "" ? (
        <Portal>
          <Alert />
        </Portal>
      ) : null}
    </div>
  );
}

function Alert() {
  return (
    <>
      <h1>Sign In was successful</h1>
    </>
  );
}

export default function Demo() {
  return (
    <>
      <Form />
    </>
  );
}`},
{title: {en: 'Responsive Screen Size Breakpoints', ua: 'Точки зупинки розміру адаптивного екрана'}, body: {en: 'Here is a nice illustration of setting breakpoints for your application.', ua: 'Ось гарна ілюстрація з встановленням брєйкпоінтів для вашого застосунку.'}, link: {en: '#', ua: '#'}, type: 'markup', data: responsiveBreakpoints},
{title: {en: 'Markup tips', ua: 'Поради щодо верстки'}, body: {en: 'Here are a bunch of markup tips for people looking to improve their experience.', ua: 'Ось багато порад щодо ведення верстки для людей, що прагунть покращити свій досвід.'}, link: {en: '#', ua: '#'}, type: 'markup', data: [markup1, markup2, markup3, markup4]},
{title: {en: 'Guard clause example', ua: 'Приклад вкорочення коду'}, body: {en: 'Here is an easy example for applying code shortening via an empty return.', ua: 'Ось легкий приклад для застосування вкорочення коду через порожній return.'}, link: {en: '#', ua: '#'}, type: 'function', data: 
`// Guard clause example
function(list) {
    if(list == null) return
    list.update()
}`},
{title: {en: 'Fullscreen background image', ua: 'Фонове зображення на весь екран'}, body: {en: 'Here`s a custom-built layout for a full-screen background.', ua: 'Ось спеціально зібраний макет для повноекранного фону. '}, link: {en: '#', ua: '#'}, type: 'markup', data: 
[fullscreensample,
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
        <section class="fullscreen">
            <div class="fullscreen__body">
                <h1 class="fullscreen__title">Hello World</h1>
            </div>
        </section>
    </div>
    <script src="index.js"></script>
</body>
</html>`,
`body {
    height: 100%;
    margin: 0;
}

.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.fullscreen {
    background: url(background.jpg);
    color: white;
    display: flex;
    min-height: 100vh;
    justify-content: center;
}

.fullscreen__body {
    display: flex;
    align-items: center;
}

.fullscreen__title {
    font-size: 150px;
}`]},
{title: {en: 'gap in CSS3', ua: 'gap у CSS3'}, body: {en: 'The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.', ua: 'Властивість CSS gap встановлює проміжки (жолоби) між рядками та стовпцями. Це скорочення для row-gap і column-gap.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gap', ua: 'https://developer.mozilla.org/ru/docs/Web/CSS/gap'}, type: 'markup', data: gapstyle},
{title: {en: 'Simplifying array methods', ua: 'Спрощення методів масивів'}, body: {en: 'Principles of operation of the array method on simple examples.', ua: 'Принципи роботи методі масивів на простих прикладах.'}, link: {en: '', ua: ''}, type: 'method', data: [arraymethods_01, arraymethods_02, arraymethods_03]},
{title: {en: 'Zoom on hover effect', ua: 'Ефект приближення (зуму)'}, body: {en: 'This zoom effect is made using the hover pseudo-class and transition scale.', ua: 'Цей ефект приближення (зуму) зроблений за допомогою псевдокласу hover та transition scale.'}, link: {en: '#', ua: '#'}, type: 'markup', data: 
[zoomhovereffect_01, zoomhovereffect_02,
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
        <img src="background.jpg" alt="image">
    </div>
    <script src="index.js"></script>
</body>
</html>`,
`.wrapper {
    overflow: hidden;
    width: 500px;
    height: 500px;
}

.wrapper img {
    width: 100%;
    height: 100%;
    transition: scale 400ms;
}

.wrapper:hover img {
    scale: 120%;
}`]},
{title: {en: 'Flexbox layout', ua: 'Макет Flexbox'}, body: {en: 'This image contains all instances of the Flexbox layout.', ua: 'На цій картинці забрані усі випадки макету Flexbox.'}, link: {en: '#', ua: '#'}, type: 'markup', data: flexboxstyle},
{title: {en: 'object-fit style', ua: 'Стиль object-fit'}, body: {en: 'This picture shows all cases of using the object-fit style for pictures.', ua: 'На цій картинці забрані усі випадки використання стилю object-fit для картинок.'}, link: {en: '#', ua: '#'}, type: 'markup', data: objectfitstyle},
{title: {en: 'this', ua: 'this'}, body: {en: "The this keyword is a word that indicates the context of their execution. Case 1: when a function is created in an object as its method, then the this word points to this object itself. Case 2: a constructor function that is used to create a new object using the new operator here the word this indicates the object that will be created. Case 3: arrow functions. You can often hear that they do not have their own execution context, but in fact it depends on the lexical environment, and in simple words on the function inside which the arrow function was created. What value the this of the top function had, will also be the value of the arrow function", ua: 'Ключове слово this — це слово, яке вказує на контекст їх виконання. Випадок 1: коли функція створюється в об’єкті як його метод, тоді слово this вказує на сам об’єкт. Випадок 2: функція-конструктор, яка використовується для створення нового об’єкта за допомогою оператора new, тут слово this вказує на об’єкт, який буде створено. Випадок 3: функції стрілок. Часто можна почути, що вони не мають власного контексту виконання, але насправді це залежить від лексичного оточення, а простими словами від функції, всередині якої була створена функція-стрілка. Значення функції this у верхній частині також буде значенням функції зі стрілкою'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this'}, type: 'function', data: 
[
`// Case 1
const user = {
    firstName: 'Alex',
    age: 20,
    sayHello: function() {
        console.log('Hello ' + this.firstName)
    }
}

user.sayHello() // Hello Alex`,
`// Case 2
function User(id, name, age) {
    this.id = id
    this.name = name
    this.age = age
}`,
`// Case 3
const user = {
    firstName: 'Kate',
    age: 20,
    sayHello: function() {
        const getName = () => {
            return this.firstName
        }
        console.log('Hello ' + getName())
    }
}

user.sayHello() // Hello Kate`
]},
{title: {en: 'Professional data fetching with useEffect() and controller signal "AbortController()"', ua: 'Професійне отримання даних за допомогою useEffect() і сигналу контролера "AbortController()"'}, body: {en: 'In the example code, you can see the quality of getting data from useEffect() and the "AbortController()" controller signal.', ua: 'На прикладі коду можно побачити якісне отримання даних із useEffect() і сигналу контролера "AbortController()".'}, link: {en: '#', ua: '#'}, type: 'React', data: 
[
`import User from '../User/User';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
      <div className="App">
        <Router>
            <User />
        </Router>
      </div>
  );
}

export default App;`,
`import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'

const User = () => {
    const [user, setUser] = useState({})
    const id = useLocation().pathname.split("/")[2]
    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        fetch('https://jsonplaceholder.typicode.com/users/' + id, {signal})
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
            }).catch(err => {
                if(err.name === "AbortError") {
                    console.log('cancelled')
                } else {
                    console.log('Error is not an "AbortError"')
                }
            })
        return () => {
            controller.abort()
        }

    }, [id])
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <Link to="/users/1">Fetch User 1</Link> <br />
            <Link to="/users/2">Fetch User 2</Link> <br />
            <Link to="/users/3">Fetch User 3</Link> <br />
        </div>
    );
};

export default User;`,
]},
{title: {en: 'Professional data axios fetching with useEffect() and controller signal "AbortController()"', ua: 'Професійне отримання axios даних за допомогою useEffect() і сигналу контролера "AbortController()"'}, body: {en: 'In the example, you can see the quality of getting data from axios, useEffect() and the "Abortcontroller()" controller signal.', ua: 'У прикладі ви можете побачити якість отримання даних від axios, useEffect() і сигналу контролера "Abortcontroller()".'}, link: {en: '#', ua: '#'}, type: 'React', data: 
[
`import User from '../User/User';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
      <div className="App">
        <Router>
            <User />
        </Router>
      </div>
  );
}

export default App;`,
`import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'
import axios from 'axios'

const User = () => {
    const [user, setUser] = useState({})
    const id = useLocation().pathname.split("/")[2]
    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        axios.get('https://jsonplaceholder.typicode.com/users/' + id, {cancelToken: cancelToken.token})
            .then((res) => {
                setUser(res.data)
            }).catch(err => {
                if(axios.isCancel(err)) {
                    console.log('cancelled')
                } else {
                    console.log('Error is not an "AbortError"')
                }
            })
        return () => {
            cancelToken.cancel()
        }

    }, [id])
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <Link to="/users/1">Fetch User 1</Link> <br />
            <Link to="/users/2">Fetch User 2</Link> <br />
            <Link to="/users/3">Fetch User 3</Link> <br />
        </div>
    );
};

export default User;`,
]},
{title: {en: 'async + await request with axios', ua: 'async + await запит за допомогою axios'}, body: {en: 'The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains. With axios help.', ua: 'Оголошення async функції створює прив’язку нової асинхронної функції до заданого імені. Ключове слово await дозволено в тілі функції, що дозволяє записувати асинхронну поведінку, засновану на обіцянках, у зрозумілішому стилі та уникати необхідності явного налаштування ланцюжків promises. Це все створено за допомогою axios.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function'}, type: 'request', data:
`const axios = require('axios');

async function fetchData(url) {
    try {
        // Process the received data
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        // Handle errors if they occur
        console.error('Error while getting data: ', error.message);
    }
}

// Call the function to get the data
fetchData('https://jsonplaceholder.typicode.com/users');
`},
{title: {en: 'nth-child selector', ua: 'nth-child селектор'}, body: {en: 'The :nth-child() CSS pseudo-class matches elements based on their position among a group of siblings.', ua: 'Псевдоклас CSS :nth-child() зіставляє елементи на основі їхньої позиції в групі.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child', ua: 'https://developer.mozilla.org/ru/docs/Web/CSS/:nth-child'}, type: 'markup', data: nthchildselector},
{title: {en: 'Basics of HTML', ua: 'HTML база'}, body: {en: 'Basic information about HTML tags and their properties.', ua: 'Базова інформація стосовно HTML тегів та їх властивості.'}, link: {en: '#', ua: '#'}, type: 'markup', data: [basicsofhtml00, basicsofhtml01, basicsofhtml02, basicsofhtml03, basicsofhtml04, basicsofhtml05, basicsofhtml06]},
{title: {en: 'A large list of sites/web applications for Front-End developers', ua: 'Великий перелік із сайтами/веб-застосунками для Front-End розробників'}, body: {en: '', ua: ''}, link: {en: '#', ua: '#'}, type: 'all', data:
`Web IDE for frontend:
codesandbox.io\n

color palette:
colorhunt.co\n

Fake API:
jsonplaceholder.typicode.com\n

Mail for non-important registrations:
10minuteemail.com\n

Design for one-page sites:
http://onepagelove.com/cursorup\n

Guide for Frontend Developers:
https://my-js.org\n

Website with styles in web format (links):
https://cdnjs.com/\n

resume template website:
jobseeker.com [be careful with your subscription]\n

Website similar to chatGPT:
you.com\n

Website with React patterns:
https://reactpatterns.com/\n

Site with custom icons:
https://storyset.com/\n

Site with spinners:
https://uiball.com/loaders/\n

Website generator of stylized blocks and more:  
softr.io\n

Website with collections of icons for interface styling: 
iconer.app\n

Website with a collection of custom svg backgrounds: 
superdesigner.co\n

A site with all kinds of people icons to illustrate situations with the possibility of customization: 
undraw.co\n

Website with useful features for UI development: 
10015.io\n

Site with 3D figures:  
shapefest.com\n

Website with beautiful free icons: 
futicons.com\n

Website with the ability to generate beautiful blocks/backgrounds using box-shadow: 
neumorphism.io\n

Site for creating svg backgrounds with the possibility of customization: 
https://app.haikei.app/\n

A site with a css library for creating animations in a project: 
http://animate.style\n
`},
{title: {en: 'async await request', ua: 'async await запит'}, body: {en: 'The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.', ua: 'Оголошення async функції створює прив’язку нової асинхронної функції до заданого імені. Ключове слово await дозволено в тілі функції, що дозволяє записувати асинхронну поведінку, засновану на обіцянках, у зрозумілішому стилі та уникати необхідності явного налаштування ланцюжків promises.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function'}, type: 'request', data:
`async function u1() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/1')
    return result.text()
}
  
async function u2() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/2')
    return result.text()
}
  
async function u3() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/3')
    return result.text()
}
  
// Not Optimized Function
async function getUsersNotOptimized() {
    const user1 = await u1()
    console.log(user1)
    const user2 = await u2()
    console.log(user2)
    const user3 = await u3()
    console.log(user3);
}
getUsersNotOptimized()
  
// Optimized Function
async function getUsersOptimized() {
    const [user1, user2, user3] = await Promise.allSettled([
        u1(),
        u2(),
        u3()
    ])
    console.log(user1.value);
    console.log(user2.value);
    console.log(user3.value);
}
getUsersOptimized()
  
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json()
}

async function printUsers(data) {
    const result = await data
    console.log(result)
}
printUsers(getUsers())`},
{title: {en: 'Glassmorphism block', ua: 'Блок у стилі скла'}, body: {en: '', ua: ''}, link: {en: '#', ua: '#'}, type: 'markup', data:
[glassmorphism,
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Glassmorphism</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
<div class="container">
    <div class="glassmorphism"></div>
</div>
<script src="main.js"></script>
</body>
</html>`,
`body {
    margin: 0;
    padding: 0;
    background: url(background.jpg);
}
.container {
    display: flex;
    justify-content: center;
    padding-top: 180px;
}

.glassmorphism {
    width: 600px;
    height: 400px;
    border-top: 2px solid #FFFFFF75;
    border-left: 2px solid #FFFFFF75;
    box-shadow: 5px 5px 12px #00000035;
    background: #FFFFFF25;
    border-radius: 15px;
    overflow: hidden;
    backdrop-filter: blur(4px);
}`]},
{title: {en: 'Grid layout cheat sheet', ua: 'Шпаргалка по Grid системі'}, body: {en: 'This picture contains the most important concepts of the Grid system, which are required for markup.', ua: 'На цій картинці зібрані найголовніші поняття по Grid системі, що потрібні для верстки.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/grid', ua: 'https://developer.mozilla.org/ru/docs/Web/CSS/grid'}, type: 'markup', data: gridlayout},
{title: {en: 'Basic TypeScript data types', ua: 'Основні типи даних TypeScript'}, body: {en: 'There are 3 main data types in TypeScript. These are number, string and boolean.', ua: 'У TypeScript існують 3 основні типи даних. Це number, string та boolean. Тобто числа, строки та логічні типи даних.'}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html', ua: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html'}, type: 'typescript', data: 
`const userName: string = 'Ilya'
const age: number = 16
const isStudent: boolean = true

if (isStudent) console.log(userName + ' is ' + age + ' years old and he is a student.')
// Ilya is 16 years old and he is a student.`},
{title: {en: 'Typing a function and what exactly it should return', ua: 'Типізація функції та що саме вона має повертати'}, body: {en: 'The function has the ability to specify what exactly it should return. If the current function does not have a return or the function returns undefind, then void must be written. Because this function returns void. If we need the function to return something specific, for example a clear answer as a string, then we need to write type string. This notation is the same in normal functions and in arrow functions.', ua: 'У функції є можливість прописати, що саме вона має повертати. Якщо усередені функції нема return або функція повертаю undefind, то треба прописати void. Оскільки ця функція повертає порожнечу. Якщо нам треба аби функція повертала конкретно щось, наприклад чітку відповідь у форматі строки, то нам треба це прописати. У звичайних функціях та у стрілочних функціях це прописування є однаковим.'}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/functions.html', ua: 'https://www.typescriptlang.org/docs/handbook/2/functions.html'}, type: 'typescript', data: [
`const isBirthdayData: boolean = true
const userNameData: string = 'John'
const ageData: number = 40

/* if function has nothing to return or this function returns undefind, then function must has type void */
function logBirthdayCongrats(isBirthday: boolean, userName: string, age: number): void {
    if (isBirthday) console.log('Congrats ' + userName.toUpperCase() + ', age: ' + (age + 1))
    // return undefind // this return is possible for void function
}

logBirthdayCongrats(isBirthdayData, userNameData, ageData) // Congrats JOHN, age: 41`,
`/* if function has something to return, then function must has current type */
function logBirthdayCongrats(isBirthday: boolean, userName: string, age: number): string {
    if (isBirthday) {
        return 'Congrats ' + userName.toUpperCase() + ', age: ' + (age + 1)
    } else {
        return 'Error'
    }
}

console.log(
  logBirthdayCongrats(isBirthdayData, userNameData, ageData)
) // Congrats JOHN, age: 41`,
`const logBirthdayCongrats = (
  isBirthday: boolean, 
  userName: string, 
  age: number
): string => {
  if (isBirthday) {
      return 'Congrats ' + userName.toUpperCase() + ', age: ' + (age + 1)
  } else {
      return 'Error'
  }
}

console.log(
  logBirthdayCongrats(isBirthdayData, userNameData, ageData)
) // Congrats JOHN, age: 41`,
]},
{title: {en: 'The never type in functions and where it is used', ua: 'Тип never у функціях та де він використовується'}, body: {en: 'The never type is usually used when we need to write an error output. Another never type can occur when we have an infinite while loop or an infinite recursion. In general, we need the never type as a stopgap when we have a possible error when processing its arguments in the function.', ua: 'Тип never зазвичай використовується, коли нам треба прописати вивід помилки. Ще тип never може виникнути, коли в нас є безкінечний цикл while або безкінечна рекурсія. Взагалом тип never нам потрібен, як затичка, коли в нас можлива помилка при обробці у функції її аргументів.'}, link: {en: 'https://www.typescriptlang.org/docs/handbook/basic-types.html', ua: 'https://www.typescriptlang.org/docs/handbook/basic-types.html'}, type: 'typescript', data: 
`/* The never type is used when something in the function will never be returned in time. That is, the difference between void and never is that void returns undefind, and never returns nothing at all */
const createError = (error: string): never => {
    throw new Error(error)
}

function checkViruses(protocol: 0 | 1 | number): string {
    if (protocol === 0) return 'No viruses.'
    
    if (protocol === 1) return 'Danger!'

    return createError("Wrong protocol numbers")
}

console.log(
    checkViruses(1)
) // Danger!

console.log(
    checkViruses(13)
)
/* 
    index.js:4 Uncaught Error: Wrong protocol numbers
    at createError (index.js:4:11)
    at checkViruses (index.js:11:12)
    at index.js:14:13 
*/`},
{title: {en: 'The null and undefined types in TypeScript', ua: 'Типи null та undefined у TypeScript'}, body: {en: '"undefined" values have not been defined yet, whereas "null" values indicate intentional absence of a value.', ua: '"undefined" значення ще не визначені, тоді як "null" значення вказують на навмисну відсутність значення.'}, link: {en: 'https://basarat.gitbook.io/typescript/recap/null-undefined', ua: 'https://basarat.gitbook.io/typescript/recap/null-undefined'}, type: 'typescript', data: 
`/* null is the absence of anything at all */
/* undefined is a type that says something doesn't exist */

const T1: null = null // correct
const T2: any = null // correct
// const T3: string = null // not correct
// const T4: number = null // not correct

const T5: undefined = undefined // correct
const T6: any = undefined // correct
// const T7: string = undefined // not correct

let anyVar // type any

function getRandomData() {
    if (Math.random() < 0.5) {
        return null
    } else {
        return ' Some data  '
    }
}

const data = getRandomData()
const trimmedData = data ? data.trim() : null`},
{title: {en: 'symbol and bigint types in TypeScript', ua: 'Типи symbol та bigint у TypeScript'}, body: {en: 'Starting with ECMAScript 2015, "symbol" is a primitive data type, just like number and string. "symbol" values are created by calling the Symbol constructor. "bigint" part of an upcoming proposal in ECMAScript that allow us to model theoretically arbitrarily large integers.', ua: 'Починаючи з ECMAScript 2015, "symbol" — це примітивний тип даних, як число та рядок. Значення "symbol" створюються шляхом виклику конструктора Symbol. "bigint" частина майбутньої пропозиції в ECMAScript, яка дозволяє нам моделювати теоретично довільно великі цілі числа.'}, link: {en: 'https://www.typescriptlang.org/', ua: 'https://www.typescriptlang.org/'}, type: 'typescript', data: 
`let id: symbol = Symbol('id')

const data = {
    [id]: 1
}

console.log(data[id]) // 1

// set "target":"2020" in tsconfig
const num1: bigint = 1n
const num2: bigint = 2n

// console.log(num1 + 5) // Error! Operator '+' cannot be applied to types 'bigint' and '5'
console.log(num1 + num2) // 3n`},
{title: {en: 'Objects and their destructuring in TypeScript', ua: "Об'єкти та їч деструктурізація у TypeScript"}, body: {en: 'In general, the code shown in this post is used very rarely, because there are other more powerful types of object types and destructuring. But this code shows just the basic use of objects.', ua: "Взагалі код, що показаний у цьому пості застосовується дуже рідко, оскільки існують інші більш потужні види типізацій та деструктурізації об'єктів. Але у цьому коді показано саме базове використовування об'єктів."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/objects.html', ua: 'https://www.typescriptlang.org/docs/handbook/2/objects.html'}, type: 'typescript', data: 
`const userData: {name: string, age: number, skills: string[], isStudent: boolean} = {
    name: 'Alex',
    age: 30,
    skills: ['dev', 'test', 'disign'],
    isStudent: false
}

// Not destructured object in function arguments
function userAnalysis(user: {name: string, age: number, skills: string[], isStudent: boolean}): string {
    if (user.isStudent) {
        return "Sorry, but you are student. Let's meet another time!"
    } else {
        return 'Hello, ' + user.name + '. You are ' + user.age + ' years old and you have ' + user.skills.join(', ') + ' skills.'
    }
}

console.log(
    userAnalysis(userData)
) // Hello, Alex. You are 30 years old and you have dev, test, disign skills.

// Destructured object in function arguments
function userGreeting({name, age, isStudent}: {name: string, age: number, isStudent: boolean}): string {
    if (isStudent) {
        return 'Hello! Nice to meet you, ' + name + '! Hope we are in the same class!'
    } else {
        return 'Hi, ' + name + "! It's so glad to see such a great specialist as for " + age + ' years old!'
    }
}

console.log(
    userGreeting(userData)
) // Hi, Alex! It's so glad to see such a great specialist as for 30 years old!

// Destructured object
let {age, isStudent} = userData

console.log(age) // 30
console.log(isStudent) // false`},
{title: {en: 'Arrays and their destructuring in TypeScript', ua: "Масиви та їч деструктурізація у TypeScript"}, body: {en: 'Usually arrays and their destructuring in TypeScript is not hard typing. The same applies to both ordinary and multidimensional arrays, etc.', ua: "Зазвичай масиви та їх деструктурізація у TypeScript це не важка типізація. Це ж стосується як звичайних масивів так і мультівимірних тощо."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/objects.html', ua: 'https://www.typescriptlang.org/docs/handbook/2/objects.html'}, type: 'typescript', data: 
`const departments: string[] = ['dev', 'design', 'marketing'] // simple array

const department: string = departments[0]

// departments.push(5) // Error! Argument of type 'number' is not assignable to parameter of type 'string'.

const report = departments
    .filter((d: string) => 
        d !== 'dev'
    )
    .map((d: string) => 
    d + ' - done'
    )

const nums: number[][] = [[3, 5, 6], [1, 2, 4]] // multidimensional array

const [first] = report

console.log(first) // design - done
`},
{title: {en: 'Tuples in TypeScript', ua: "Tuples (Кортежі) у TypeScript"}, body: {en: 'Tuples is an array that has a clear sequence of data and its types, as you can see in the code of the post. You cannot dynamically change the type of one of the elements using array methods or by calling a specific element by index. Tuples also have the ability to spread some specific type of data like an array using the spread operator, but there is one condition. You can perform this action once per Tuple.', ua: "Tuples (Кортежі) - це масив, що має чітку послідовність даних та їх типів, як можно побачити у коді поста. Ти не маєш змогу змінити динамічно тип одного з елементів за допомогою методів масиву чи викликом конкретного елемента за індексом. Також у Tuples (Кортежі) є змога розвернути якийсь конкретний тип даних мов масив за допомогою spread оператора, але є одна умова. Таку дію ти можеш зробити один раз на один Tuple (Кортеж)."}, link: {en: 'https://www.tutorialsteacher.com/typescript/typescript-tuple', ua: 'https://www.tutorialsteacher.com/typescript/typescript-tuple'}, type: 'typescript', data: 
`const userDataTuple: [boolean, number, string] = [true, 40, 'John']

/* tuple with spread operator */
const carsDataTuple: [boolean, number, ...string[]] = [true, 42, 'Audi', 'Ford', 'Opel']

/* tuple with spread operator */
const FiboLoopTuple: [...number[], boolean, string] = [1, 1, 2, 3, 5, 8, 13, true, 'FiboLoop']

/* tuple with spread operator and error. It's because tuple must have only one spread */
// const userDataTuple: [...boolean[], number, ...string[]] = [true, 40, 'John', 'Alex', 'Anna'] // Error! A rest element cannot follow another rest element.

/* you can't change tuple element type */
// userDataTuple[0] = 'true' // Error! Type 'string' is not assignable to type 'boolean'.
// userDataTuple[3] // Error! Tuple type '[boolean, number, string]' of length '3' has no element at index '3'.

/* you can push something in the tuple but it will not count */
// userDataTuple.push(50)
// userDataTuple[3] // Error! Tuple type '[boolean, number, string]' of length '3' has no element at index '3'.

const res = userDataTuple.map((t) => t + ' - data') // res array will be string[] type

const [birthday, age, userName] = userDataTuple // tuple destructuring`},
{title: {en: 'Union type in TypeScript', ua: "Тип Union (Об'єднаний) у TypeScript"}, body: {en: 'Typically, the Union type is used by developers to record undefined information in advance. For example: we have an error output and we do not know what it will give us, whether it is a 404 number or a "not found" notification, and for this we need a Union type. But there is also a downside to the use of this technology, namely uncertainty. Because if we have variants of string or number types, then we definitely cannot apply methods for this information. For example: we have a choice between a string and a number, and in the function we need to output information from the argument, but we cannot apply the toUpperCase() method to this information, because the information can be a number, and numbers do not have the toUpperCase() method .', ua: "Зазвичай тип Union використовується розробниками для запису невизначеної заздалегідь інформації. Наприклад: в нас є вивід помилки і ми не знаємо, що саме нам видасть, чи число 404, чи сповіщення ''не знайдено'' і ось для цього нам потрібен тип Union. Але є і мінус застосування цієї технології, а саме невизначеність. Бо якщо в нас є варіанти типів строки чи числу, то ми однозначно не можемо застосувати методи для цієї інформації. Наприклад: в нас є вибір між строкою та числом і у фінкції нам треба вивести інформацію з аргументу, але ми не можемо застосувати метод toUpperCase() до цієї інформації, оскільки інформація може бути і числом, а вже у числа не має методу toUpperCase()."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html', ua: 'https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html'}, type: 'typescript', data: 
`let message: string | number = 5
// message = 'hello' // correct

let messages: string[] | number[] = ['a', 'b']
// messages = [1, 1, 2, 3, 5, 8] // correct

function printMessage(msg: string | number): void {
    console.log(msg)
    // console.log(msg.toLowerCase()) // Error! Property 'toLowerCase' does not exist on type 'string | number'. Property 'toLowerCase' does not exist on type 'number'.
}

printMessage(4) // 4
printMessage('hello') // hello`},
{title: {en: 'Narrowing Union type using Type Guard and Type Flow methods in TypeScript', ua: "Narrowing (Звуження) типу Union (Об'єднаний) та Type Guard у TypeScript"}, body: {en: 'Commonly, data type narrowing for Union type is used to use specific methods for specific data types. For this, commands such as Array.isArray() are used for arrays, "in" for objects, instanceof for classes, etc.', ua: "Зазвичай для використання конкретних методів для конкретних типів даних використовуються Narrowing (Звуження) типів даних для типу Union. Для цього використовують такі команди, як Array.isArray() для масивів, ''in'' для об'єктів, instanceof для класів тощо."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html', ua: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html'}, type: 'typescript', data: [
`/* Case 1. Narrowing Union type using conditions. */
function typeOfValue(value: string[] | number | boolean): void {
    if (Array.isArray(value)) {
        console.log("It's String Array type.")
    } else if (typeof value === "number") {
      console.log("It's Number type.")
    } else {
      console.log("It's Boolean type.")
    }
}

typeOfValue(4); // It's Number type.
typeOfValue(false); // It's Boolean type.
typeOfValue(['hello', 'world!', 'how', 'are', 'you?']); // It's String Array type.`,
`/* Case 2. Narrowing Union type using switch/case. */
function typeOfValue(value: object | number | boolean): void {
    switch (typeof value) { 
        case 'boolean':
            console.log("It's Boolean type.")
            break
        case 'number':
            console.log("It's Number type.")
            break
        default: 
            console.log("It's Object type.")   
            break
    }
}

typeOfValue(4); // It's Number type.
typeOfValue({}); // It's Object type.
typeOfValue(false); // It's Boolean type.`,
`/* Case 3. Narrowing Union type using generic methods. */
const removeLastValue = (n: number[] | string) => {
    console.log(n.slice(0, -1));
};

removeLastValue([1, 1, 2, 3, 5]) // (4) [1, 1, 2, 3]
removeLastValue('Hello World!') // Hello World`,
`/* Case 4. Narrowing Union type using operator "in" for objects' comparison. */
const checkReadings = (
    readings: { system: number } | { user: number }
): void => {
    if ("system" in readings) {
        console.log(readings.system);
    } else {
        console.log(readings.user);
    }
};

checkReadings({system: 32}) // 32
checkReadings({user: 1}) // 1`,
`/* Case 5. Narrowing Union type using operator instanceof for objects' and Classes comparison. */
function isDate(x: string | Date) {
    if (x instanceof Date) {
        console.log("It's Date class type.");
    } else {
        console.log("It's String type.");
    }
}

isDate('18.09.2000') // It's String type.
isDate(new Date()) // It's Date class type.`,
`/* Case 7. Narrowing Union type using Type Flow method. */
interface ICar {
    name: "car";
    engine: string;
    wheels: {
        number: number;
        type: string;
    };
}

interface IShip {
    name: "ship";
    engine: string;
    sail: string;
}

interface IAirplane {
    name: "airplane";
    engine: string;
    wings: number;
}

const car: ICar = {
    name: "car",
    engine: "M57",
    wheels: {
        number: 4,
        type: "Composite wheels"
    }
};

const ship: IShip = {
    name: "ship",
    engine: "Yamaha 9.9 GMHS",
    sail: "Default"
};

const airplane: IAirplane = {
    name: "airplane",
    engine: "Rocket engines",
    wings: 2
};

// Type Flow method:
function isCar(car: ICar | IShip): car is ICar {
    return (car as ICar).wheels !== undefined;
}

function isShip(ship: ICar | IShip): ship is IShip {
    return "sail" in ship;
}

function repairVehicle(vehicle: ICar | IShip): void {
    if (isCar(vehicle)) {
        console.log(vehicle.wheels);
    } else if (isShip(vehicle)) {
        console.log(vehicle.sail);
    } else {
        console.log(vehicle); // vehicle: never
    }
}

repairVehicle(car); // { number: 4, type: 'Composite wheels' }
repairVehicle(ship); // Default

function sellVehicle(vehicle: ICar | IShip | IAirplane): void {
    switch (vehicle.name) {
        case "car":
        console.log("I have " + vehicle.wheels.number + " wheels for sell.");
        break;
        case "ship":
        console.log("I have " + vehicle.sail + " sail for sell.");
        break;
        case "airplane":
        console.log("I have " + vehicle.wings + " wings for sell.");
        break;
        default:
        const remainder = vehicle; // vehicle: never
    }
}

sellVehicle(car); // I have 4 wheels for sell.
sellVehicle(ship); // I have Default sail for sell.
sellVehicle(airplane); // I have 2 wings for sell.`
]},
{title: {en: 'Literal types in TypeScript', ua: "Літеральні типи у TypeScript"}, body: {en: 'Literal types are data types used to specify values for variables, function arguments, etc. For example: we need to specify which protocol and port the server should be run on (see the post code). We have a choice of either http or https protocol, then port 3000 or 3001. We cannot have another protocol or another port, if we enter something else, then our server simply will not start.', ua: "Літеральні типи - це такі типи даних, що слугують для конкретизації значень для змінних, аргументів функцій тощо. Наприклад: нам потрібно зазначити за яким протоколом та за яким портом на треба запускати сервер (дивіться на код посту). В нас є вибір або http, або https протокол, далі порт 3000 чи 3001. В нас не може бути інший протокол, чи інший порт, якщо ми впишемо щось інше, то в нас просто не запуститься сервер."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/literal-types.html', ua: 'https://www.typescriptlang.org/docs/handbook/literal-types.html'}, type: 'typescript', data: 
`let message: 'Hello' = 'Hello' 
message = 'Hello' // correct
// message = 'hello' // Error! Type '"hello"' is not assignable to type '"Hello"'.

function createAnimation(
    id: string | number, 
    animationName: string, 
    timingFunc: 'ease' | 'ease-out' | 'ease-in' = 'ease',
    duration: number,
    iterCount: 'infinite' | number
): void {
    console.log(message)
    const elem = document.querySelector('#' + id) as HTMLElement
    if (elem) {
        console.log(animationName + ' ' + timingFunc + ' ' + duration + ' ' + iterCount)
        elem.style.animation = animationName + ' ' + timingFunc + ' ' + duration + ' ' + iterCount
    }
}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite') // fade ease-in 5 infinite`}, 
{title: {en: 'Type Aliases in TypeScript', ua: "Тип Aliases у TypeScript"}, body: {en: 'Type "Aliases" create a new name for a type. Type "Aliases" are sometimes similar to "Interfaces", but can name primitives, "Unions", "Tuples", and any other types that you’d otherwise have to write by hand.', ua: "Тип ''Aliases'' створює нову назву для типу. Тип ''Aliases'' іноді схожий на ''Interfaces'', але може іменувати примітиви, ''Unions'', ''Tuples'' та будь-які інші типи, які інакше вам довелося б писати вручну."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html', ua: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html'}, type: 'typescript', data: 
`type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in'
type AnimationID = string | number
type AnimationIterCount = 'infinite' | number

function createAnimation(
    id: AnimationID, 
    animationName: string, 
    timingFunc: AnimationTimingFunc = 'ease',
    duration: number,
    iterCount: AnimationIterCount
): void {
    const elem = document.querySelector('#' + id) as HTMLElement
    if (elem) {
        console.log(animationName + ' ' + timingFunc + ' ' + duration + ' ' + iterCount)
        elem.style.animation = animationName + ' ' + timingFunc + ' ' + duration + ' ' + iterCount
    }
}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite') // fade ease-in 5 infinite`},
{title: {en: 'Object Literals and Function Annotations in TypeScript', ua: "Об'єктні Literals (Літерали) та анотації функцій"}, body: {en: 'Usually, object "Literals" and function annotations are not used very much in future developments due to their inconvenience, unreadability and non-reusability, but the realization that this way of typing objects and function annotations is definitely worth it.', ua: "Зазвичай об'єктні Literals (Літерали) та анотації функцій не дуже використовуються при будених розробках через свою незручніть, нечитабельність та неперевикористовуванність, але усвідомлення про те, що такий спосіб типізації об'єктів та анотацій до функцій однозначно вартую того."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/objects.html', ua: 'https://www.typescriptlang.org/docs/handbook/2/objects.html'}, type: 'typescript', data: 
`const serverConfig: {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
} = {
    protocol: 'https',
    port: 3001
}

const startServer: 
(protocol: 'http' | 'https', port: 3000 | 3001) => string /* <- function annotation */ = (
    protocol: 'http' | 'https', /* <- function announcement */
    port: 3000 | 3001 /* <- function announcement */
): 'Server Started' => { // (parameter) protocol: "http" | "https", (parameter) port: 3000 | 3001
    console.log('Server started on ' + protocol + '://server:' + port)
    return 'Server Started'
}

startServer(serverConfig.protocol, serverConfig.port) // Server started on https://server:3001`},
{title: {en: 'All about useCallback()', ua: "Все про useCallback()"}, body: {en: 'useCallback() is a React hook that allows you to cache function definitions between re-renders. It is usually used to receive information from the server so that the request is not re-sent in case of an arbitrary phenomenon.', ua: "useCallback() — це хук React, який дозволяє кешувати визначення функції між повторними візуалізаціями. Зазвичай його використовують для отримання інформації із серверу так, щоб при довільному явищі запит повторно не посилався."}, link: {en: 'https://react.dev/reference/react/useCallback', ua: 'https://react.dev/reference/react/useCallback'}, type: 'React', data: 
[`import { useState, useCallback } from "react";
import Buttons from "./Buttons";

const Demo = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((count) => count + 1), []);
  const decrement = useCallback(() => setCount((count) => count - 1), []);

  return (
    <>
      <h1>{count}</h1>
      <Buttons increment={increment} decrement={decrement} />
    </>
  );
};

export default Demo;
`,
`import { memo } from "react";

type counterFunc = () => void;

const Buttons = memo(
  ({
    increment,
    decrement
  }: {
    increment: counterFunc;
    decrement: counterFunc;
  }) => {
    console.log("Buttons Render");

    return (
      <>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </>
    );
  }
);

export default Buttons;
`]},
{title: {en: 'Easy loader', ua: "Легеньки спіннер (лоадер)"}, body: {en: 'This spinner (loader) is made using basic styles and animations.', ua: "Цей спіннер (лоадер) зроблений за допомогою базових стилів та анімації."}, link: {en: '#', ua: '#'}, type: 'markup', data: 
[easyLoader, 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Loader</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="loader"></div>
    </div>
  <script src="main.js"></script>
</body>
</html>`, 
`.container {
    position: absolute;
    top: 40%;
    left: 45%;
    transform: (-54%, -50%);
}

.loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}`]},
{title: {en: 'Custom useLocalStorage() hook', ua: 'Зроблений власноруч хук useLocalStorage()'}, body: {en: 'This useLocalStorage() hook is made using LocalStorage technology and its capabilities. This hook will come in handy when developing your applications.', ua: 'Цей хук useLocalStorage() зроблений за допомогою технології LocalStorage та її можливостей. Цей хук буде внагоді при розробці своїх застоснунків.'}, link: {en: '#', ua: '#'}, type: 'React', data: 
[`export function useLocalStorage(key: string) {
  function setItem(value: string) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  function getItem() {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.stringify(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  }

  function removeItem() {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  return { setItem, getItem, removeItem };
}`,
`import { useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

export default function Demo() {
  const [value, setValue] = useState("");
  const { setItem, getItem, removeItem } = useLocalStorage("value");

  return (
    <>
      <input
        defaultValue={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button onClick={() => setItem(value)}>Set</button>
      <button onClick={() => console.log(getItem())}>Get</button>
      <button onClick={removeItem}>Remove</button>
    </>
  );
}`]},
{title: {en: 'Advanced Type Aliases in TypeScript', ua: 'Продвинутий Type Aliases у TypeScript'}, body: {en: 'Advanced "Aliases" Type in TypeScript can contain not only basic types or "Union" Type, but also entire Objects or annotations for functions.', ua: `Продвинутий "Aliases" Type у TypeScript може в собі вмістити не тільки базові типи чи "Union" Type, а й цілі Об'єкти чи анотації для функцій.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html', ua: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html'}, type: 'typescript', data: 
`type Car = {
    id: number,
    name: string,
    spareParts: string[]
}

type Region = {
    country: string
}

// Type intersection
type CarWithRegion = Car & Region

const Audi: Car = {
    id: 1,
    name: 'A6',
    spareParts: ['steering wheel', 'motor', 'carburetor']
}

const AudiToUkraine: CarWithRegion = {
    id: 2,
    name: 'A100',
    spareParts: ['suspension', 'brake system', 'engine'],
    country: 'Ukraine'
}

type StartExprort = (permission: boolean, region: string, exportId: number) => string

// Function annotation
const exprortControl: StartExprort = (permission: boolean, region: string, exportId: number): string => {
    if (permission) return 'Car will go to ' + region + ' region with export id: ' + exportId + '.'
    else return "Car have not permission for export."
}

console.log(
    exprortControl(true, 'Canada', 3)
) // Car will go to Canada region with export id: 3.

console.log(
    exprortControl(false, 'USA', 4)
) // Car have not permission for export.`},
{title: {en: 'Interfaces in TypeScript', ua: 'Interfaces (Інтерфейси) у TypeScript'}, body: {en: 'One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.', ua: `Одним із основних принципів TypeScript є те, що перевірка типу зосереджена на формі, яку мають значення. Це іноді називають «качиним типом» або «структурним підтипом». У TypeScript інтерфейси виконують роль імен цих типів і є потужним способом визначення контрактів у вашому коді, а також контрактів із кодом за межами вашого проекту.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/interfaces.html', ua: 'https://www.typescriptlang.org/docs/handbook/interfaces.html'}, type: 'typescript', data: [
`/* Case 1. Announcement of interfaces. */
interface ISpaceship {
    id: number
    name: string
}

interface ISpaceshipSide {
    side: 'empire' | 'rebels'
}

// interface ISpaceshipInfo extends ISpaceship, ISpaceshipSide {} // correct
interface ISpaceshipInfo extends ISpaceship, ISpaceshipSide {
    wasStolen: boolean
}

const spaceship1: ISpaceshipInfo = {
    id: 1,
    name: 'Star Destroyer',
    side: 'empire',
    wasStolen: false
}

const spaceship2: ISpaceshipInfo = {
    id: 2,
    name: 'Ghost',
    side: 'rebels',
    wasStolen: true
}

const spaceship3: ISpaceshipInfo = {
    id: 3,
    name: 'Tie Fighter',
    side: 'empire',
    wasStolen: true
}`,
`/* Case 2. Inserting interfaces for typing arguments of function. */
function checkSpaceship(spaceship: ISpaceshipInfo): string {
    if (spaceship.side === 'rebels') {
        return "Rebel's spaceship: " + spaceship.name + ' does not get access to the seat.'
    } else if (spaceship.wasStolen) {
        return 'Spaceship: ' + spaceship.name + ' was stolen.'
    } else {
        return 'Spaceship: ' + spaceship.name + ' has access to boarding.'
    }
}

console.log(
    checkSpaceship(spaceship1)
) // Spaceship: Star Destroyer has access to boarding.

console.log(
    checkSpaceship(spaceship2)
) // Rebel's spaceship: Ghost does not get access to the seat.

console.log(
    checkSpaceship(spaceship3)
) // Spaceship: Tie Fighter was stolen.`,
`/* Case 3. Inserting interfaces to typing the result of a function's output. */
const newSpaceship: ISpaceship = {
    id: 4,
    name: 'Y-Wing'
}

function createSpaceshipInfo(spaceship: ISpaceship, side: 'empire' | 'rebels', wasStolen: boolean): ISpaceshipInfo {
    return {
        id: spaceship.id,
        name: spaceship.name,
        side: side,
        wasStolen: wasStolen
    }
}

const spaceship4 = createSpaceshipInfo(newSpaceship, 'rebels', false)

console.log(spaceship4) // { id: 4, name: 'Y-Wing', side: 'rebels', wasStolen: false }`,
`/* Case 4. Inserting interfaces to typing a variable. */
const spaceshipList: ISpaceshipInfo[] = [
    spaceship1,
    spaceship2,
    spaceship3,
    spaceship4,
    {
        id: 5,
        name: 'Millenium Falcon',
        side: 'rebels',
        wasStolen: false
    }
]
console.log(spaceshipList)
/*
[
    {
        "id": 1,
        "name": "Star Destroyer",
        "side": "empire",
        "wasStolen": false
    }, {
        "id": 2,
        "name": "Ghost",
        "side": "rebels",
        "wasStolen": true
    }, {
        "id": 3,
        "name": "Tie Fighter",
        "side": "empire",
        "wasStolen": true
    }, {
        "id": 4,
        "name": "Y-Wing",
        "side": "rebels",
        "wasStolen": false
    }, {
        "id": 5,
        "name": "Millenium Falcon",
        "side": "rebels",
        "wasStolen": false
    }
] 
*/`,
`/* Case 5. Inserting interfaces to typing a function. */
interface ILogSpaceshipInfo {
    (spaceshipInfo: ISpaceshipInfo): void
}

const logSpaceshipInfo: ILogSpaceshipInfo = (spaceshipInfo: ISpaceshipInfo) => {
    if (spaceshipInfo.side === 'empire') {
        console.log('Welcome, ' + spaceshipInfo.name + '.')
    } else {
        console.log('Go head of here rebel scum.')
    }
}

logSpaceshipInfo(spaceship1) // Welcome, Star Destroyer.
logSpaceshipInfo(spaceship2) // Go head of here rebel scum.

interface IRegisterSpaceship {
    (spaceshipInfo: ISpaceshipInfo, logSpaceshipInfo: ILogSpaceshipInfo): string
}

const registerSpaceship: IRegisterSpaceship = (spaceshipInfo: ISpaceshipInfo, logSpaceshipInfo: ILogSpaceshipInfo) => {
    logSpaceshipInfo(spaceshipInfo)
    return "Register went successful."
}

registerSpaceship(spaceship3, logSpaceshipInfo) // Welcome, Tie Fighter.

console.log(
    registerSpaceship(spaceship3, logSpaceshipInfo)
)
/* 
    Welcome, Tie Fighter.
    Register went successful.
*/

interface ISecretSpaceship {
    id: number
    name: string
    specialIntroduction: (pilotName: string) => string
}

const secretSpaceship1: ISecretSpaceship = {
    id: 1,
    name: 'Tie Interceptor',
    specialIntroduction: (pilotName: string) => {return 'Pilot name: ' + pilotName + ', code: 823714'}
}

console.log(
    secretSpaceship1.specialIntroduction('Grand Inquisitor')
) // Pilot name: Grand Inquisitor, code: 823714

function checkSecretSpaceship(
    {id, name, specialIntroduction}: ISecretSpaceship, pilotName: string
    ): void {
    if (specialIntroduction(pilotName) === 'Pilot name: Grand Inquisitor, code: 823714') {
        console.log('Spaceship: ' + name + ', with id: ' + id + ' has got access to boarding.')
    } else {
        console.log("Spaceship hasn't got acess to boarding.")
    }
}

checkSecretSpaceship(secretSpaceship1, 'Grand Inquisitor') // Spaceship: Tie Interceptor, with id: 1 has got access to boarding.`,
`/* Case 6. Inserting interfaces to typing a function with generics. */
const message: string = 'Obi Wan you are my only hope.'
const executeOrder: number = 66

interface IGetMessageInfoGeneric {
    <T>(data: T): T
}

const message1: IGetMessageInfoGeneric = <T>(data: T): T => {
    return data
}

console.log(
    message1(message)
) // Obi Wan you are my only hope.

const getMessageInfo = <T>(data: T): T => {
    switch (typeof data) {
        case "string":
            console.log(data.toUpperCase())
            return data
        case "number":
            console.log("Binary Code of Order: " + data.toString(2))
            return data
        default:
            console.log('Not valid message.')
            return data
    }
}

interface IGetMessageInfoTypeQuery {
    processing: typeof getMessageInfo
}

const message2: IGetMessageInfoTypeQuery = {
    processing: getMessageInfo,
}

console.log(
    message2.processing(message)
)
// OBI WAN YOU ARE MY ONLY HOPE.
// Obi Wan you are my only hope.

console.log(
    message2.processing(executeOrder)
)
// Binary Code of Order: 1000010
// 66

const message3: IGetMessageInfoGeneric = getMessageInfo

console.log(
    message3(67)
)
// Binary Code of Order: 1000011
// 67`,
`/* Case 7. Assignment an undefined key with a current value.*/
interface IBase {
    [key: string]: string
}

const hothBase: IBase = {
    name: 'Hoth',
    side: 'rebels'
} 

const undefinedBase: IBase = {
    name: 'Takaro'
}`,
]},
{title: {en: 'Interfaces VS Type Alias in TypeScript', ua: 'Interfaces VS Type Alias у TypeScript'}, body: {en: 'Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable. For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type.', ua: `Type Alias та Interface дуже схожі, і в багатьох випадках ви можете вільно вибирати між ними. Майже всі функції Interface доступні в Type Alias, ключовою відмінністю є те, що Type Alias не можна повторно відкрити для додавання нових властивостей проти Interface, який завжди розширюється. Здебільшого ви можете вибрати на основі особистих уподобань, і TypeScript підкаже вам, чи потрібно щось, щоб бути іншим типом оголошення. Якщо вам потрібна евристика, використовуйте Interface, доки вам не знадобиться використовувати функції Type Alias.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces', ua: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces'}, type: 'typescript', data: InterfaceVSTypeAlias},
{title: {en: 'Property Modifiers (Optional Properties) in TypeScript', ua: 'Модифікатори властивостей (Додаткові властивості) у TypeScript'}, body: {en: 'Property modifiers are usually used when we have a clear form, but it has some optional fields. For example, the user can enter his name, but if he does not want to do this, then we will call him by his login, since the login is a mandatory input field for us.', ua: `Модифікатори властивостей зазвичай використовують, коли в нас є чітка форма, але у неї є декілька не обов'язкових полей. Наприклад користувач може ввести своє ім'я, але якщо він цього не хоче робити, то ми його будем називати за логіном, оскільки логін в нас обов'язкове поле для вводу.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties', ua: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties'}, type: 'typescript', data: 
`interface IUser {
    login: string,
    password: number,
    name?: string,
    age?: number
    skills?: {
        techLanguage?: string,
        framework?: string
    }
}

const user: IUser = {
    login: 'Xlaoru',
    password: 143584,
    // name: 'Ilya', // Not mandatory
    age: 16,
    skills: {framework: 'React.js'}
}

const isStudent: boolean = true

function sendUserData(userData: IUser, isStudent?: boolean): string {
    if (isStudent) console.log(!userData.name ? userData.login + ' is student' : userData.name + ' is student')
    return 'Hello, ' + userData.login + '! Nice to meet you! You are ' + userData.age + ', but you already know ' + userData.skills?.framework 
}

console.log(
    sendUserData(user, isStudent)
)
// Xlaoru is student
// Hello, Xlaoru! Nice to meet you! You are 16, but you already know React.js`},
{title: {en: 'Non-null Assertion Operator (Postfix !) in TypeScript', ua: 'Non-null Assertion Operator (Postfix !) у TypeScript'}, body: {en: 'TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined.', ua: `TypeScript також має спеціальний синтаксис для видалення null і undefined з типу без виконання будь-якої явної перевірки. Написання ! після будь-якого виразу фактично є твердженням типу, що значення не є null або undefined.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-', ua: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-'}, type: 'typescript', data: 
`interface IRequest {
    requestType: 'get' | 'post'
    requestText?: {
        title?: string,
        body?: string
    }
}

const request: IRequest = {
    requestType: 'get',
    requestText: {title: 'Hello World'}
}

let dbName: string
sendRequest(request, 'Xlaoru-WEB')

console.log(dbName!)
// HELLO WORLD
// xlaoru-web
// test

function sendRequest(requestData: IRequest, db?: string): void {
    dbName = 'test'
    console.log(requestData.requestText!.title?.toUpperCase())
    console.log(db!.toLowerCase())
}

`},
{title: {en: 'readonly property Modifiers in TypeScript', ua: 'Модифікатори властивостей readonly (тільки для читання) у TypeScript'}, body: {en: 'Modifiers of readonly properties are created so that when writing code by other developers, specific important information cannot be changed. For example: we have a user login and this information cannot be overwritten under any circumstances, under understandable circumstances. And it is for this purpose that such modifiers of readonly capabilities were invented.', ua: `Модифікатори властивостей readonly (тільки для читання) створений для того, щоб при написані коду іншими розробниками конкретну важливу інформацію неможливо було змінити. Наприклад: в нас є логін користувача і цю інформацію неможно перезаписати ні в якому разі, за зрозумілі обставини. І саме для цього були вигадані такі модифікатори можливостей readonly.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const', ua: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const'}, type: 'typescript', data: 
`interface IUser {
    readonly login: string // Unable to overwrite
    password: number
    name?: string // Not mandatory
}

const user: IUser = {
    login: 'Kehaar',
    password: 247523,
}

// user.login = 'Xlaoru' // Error! Cannot assign to 'login' because it is a read-only property.

const userSkills: readonly string[] = [
    'Markup', 
    'JavaScript', 
    'React.js', 
    'Node.js'
]

// userSkills[2] = 'Vue.js' // Error! Index signature in type 'readonly string[]' only permits reading.`},
{title: {en: 'Enums in TypeScript', ua: 'Enums (Перелік) у TypeScript'}, body: {en: 'Enums are one of the few TypeScript features that are not JavaScript type-level extensions. Enums allow the developer to define a set of named constants. Using lists can make it easier to document intent or create a set of different cases. TypeScript provides both numeric and string enumerations. If you substitute a const enum, then when compiling, TypeScript will not make a function from the enum, but will immediately place everything you need where you need it. But you should not abuse this, because it can cause many mistakes.', ua: `Enums є однією з небагатьох функцій TypeScript, яка не є розширенням рівня типу JavaScript. Enums дозволяють розробнику визначати набір іменованих констант. Використання переліків може спростити документування намірів або створити набір різних випадків. TypeScript надає як числові, так і рядкові переліки. Якщо підставити const enum, то при конпіляції TypeScript не буде робити із enum функцію, а зразу підставе все що треба куди треба. Але не треба зловживати цим, адже це може спричинити багато помилок.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/enums.html', ua: 'https://www.typescriptlang.org/docs/handbook/enums.html'}, type: 'typescript', data: 
`/* After compilation in JavaScript, the code will turn into a function. */
enum ShapeType {
    CIRCLE, // ShapeType.CIRCLE = 0
    SQUARE, // ShapeType.SQUARE = 1
    TRIANGLE, // ShapeType.TRIANGLE = 2
}
  
enum Color {
    RED = '#FF0000', // Color.RED = "#FF0000"
    GREEN = '#00FF00', // Color.GREEN = "#00FF00"
    BLUE = '#0000FF', // Color.BLUE = "#0000FF"
}
  
/* After compilation in JavaScript, the code will be cut. */
const enum Unit {
    CENTIMETERS = 'cm', // Unit.CENTIMETERS = "cm"
    INCHES = 'in', // Unit.INCHES = "in"
}
  
interface Shape {
    type: ShapeType;
    color: Color;
    size: number;
    unit: Unit;
}
  
const circle: Shape = {
    type: ShapeType.CIRCLE,
    color: Color.BLUE,
    size: 10,
    unit: Unit.INCHES,
}
  
const square: Shape = {
    type: ShapeType.SQUARE,
    color: Color.GREEN,
    size: 5,
    unit: Unit.CENTIMETERS,
}

if (square.type === ShapeType.SQUARE) {
    console.log('Here is SQUARE shape!')
} // Here is SQUARE shape!

function logDrawShape(shape: Shape, shapeType: ShapeType): void {
    if (shapeType !== shape.type) {
        console.log('Error! Shape types do not match')
    } else {
        console.log('Drawing a ' + ShapeType[shape.type] + ' with color ' + shape.color + ' and size ' + shape.size + ' ' + shape.unit)
    }
}
  
logDrawShape(circle, ShapeType.CIRCLE) // Drawing a CIRCLE with color #0000FF and size 10 in
logDrawShape(square, ShapeType.SQUARE) // Drawing a SQUARE with color #00FF00 and size 5 cm
logDrawShape(circle, ShapeType.SQUARE) // Error! Shape types do not match`},
{title: {en: 'Type Unknown in TypeScript', ua: 'Тип Unknown (Невизначений) у TypeScript'}, body: {en: 'The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value. This is useful when describing function types because you can describe functions that accept any value without having any values in your function body. Conversely, you can describe a function that returns a value of unknown type.', ua: `Тип Unknown представляє будь-яке значення. Це схоже на тип Any, але безпечніше, оскільки заборонено робити щось із Unknown значенням. Це корисно під час опису типів функцій, оскільки ви можете описати функції, які приймають будь-які значення, не маючи жодних значень у вашому тілі функції. І навпаки, ви можете описати функцію, яка повертає значення типу Unknown.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown', ua: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown'}, type: 'typescript', data: [
`/* Case 1 */
const userData = '{"isBirthday": true, "ageData": 40, "userName": "John"}'

function safeParse(response: string): unknown {
    return JSON.parse(response)
}

const parsedData = safeParse(userData)

function transferData(data: unknown): void {
    if (typeof data === 'string') {
        console.log(data.toLowerCase())
    } else if (typeof data === 'object' && data) {
        console.log(parsedData) // {isBirthday: true, ageData: 40, userName: 'John'}
    } else {
        console.error('Some Error')
    }
}

transferData(parsedData)`,

`/* Case 2 */
try {
    if (true) {
        throw new Error('error')
    }
} catch(e) { // typeof e === "unknown"
    if (e instanceof Error) {
        console.log(e.message) // error
    } else if (typeof e === 'string') {
        console.log(e)
    }
}`,

`/* Case 3 */
type T0 = any | unknown // type T0 = any
type T1 = number | unknown // type T1 = unknown

type T2 = any & unknown // type T0 = any
type T3 = number & unknown // type T1 = number`]},
{title: {en: 'Type Query in TypeScript', ua: 'Type Query (Запит Типів) у TypeScript'}, body: {en: 'The mechanism that allows you to get the type of a particular entity is called a type query. Most often, it is necessary when we clearly understand what type we need in this situation and it will not be repeated anywhere else. Implemented via the typeof + entity operator.', ua: `Механізм, який дозволяє отримати тип певної сутності, називається запит типу (type query). Найчастіше він необхідний, коли ми чітко розуміємо, який тип нам потрібен у цій ситуації і він ніде далі не повторюватиметься. Реалізується через оператор typeof + сутність.`}, link: {en: '#', ua: '#'}, type: 'typescript', data: 
`const dataFromControl = {
    water: 200,
    el: 350
}

function checkReadings(data: typeof dataFromControl): boolean {
    const dataFromUser = {
        water: 200,
        el: 350
    }

    return data.el == dataFromUser.el && data.water == dataFromUser.water
}

console.log(
    checkReadings(dataFromControl)
) // true

const PI = 3.14
let PIClone: typeof PI // PIClone: 3.14`},
{title: {en: 'Type Inference in TypeScript', ua: 'Механізм виводу типів (Type Inference) у Typescript'}, body: {en: 'In TypeScript, there are several places where type inference is used to provide type information when there is no explicit type annotation. When a type inference is made from several expressions, the types of those expressions are used to calculate a “best common type”.', ua: `У TypeScript є кілька місць, де Inference (висновок) типу використовується для надання інформації про тип, коли немає явної анотації типу. Коли висновок типу робиться з кількох виразів, типи цих виразів використовуються для обчислення «найкращого загального типу».`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/type-inference.html#handbook-content', ua: 'https://www.typescriptlang.org/docs/handbook/type-inference.html#handbook-content'}, type: 'typescript', data: 
`const salary: number = 500 // const salary: number
// const salary = 500 // const salary: 500

let example // let example: any
example = 'string' // let example: any

interface IUserData {
    isBirthdayData: boolean
    ageData: number
    userNameData: string
}

const userData = {"isBirthdayData": true, "ageData": 40, "userNameData": "John"}

const arr = ['hello', 5, true] // const arr: (string | number | boolean)[]

const isOkay = true // const isOkay: true
let movement: boolean | string = false // let movement: string | boolean

if (isOkay) {
    movement = 'moving'
}`},
{title: {en: 'Type Assertions in TypeScript', ua: 'Type Assertions (Утвердження Типу) у Typescript'}, body: {en: 'Typically, Type Assertions are used to specify Union type annotations in a function argument when we accept an Object or Literal type assertion for a variable. As well as specification of the Element in the DOM tree, namely what properties it will have.', ua: `Зазвичай Type Assertions (Утвердження Типу) використовують для конкретизації анотацій Union типу в аргументі функції, коли ми приймаємо об'єкт чи затвердження типу Literal для змінної. А також конкретезації Елементу в DOM дереві, а саме які властивості воно матиме.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions', ua: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions'}, type: 'typescript', data: [
`function fetchData(url: string, method: "GET" | "POST"): void {
    console.log({
        to: url,
        mathod: method
    })
}


const requestOptions = {
    url: 'https://web-app.com',
    method: "GET"
}

// fetchData(requestOptions.url, requestOptions.method) // Error! Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
`,
`// Case 1. Using "as const" to show, that you have Union type
const requestOptions1 = {
    url: 'https://webapp.com', // url: "https://webapp.com"
    method: "GET" // method: "GET"
} as const

fetchData(requestOptions1.url, requestOptions1.method) // {to: 'https://webapp.com', mathod: 'GET'}`,
`// Case 2. Using "as VALUE" inside object

const requestOptions2 = {
    url: 'https://some.com', // url: string
    method: "POST" as "POST" // method: "POST"
}

fetchData(requestOptions2.url, requestOptions2.method) // {to: 'https://some.com', mathod: 'POST'}`,
`// Case 3. Using "as VALUE" inside function arguments
const requestOptions3 = {
    url: 'https://helloworld.io', // url: string
    method: "GET" // method: string
}

fetchData(requestOptions3.url, requestOptions3.method as "GET") // {to: 'https://helloworld.io', mathod: 'GET'}`,
`// Case 4. Using triangular brackets
const requestOptions4 = {
    url: 'https://xlaoruweb.info', // url: string
    method: "POST" // method: string
}

fetchData(requestOptions4.url, <"POST">requestOptions4.method) // to: 'https://xlaoruweb.info', mathod: 'POST'}

let T0 = 'hello world' // T0: string
let T1 = 'bye world' as const // T1: "bye world"

const output = document.querySelector('.output') as HTMLElement // output: HTMLElement
output.textContent = 'Hello World'

const input = <HTMLInputElement>document.querySelector('input') // input: HTMLInputElement
const someNumber: number = +input.value // someNumber: number`]},
{title: {en: 'Function overloads in TypeScript', ua: 'Перегрузки функції (Functiono verloads) у Typescript'}, body: {en: 'Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments). In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do this, write some number of function signatures (usually two or more), followed by the body of the function.', ua: `Деякі функції JavaScript можна викликати з різною кількістю аргументів і різними типами. Наприклад, ви можете написати функцію для отримання дати, яка приймає позначку часу (один аргумент) або специфікацію місяця/дня/ріку (три аргументи). У TypeScript ми можемо вказати функцію, яку можна викликати різними способами, написавши підписи перевантаження. Для цього напишіть певну кількість сигнатур функції (зазвичай дві або більше), а потім тіло функції.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads', ua: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads'}, type: 'typescript', data: 
`interface ISquare {
    side: number
    area: number
}

interface IRect {
    length: number
    width: number
    area: number
}

/* Function Overloads */
function calculateArea(side: number): ISquare
function calculateArea(length: number, width: number): IRect

function calculateArea(length: number, width?: number): ISquare | IRect {
    if (width) {
        const rect: IRect = {
            length, width, 
            area: length * width
        }
        return rect
    } else {
        const square: ISquare = {
            side: length,
            area: length * length
        }
        return square
    }
}

calculateArea(1) // function calculateArea(side: number): ISquare (+1 overload)
calculateArea(1, 5) // function calculateArea(length: number, width: number): IRect (+1 overload)`},
{title: {en: 'Manipulation with DOM tree in TypeScript', ua: 'Робота з DOM деревом у Typescript'}, body: {en: 'Usually, working with the DOM tree in TypeScript is not used, because most of the work with TypeScript has additional tools. Like React.js or Angular.js, but knowing that TypeScript allows you to work with the DOM tree to do event handling is as good as it gets.', ua: `Зазвичай робота з DOM деревом у TypeScript не використовується, оскільки в більшості роботи з TypeScript є ще додаткові інструменти. Такі як React.js чи Angular.js, але знати, що TypeScript дозволяє працювати з DOM деревом для робити обробку подій, є максимально добре.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/dom-manipulation.html#handbook-content', ua: 'https://www.typescriptlang.org/docs/handbook/dom-manipulation.html#handbook-content'}, type: 'typescript', data: 
[
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="box"></div>

    <input type="number" value="55">

    <p class="paragraph">foo</p>

    <a href="fb.com">click me</a>
    
    <script src="index.js"></script>
</body>
</html>`,
`const box = document.querySelector('.box') as HTMLElement
box.textContent = 'hello world!'

const input = document.querySelector('input') as HTMLInputElement
input.value = '88'

const link = document.querySelector('a') as HTMLAnchorElement
if (link) {
    link.href = 'https://google.com'
}

const p = document.querySelector('.paragraph') as HTMLParagraphElement
p.style.color = '#BBBBBB'

const links = document.querySelectorAll('a') // links: NodeListOf<HTMLAnchorElement>

const elem = document.createElement('a') as HTMLAnchorElement
link.addEventListener('click', (e) => { // e: MouseEvent
    e.preventDefault()
})`]},
{title: {en: 'Type Void inside TypeScript', ua: 'Тип Void всередені Typescript'}, body: {en: 'The void return type for functions can produce some unusual, but expected behavior. Contextual typing with a return type of void does not force functions to not return something. Another way to say this is a contextual function type with a void return type (type voidFunc = () => void), when implemented, can return any other value, but it will be ignored. Thus, examples in the post of the "type () => void" are valid.', ua: `Тип повернення void для функцій може викликати деяку незвичну, але очікувану поведінку. Контекстна типізація з типом повернення void не змушує функції нічого не повертати. Інший спосіб сказати, що це тип контекстної функції з типом повернення void (тип voidFunc = () => void), коли він реалізований, може повертати будь-яке інше значення, але воно буде проігноровано. Таким чином, приклади в дописі "type () => void" є дійсними.`}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#return-type-void', ua: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#return-type-void'}, type: 'typescript', data:
`type voidFunc = () => void

const returnString: voidFunc = () => {
    // ... some code...
    return 'string'
}

const str = returnString() // str: void
console.log(str) // string

const returnNumber: voidFunc = () => {
    // ... some code...
    return 5
}

const num = returnNumber() // num: void
console.log(num) // 5

function returnBoolean(): void {
    // return true // Error! Type 'boolean' is not assignable to type 'void'.
}

const T0 = function (): void {
    // return true // Error! Type 'boolean' is not assignable to type 'void'.
}

const names = ['Alex', 'Tom', 'John']
const newArray = names.slice() // newArray: string[]

names.forEach((name, index, array) => {
    array.push('Hey!')
})`},
{title: {en: 'Rest Operator', ua: 'Оператор Rest'}, body: {en: 'The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.', ua: `Синтаксис присвоєння деструктуризації — це вираз JavaScript, який дає змогу розпаковувати значення з масивів або властивості з об’єктів у окремі змінні.`}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'}, type: 'operator', data: 
`const array = [1, 1, 2, 3, 5, 8]

const user = {
    name: 'Alex',
    age: 28,
    isStudent: false
}

const [a, ...b] = array

console.log(a) // 1
console.log(b) // [ 1, 2, 3, 5, 8 ]

const {name, ...otherData} = user

console.log(name) // Alex
console.log(otherData) // { age: 28, isStudent: false }`},
{title: {en: 'An example of using enum in React.js', ua: 'Приклад використання enum у React.js'}, body: {en: 'It is in this example that enum is used to check whether the page for the user or the page for the administrator should be displayed.', ua: 'Саме у цьому прикладі enum використовується як перевірити, що саме треба виводити на екран: сторінку для користувача чи сторінку для адміністратора.'}, link: {en: '#', ua: '#'}, type: 'React', data: 
[`import MainView from "./MainView";

export default function App() {
  return (
    <div className="App">
      <MainView role={"USER"} />
    </div>
  );
}`,
`import AdminView from "./AdminView";
import UserView from "./UserView";

enum RolesViews {
  ADMIN = AdminView,
  USER = UserView
}

function DefaultView() {
  return <h1>Default View</h1>;
}

function MainView({ role }: { role: string }) {
  const CurrentView = RolesViews[role] ?? DefaultView;
  return <CurrentView />;
}

export default MainView;`]},
{title: {en: 'An example of displaying a render in the form of a log in the console', ua: 'Приклад показу рендеру у вигляді логу у консоль'}, body: {en: `This example shows that when rendering, the log in the body of the function of the parent element will be displayed first, then the log in the body of the child element. Then the log in the child element's ref, then the log in the parent element. And at the end, log in useEffect() in the child element, and then log in useEffect() in the parent element.`, ua: `На цьому прикладі показано, що при рендері спочатку буде виводитись лог у тілі функції батьківського елементу, далі лог у тілі дочірнього елементу. Потім лог у ref'і дочірнього елементу, далі лог у батьківському елементі. А в кінці лог в useEffect() у дочірньому елементі, а потім лог в useEffect() у батьківському елементі.`}, link: {en: '#', ua: '#'}, type: 'React', data: 
[`import React from 'react'

const T0: React.FC = ({children}) => {
  console.log(1)
  
  React.useEffect(() => {
    console.log(2)
  })
  
  return (
    <div ref={element => console.log(5)}>
      {children}
    </div>
  );
}

const T1: React.FC = () => {
  console.log(3)
  
  React.useEffect(() => {
    console.log(4)
  })
  
  return (
    <div ref={element => console.log(6)}>Hello World</div>
  )
}

const App: React.FC = () => {
  return (
    <T0><T1/></T0>
  )
}

export default App`,
`Result:
/* 1 - 3 - 6 - 5 - 4 - 3 */`]},
{title: {en: 'Dependency Inversion ', ua: 'Інверсія залежностей'}, body: {en: 'The principle of dependency inversion is a principle of object-oriented programming, the essence of which is that classes should depend on abstractions, not on concrete details. It is used to minimize engagement in computer programs.', ua: `Принцип інверсії залежностей — принцип об'єктно-орієнтованого програмування, суть якого у тому, що класи мають залежати від абстракцій, а чи не від конкретних деталей. Використовується для мінімізації зачеплення у комп'ютерних програмах.`}, link: {en: '#', ua: '#'}, type: 'OOP', data: 
`interface USBPort {
    charge(battery: Battery): void
}
  
class Battery {
    private percentage: number = 0
    receiveCharge(): void {
        setInterval(() => {
        this.percentage += 1
        }, 30000)
    }
}

class PowerBank implements USBPort {
    charge(battery: Battery) {
        battery.receiveCharge()
    }
}
  
export class Phone {
    private battery: Battery = new Battery()
    constructor(
        private charger: USBPort
    ) {
        if(charger) {
            this.charger.charge(this.battery)
        }
    }
}

const phone = new Phone(new PowerBank())`},
{title: {en: 'Strategy Pattern', ua: 'Паттерн Стратегії'}, body: {en: 'The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable.', ua: 'Шаблон стратегії інкапсулює альтернативні алгоритми (або стратегії) для конкретного завдання. Це дозволяє замінити метод під час виконання будь-яким іншим методом (стратегією), не усвідомлюючи цього клієнтом. По суті, стратегія — це група взаємозамінних алгоритмів.'}, link: {en: '#', ua: '#'}, type: 'OOP', data: 
`interface USBPort {
    charge(battery: Battery): void
}
  
class Battery {
    private percentage: number = 0
    receiveCharge(): void {
        setInterval(() => {
            this.percentage += 1
        }, 30000)
    }
}
  
class PowerBank implements USBPort {
    charge(battery: Battery) {
        console.log('Charging from PowerBank...')
        battery.receiveCharge()
    }
}
  
class Socket implements USBPort {
    charge(battery: Battery) {
        console.log('Charging from Socket...')
        battery.receiveCharge()
    }
}
  
class MacBook implements USBPort {
    charge(battery: Battery) {
        console.log('Charging from MacBook...')
        battery.receiveCharge()
    }
}
  
export class Phone {
    private battery: Battery = new Battery()
    private charger?: USBPort
    setCharger(charger: USBPort) {
        this.charger = charger
        this.charger.charge(this.battery)
    }
    removeCharger() {
        this.charger = undefined
    }
}
  
const phone = new Phone()
phone.setCharger(new PowerBank())
phone.removeCharger()

// some time...

phone.setCharger(new MacBook())
phone.removeCharger()`},
{title: {en: 'An example of the competent use of useState() and the capabilities of React.js', ua: 'Приклад грамотного використовування useState() та можливостей React.js'}, body: {en: 'An easy way to label the result without using additional useState() states.', ua: 'Легкий спосіб позначити результат без використання додаткових useState() станів.'}, link: {en: '#', ua: '#'}, type: 'React', data: 
`import { useState } from "react";

interface IUser {
  username: string;
  friendsCount: number;
}

function Demo() {
  const [user] = useState<IUser>({
    username: "Alex",
    friendsCount: 1
  });

  const isPopular = user.friendsCount > 1000;

  return <>{isPopular ? "🔥" : "😔"}</>;
}

export default Demo;
`},
{title: {en: 'An example of a good use of conditional statements when rendering a page', ua: 'Приклад гарного використання умовних операторів при рендері сторінки'}, body: {en: '', ua: ''}, link: {en: '#', ua: '#'}, type: 'React', data: 
[`import Demo from './Demo'

export default function App() {
  return (
    <div className="App">
      <Demo friends={['Alex', 'Tom', 'Michelle']} isSignedIn={true}/>
    </div>
  );
}`,
`import Redirect from './Redirect'

interface DemoProps {
  frineds: string[]
  isSignedIn: boolean
}

function Demo({friends, isSignedIn}: DemoProps) {
  const renderContent = () => {
    if (!isSignedIn) {
      return (<Redirect to='/signin'/>)
    }
    
    if (friends.length === 0) {
     return (<p>You have no friends 😞</p>)
    }
    
    return (<p>Your friends: {friends.join(', ')}</p>)
  }
  return (
    <>
      {renderContent()}
    </>
  )
}

export default Demo`]},
{title: {en: 'An example of the correct naming of logical variables', ua: 'Приклад грамотного іменування логічних змінних'}, body: {en: '', ua: ''}, link: {en: '#', ua: '#'}, type: 'all', data: 
`// 🚫 Bad practice
const admin = true
const fail = false
const activate = true

// ✅ Good practice
const isAdmin = true
const hasFailed = false
const canActivate = true`},
{title: {en: `A function that has a fully typed ability to extract nested keys from an object using generics and keyof`, ua: `Функція, що має повністю типізовану змогу на витягання вкладених ключів з об'єкту за допомогою generics і keyof`}, body: {en: `An example of a function that can retrieve the value of nested keys, while being fully protected from the point of view of Type Guard.`, ua: `Приклад функції, яка може отримувати значення вкладених ключів, будучи при цьому повністю захищеною з точки зору Type Guard.`}, link: {en: `#`, ua: `#`}, type: 'typescript', data:
`const menu = {
    analytics: {
        business: "For Business",
        data: "Big Data"
    },
    design: {
        graphical: "Graphic"
    }
}

function getMenu<TMenu, TKey1 extends keyof TMenu, TKey2 extends keyof TMenu[TKey1]>(
    object: TMenu,
    key1: TKey1,
    key2: TKey2
) {
    return object[key1][key2]
}

console.log(getMenu(menu, "analytics", "data")) // "Big Data" 
console.log(getMenu(menu, "design", "graphical")) // "Graphic"`},
{title: {en: `Finding number without a pair in an array of numbers using the xor(^) operator`, ua: `Пошук числа без пари в масиві чисел за допомогою оператора xor(^)`}, body: {en: ``, ua: ``}, link: {en: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR`, ua: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR`}, type: 'task', data:
`function singleNumber(numArray: number[]): number {
    let xorResult: number = 0

    for (let i: number = 0; numArray.length > i; i++) {
        xorResult ^= numArray[i]
    }
    
    return xorResult
}

console.log(
    singleNumber([4, 2, 2, 1, 1])
) // 4

console.log(
    singleNumber([7, 8, 8, 9, 7])
) // 9

console.log(
singleNumber([7, 7, 8, 8, 8, 9, 9])
) // 8`},
{title: {en: `Custom useDebounce() hook`, ua: `Зроблений власноруч хук useDebounce()`}, body: {en: `This useDebounce() hook is designed to control the frequency of receiving values from the input to save optimization moments in the application.`, ua: `Цей useDebounce() хук зроблений для того, щоб контролювати частоту отримання значень із інпуту для збереження оптимізаційних моментів в роботі додатку.`}, link: {en: `#`, ua: `#`}, type: 'React', data: [
`import { useState, useEffect } from "react";

export default function useDebounce<T>(value: T, delay: number = 250): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
`,
`import useDebounce from "./useDebounce";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="type something..."
      />
      <p>Debounced: {debouncedInput}</p>
    </div>
  );
}
`]},
{title: {en: `Renderless Pattern`, ua: `Паттерн без рендеру`}, body: {en: `Renderless Pattern is a React design pattern that separates the logic and state of a component from its display (rendering). This pattern is based on the idea of creating components that provide functionality and state, but no display logic. Such components usually pass functions or callbacks to child components for rendering.`, ua: `Renderless Pattern - це патерн проектування в React, який полягає у поділі логіки та стану компонента від його відображення (рендерингу). В основі цього патерну лежить ідея створення компонентів, що надають функціональність та стан, але не містять логіки відображення. Такі компоненти зазвичай передають функції або колбеки дочірнім компонентам рендерингу.`}, link: {en: `#`, ua: `#`}, type: 'React', data:
`import React, { useState } from "react";

interface IMouseTrackerProps {
  children: React.ReactNode;
}

interface IMousePositionState {
  x: number;
  y: number;
}

function MouseTracker({ children }: IMouseTrackerProps) {
  const [mousePosition, setMousePosition] = useState<IMousePositionState>({
    x: 0,
    y: 0
  });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{children(mousePosition)}</div>;
}

export default function App() {
  return (
    <div className="App">
      <MouseTracker>
        {(mousePosition) => (
          <p
            style={{
              border: "1px solid black",
              width: "350px",
              height: "350px"
            }}
          >
            Mouse position {mousePosition.x}, {mousePosition.y}
          </p>
        )}
      </MouseTracker>
    </div>
  );
}
`},
{title: {en: `Custom useArrayState() hook`, ua: `Зроблений власноруч хук useArrayState()`}, body: {en: `This useArrayState() hook is made to control and manipulate array elements through built-in manipulators.`, ua: `Цей useArrayState() хук зроблений для того, щоб контролювати та маніпулювати елементами масиву через вбудованні маніпулятори.`}, link: {en: `#`, ua: `#`}, type: 'React', data:[
`import { useState } from "react";

type ArrayStateActions<T> = {
  add: (item: T) => void;
  remove: (item: T) => void;
  clear: () => void;
};

function useArrayState<T>(initialItems: T[]): [T[], ArrayStateActions<T>] {
  const [items, setItems] = useState(initialItems);

  const add = (item: T) => setItems([...items, item]);
  const remove = (item: T) => setItems([...items.filter((i) => i !== item)]);
  const clear = () => setItems([]);

  return [items, { add, remove, clear }];
}

export default useArrayState;
`,
`import useArrayState from "./useArrayState";

interface ITodo {
  id: number;
  name: string;
  completed: boolean;
}

export default function App() {
  const [todos, { add, remove, clear }] = useArrayState<ITodo>([
    {
      id: 1,
      name: "Vacuum the floor.",
      completed: false
    },
    {
      id: 2,
      name: "Wash the dishes.",
      completed: true
    }
  ]);
  return (
    <div className="App">
      <button
        onClick={() =>
          add({
            id: Number(new Date()),
            name: "Water plants.",
            completed: false
          })
        }
      >
        add
      </button>
      <ul>
        {todos.map((todo: ITodo) => (
          <li key={todo.id}>
            <span>{todo.completed ? "✅" : "🚫"}</span> {todo.name}{" "}
            <button onClick={() => remove(todo)}>clear</button>
          </li>
        ))}
      </ul>
      <button onClick={() => clear()}>clear</button>
    </div>
  );
}
`]},
{title: {en: `Custom useCountdown() hook`, ua: `Зроблений власноруч хук useCountdown()`}, body: {en: `This useCountdown() hook is made to allow the timer to be reused.`, ua: `Цей useCountdown() хук зроблений для того, щоб була можливість перевикористовувати таймер.`}, link: {en: `#`, ua: `#`}, type: 'React', data: [
`import { useEffect, useState } from "react";

function useCountdown(length: number) {
  const [seconds, setSeconds] = useState(length);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSeconds((prevSeconds) =>
        prevSeconds > 0 ? prevSeconds - 1 : prevSeconds
      );
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [seconds]);

  return seconds;
}

export default useCountdown;
`,
`import useCountdown from "./useCountdown";

function App() {
  const seconds = useCountdown(60);
  return <div className="App">Seconds left: {seconds}</div>;
}

export default App;
`]},
{title: {en: `ComponentProps and ComponentPropsWithRef props in React with TypeScript`, ua: `Пропси ComponentProps і ComponentPropsWithRef у React з TypeScript`}, body: {en: `ComponentProps and ComponentPropsWithRef are needed to nicely type components in TypeScript without using your own custom interfaces.`, ua: `ComponentProps і ComponentPropsWithRef потрібні для гарної типізації компонентів у TypeScript без використання своїх власноруч написаних інтерфейсів.`}, link: {en: `#`, ua: `#`}, type: 'React', data: 
`import { ComponentProps, ComponentPropsWithRef } from "react";
import React, { useRef } from "react";

type ButtonProps = ComponentProps<"button">;

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Button</button>;
}

type LogButtonProps = ComponentProps<typeof Button>

function LogButton({ onClick }: LogButtonProps) {
  return <button onClick={onClick}>Log</button>;
}

type InputProps = ComponentPropsWithRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return <input type="text" ref={ref} placeholder={placeholder} />;
  }
);

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function onClick() {
    console.log(inputRef.current?.value);
  }

  return (
    <div className="App">
      <Input ref={inputRef} placeholder="type something..." />
      <Button onClick={onClick} />
      <LogButton onClick={onClick} />
    </div>
  );
}

export default App;`},
{title: {en: `An example of the correct naming of functions`, ua: `Приклад правильного іменування функцій`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'all', data:
`// 🚫 Bad practice
function find() {}
function rating() {}
function posts() {}

// ✅ Good practice
function findUser() {}
function findUserById() {}
function countRating() {}
function fetchPosts() {}`},
{title: {en: `Utility types in TypeScript`, ua: `Utility типи у TypeScript`}, body: {en: `In TypeScript, utility types are built-in type transformations that allow you to manipulate and transform types easily. These utility types help you manipulate and transform types in various ways, making it easier to work with complex data structures and ensuring type safety.`, ua: `У TypeScript службові типи — це вбудовані перетворення типів, які дозволяють легко маніпулювати типами та перетворювати їх. Ці типи утиліт допомагають маніпулювати типами та перетворювати їх різними способами, полегшуючи роботу зі складними структурами даних і забезпечуючи безпеку типів.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/utility-types.html`, ua: `https://www.typescriptlang.org/docs/handbook/utility-types.html`}, type: 'typescript', data: [
`interface IUser {
    id: number;
    name: string;
    email: string
}

type PartialUser = Partial<IUser>

const partialUser: PartialUser = {
    name: 'Alice'
}

console.log(partialUser) // {name: 'Alice'}

/* 
    Partial<Type> constructs a type with all
    properties of Type set to optional.
*/

/* 
    In the example, the Partial<IUser> type allows
    partialUser to have only some of the properties
    of IUser without causing a type error.
*/

`,
`interface IConfig {
    host?: string;
    port?: number
}

type RequiredConfig = Required<IConfig>

const config: RequiredConfig = {
    host: 'example.com',
    port: 8080
}

console.log(
    config
) // {host: 'example.com', port: 8080}

/* 
    Required<Type> constructs a type with all
    properties of Type set to required.
*/

/* 
    The Required<IConfig> type ensures that config
    must have both host and properties.
*/`,
`interface IPoint {
    x: number;
    y: number
}

type ReadonlyPoint = Readonly<IPoint>

const point: ReadonlyPoint = {
    x: 10,
    y: 20
}

// point.x = 30 // Error! Cannot assign to 'x' because it is a read-only property.

console.log(
    point
) // {x: 10, y: 20}

/* 
    Readonly<Type> constructs a type where all
    properties of Type are made readonly.
*/

/* 
    The Readonly<IPoint> type ensures that you
    cannot modify the properties of point after
    initialization.
*/`,
`type Fruit = 'apple' | 'banana' | 'cherry'
type FruitInfo = Record<Fruit, {color: string; taste: string}>

const fruitInfo: FruitInfo = {
    apple: {color: 'red', taste: 'sweet'},
    banana: {color: 'yellow', taste: 'sweet'},
    cherry: {color: 'red', taste: 'tart'}
}

console.log(
    fruitInfo
)

/* 
{
    "apple": {
        "color": "red",
        "taste": "sweet"
    },
    "banana": {
        "color": "yellow",
        "taste": "sweet"
    },
    "cherry": {
        "color": "red",
        "taste": "tart"
    }
}
*/

/* 
    Record<Keys, Type> constructs a type eith a set
    of properties defined by Keys and their values o
    type Type.
*/

/* 
    In this example, the Record<Fruit, {color: string; taste: string}>
    type defines a mapping of friut names to 
    their properties.
*/
`,
`interface IPerson {
  name: string;
  age: number;
  address: string
}

type PersonBasicInfo = Pick<IPerson, 'name' | 'age'>
type PersonName = Pick<IPerson, 'name'>

const basicInfo: PersonBasicInfo = {
  name: 'Alice',
  age: 30
}

console.log(
  basicInfo
) // {name: 'Alice', age: 30}

const alex: PersonName = {
  name: 'Alex'
}

console.log(
  alex
) // {name: 'Alex'}

/* 
  Pick<Type, Keys> constructs a type by picking
  only the specified keys from Type.
*/`,
`interface IProduct {
  id: string;
  name: string;
  price: number
}

type ProductWithoutID = Omit<IProduct, 'id'>
type ProductID = Omit<IProduct, 'name' | 'price'>

const productWithoutID: ProductWithoutID = {
  name: 'Phone',
  price: 1000
}

console.log(
  productWithoutID
) // {name: 'Phone', price: 1000}

const productID: ProductID = {
  id: '32'
}

console.log(
  productID
) // {id: '32'}

/* 
  Omit<Type, Keys> constructs a type by omiting
  the specified keys from Type.
*/`,
`type Colors = 'red' | 'green' | 'blue'
type NonRed = Exclude<Colors, 'red'>

interface IColors {
    red: "red";
    blue: "blue";
    green: "green"
}

type nonBlue = Exclude<keyof IColors, "blue"> // "red" | "green"

// const red: NonRed = 'red' // Error! Type '"red"' is not assignable to type 'NonRed'.
const green: NonRed = 'green'
const red: nonBlue = "red"

/* 
    Exclude<Type, ExcludedUnion> constructs a type
    by excluding types that are assignable to
    ExcludedUnion from Type.
*/`,
`type Colors = 'red' | 'green' | 'blue'
type Figures = "circle" | "cude" | "triangle"

type RedAndGreen = Extract<Colors, 'red' | 'green'>
type Blue = Extract<Colors | Figures, 'blue'>

// const blue: RedAndGreen = 'blue' // Error! Type '"blue"' is not assignable to type 'RedAndGreen'.
const green: RedAndGreen = 'green'
const blue: Blue = "blue"

/* 
    Extract<Type, Union> constructs a type by 
    selection types from Type that are assignable to
    Union.
*/`]},
{title: {en: `Pattern for creating a multilingual application using localStorage`, ua: `Паттерн для створення багатомовної програми за допомогою localStorage`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'React', data: [
`import { useState } from "react";

import LanguageHandler from "./LanguageHandler";
import Demo from "./Demo";

function App() {
  const [lang, setLang] = useState(window.localStorage.getItem('lang') || 'en');

  const setEnLang = () => {
  	window.localStorage.setItem("lang", "en");
    setLang('en')
  }

  const setUaLang = () => {
  	window.localStorage.setItem("lang", "ua");
    setLang('ua')
  }

  return (
    <div className="App">
      <LanguageHandler lang={lang} setEnLang={setEnLang} setUaLang={setUaLang}/>
      <Demo />
    </div>
  );
}

export default App;`,
`import translation from "./translation";
import getText from "./getText";

interface ILanguageHandlerProps {
    lang: string;
    setEnLang: () => void;
    setUaLang: () => void;
}

export default function LanguageHandler({lang, setEnLang, setUaLang,}: ILanguageHandlerProps) {
  return (
    <div>
        {getText(translation.chooseLang)}
        <button className={lang === "en" ? 'selected' : ""} onClick={() => setEnLang()}>en</button>
        <button className={lang === "ua" ? 'selected' : ""} onClick={() => setUaLang()}>ua</button>
    </div>
  )
}`,
`import translation from "./translation";
import getText from "./getText";
type Props = {}

export default function Demo({}: Props) {
  return (
    <div>{getText(translation.menu)}</div>
  )
}`,
`const translation = {
	chooseLang: {
  	ua: "Оберіть мову",
    en: "Choose language"
  },
	menu: {
  	ua: "Меню",
    en: "Menu"
  },
  login: {
    ua: "Логін",
    en: "Login"
  }
}

export default translation`,
`const getText = (text: any) => {
    const lang = localStorage.getItem("lang");
    return text[lang || "en"];
}

export default getText
`,
]},
{title: {en: `Possibilities of calling object options`, ua: `Можливості виклику опцій об'єкта`}, body: {en: `A variant of calling the internal options of an object using square brackets and the option name in quotes.`, ua: `Варіант виклику внутрішніх опцій об'єкта за допомогою квадратних дужок та назви опції в лапках.`}, link: {en: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics`, ua: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics`}, type: 'typescript',data: 
`interface IPerson {
    name: string;
    age: number;
    contact : {
        messangers: {
            messanger_facebook?: string
            whats_app: string
        },
        socialNetworking?: {
            instagram: string;
            facebook: {
                main_account: string;
                twink_account?: string
            } | string
        }
    }
}

const person: IPerson = {
    name: 'Alex',
    age: 34,
    contact: {
        messangers: {
            whats_app: '+380418533489'
        },
        socialNetworking: {
            instagram: 'the_alex',
            facebook: 'alex_official'
        }
    }
}

console.log(
    person["age"]
) // 34

console.log(
    person.contact.messangers.whats_app
) // +380418533489

console.log(
    person["contact"]["socialNetworking"]["instagram"]
) // the_alex

console.log(
    person.contact["messangers"].whats_app
) // +380418533489

console.log(
    person["contact"].socialNetworking["facebook"]
) // alex_official`},
{title: {en: `Generics in Functions in TypeScript`, ua: `Generics (Узагальнення) у функціях у TypeScript`}, body: {en: `A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems. In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.`, ua: `Основною частиною розробки програмного забезпечення є створення компонентів, які не тільки мають чітко визначені та узгоджені API, але й придатні для повторного використання. Компоненти, здатні працювати як з даними сьогодні, так і з даними завтрашнього дня, нададуть вам найбільш гнучкі можливості для створення великих програмних систем. У таких мовах, як C# і Java, одним із основних інструментів у наборі інструментів для створення повторно використовуваних компонентів є generics (узагальнення), тобто можливість створювати компонент, який може працювати над різними типами, а не з одним. Це дозволяє користувачам споживати ці компоненти та використовувати власні типи.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/2/generics.html`, ua: `https://www.typescriptlang.org/docs/handbook/2/generics.html`}, type: 'typescript', data: [
`/* Case 1. An example of using a regular generic to type an argument and output data to a function. */
function printUserInfo<T>(login: string, password: number, info: T): T {
    if (login.length !== 0 && password > 9999999) {
        console.log('User is registered!')
    } else {
        console.log('Please register!')
    }

    return info
}

console.log(
    printUserInfo<string>('Kehaar', 43289723, "I'm from Ukraine.")
)
// User is registered!
// I'm from Ukraine.`,
`/* Case 2. An example of using several generics to type arguments. */
function getUserCursor<X, Y>(x: X, y: Y): string {
    return "The user's cursor is located at coordinates: (" + x + "; " + y + ")"
}

console.log(
    getUserCursor(5, '10')
) // The user's cursor is located at coordinates: (5; 10)

console.log(
    getUserCursor('-7', 10)
) // The user's cursor is located at coordinates: (-7; 10)`,
`/* Case 3. An example of using several generics to type arguments as an array of one of the generics and a regular second generic and output the function data. */
function getUsers<T, S>(userArray: T[], hasPartyStarted: S): [T[], S] {
    if (hasPartyStarted) console.log('Party has started!')
    
    if (userArray.length < 4) console.log('Not enough people for a party.')

    return [userArray, hasPartyStarted]
}

console.log(
    getUsers(
        ['Alex', 'Tom', 'Fred', 'Kate'],
        true
    )
)
// Party has started!
// [['Alice', 'Anna', 'John'], true]

console.log(
    getUsers(
        ['Alice', 'Anna', 'John'],
        false
    )
)
// Not enough people for a party.
// [['Alice', 'Anna', 'John'], false]`,
`/* Case 4. An example of narrowing a data type for generics using Type Aliases. */
type NumberOrString = number | string
function generateFigure<
    L extends NumberOrString, 
    W extends NumberOrString, 
    H extends NumberOrString
> (length: L, width: W, height: H): [L, W, H] {
    if (+length === +width && +width === +height) {
        console.log("It's a cube.")
    } else {
        console.log("It's a parallelepiped.")
    }
    return [length, width, height]
}

console.log(
    generateFigure('300', '100', '800')
)
// It's a parallelepiped.
// ['300', '100', '800']

console.log(
    generateFigure(350, 350, 350)
)
// It's a cube.
// [350, 350, 350]

// console.log(generateFigure(350, true, false)) // Error! Argument of type 'boolean' is not assignable to parameter of type 'NumberOeString'.`,
]},
{title: {en: `Generics for Type Aliases in TypeScript`, ua: `Generics (Узагальнення) для Type Aliases у TypeScript`}, body: {en: ``, ua: ``}, link: {en: `https://www.typescriptlang.org/docs/handbook/advanced-types.html`, ua: `https://www.typescriptlang.org/docs/handbook/advanced-types.html`}, type: 'typescript', data:
`type Type<T> = T
const num: Type<number> = 5

type User<T> = {
    login: T,
    age: number
}

const user: User<string> = {
    login: 'str',
    age: 23
}

type OrNull<Type> = Type | null
type OrArray<Type> = Type | Type[]

const data1: OrArray<number> = 42
const data2: OrArray<string[]> = ['hello', 'world']`},
{title: {en: `Generics for Interfaces in TypeScript`, ua: `Generics (Узагальнення) для Інтерфейсів у TypeScript`}, body: {en: ``, ua: ``}, link: {en: `https://www.typescriptlang.org/docs/handbook/2/generics.html`, ua: `https://www.typescriptlang.org/docs/handbook/2/generics.html`}, type: 'typescript', data:
`interface IParentsOfUser {
    mother: string;
    father: string
}

interface IUser<T, ParentsData extends IParentsOfUser> {
    login: T;
    age: number;
    parents: ParentsData
}

const user: IUser<string, {mother: string; father: string; hasMaried: boolean}> = {
    login: 'the_tom',
    age: 23,
    parents: {
        mother: 'Anna',
        father: 'Alex',
        hasMaried: true
    }
}

console.log(user)
/* 
{
    login: 'the_tom',
    age: 23,
    parents: {
        mother: 'Anna',
        father: 'Alex',
        hasMaried: true
    }
}
*/`},
{title: {en: `Generic Classe in TypeScript`, ua: `Generic (Узагальнення) для класів у TypeScript`}, body: {en: `TypeScript supports generic classes. The generic type parameter is specified in angle brackets after the name of the class. A generic class can have generic fields (member variables) or methods. In the above example, we created a generic class named User with a type variable in the angle brackets <T, S> .`, ua: `TypeScript підтримує generic (загальні) класи. Параметр загального типу вказується в кутових дужках після імені класу. Загальний клас може мати загальні поля (змінні-члени) або методи. У наведеному вище прикладі ми створили загальний клас під назвою User зі змінною типу в кутових дужках <T, S>.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/2/generics.html`, ua: `https://www.typescriptlang.org/docs/handbook/2/generics.html`}, type: 'typescript', data:
`class User<T, S>/* global type T */{
	name: T;
	age: S

	constructor(name: T, age: S) {
		this.name = name;
		this.age = age
	}

	sayMyFullName<T>/* local type T */(surname: T): string { 
        /* Type T for function sayMyFullName() is local and it's 
        only for this function. It's means, that global type T 
        isn't taken into count */
		
		if (typeof surname !== "string") {
			return "I have only name: " + this.name
		}
		else {
			return this.name + ' ' + surname
		}
	}
}

class AdminUser<T, S> extends User<string, number> {
	rights: T;
	access: S

    constructor(name: string, age: number, rights: T, access: S) {
        super(name, age);
        this.rights = rights;
		this.access = access
    }
}

const ilya = new User("Ilya", 16)
console.log(ilya.sayMyFullName('Sokolov')) // Ilya Sokolov

const nameData = "Alex"
const ageData = 32

const alex = new User<string, number>(nameData, ageData)

const tom = new AdminUser("Tom", 24, ["pin messages", "ban users"], true)`},
{title: {en: `Good Example of using generics, enum and interfaces for building your apps in TypeScript`, ua: `Гарний приклад використання generic, enum та interface для ваших застосунків у TypeScript`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'typescript', data: [
`Task:
/* 
    A data array with shapes contains objects, each of which must have a name property.
    Each object can still contain additional properties in a random form.
    The name property can have only 4 options.
    The calculateAmountOfFigures function must accept an array with objects that must have 
    a name property.
    It returns an instance object of AmountOfFigures.
    It internally calculates how many figures were in the array and records the results 
    in AmountOfFigures.
    With the current data, the following should appear in the console:
    { squares: 3, circles: 2, triangles: 2, others: 1 }. 
*/
`,
`enum FigureNames {
    RECT = "rect",
    CIRCLE = "circle",
    TRIANGLE = "triangle",
    LINE = "line"
}

interface Figure {
    name: FigureNames;
}

interface CustomFigure extends Figure {
    data?: {}
}

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

function calculateAmountOfFigures<T extends Figure>(figure: T[]): AmountOfFigures {
    const amount: AmountOfFigures = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0
    }

	figure.forEach((fig) => {
		switch (fig.name) {
			case FigureNames.RECT:
				amount.squares++;
				break;
			case FigureNames.CIRCLE:
				amount.circles++;
				break;
			case FigureNames.TRIANGLE:
				amount.triangles++;
				break;
			default:
				amount.others++;
		}
	});

    return amount
}

const data: CustomFigure[] = [
	{
		name: FigureNames.RECT,
		data: { a: 5, b: 10 },
	},
	{
		name: FigureNames.RECT,
		data: { a: 6, b: 11 },
	},
	{
		name: FigureNames.TRIANGLE,
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: FigureNames.LINE,
		data: { l: 15 },
	},
	{
		name: FigureNames.CIRCLE,
		data: { r: 10 },
	},
	{
		name: FigureNames.CIRCLE,
		data: { r: 5 },
	},
	{
		name: FigureNames.RECT,
		data: { a: 15, b: 7 },
	},
	{
		name: FigureNames.TRIANGLE,
	},
];

console.log(calculateAmountOfFigures(data)); // { squares: 3, circles: 2, triangles: 2, others: 1 }`]},
{title: {en: `Builder Pattern`, ua: `Builder Pattern`}, body: {en: `Builder Pattern is a design pattern used to construct complex objects by separating the construction process from the actual representation. It allows you to create an object step by step and produce different types and representation of an object with the same construction code. This pattern is particularly useful when you have a class with many optional parameters or configurations.`, ua: `Builder Pattern — це шаблон проектування, який використовується для створення складних об’єктів шляхом відокремлення процесу будівництва від фактичного представлення. Це дозволяє створювати об’єкт крок за кроком і створювати різні типи та представлення об’єкта з однаковим кодом конструкції. Цей шаблон особливо корисний, коли у вас є клас із багатьма необов’язковими параметрами чи конфігураціями.`}, link: {en: `#`, ua: `#`}, type: 'OOP', data:[
`class Person {
    name?: string;
    age?: number;
    email?: string;
    address?: string;

    constructor() {}
}`,
`class PersonBuilder {
    private person: Person

    constructor() {
        this.person = new Person()
    }

    withName(name: string): PersonBuilder {
        this.person.name = name;
        return this
    }

    withAge(age: number): PersonBuilder {
        this.person.age = age;
        return this
    }

    withEmail(email: string): PersonBuilder {
        this.person.email = email;
        return this
    }

    withAddress(address: string): PersonBuilder {
        this.person.address = address;
        return this
    }

    build(): Person {
        return this.person
    }
}`,
`const person1 = new PersonBuilder()
    .withEmail("Alex")
    .withEmail('alex@example.com')
    .withAge(23)
    .build()

const person2 = new PersonBuilder()
    .withName("Tom")
    .withAge(34)
    .withEmail('tom@example.com')
    .withAddress("123 Main St")
    .build()

console.log(person1)
/* 
Person {
    name: undefined,
    age: 23,
    email: 'alex@example.com',
    address: undefined
}
*/

console.log(person2)
/* 
Person {
    name: 'Tom',
    age: 34,
    email: 'tom@example.com',
    address: '123 Main St'
}
*/`,
]},
{title: {en: `All about useRef()`, ua: `Все про useRef()`}, body: {en: `useRef is a React hook that allows you to refer to a value that is not needed for rendering. It is usually used to easily obtain the values of one or another value for the input. To use the DOM Api built-in React etc.`, ua: `useRef — це хук React, який дозволяє посилатися на значення, непотрібне для рендерингу. Зазвичай його використовують для легкого отримання значень того чи іншого значення для інпута. Для використання DOM Api всередені React тощо.`}, link: {en: `https://react.dev/reference/react/useRef`, ua: `https://react.dev/reference/react/useRef`}, type: 'React', data:
`import { useEffect, useRef } from "react";

export default function Demo() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function getValue() {
    console.log(inputRef.current?.value);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={getValue}>get value</button>
    </>
  );
}
`},
{title: {en: `Key attribute in React`, ua: `Атрибут Key у React`}, body: {en: `A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. Keys are used to give an identity to the elements in the lists.`, ua: `Key — це спеціальний рядковий атрибут, який потрібно включити під час створення списків елементів у React. Ключі використовуються в React, щоб визначити, які елементи в списку змінено, оновлено або видалено. Ключі використовуються для ідентифікації елементів у списках.`}, link: {en: `https://vm.tiktok.com/ZMjFY9CaJ/`, ua: `https://vm.tiktok.com/ZMjFY9CaJ/`}, type: 'React', data:
`import { useState } from "react";

export default function Demo() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <br />
      Count - <strong key={count}>{count}</strong>
    </>
  );
}`},
{title: {en: `A complete search engine with filters. The values of which can be seen in the search field of the search engine`, ua: `Повний пошуковик із фільтрами. Значеннями з якого можно побачити в пошуковому полі пошуковику`}, body: {en: `The menu with search settings is made entirely without native React hooks. Only the react-router-dom library and its typed form @types/react-router-dom are used. Plus added debounce function for search optimization.`, ua: `Меню з налаштуваннями пошуку зроблене повністю без нативних хуків Реакту. Лише використовуються бібліотека react-router-dom та її типізована форма @types/react-router-dom. Плюс додана функція debounce для оптимізації пошуку.`}, link: {en: `https://youtu.be/oZZEI23Ri6E?si=X51p_FwwHjNgJRoe`, ua: `https://youtu.be/oZZEI23Ri6E?si=X51p_FwwHjNgJRoe`}, type: 'React', data: [
`import { useSearchParams } from "react-router-dom";
import useDebounce from "./useDebounce";

const filters: string[] = ["all", "phone", "tablet", "laptop"];

interface IContentItem {
  title: string;
  body: string;
  filter: "all" | "phone" | "tablet" | "laptop";
}

interface IDemoProps {
  content: IContentItem[];
}

export default function Demo({ content }: IDemoProps) {
  const [searchParams, setSearchParams] = useSearchParams({
    filter: "all",
    value: ""
  });

  const value = searchParams.get("value");
  const filter = searchParams.get("filter");

  const debouncedValue = useDebounce(value);
  const debouncedFilter = useDebounce(filter);

  const searchedContent = content.filter((item) => {
    return item.title.toLowerCase().includes(debouncedValue!.toLowerCase());
  });

  const filteredContent = searchedContent.filter((item) => {
    if (debouncedFilter === "all") return true;
    if (debouncedFilter === item.filter) return true;

    return false;
  });

  return (
    <>
      <div className="menu">
        <input
          onChange={(event) =>
            setSearchParams(
              (prev) => {
                prev.set("value", event.target.value);
                return prev;
              },
              { replace: true }
            )
          }
          placeholder="Search..."
          defaultValue={value}
        />
        <br />
        {filters.map((item) => (
          <button
            key={item}
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("filter", item);
                return prev;
              })
            }
          >
            {item === filter ? <b>{item}</b> : <span>{item}</span>}
          </button>
        ))}
      </div>
      <ul>
        {filteredContent.length === 0 ? (
          <h3>Nothing has found</h3>
        ) : (
          filteredContent.map((item, index) => (
            <li key={index}>
              <b>{item.title}</b>.<br /> {item.body}
            </li>
          ))
        )}
      </ul>
    </>
  );
}`,
`import { useState, useEffect } from "react";

export default function useDebounce<T>(value: T, delay: number = 250): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}`]},
{title: {en: `Awesome Form on React + TypeScript`, ua: `Гарна Форма для вводу даних на Реакті + TypeScript`}, body: {en: `This Form is made on React and TypesScript, where there is normal validation at the level of types in the data field.`, ua: `Ця Форма зроблена на Реакті і TypesScript де є звичайна валідація на рівні типів у полі даних.`}, link: {en: `#`, ua: `#`}, type: 'React', data: [
awesomeForm,
`import { useState } from "react";

interface IUser {
  email: string;
  password: string;
  name: string;
}

export default function Demo() {
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
    name: ""
  });

  function loadData(event): void {
    event.preventDefault();

    let userEmail = event.target.elements.email.value;
    let userPassword = event.target.elements.password.value;
    let userName = event.target.elements.name.value;

    setUser({
      email: userEmail,
      password: userPassword,
      name: userName
    });

    // console.log(user)
  }

  return (
    <div className="Form">
      <div className="container">
        <form onSubmit={(event): void => loadData(event)}>
          <h1>Sign In</h1>
          <label>
            Email
            <input type="email" name="email" placeholder="Email..." />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="Password..." />
          </label>
          <label>
            Name
            <input type="text" name="name" placeholder="Name..." />
          </label>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}`,
`body {
  font-size: 15px;
}

button {
  cursor: pointer;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

form {
  padding: 1.5rem;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  display: flex block;
  flex-direction: column;
  gap: 1rem 0;
  font-family: "Golos Text", sans-serif;
}

form h1 {
  margin: 0;
}

form label {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.05rem;
}

form input {
  height: 1.25rem;
  border: 1.5px solid #121212;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
}

form .submit {
  height: 2.5rem;
  background-color: #121212;
  color: #fff;
  font-size: 1rem;
  border: 1.5px solid #121212;
  border-radius: 5px;
}

form .submit:hover {
  color: #121212;
  background-color: #fff;
}`
]},
{title: {en: `keyof operator in TypeScript`, ua: `Оператор keyof у Typescript`}, body: {en: `The first time we use the keyof operator is when we need to find keys as Type Unions from an interface or Type Aliases and insert them into Type Aliases or a variable. The second case where we use the keyof operator is when we need to take specific keys from Type Generic for function arguments. The third case when we use the keyof operator is when we need to take the keys in the form of a Type Union from an object, but for this we must first use the typeof operator to convert from a regular ready-made object to an interface object.`, ua: `Перший випадок, коли ми використовуємо оператор keyof - це коли нам треба знайти ключі у вигляді Type Union із інтерфейсу чи Type Aliases та вставити їх до Type Aliases або змінної. Другий випадок, коли ми використовуємо оператор keyof - це коли нам треба взяти конкретні ключі із Type Generic для аргументів функції. Третій випадок, коли ми використовуємо оператор keyof - це коли нам треба взяти ключі у вигляді Type Union з об'єкту, але для цього нам треба спочатку використати оператор typeof для переведення зі звичайного готового об'єкта до об'єкта-інтрефейсу.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/2/keyof-types.html`, ua: `https://www.typescriptlang.org/docs/handbook/2/keyof-types.html`}, type: 'typescript', data: [
`/* Case 1. Using "keyof" operator when we want to receive interface's or Type Aliases keys in Type Aliases or variable. */
interface ICompany {
    name: string;
    debts: number
}

type CompanyKeys = keyof ICompany // 'name' | 'debts'

const nameKey: CompanyKeys = 'name'
const debtsKey: CompanyKeys = 'debts'

type ICompanyValues = ICompany[keyof ICompany] // 'string' | 'number'

// const namKey: CompanyKeys = 'nam' // Error! Type '"nam"' is not assignable to type 'keyof ICompany'. Did you mean '"name"'?

type companyInfo = {
    name: string;
    isBigCompany: boolean
}

type CompanyInfoKeys = keyof companyInfo // 'name' | 'isBigCompany'

const amazon: CompanyInfoKeys = 'isBigCompany'`,
`/* Case 2. Using "keyof" operator when we want to receive object's keys from Type Generic in function arguments. */
function printDebts <
    TCompany, 
    TName extends keyof TCompany, 
    TDebts extends keyof TCompany
> (
    company: TCompany,
    name: TName,
    debts: TDebts
) {
    console.log(
        'Company: ' + company[name] + '; Debts: ' + company[debts]
    )
}

const google: ICompany = {
    name: 'google',
    debts: 5000000
}

const apple = {
    name: 'apple',
    chalks: 3500000
}

printDebts(
    google, 'name', 'debts'
) // Company: google; Debts: 5000000

printDebts(
    apple, 'name', 'chalks'
) // Company: apple; Debts: 3500000`,
`/* Case 3. Using keyof operator when we want to receive keys from object to Type Aliases. */
type GoogleKeys = keyof typeof google // 'name' | 'open'
const googleKeys: GoogleKeys = 'name'

// type GoogleKeys = keyof google // Error! 'google' refers to a value, but is being used as a type here. Did you mean 'typeof google'?`
]},
{title: {en: `Indexed Access Types`, ua: `Індексовані типи доступу`}, body: {en: `Indexed Access Types is a mechanism used to find the type of keys in interfaces. Very similar to finding meaning in ordinary objects.`, ua: `Indexed Access Types - це механізм, що використовується для знаходження типу серез ключів у інтерфейсів. Дуже схожий із знаходженням значення у звичайних об'єктах.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html`, ua: `https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html`}, type: 'typescript', data:
`interface ICompany {
    name: string;
    debts: number;
    departments: IDepartment[];
    managment: {
        owner: string
    };
    suppliers: ISupplier[]
}

interface IDepartment {
    [key: string]: string
}

interface ISupplier {
    name: string;
    goods: string
}

// type CompanyDebtsType = ICompany['debts'] // Correct!

let debts = 'debts' as "debts" // Correct! debts: "debts"
type CompanyDebtsType = ICompany[typeof debts]

type CompanyDepartmentsTypes = ICompany['departments'] // IDepartment[]
type CompanyOwnerType = ICompany['managment']['owner'] // string
type CompanySuppliersType = ICompany['suppliers'][number] // ISupplier
type CompanyKeys = ICompany[keyof ICompany] // CompanyKeys = string | number | IDepartment[] | {owner: string} | ISupplier[]

const google: ICompany = {
    name: 'google',
    debts: 5000000,
    departments: [
        {sales: 'sales'},
        {developer: 'dev'}
    ],
    managment: {
        owner: 'John'
    },
    suppliers: [
        {name: 'Meta', goods: 'Ads'},
        {name: 'Android', goods: 'IT soft'}
    ]
}`},
{title: {en: `"as" keyword in TypeScript`, ua: `Ключове слово "as" у TypeScript`}, body: {en: `The first time we use the "as" keyword is when we need to type a variable declared via "let". The second case where we use the "as" keyword is when we need to type a variable declared via "let" with the output value of a non-typed function. The third case where we use the "as" keyword is when we need to type a variable with an HTML element.`, ua: `Перший випадок, коли ми використовуємо ключове слово "as" - це коли нам треба затипізувати змінну задекларовану через "let". Другий випадок, коли ми використовуємо ключове слово "as" - це коли нам треба затипізувати змінну задекларовану через "let" із значенням вивода не типізованої функції. Третій випадок, коли ми використовуємо ключове слово "as" - це коли нам треба затипізувати змінну із HTML елементом.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/advanced-types.html`, ua: `https://www.typescriptlang.org/docs/handbook/advanced-types.html`}, type: 'typescript', data: [
`/* Case 1. Inserting operator "as" when we using "let" variable declaration. */
let message = 'Hello World' as string

let path = './src/App' as './src/App'

let id: unknown = 25

let userId = id as number`,
`/* Case 2. Inserting operator "as" when we want typing "let" variable declaration with result of non-typing function. */
interface IStudent {
    name: string;
    grade: number;
}

function registerStudent({name, grade}: IStudent) {
    return {
        name: name,
        grade: grade
    }
}

let student1 = registerStudent({
    name: 'Alex',
    grade: 8
}) as IStudent`,
`/* Case 4. Using the as keyword when we need to make an object immutable. */
const request = {
    url: 'https://web-app.com',
    method: 'POST'
} as const

// request.method = 'GET' // Error! Cannot assign to 'method' because it is a read-only property.`,
`/* Case 3. Inserting operator "as" when we want typing declaration of HTML Element. */
const input = document.querySelector('input') as HTMLElement`,
]},
{title: {en: `Nullish coalescing operator (??)`, ua: `Оператор для перевірки на нульове значення`}, body: {en: `The Nullish coalescing (??) operator is an operator that checks values to see if they are false. If the values are zero (falsy), then the operator will output the previously specified alternative value.`, ua: `Оператор Nullish coalescing (??) - це оператор, що перевіряє значення на те, чи не нульові (falsy) вони є. Якщо значення нульові (falsy), то оператор виведе, попередньо зазначене, альтернативне значення.`}, link: {en: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing`, ua: `https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing`}, type: 'operator', data:
`const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42`},
{title: {en: `Using enum for React Components narorwing`, ua: `Використання enum для звуження компонентів React`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'typescript', data: [
`import Demo from "./Demo";

export default function App() {
  return (
    <div className="App">
      <Demo user={{ plan: "pro" }} />
    </div>
  );
}`,
`import PremiumView from "./PremiumView";
import ProView from "./ProView";
import FreeView from "./FreeView";

enum views {
  premium = PremiumView,
  pro = ProView,
  free = FreeView
}

interface DemoProps {
  user: {
    plan: "premium" | "pro" | "free";
  };
}

export default function Demo({ user }: DemoProps) {
  const CurrentView = views[user.plan];
  return (
    <>
      <CurrentView />
    </>
  );
}`
]},
{title: {en: `Folder Structure in React`, ua: `Структура папок у Реакті`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'React', data: [
fs_1,
fs_2,
fs_3,
fs_4,
]},
{title: {en: `Function Curring in React`, ua: `Куріювання функцій у Реакті`}, body: {en: `By breaking down functions into smaller, curried versions, you can dynamically generate new functions, customize behavior, and compose complex logic effortlessly.`, ua: `Розбиваючи функції на менші версії карі, ви можете динамічно генерувати нові функції, налаштовувати поведінку та створювати складну логіку без зусиль.`}, link: {en: `https://vm.tiktok.com/ZMjYTyKP2/`, ua: `https://vm.tiktok.com/ZMjYTyKP2/`}, type: 'React', data:
`import React, { useState } from "react";

export default function Demo() {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const handleChange = (field: keyof typeof formState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormState({
      ...formState,
      [field]: event.target.value
    });
  };

  console.log(formState);

  return (
    <>
      <input
        type="text"
        value={formState.email}
        onChange={handleChange("email")}
      />
      <input
        type="text"
        value={formState.password}
        onChange={handleChange("password")}
      />
      <br />
    </>
  );
}`},
{title: {en: `Operator "satisfies" in TypeScript`, ua: `Оператор "satisfies" у TypeScript`}, body: {en: `The satisfies operator tells you whether a given type satisfies a particular condition – and it provides this information before running your code. Also, when you're using it, you can declare a new variable to verify if an expression's type matches another type. In this article, you will learn all about this useful TypeScript operator. I'll explain how things were before this operator was available, and why we need it. We'll also explore real-life scenarios where you can use satisfies and the benefits it offers.`, ua: `Оператор satisfies повідомляє вам, чи задовольняє даний тип певній умові, і він надає цю інформацію перед виконанням вашого коду. Крім того, коли ви використовуєте його, ви можете оголосити нову змінну, щоб перевірити, чи тип виразу відповідає іншому типу.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html`, ua: `https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html`}, type: 'typescript', data:
`type MyError = {
  code: string | number;
  message: string
}

const error = {
  code: 404,
  message: "Error"
} satisfies MyError

if (error.code === 400) {
  console.log("Bad Request Error!")
}`},
{title: {en: `var VS let VS const`, ua: `var VS let VS const`}, body: {en: `"let", "const", and "var" are all used to declare variables in JavaScript, but they differ in their behavior and scope. "var" declares a variable with function scope or global scope, meaning it can be accessed anywhere within the function or program respectively. var declarations are also hoisted to the top of the function or global scope. "let" declares a variable with block scope, meaning it can only be accessed within the block it was declared in (i.e. within curly braces {}). let declarations are not hoisted. "const" is similar to let in that it declares a block-scoped variable, but once it's assigned a value, it cannot be reassigned.`, ua: `Усі "let", "const" і "var" використовуються для оголошення змінних у JavaScript, але вони відрізняються своєю поведінкою та областю. "var" оголошує змінну з областю видимості функції або глобальною областю видимості, тобто до неї можна отримати доступ будь-де в межах функції або програми відповідно. Оголошення var також піднімаються на початок функції або глобальної області. "let" оголошує змінну з блочною областю, тобто до неї можна отримати доступ лише в межах блоку, у якому її було оголошено (тобто у фігурних дужках {}). нехай декларації не піднімаються. "const" схожий на let тим, що він оголошує блочну змінну, але після того, як їй присвоєно значення, воно не може бути перепризначено.`}, link: {en: `#`, ua: `#`}, type: 'all', data: [
`// Scope
if (true) {
    var T0 = 10
    let T1 = 20
    const T2 = 30
}

console.log(T0) // 10
console.log(T1) // T1 is not defined
console.log(T2) // T2 is not defined`,
`// Hoisting
console.log(T0) // undefined
var T0 = 10

// console.log(T1)
let T1 = 20
// Error! Cannot access 'T1' before initialization

console.log(T2)
const T2 = 30
// Error! Cannot access 'T2' before initialization`,
`// Editable
var T0 = 10
let T1 = 20
const T2 = 30

T0 = 1 
// Correct! 

T1 = 2 
// Correct! 

T2 = 3 
// Error! Assignment to constant variable.`,
]},
{title: {en: `Top 8 API Architectural styles`, ua: `Топ 8 архітектурних стилів API`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'Node.js', data:
apiArchitectural},
{title: {en: `All about useTransition()`, ua: `Все про useTransition()`}, body: {en: `useTransition is a React Hook that lets you update the state without blocking the UI.`, ua: `useTransition — це хук React, який дозволяє оновлювати стан, не блокуючи інтерфейс користувача.`}, link: {en: `https://react.dev/reference/react/useTransition`, ua: `https://react.dev/reference/react/useTransition`}, type: 'React', data: [
`import { useState } from "react";

import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import PostsTab from "./PostsTab";
import TabButton from "./TabButton";

type Tab = "about" | "posts" | "contact";

const Demo = () => {
  const [tab, setTab] = useState<Tab>("about");

  const selectTab = (tab: Tab) => {
    setTab(tab);
  };

  return (
    <>
      <div>
        <TabButton
          text="About"
          onClick={() => selectTab("about")}
          className={tab === "about" ? "primary" : "secondary"}
        />
        <TabButton
          text="Posts"
          onClick={() => selectTab("posts")}
          className={tab === "posts" ? "primary" : "secondary"}
        />
        <TabButton
          text="Contact"
          onClick={() => selectTab("contact")}
          className={tab === "contact" ? "primary" : "secondary"}
        />
      </div>

      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </>
  );
};

export default Demo;`,
`import { useTransition } from "react";

interface ITabButtonProps {
  onClick: () => void;
  text: string;
  className: string;
}

export default function TabButton({
  onClick,
  className,
  text
}: ITabButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onClick?.();
    });
  };

  if (isPending) return <p>Loading...</p>;

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}`,
`const AboutTab = () => {
  return <p>Welcome to my profile!</p>;
};

export default AboutTab;`,
`import { memo } from "react";

const SlowPost = ({ index }: { index: number }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Post #{index + 1}</li>;
};
const PostsTab = () => {
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

  let items = [];
  for (let i = 0; i < 2500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
};

export default memo(PostsTab);`,
`const ContactTab = () => {
  return (
    <>
      <p>You can find me online here:</p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
};

export default ContactTab;`,
]},
{title: {en: `All about useDeferredValue()`, ua: `Все про useDeferredValue()`}, body: {en: `useDeferredValue is a React Hook that lets you defer updating a part of the UI.`, ua: `useDeferredValue — це хук React, який дозволяє відкласти оновлення частини інтерфейсу користувача.`}, link: {en: `https://react.dev/reference/react/useDeferredValue`, ua: `https://react.dev/reference/react/useDeferredValue`}, type: 'React', data: [
`import { useDeferredValue, useState } from "react";

import SlowList from "./SlowList";

const Demo = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="tutorial">
      <SlowList text={deferredQuery} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Demo;`,
`import { memo } from "react";

const SlowItem = ({ text }: { text: string }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Text: {text}</li>;
};

const SlowList = memo(({ text }: { text: string }) => {
  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

export default SlowList;`
]},
{title: {en: `All about useImperativeHandle()`, ua: `Все про useImperativeHandle()`}, body: {en: `useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref. Call useImperativeHandle at the top level of your component to customize the ref handle it exposes.`, ua: `useImperativeHandle — це хук React, який дозволяє налаштувати дескриптор, представлений як ref. Викличте useImperativeHandle на верхньому рівні вашого компонента, щоб налаштувати дескриптор ref, який він показує.`}, link: {en: `https://react.dev/reference/react/useImperativeHandle`, ua: `https://react.dev/reference/react/useImperativeHandle`}, type: 'React', data: [
`import { useRef } from "react";

import TextInput, { TextInputRef } from "./TextInput";
import Counter from "./Counter";

function Demo() {
  const inputRef = useRef<TextInputRef>(null);

  return (
    <>
      <Counter />
      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current?.reset()}>
        Reset From Parent
      </button>
    </>
  );
}

export default Demo;`,
`import { forwardRef, Ref, useImperativeHandle, useState } from "react";

export type CounterRef = {
  checkSubscibed: (value: boolean) => void;
  reset: () => void;
};

interface CounterProps {}

function Counter(props: CounterProps, ref: Ref<CounterRef>) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // We want to expose this to the parent
  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({
    checkSubscibed: (value) => console.log(value),
    reset
  }));

  return (
    <div>
      <h1 className="text-2xl">Count: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default forwardRef(Counter);`,
`import { forwardRef, Ref, useImperativeHandle, useRef } from "react";

export interface TextInputRef {
  reset: () => void;
}

interface TextInputProps {}

function TextInput(props: TextInputProps, ref: Ref<TextInputRef>) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!localRef.current) return;

      localRef.current.value = "";
      localRef.current?.focus();
    }
  }));

  return <input type="text" ref={localRef} />;
}

export default forwardRef(TextInput);`,
]},
{title: {en: `Condition Types and infer in TypeScript`, ua: `Типи умов і висновок у TypeScript`}, body: {en: `Types can be formulated using the ternary operator, where we ask: "Is this type inherited from (or from) what?" If yes, then there will be this type, if not, then there will be another.” Conditional types always require the use of a constraint, that is, the extends keyword. The type being checked must be limited to something that needs to be checked. In general, this is the state. We work with types. An error will occur if you use a literal. Concrete values must first be converted to a type using the typeof operator.`, ua: `Типи можна формулювати за допомогою тернарного оператора, де ми запитуємо: Цей тип успадкований від (або від) чого? Якщо так, то буде цей тип, якщо ні, буде інший». Умовні типи завжди потребують обмеження, тобто ключового слова extends. Тип, що перевіряється, повинен бути обмежений чимось, що потрібно перевірити. Загалом такий стан. Ми працюємо з типами. З використанням літералу виникне помилка. Конкретні значення спочатку необхідно перетворити на тип за допомогою оператора типу.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/2/conditional-types.html`, ua: `https://www.typescriptlang.org/docs/handbook/2/conditional-types.html`}, type: 'typescript', data: [
`/* Case 1. Condition types in Type Aliases. */
type NotFoundError = "not found" extends string ? string : number; // notFoundError = string
type BadRequestError = 400 extends string ? string : number; // BadRequestError = number

const error400: number = 400;
type Error400 = 400 extends typeof error400 ? number : string; // Error400 = number

type LogIn = {
  name: string
} & (Male | Female)

type Male = {
  gender: 'male';
  salary: number
}

type Female = {
  gender: 'female';
  weight: number
}

const user1: LogIn = {
  name: 'Alex',
  gender: 'male',
  salary: 3000, // Correct!
  // weight: 70 // Error!
}

const user2: LogIn = {
  name: 'Jane',
  gender: 'female',
  weight: 50 // Correct!
}`,
`/* Case 2. Condition types in Interfaces with Generic Types. */
interface IUserName {
  name: string;
}

interface IUserID {
  id: number;
}

type NameOrID<T extends string | number> = T extends string
  ? IUserName
  : IUserID;

const userName: NameOrID<number> = {
  id: 42
}; // userName: NameOrID`,
`/* Case 3. Condition types in Interfaces with Union Types and Generic Types. */
interface IUser<T extends "registered" | Date> {
  registered: T extends "registered" ? "registered" : Date;
}

const user1: IUser<Date> = {
  registered: new Date()
}; // user1: IUser<Date>

const user2: IUser<"registered"> = {
  registered: "registered"
}; // user2: IUser<"registered">

type ApiResponse<T> = 
    | {status: 'success'; data: T; timestamp: Date}
    | {status: 'error'; message: string; timestamp: Date}

let response1: ApiResponse<number> = {
    status: 'success',
    data: 100,
    timestamp: new Date()
}

let response2: ApiResponse<string> = {
    status: 'error',
    message: 'Bad request.',
    timestamp: new Date()
}`,
`/* Case 4. Typing functions using Union Types with Generic Types. */
function createUserNameOrID<T extends string | number>(
  nameOrID: T
): T extends string ? IUserName : IUserID {
  if (typeof nameOrID === "string") {
    const obj: IUserName = {
      name: nameOrID
    };
    return obj as NameOrID<T>;
  } else {
    const obj: IUserID = {
      id: nameOrID
    };
    return obj as NameOrID<T>;
  }
}

console.log(createUserNameOrID<number>(42)); // { id: 42 }`,
`/* Case 5. Condition types with nested conditions in Type Aliases with Generic Types. */
type ErrorMessage<T extends 400 | 404 | string> = T extends 400
  ? 400
  : T extends 404
    ? 404
    : "Something went wrong.";

const error404: ErrorMessage<404> = 404; // error404: 404`,
`/* Case 6. Keyword infer in Generic Types for type of array item. */
type GetArrayItemType<T> = T extends Array<infer First> ? First : T;

type PORT = GetArrayItemType<number>; // PORT = number
type PORTS = GetArrayItemType<number[]>; // numArray = number`,
`/* Case 7. Converting from a primitive type to an array from a primitive type. */
type ToArray<Type> = Type extends any ? Type[] : never;

type StringArray = ToArray<string>; // StringArray = string[]
type NumberOrStringArray = ToArray<number | string>; // NumberOrStringArray = number[] | string[]`,
]},
{title: {en: `Mapped Types with Type Aliases and Interfaces in TypeScript`, ua: `Mapped Types з Type Aliases і Interfaces у TypeScript`}, body: {en: `When you don’t want to repeat yourself, sometimes a type needs to be based on another type. Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time. A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type.`, ua: `Якщо ви не хочете повторюватися, інколи тип потрібно базувати на іншому типі. Відображені типи будуються на основі синтаксису для підписів індексів, які використовуються для оголошення типів властивостей, які не були оголошені заздалегідь. Відображений тип — це загальний тип, який використовує об’єднання PropertyKeys (часто створюється за допомогою keyof) для перебору ключів для створення типу.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/2/mapped-types.html`, ua: `https://www.typescriptlang.org/docs/handbook/2/mapped-types.html`}, type: 'typescript', data: [
`/* Example 1 of Mapped Types. */
type ComparableType = {
  [arbitraryID in Plurality]: CustomDataType
}

/* Example 2 of Mapped Types. */
type ComparableType = {
  [arbitraryID in keyof ObjectPlurality]: CustomDataType
}`,
`/* Case 1. Pure Mapped Types using. */
type Currencies = {
	usa: 'uds';
	china: 'cny';
	ukraine: 'uah';
	kz: 'tenge'
}

type CreateCustomCurrencies<T> = {
	[P in keyof T]: string
}

type CustomCurrencies = CreateCustomCurrencies<Currencies> // CustomCurrencies = {usa: string; china: string; ukraine: string; kz: string;}

/* 
    // Same as prev code line:
    type CustomCurrencies = {
		usa: string;
		china: string;
		ukraine: string;
		kz: string;
	}
*/`,
`/* Case 2. Mapped Types using Readonly variant. */
type CreateCustomCurrencies<T> = {
    readonly [P in keyof T]: string
}

// type CreateCustomCurrencies<T> = { readonly [P in keyof T]: string; }`,
`/* Case 3. Mapped Types using Optional + Readonly variant. */
type CreateCustomCurrencies<T> = {
    readonly [P in keyof T]?: string
}

// type CreateCustomCurrencies<T> = { readonly [P in keyof T]?: string | undefined; }`,
`/* Case 4. Mapped Types using Optional + Readonly variant using "+" operator. We use it when we want assumed all other properties. */
type CreateCustomCurrencies<T> = {
    +readonly [P in keyof T]+?: string
}

// type CreateCustomCurrencies<T> = { +readonly [P in keyof T]+?: string | undefined; }`,
`/* Case 5. Mapped Types using Optional + Readonly variant using "-" operator. We use it when we want romeve all other properties. */
type CreateCustomCurrencies<T> = {
    -readonly [P in keyof T]-?: string
}

// type CreateCustomCurrencies<T> = { -readonly [P in keyof T]-?: string; }`,
`/* Case 6. Mapped Types using Plurality with Union Types. */
type Keys = 'name' | 'age' | 'role'

type User = {
	[K in Keys]: string
}

const Alex: User = {
	name: "alex",
	age: '24',
	role: 'adimn'
}`,
`/* Case 6. Using Mapped Types with Interfaces. */
interface ICurrencies {
    usa: 'uds';
    china: 'cny';
    ukraine: 'uah';
    kz: 'tenge'
}

type CreateCustomCurrencies<T> = {
    [P in keyof T]: string
}

type CustomCurrencies = CreateCustomCurrencies<ICurrencies>`,
`/* Case 7. Prettifying nested types using Mapped Types. */
interface IInfo {
    title: string;
    body: string
}

type NestedTodo = IInfo & {
    hasCompleted: boolean
}

type Prettify<T> = {
    [K in keyof T]: T[K]
}

type Todo = Prettify<NestedTodo>
/* 
    // Same as prev code.
    type Todo = {
        title: string;
        body: string;
        hasCompleted: boolean;
    }
*/`
]},
{title: {en: `Template Literal Types in TypeScript`, ua: `Template Literal Types у TypeScript`}, body: {en: `Template Literal Types are required to recalculate valid Literal Types.`, ua: `Template Literal Types потрібні для того, щоб зробити перерахунок допустимих Literal Types.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html`, ua: `https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html`}, type: 'typescript', data: [
`/* Case 1. Using Template Literal Types with a simple Literal Types. */
type Greeting = 'Hello'
type AlexGreeting = \`\${Greeting}, Alex!\` // type AlexGreeting = "Hello, Alex!"`,
`/* Case 2. Using Template Literal Types with a Union Literal Types. */
type MyAnimation = 'fade' | 'swipe'
type Direction = 'in' | 'out'

type SlideAnimation = \`\${MyAnimation} \${Direction}\` // type SlideAnimation = "fade in" | "fade out" | "swipe in" | "swipe out"`,
`/* Case 3. Using Template Literal Types with a Union Literal Types with string Generic Types. */
type Port = 3000 | 3001
type Logger = "Server works on"

/* Uppercase, Lowercase, Capitalize */
type PortLogger = \`\${Uppercase<Logger>}: \${Port}\` // type PortLogger = "SERVER WORKS ON: 3000" | "SERVER WORKS ON: 3001"`,
`/* Case 4. Using Template Literal Types with Mapped Types. */
interface IAlex {
	name: "Alex";
	age: '24';
	isStudent: 'false'
}

type IUser<T> = {
	[K in keyof T as \`user\${Capitalize<string & K>}\`]: string
} // type IUser<T> = { [K in keyof T as \`user\${Capitalize<string & K>}\`]: string; }

const user: IUser<IAlex> = {
	userName: 'Tom',
	userAge: '32',
	userIsStudent: 'false'
}`,
]},
{title: {en: `Factorial Formula`, ua: `Формула Факторіалу`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'task', data:
`function factorial(n: number): number {
  if (n === 0) return 1
  return n * factorial(n - 1)
}

console.log(
  factorial(5)
) // 120

console.log(
  factorial(3)
) // 6

console.log(
  factorial(1)
) // 1`},
{title: {en: `Poligram Checker`, ua: `Перевірка на Поліграму`}, body: {en: `A polygram is a word or phrase that is read the same way from left to right.`, ua: `Поліграма це слово або вислів, що чиатється однаково як і злів, так і зправо.`}, link: {en: `#`, ua: `#`}, type: 'task', data:
`function isEquals(char1, char2) {
  return char1.toLowerCase() === char2.toLowerCase()
}

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase()
}

function isPoligram(string) {
  let start = 0
  let end = string.length - 1
  
  while (start < end) {
    const firstChar = string[start]
    const lastChar = string[end]
    
    if(!isLetter(firstChar)) {
      start += 1 
      continue
    }
    
    if(!isLetter(lastChar)) {
      end -= 1
      continue
    }
    
    if(!isEquals(firstChar, lastChar)) {
      return false
    }
    
    start += 1
    end -= 1
  }
  
  return true
}

console.log(
  isPoligram('Last')
) // false

console.log(
  isPoligram("Madam, I'm Adam")
) // true`},
{title: {en: `Collecting Object Values ​​in a Structure`, ua: `Збір значень об'єктів у структурі`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'task', data:
`const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {value: 3}
      ]
    },
    {
      value: 4,
      children: [
        {value: 5},
        {value: 6}
      ]
    }
  ]
}

function getTreeValues(tree) {
  let stack = [tree]
  let result = []
  
  while (stack.length > 0) {
    const node = stack.pop()
    
    if (node.value !== undefined) {
      result.push(node.value)
    }
    
    if (node.children?.length) {
      stack.push(...node.children)
    }
  }
  
  return result
}

console.log(getTreeValues(tree)) // [1, 4, 6, 5, 2, 3]`},
{title: {en: `Checking for odd parentheses in a string`, ua: `Перевірка на непарність дужок у строці`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'task', data: 
`function checkBrackets(string) {
  let openedBracket = 0
  let closedBracket = 0
  
  let openedSquareBracket = 0
  let closedSquareBracket = 0
  
  let openedFigureBracket = 0
  let closedFigureBracket = 0
  
  for (let i = 0; i < string.length; i++) {
    if(string[i] === '(') openedBracket += 1
    if (string[i] === ')') closedBracket += 1
    
    if (string[i] === '[') openedSquareBracket += 1
    if (string[i] === ']') closedSquareBracket += 1
    
    if (string[i] === '{') openedFigureBracket += 1
    if (string[i] === '}') closedFigureBracket += 1
  }
  
  return openedBracket === closedBracket && openedSquareBracket === closedSquareBracket && openedFigureBracket === closedFigureBracket
}

console.log(
  checkBrackets('{){})[[]') // false
)

console.log(
  checkBrackets('{{((}][)})')  // true
)`},
{title: {en: `Search and filter only unique numbers`, ua: `Пошук та фільтрація тільки неповторюваних чисел`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'task', data:
`function findDuplcateNumbers(arr) {
  let newArr = []
  let object = {}

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i]
    if (!(currentItem in object)) {
      object[currentItem] = 1
    } else {
      object[currentItem] += 1
    }
  }
  
  const keys = Object.keys(object)
  keys.forEach((key) => {
    if (object[key] === 1) {
      newArr.push(key)
    }
  })
  
  return newArr
}

console.log(
  findDuplcateNumbers(
    [1, 1, 2, 3, 4, 4, 5]
  ) 
) // ["2", "3", "5"]`},
{title: {en: `3 interesting tasks for typing objects using Utility Types and Mapped Types`, ua: `3 цікавих задачки для типізації об'єктів за допомогою Utility Types та Mapped Types`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'typescript', data: [
`// We need to type this large object
// The futureClasses property should depend on classes by type
// The exClients and futureClients properties must also depend on currClients
// OR all three depend on a common parent

// In simple words: when adding properties to the target object they must be
// automatically added to dependent ones (immediately a hint from TS)

interface IFitnessClass {
	name: string;
	startsAt: string;
	duration: number;
}

interface IFutureClass extends Omit<IFitnessClass, "startsAt"> {
	willStartsAt: string;
}

interface IClient {
	name: string;
	age: string | number;
	gender: "male" | "female";
	timeLeft: string;
	makeCallFor: Date;
}

type currentClient = Omit<IClient, "makeCallFor">;
type ExClient = Omit<IClient, "timeLeft">;
type FutureClient = Pick<IClient, "name" | "makeCallFor">;

interface IFitnessClub {
	clubName: string;
	location: string;
	classes: IFitnessClass[];
	futureClasses: IFutureClass[];
	currentClients: currentClient[];
	exClients: ExClient[];
	futureClients: FutureClient[];
}

const fitnessClubCenter: IFitnessClub = {
	clubName: "Fitness club Center",
	location: "central ave. 45, 5th floor",
	classes: [
		{
			name: "yoga",
			startsAt: "8:00 AM",
			duration: 60,
		},
		{
			name: "trx",
			startsAt: "11:00 AM",
			duration: 45,
		},
		{
			name: "swimming",
			startsAt: "3:00 PM",
			duration: 70,
		},
	],
	futureClasses: [
		{
			name: "boxing",
			willStartsAt: "6:00 PM",
			duration: 40,
		},
		{
			name: "breath training",
			willStartsAt: "8:00 PM",
			duration: 30,
		},
	],
	currentClients: [
		{
			name: "John Smith",
			age: "-",
			gender: "male",
			timeLeft: "1 month",
		},
		{
			name: "Alise Smith",
			age: 35,
			gender: "female",
			timeLeft: "3 month",
		},
		{
			name: "Ann Sonne",
			age: 24,
			gender: "female",
			timeLeft: "5 month",
		},
	],
	exClients: [
		{
			name: "Tom Smooth",
			age: 50,
			gender: "male",
			makeCallFor: new Date("2023-08-12"),
		},
	],
	futureClients: [
		{
			name: "Maria",
			makeCallFor: new Date("2023-07-10"),
		},
	],
};`,
`interface ISlider {
	container?: string;
	numberOfSlides?: number;
	speed?: 300 | 500 | 700;
	direction?: "horizontal" | "vertical";
	dots?: boolean;
	arrows?: boolean;
	animationName?: string;
}

function createSlider({
	container = "",
	numberOfSlides = 1,
	speed = 300,
	direction = "horizontal",
	dots = true,
	arrows = true,
}: ISlider = {}): void {
	console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider(); // 1 300 horizontal true true

// It is necessary to type the settings object that will be dependent
// from the ISlider interface
// All fields in it are required

type CustomSliderOptions = Required<Omit<ISlider, 'speed' | 'animationName'>>
interface ICustomSlider extends CustomSliderOptions {
	speed: number
}

const customSliderOptions: ICustomSlider = {
	container: "id",
	numberOfSlides: 4,
	speed: 1100,
	direction: "horizontal",
	dots: true,
	arrows: true,
};

function createCustomSlider(options: ICustomSlider): void {
	if ("container" in options) {
		console.log(options);
	}
}

createCustomSlider(customSliderOptions)
/* 
    {
        container: 'id',
        numberOfSlides: 4,
        speed: 1100,
        direction: 'horizontal',
        dots: true,
        arrows: true
    }
*/`,
`interface IForm {
	login: string;
	password: string;
}

// It is necessary to type the validation object
// Please note that the data in the form can expand and these fields
// must also appear in the validation object

type FormValidation = {
	[P in keyof IForm]: {isValid: boolean} | {isValid: boolean, errorMsg: string}
}

const validationData: FormValidation = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};`,
]},
{title: {en: `An example of using Partial Utility Type working with statement`, ua: `Приклад використовування Partial Utility Type для роботи зі стейтами`}, body: {en: ``, ua: ``}, link: {en: `#`, ua: `#`}, type: 'typescript', data:
`interface ITodo {
  title: string;
  body: string
}

function updateTodo(todo: ITodo, fieldsToUpdate: Partial<ITodo>) {
  return {
      ...todo,
      fieldsToUpdate
  }
}

const initialTodo: ITodo = {
  title: 'Clean the dishes.',
  body: 'Do it right now!'
}

const updatedTodo1 = updateTodo(initialTodo, {})

const updatedTodo2 = updateTodo(initialTodo, {
  body: 'You can do it till 6pm'
})

const updatedTodo3 = updateTodo(initialTodo, {
  title: 'Vacuum the floor.'
})`},
{title: {en: `Utility Types for functions in TypeScript`, ua: `Utility Types для функцій у TypeScript`}, body: {en: ``, ua: ``}, link: {en: `https://www.typescriptlang.org/docs/handbook/utility-types.html`, ua: `https://www.typescriptlang.org/docs/handbook/utility-types.html`}, type: 'typescript', data: [
`/* Case 1. ReturnType Generic Type is used to find the type that a function should return. */
type DiscriminantReturnType = ReturnType<typeof discriminantFormula> // type DiscriminantReturnType = string

function discriminantFormula(a: number, b: number, c: number): string {
    let D = Math.pow(b, 2) - 4 * a * c
    let x1
    let x2
    
    if (D < 0) {
        return 'x1 = ∅; x2 = ∅'
    } 
    
    else {
        x1 = (-b + Math.sqrt(D)) / (2 * a)
        x2 = (-b - Math.sqrt(D)) / (2 * a)
        return "x1 = " + x1 + "; x2 = " + x2
    }
}`,
`/* Case 2. Parameters Generic Type is used to find the types of function arguments/parameters. Usually, this Generic Type returns a tuple, but if you explicitly specify that the type should be returned according to the index, then it will return the type according to the index. */
type XMultipliers = Parameters<typeof discriminantFormula> // type XMultipliers = [a: number, b: number, c: number]
type AMultiplier = Parameters<typeof discriminantFormula>[0] // type AMultiplier = number

type T0 = Parameters<(n: number) => number> // type T0 = [n: number]
type T1 = Parameters<<T>(arg: T) => T> // type T1 = [arg: unknown]`,
`/* Case 3. ConstructorParameters Generic Type is used to find the types of arguments/parameters in a class constructor. */
class Demo {
    constructor(
        a: number,
        b: string
    ) {}
}

type T2 = ConstructorParameters<typeof Demo> // type T2 = [a: number, b: string]
type T3 = ConstructorParameters<typeof Demo>[1] // type T3 = string`
]},
{title: {en: `Working with server requests, Promise and JSON`, ua: `Робота з серверними запитами, Promise і JSON`}, body: {en: ``, ua: ``}, link: {en: `https://github.com/microsoft/TypeScript/blob/main/src/lib/es2015.promise.d.ts`, ua: `https://github.com/microsoft/TypeScript/blob/main/src/lib/es2015.promise.d.ts`}, type: 'typescript', data: [
`/* Case 1. Working with ready JSON structure. */
const user = '{"name": "Alex", "id": 1}'

interface IUser {
    name: string;
    id: number
}

const parseUser: IUser = JSON.parse(user) // parseUser: any`,
`/* Case 2. Using Fetch API for fetching async data. */
interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

let todoList: ITodo[] = []

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((json) => {
        if ('id' in json && 'userId' in json) {
            todoList.push(json)
            todoList[0].id
        } else if (Array.isArray(json)) {
            todoList = json
        } else {
            console.log(\`\${json} is a string.\`)
        }
        console.log(todoList)
    })`,
`/* Case 3. Using Promises for getting "async" data. */
const promise = new Promise<string>((resolve, reject) => {
    resolve('test')
}) // promise: Promise<string>

promise.then((value) => {
    console.log(value.toLowerCase())
})`,
]},
{title: {en: `Utility Type Awaited and Promise in TypeScript`, ua: `Utility Type Awaited і Promise у TypeScript`}, body: {en: `Utility Type Awaited is required so that the type held by the Promise can be understood and recorded. It works recursively, so with nesting it should work well because of its recursion.`, ua: `Utility Type Awaited потрібен для того, щоб можна було зрозуміти та записати тип, що мається у Promise. Він працює рекурсивно, то із вкладеністю він має працювати добре через свою рекурсивність.`}, link: {en: `https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype`, ua: `https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype`}, type: 'typescript', data: [
`/* Case 1. Using Utility Type Awaited for getting type of Promise. */

// Basic Promise Type
type PromiseType = Awaited<Promise<number>> // type PromiseType = number

// Nested Promise Type
type PromiseTypeNested = Awaited<Promise<Promise<number>>> // type PromiseType = number

// Union Promise Type
type PromiseUnionType = Awaited<boolean | Promise<number>> // type PromiseUnionType = boolean | number
`,
`/* Case 2. Using Utility Type Awaited for getting type of Promise from function. */
interface ITodo {
    title: string;
    body: string;
    completed: boolean
}

async function fetchTodos(): Promise<ITodo[]> {
    const todos: ITodo[] = [
        {
            title: 'Wash the dishes',
            body: 'Do it immediately!',
            completed: false
        },
        {
            title: 'Vacuum the floor',
            body: 'Vaccum the floor only in your room tonight.',
            completed: true
        },
    ]

    return todos
}

const currentTodos = fetchTodos() // currentTodos: Promise<ITodo[]>
type FetchTodosReturnType = Awaited<ReturnType<typeof fetchTodos>> // type FetchTodosReturnType = ITodo[]`,
`/* Case 3. Legacy example of replacing Utility Type Awaited with infer. */
type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T
type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchTodos>> // type FetchDataReturnType = ITodo[]`,
]},
]

export default content