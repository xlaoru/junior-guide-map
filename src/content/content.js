import responsiveBreakpoints from '../images/responsive-breakpoints.png'
import markup1 from '../images/markup_1.jpg'
import markup2 from '../images/markup_2.jpg'
import markup3 from '../images/markup_3.jpg'
import markup4 from '../images/markup_4.jpg'
import gapstyle from '../images/gap-style.jpg'
import arraymethods_01 from '../images/array-methods_01.jpg'
import arraymethods_02 from '../images/array-methods_02.jpg'
import arraymethods_03 from '../images/array-methods_03.jpg'
import flexboxstyle from '../images/flexbox-style.jpg'
import objectfitstyle from '../images/object-fit-style.jpg'
import nthchildselector from '../images/nth-child-selector.jpg'
import basicsofhtml00 from '../images/basics-of-html-00.jpg'
import basicsofhtml01 from '../images/basics-of-html-01.jpg'
import basicsofhtml02 from '../images/basics-of-html-02.jpg'
import basicsofhtml03 from '../images/basics-of-html-03.jpg'
import basicsofhtml04 from '../images/basics-of-html-04.jpg'
import basicsofhtml05 from '../images/basics-of-html-05.jpg'
import basicsofhtml06 from '../images/basics-of-html-06.jpg'
import fullscreensample from '../images/fullscreensample.jpg'
import zoomhovereffect_01 from '../images/zoomhovereffect_01.jpg'
import zoomhovereffect_02 from '../images/zoomhovereffect_02.jpg'
import glassmorphism from '../images/glassmorphism.jpg'
import gridlayout from '../images/gridlayout.jpg'

const content = [
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
{title: {en: 'Spread syntax', ua: 'Spread синтаксис'}, body: {en: 'spread (...) is an operator that allows you to expand the elements available for iteration.', ua: 'spread (...) - це оператор, що дозволяє розширити доступні для ітерації елементи.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_syntax', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax'}, type: 'operator', data: 
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
{title: {en: 'Filtering ban words', ua: 'Фільтрування заборонених слів'}, body: {en: 'This function filters out ban words using the includes method.', ua: 'Ця функція фільтрує бан-слова за допомогою метода includes.'}, link: {en: '#', ua: '#'}, type: 'lifehack', data: 
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
{title: {en: 'React Categories Pattern', ua: 'Зарозок (паттерн) Категорій у Реакт'}, body: {en: 'This design pattern provides a set of various buttons that can change categories. This is all done using useState(), where the initial index of the standard category is written.', ua: 'Цей паттерн проєктування передабачає набір різноманітних кнопок, що можуть змінювати категорії. Це все проходить за допомогою useState(), куди записуються початковий індекс стандартної катергорії.'}, link: {en: '#', ua: '#'}, type: 'React', data: 
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

{title: {en: 'Getting info from API by KY.js library', ua: 'Отримуємо інформацію з API серверу за допомогою KY.js бібліотеки'}, body: {en: 'UseState() and useEffect() can be used to retrieve information from the API and record its state for future use. And the information itself can be taken using the KY.js library.', ua: 'За допомогою useState() та useEffect() можно отримати інформацію з API та записати її state для майбутнього використовування. А саму інформацію можно взяти за допомогою бібліотеки KY.js.'}, link: {en: 'https://github.com/sindresorhus/ky', ua: 'https://github.com/sindresorhus/ky'}, type: 'React', data: 
`import {useState, useEffect} from 'react'
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

{title: {en: 'React Redux-Toolkit mini form app', ua: 'Робимо міні проект Форми за допомогою біліотеки Реакт Redux-Toolkit'}, body: {en: 'This is a small project that uses Redux-Toolkit technology. This project represents input (where something is written) with output (where something is output).', ua: 'Це маленький проект, де використовується технологія Redux-Toolkit. Цей проект представляє input (куди пишуть щось) з output (куди виводять щось).'}, link: {en: 'https://redux.js.org/', ua: 'https://redux.js.org/'}, type: 'React', data: [
`/* index.js */
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
` /* store index.js */
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
            return {...state, value: action.payload}
        }
    }
})

export const {textAdditor} = TextSlice.actions
export const selectText = state => state.text.value
export default TextSlice.reducer`,
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

{title: {en: 'React props destructurization', ua: "Деструктурізація props об'єктів у Реакті"}, body: {en: 'Destructuring props objects in React is a very important part. Destructuring is used to make the code easier to read.', ua: "Деструктурізація props об'єктів у Реакті дуже важлива частина. Щоб полегшити читабельність коду застосовують деструктурізацію."}, link: {en: 'https://reactpatterns.com/', ua: 'https://reactpatterns.com/'}, type: 'React', data: 
`// <Destructurization skills={['Frontend', 'DevOps', 'Project Manager]} id='1' name='Alex' />
const Destructurization = ({skills, ...userInfo}) => {
return <ul><li>{userInfo.id}. {userInfo.name} is a {skills.join(', ')} developer</li></ul>
}

export default Destructurization`
},

{title: {en: 'Conditional rendering', ua: 'Умовний рендеринг'}, body: {en: 'Conditional rendering is a special syntax in React, where there are conditions under which it is possible to adjust the rendering of individual parts of the code.', ua: 'Умовний рендеринг - це спеціальний синтаксис у Реакті, де є умови при яких можливо регулювати рендеринг окремих частин коду.'}, link: {en: 'https://reactpatterns.com/', ua: 'https://reactpatterns.com/'}, type: 'React', data: 
`const ConditionalRendering = () => {
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
`const person = {
name: 'Alex',
age: 25,
city: 'Kyiv'
}

const {name, age} = person

console.log(name)
console.log(age)`},
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
`import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const DynamicGreeting = (props) => {
    return (
    <div className={'mb-3 p-3 border border-' + props.color}>
        {props.children}
    </div>
    )
}

const AdvancedDynamicGreeting = (props) => {
    return (
    <div className={'mb-3 p-3 border border-' + props.color}>
        {
        React.Children.map(props.children, child => {
            return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
        })
        }
    </div>
    )
}

const ColumnStyle = (props) => {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col>
                    {props.leftSide}
                </Col>
                <Col>
                    {props.rightSide}
                </Col>
            </Row>
        </Container>
    )
}

const PropsChildren = () => {
    return (
        <>
            <DynamicGreeting color={'primary'}>
                <h2>This weel was hard</h2>
                <h2>Hello world</h2>
            </DynamicGreeting>

            <AdvancedDynamicGreeting color={'primary'}>
                <h2>This weel was hard</h2>
                <h2>Hello world</h2>
            </AdvancedDynamicGreeting>

            <ColumnStyle 
                leftSide = {
                    <DynamicGreeting color={'primary'}>
                        <h2>Left side</h2>
                    </DynamicGreeting>
                }

                rightSide = {
                    <AdvancedDynamicGreeting color={'primary'}>
                        <h2>This weel was hard</h2>
                        <h2>Hello world</h2>
                    </AdvancedDynamicGreeting>
                }
            />

        </>
    )
}

export default PropsChildren`},
{title: {en: 'Rerender props in React', ua: 'Ререндер props у Реакті'}, body: {en: 'The term "render-prop" refers to a technique in which React components share one code (function) among themselves by passing it through a prop. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.', ua: 'Термін “рендер-проп” відноситься до техніки, в якій React-компоненти розділяють між собою один код (функцію) передаючи її через проп. Компонент з рендер-пропом приймає функцію, яка повертає React-елемент, і викликає її замість реалізації власної рендер-логіки.'}, link: {en: 'https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop', ua: 'https://uk.legacy.reactjs.org/docs/render-props.html'}, type: 'React', data:
`import React, {useState} from 'react'

const Message = (props) => {
    return (
        <h2>The counter is {props.counter}</h2>
    )
}

const Counter = (props) => {
    const [counter, setCounter] = useState(0)

    function changeCounter() {
        setCounter(count => count + 1)
    }

    return (
        <div>
            <button onClick={changeCounter}>Click me</button>
            {props.render(counter)}
        </div>
    )
}

const RerenderProps = () => {
    return (
        <div>
            <Counter render={counter => (
                <Message counter={counter}/>
            )}/>
        </div>
    )
}

export default RerenderProps`},
{title: {en: 'Array.isArray()', ua: 'Array.isArray()'}, body: {en: 'The Array.isArray() static method determines whether the passed value is an Array.', ua: 'Статичний метод Array.isArray() визначає, чи є передане значення масивом.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray'}, type: 'method', data:
`const list1 = ['banana', 'apple', 'orange']
const list2 = 'banana, apple, orange'

console.log(Array.isArray(list1))
console.log(Array.isArray(list2))`},
{title: {en: 'Hunger Games app', ua: 'Додаток Голодні ігри'}, body: {en: 'This application is an analogue of the Hunger Games game, where you drive in participants and with each passed circle of participants, with a random probability, it becomes less and less.', ua: 'Цей додаток є аналогом гри Голодні ігри, де ви заганяєте учасників і з кожним пройденим колом учасників, з випадковою ймовірністю, стає все менше і менше.'}, link: {en: '#', ua: '#'}, type: 'React', data:
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
`import {useState} from 'react';

const UseStateInfo = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')

    function adjustCount(amount) {
        // Given the past value
        setCount(
            prevValue => {
                return prevValue + amount
            }
        )
    }

    function valueCatcher(string) {
        // Ignoring the past value
        setValue(string)
    }

    return (
        <div>
            <div className='counter'>
                <button onClick={() => adjustCount(-1)}>-</button>
                <span>{count}</span>
                <button onClick={() => adjustCount(1)}>+</button>
            </div>
            <div className='form'>
                <input type="text" onChange={(event) => valueCatcher(event.target.value)} />
                <h5>{value}</h5>
            </div>
        </div>
    );
};

export default UseStateInfo;`},
{title: {en: 'Portals in React', ua: 'Портали у Реакті'}, body: {en: 'Portals let your components render some of their children into a different place in the DOM. This lets a part of your component “escape” from whatever containers it may be in. For example, a component can display a modal dialog or a tooltip that appears above and outside of the rest of the page.', ua: 'Портали дозволяють вашим компонентам відтворювати деякі їхні дочірні елементи в іншому місці в DOM. Це дозволяє частині вашого компонента «втекти» з будь-яких контейнерів, у яких він може знаходитися. Наприклад, компонент може відображати модальне діалогове вікно або спливаючу підказку, яка з’являється над і поза межами решти сторінки.'}, link: {en: 'https://react.dev/reference/react-dom/createPortal', ua: 'https://habr.com/ru/companies/smartprogress/articles/306096/'}, type: 'React', data:
`import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
    state = {
        advOpen: false
    }

    componentDidMount() {
        setTimeout(this.handleClick, 1000)
    }

    handleClick = () => {
        this.setState(({advOpen}) => ({
            advOpen: !advOpen
        }))        
    }

    render() {
        return (
            <Container>
                <form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto" 
                style={{'overflow': 'hidden', 
                        'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {
                        this.state.advOpen 
                            ? (
                                <Portal>
                                    <Msg/>
                                </Portal>
                            ) 
                            
                            : null
                    }
                </form>
            </Container>
        )
    }
}

const Portal = (props) => {
    const node = document.createElement('div')
    document.body.appendChild(node)

    return ReactDOM.createPortal(props.children, node)
}

const Msg = () => {
    return (
        <div 
            style={{'width': '500px', 
                'height': '150px', 
                'backgroundColor': 'red', 
                'position': 'absolute', 
                'right': '0', 
                'bottom': '0'
            }}
        >
            Hello
        </div>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;`},
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
getUsersOptimized()`},
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

if (isStudent) console.log(userName + ' is ' + age + ' years old and he is a student')
// Ilya is 16 years old and he is a student`},
{title: {en: 'Typing a function and what exactly it should return', ua: 'Типізація функції та що саме вона має повертати'}, body: {en: 'The function has the ability to specify what exactly it should return. If the current function does not have a return or the function returns undefind, then void must be written. Because this function returns void. If we need the function to return something specific, for example a clear answer as a string, then we need to write type string. This notation is the same in normal functions and in arrow functions.', ua: 'У функції є можливість прописати, що саме вона має повертати. Якщо усередені функції нема return або функція повертаю undefind, то треба прописати void. Оскільки ця функція повертає порожнечу. Якщо нам треба аби функція повертала конкретно щось, наприклад чітку відповідь у форматі строки, то нам треба це прописати. У звичайних функціях та у стрілочних функціях це прописування є однаковим.'}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/functions.html', ua: 'https://www.typescriptlang.org/docs/handbook/2/functions.html'}, type: 'typescript', data: 
`const isBirthdayData: boolean = true
const userNameData: string = 'John'
const ageData: number = 40

/* if function has nothing to return or this function returns undefind, then function must has type void */
function logBrtMsgVoid(isBirthday: boolean, userName: string, age: number): void {
    if (isBirthday) console.log('Congrats ' + userName.toUpperCase() + ', age: ' + (age + 1))
    // return undefind // this return is possible for void function
}

logBrtMsgVoid(isBirthdayData, userNameData, ageData) // Congrats JOHN, age: 41

/* if function has something to return, then function must has current type */
function logBrtMsgFunctional(isBirthday: boolean, userName: string, age: number): string {
    if (isBirthday) {
        return 'Congrats ' + userName.toUpperCase() + ', age: ' + (age + 1)
    } else {
        return 'Error'
    }
}

console.log(
    logBrtMsgFunctional(isBirthdayData, userNameData, ageData)
) // Congrats JOHN, age: 41

const logBrtMsgArrow = (isBirthday: boolean, userName: string, age: number): string => {
    if (isBirthday) {
        return 'Congrats ' + userName.toUpperCase() + ', age: ' + (age + 1)
    } else {
        return 'Error'
    }
}

console.log(
    logBrtMsgArrow(isBirthdayData, userNameData, ageData)
) // Congrats JOHN, age: 41

`},
{title: {en: 'The never type in functions and where it is used', ua: 'Тип never у функціях та де він використовується'}, body: {en: 'The never type is usually used when we need to write an error output. Another never type can occur when we have an infinite while loop or an infinite recursion. In general, we need the never type as a stopgap when we have a possible error when processing its arguments in the function.', ua: 'Тип never зазвичай використовується, коли нам треба прописати вивід помилки. Ще тип never може виникнути, коли в нас є безкінечний цикл while або безкінечна рекурсія. Взагалом тип never нам потрібен, як затичка, коли в нас можлива помилка при обробці у функції її аргументів.'}, link: {en: 'https://www.typescriptlang.org/docs/handbook/basic-types.html', ua: 'https://www.typescriptlang.org/docs/handbook/basic-types.html'}, type: 'typescript', data: 
`const isBirthdayData: boolean = true
let ageData: number = 40
const userNameData: string = 'John'

/* The never type is used when something in the function will never be returned in time. That is, the difference between void and never is that void returns undefind, and never returns nothing at all */
const createError = (msg: string): never => {
    throw new Error(msg)
}

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
    if (isBirthday == true) {
        return 'Congrats ' + userName.toUpperCase() + ', age: ' + (age + 1)
    } 
    
    else if (isBirthday === false) {
        return 'Too bad'
    }
    
    return createError("Error")
}

logBrtMsg(isBirthdayData, userNameData, ageData)`},
{title: {en: 'The null and undefined types in TypeScript', ua: 'Типи null та undefined у TypeScript'}, body: {en: '"undefined" values have not been defined yet, whereas "null" values indicate intentional absence of a value.', ua: '"undefined" значення ще не визначені, тоді як "null" значення вказують на навмисну відсутність значення.'}, link: {en: 'https://basarat.gitbook.io/typescript/recap/null-undefined', ua: 'https://basarat.gitbook.io/typescript/recap/null-undefined'}, type: 'typescript', data: 
`/* null is the absence of anything at all */
/* undefined is a type that says something doesn't exist */

const test: null = null // correct
const test2: any = null // correct
// const test3: string = null // not correct
// const test4: number = null // not correct

const test5: undefined = undefined // correct
const test6: any = undefined // correct
// const test7: string = undefined // not correct

let smth // type any

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
`const userData: 
{
    isBirthdayData: boolean,
    ageData: number,
    userNameData: string,
    messages: {error: string}
} = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error'
    }
}

const createError = (msg: string): never => {
    throw new Error(msg)
}

// not destructured object
function logBrtMsg1(data: {
    isBirthdayData: boolean, 
    userNameData: string, 
    ageData: number
}): string {
    if (data.isBirthdayData) {
        return 'Congrats ' + data.userNameData.toUpperCase() + ', age: ' + (data.ageData + 1)
    } 
    else {
        return createError("Error")
    }
}

console.log(
    logBrtMsg1(userData)
) // Congrats JOHN, age: 41

// destructured object
function logBrtMsg2({
    isBirthdayData, 
    userNameData, 
    ageData, 
    messages: {error}
}: {
    isBirthdayData: boolean, 
    userNameData: string, 
    ageData: number,
    messages: {error: string}
}): string {
    if (isBirthdayData) {
        return 'Congrats ' + userNameData.toUpperCase() + ', age: ' + (ageData + 1)
    } 
    else {
        return createError(error)
    }
}

console.log(
    logBrtMsg2(userData)
) // Congrats JOHN, age: 41`},
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
// const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'John', 'Alex', 'Anna']

/* tuple with spread operator */
// const userDataTuple: [...boolean[], number, string] = [true, false, 40, 'John']

/* tuple with spread operator and error. It's because tuple must have only one spread */
// const userDataTuple: [...boolean[], number, ...string[]] = [true, 40, 'John', 'Alex', 'Anna'] // Error! A rest element cannot follow another rest element.

/* you can't change tuple element type */
// userDataTuple[0] = 'true' // Error! Type 'string' is not assignable to type 'boolean'.

// userDataTuple[3] // Error! Tuple type '[boolean, number, string]' of length '3' has no element at index '3'.
/* you can push something in the tuple but it will not count */
// userDataTuple.push(50)
// userDataTuple[3] // Error! Tuple type '[boolean, number, string]' of length '3' has no element at index '3'.

const res = userDataTuple.map((t) => t + ' - data') // res array will be string[] type

const [bthd, age, userName] = userDataTuple // tuple destructuring`},
{title: {en: 'Union type in TypeScript', ua: "Тип Union (Об'єднаний) у TypeScript"}, body: {en: 'Typically, the Union type is used by developers to record undefined information in advance. For example: we have an error output and we do not know what it will give us, whether it is a 404 number or a "not found" notification, and for this we need a Union type. But there is also a downside to the use of this technology, namely uncertainty. Because if we have variants of string or number types, then we definitely cannot apply methods for this information. For example: we have a choice between a string and a number, and in the function we need to output information from the argument, but we cannot apply the toUpperCase() method to this information, because the information can be a number, and numbers do not have the toUpperCase() method .', ua: "Зазвичай тип Union використовується розробниками для запису невизначеної заздалегідь інформації. Наприклад: в нас є вивід помилки і ми не знаємо, що саме нам видасть, чи число 404, чи сповіщення ''не знайдено'' і ось для цього нам потрібен тип Union. Але є і мінус застосування цієї технології, а саме невизначеність. Бо якщо в нас є варіанти типів строки чи числу, то ми однозначно не можемо застосувати методи для цієї інформації. Наприклад: в нас є вибір між строкою та числом і у фінкції нам треба вивести інформацію з аргументу, але ми не можемо застосувати метод toUpperCase() до цієї інформації, оскільки інформація може бути і числом, а вже у числа не має методу toUpperCase()."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html', ua: 'https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html'}, type: 'typescript', data: 
`let message: string | number = 5
// message = 'hello' // correct

let messages: string[] | number[] = ['a', 'b']
// messages = [1, 1, 2, 3, 5, 8] // correct

function printMsg(msg: string | number): void {
    console.log(msg)
    // console.log(msg.toLowerCase()) // Error! Property 'toLowerCase' does not exist on type 'string | number'. Property 'toLowerCase' does not exist on type 'number'.
}

printMsg(4) // 4
printMsg('hello') // hello`},
{title: {en: 'Narrowing Union type in TypeScript', ua: "Narrowing (Звуження) типу Union (Об'єднаний) у TypeScript"}, body: {en: 'Commonly, data type narrowing for Union type is used to use specific methods for specific data types. For this, commands such as Array.isArray() are used for arrays, "in" for objects, instanceof for classes, etc.', ua: "Зазвичай для використання конкретних методів для конкретних типів даних використовуються Narrowing (Звуження) типів даних для типу Union. Для цього використовують такі команди, як Array.isArray() для масивів, ''in'' для об'єктів, instanceof для класів тощо."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html', ua: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html'}, type: 'typescript', data: 
`function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
            msg.forEach(m => console.log(m) // (parameter) msg: string[]
        )
    } else if (typeof msg === 'number') {
        console.log(msg.toFixed())
    } else {
        console.log(msg)
    }
}

// printMsg(4) // 4

const printReadings = (a: number | string, b: number | boolean) => {
    if (a === b) console.log(a, b)
}

const printReadings2 = (a: number[] | string) => {
    console.log(a.slice(0, 3))
}

const checkReadings = (readings: {system: number} | {user: number}): void => {
    if('system' in readings) {
        console.log(readings.system)
    } else {
        console.log(readings.user)
    }
}

function logValue(x: string | Date) {
    if (x instanceof Date) {
        console.log(x.getDate())
    } else {
        console.log(x.toUpperCase())
    }
}`},
{title: {en: 'Literal types in TypeScript', ua: "Літеральні типи у TypeScript"}, body: {en: 'Literal types are data types used to specify values for variables, function arguments, etc. For example: we need to specify which protocol and port the server should be run on (see the post code). We have a choice of either http or https protocol, then port 3000 or 3001. We cannot have another protocol or another port, if we enter something else, then our server simply will not start.', ua: "Літеральні типи - це такі типи даних, що слугують для конкретизації значень для змінних, аргументів функцій тощо. Наприклад: нам потрібно зазначити за яким протоколом та за яким портом на треба запускати сервер (дивіться на код посту). В нас є вибір або http, або https протокол, далі порт 3000 чи 3001. В нас не може бути інший протокол, чи інший порт, якщо ми впишемо щось інше, то в нас просто не запуститься сервер."}, link: {en: 'https://www.typescriptlang.org/docs/handbook/literal-types.html', ua: 'https://www.typescriptlang.org/docs/handbook/literal-types.html'}, type: 'typescript', data: 
`let msg: 'Hello' = 'Hello' 
msg = 'Hello' // correct
// msg = 'hello' // Error! Type '"hello"' is not assignable to type '"Hello"'.

const port3000: number = 3000
const port3001: number = 3001

function startServer(
    protocol: 'http' | 'https', 
    port: 3000 | 3001
): 'Server Started' { // (parameter) protocol: "http" | "https", (parameter) port: 3000 | 3001
    if (port === port3000 || port === port3001) {
        console.log('Server started on ' + protocol + '://server:' + port)
    } else {
        console.error('Invalid port')
    }

    return 'Server Started'
}

startServer('https', 3001) // Server started on https://server:3001

function createAnimation(
    id: string | number, 
    animationName: string, 
    timingFunc: 'ease' | 'ease-out' | 'ease-in' = 'ease',
    duration: number,
    iterCount: 'infinite' | number
): void {
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

const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string /* <- function annotation */ = (
    protocol: 'http' | 'https', /* <- function announcement */
    port: 3000 | 3001 /* <- function announcement */
): 'Server Started' => { // (parameter) protocol: "http" | "https", (parameter) port: 3000 | 3001
    console.log('Server started on ' + protocol + '://server:' + port)
    return 'Server Started'
}

startServer(serverConfig.protocol, serverConfig.port) // Server started on https://server:3001`},
]

export default content