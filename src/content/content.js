import responsiveBreakpoints from '../images/responsive-breakpoints.png'
import markdown1 from '../images/markdown_1.jpg'
import markdown2 from '../images/markdown_2.jpg'
import markdown3 from '../images/markdown_3.jpg'
import markdown4 from '../images/markdown_4.jpg'
import gapstyle from '../images/gap-style.jpg'
import arraymethods_01 from '../images/array-methods_01.jpg'
import arraymethods_02 from '../images/array-methods_02.jpg'
import arraymethods_03 from '../images/array-methods_03.jpg'

const content = [
{media: 'none', caption: {en: 'Array.prototype.filter()', ua: 'Array.prototype.filter()'}, text: {en: 'filter is a method that creates a new unique array with specific criteria based on the selected array.', ua: 'filter - це метод, що створює новий унікальний масив з чіткими критеріями на основі обранного масиву.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'}, type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let filteredArray = array.filter(
    language => {
        if (language.length === 2) return true
    }
) 

console.log(filteredArray)`},
{media: 'none', caption: {en: 'Array.prototype.map()', ua: 'Array.prototype.map()'}, text: {en: 'map is a method that creates a new unique array with some distinct changes in it.', ua: 'map - це метод, що створює новий унікальний массиву з якимись чіткими змінами у ньому.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map'}, type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let mappedArray = array.map( 
    language => { 
        return language + ':)' 
    }
) 

console.log(mappedArray)`},
{media: 'none', caption: {en: 'Array.prototype.reduce()', ua: 'Array.prototype.reduce()'}, text: {en: 'reduce is a method that applies an explicit criterion (reducer) to each array element and returns a single resulting final value.', ua: 'reduce - це метод, що застосовує чіткий критерій (reducer) до кожного елементу масиву та повертає одне резултативне кінцеве значення.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce'}, type: 'method', code: 
`const array = [1, 2, 3, 4, 5] 
const total = array.reduce( 
    (accumulator, element) => { 
        return accumulator + element 
    }
) 

console.log(total)`},
{media: 'none', caption: {en: 'Array.prototype.forEach()', ua: 'Array.prototype.forEach()'}, text: {en: 'forEach is a method that populates a distinct variable for each array element.', ua: 'forEach - це метод, що виповнює чітку змінну для кожного елементу масиву.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach'}, type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
let forEachedArray = array.forEach( 
    language => console.log(language + ' :)') 
) 

console.log(forEachedArray)`},
{media: 'none', caption: {en: 'Array.prototype.indexOf()', ua: 'Array.prototype.indexOf()'}, text: {en: 'indexOf is a method that finds the closest index of the item you are looking for.', ua: 'indexOf - це метод, що шукає найблищий індекс item`а, котрий ви шукаєте.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf'}, type: 'method', code: 
`const array = [1, 2, 3, 4, 5] 
console.log(array.indexOf(2, 0))`},
{media: 'none', caption: {en: 'Object.keys()', ua: 'Object.keys()'}, text: {en: 'keys is a method that shows all the keys of an object or array.', ua: 'keys - це метод, що показую усі ключі об`єкта чи массива.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys'}, type: 'method', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
const object = { 
    1: 'JS', 
    2: 'TS', 
    3: 'C#', 
    4: 'Java' 
} 

console.log(Object.keys(array)) 
console.log(Object.keys(object))`},
{media: 'none', caption: {en: 'String.prototype.split()', ua: 'String.prototype.split()'}, text: { en: 'split is a method that converts a string into an array.', ua: 'split - це метод, що перетворює строку у масив.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split'}, type: 'method', code: 
`let string = 'Hello World' 
let splitedString = string.split(' ') 

console.log(splitedString)`},
{media: 'none', caption: {en: 'Spread syntax', ua: 'Spread синтаксис'}, text: {en: 'spread (...) is an operator that allows you to expand the elements available for iteration.', ua: 'spread (...) - це оператор, що дозволяє розширити доступні для ітерації елементи.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_syntax', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax'}, type: 'operator', code: 
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
{media: 'none', caption: {en: 'Callback', ua: 'Колбек'}, text: {en: 'callback is a function that is passed as an argument to (for example) another function. Further, this callback function is used (for example) as outputting some information to the console.', ua: 'callback - це функція, яку передають у якості аргументу до (наприклад) іншої функції. Далі цю callback функцію використовують (наприклад), як відображення якоїсь інформації у консоль.'}, link: {en: 'https://developer.mozilla.org/en/docs/Glossary/Callback_function', ua: 'https://developer.mozilla.org/ru/docs/Glossary/Callback_function'}, type: 'function', code: 
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
{media: 'none', caption: {en: 'Closure', ua: 'Замикання'}, text: {en: 'Closure is the creation of a local function in another function for later use of it with data.', ua: 'Замикання - це створення локальної функції в інщій функції для подалих використовувань її з даними.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Closures#:~:text=%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B8,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%2C%20%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%20%D0%B5%D1%91%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures#:~:text=%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B8,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%2C%20%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%20%D0%B5%D1%91%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.'}, type: 'function', code: 
`function init() {
    let name = 'Name' 
    function showName() { 
        console.log(name) 
    } 

    showName() 
} 

init()`},
{media: 'none', caption: {en: 'Recursion', ua: 'Рекурсія'}, text: {en: 'Recursion is a function call to itself.', ua: 'Рекурсія - це виклик функції у собі.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Errors/Too_much_recursion', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Errors/Too_much_recursion'}, type: 'function', code: 
`let num = 0 
function init() { 
    num ++  
    console.log(num)  
    if (num === 100) return  
    init() 
} 

init()`},
{media: 'none', caption: {en: 'do... while', ua: 'do... while'}, text: {en: 'do... while is a loop very similar to the while loop, but with a different syntax. The idea is that the loop will repeat until the condition is not true.', ua: 'do... while - це цикл, дуже схожий на цикл while, але з іншим синстаксисом. Ідея полягає в тому, що цикл буде повторюватися поки умова не буде значенням true.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/do...while', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while'}, type: 'cycle', code: 
`let result = '' 
let i = 0 
do { 
    i++ 
    result = result + i 
} while (i < 5) 

console.log(result)`},
{media: 'none', caption: {en: 'for in / for of', ua: 'for in / for of'}, text: {en: 'The difference between `for in` and `for of` is that for in is responsible for indexes and for of is responsible for values.', ua: 'Різниця між `for in` і `for of` полягая в тому, що for in відповідає за індекси, а for of відповідає за значення.'}, link: {en: '#', ua: '#'}, type: 'cycle', code: 
`const array = ['JS', 'TS', 'C#', 'Java'] 
for (const index in array) { 
    console.log(index) 
} 

for (const value of array) { 
    console.log(value) 
}`},
{media: 'none', caption: {en: 'while', ua: 'while'}, text: { en: 'while is a loop that will repeat until the condition is not true.', ua: 'while - це цикл, буде повторюватися поки умова не буде значенням true.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while'}, type: 'cycle', code: 
`let i = 0 
while (i <= 3) { 
    console.log(i) 
    i++ 
}`},
{media: 'none', caption: {en: 'Ternary expressions', ua: 'Умовний оператор'}, text: {en: 'Ternary expressions are a concise replacement of the if/else condition.', ua: 'Тернарні вирази - це лаконічна заміна умови if/else.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'}, type: 'operator', code: 
`function isEqual(string1, string2) { 
    let out = '' 

    string1.length === string2.length 
        ? out = 'strings are equal' 
        : out = 'strings are not equal' 

    return out 
} 

console.log(isEqual('hello', 'world')) 
console.log(isEqual('bye', 'world'))`},
{media: 'none', caption: {en: 'Array.length()', ua: 'Array.length()'}, text: {en: 'length is a method that displays the length of the array.', ua: 'length - це метод, що показую довжину масиву.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/length'}, type: 'method', code: 
`function isBigger(string1, string2) { 
return string1.length === string2.length 
} 

console.log(isBigger('hello', 'world')) 
console.log(isBigger('bye', 'world'))`},
{media: 'none', caption: {en: 'fetch', ua: 'fetch'}, text: {en: 'fetch is a request to the server.', ua: 'fetch - це запит на сервер.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/API/Fetch_API/Using_Fetch', ua: 'https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch'}, type: 'request', code: 
`function getUsers() { 
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { 
    return response.json() 
    })
    .then(data => data.forEach(user => console.log((user.name)))) 
} 

getUsers()`},
{media: 'none', caption: {en: 'Math.floor() + Math.random()', ua: 'Math.floor() + Math.random()'}, text: {en: 'floor is a Math method that rounds a number to the nearest smaller integer. random is a Math method that helps find a random number in a specific range.', ua: 'floor - це метод Math, котрий округлює число до найблищого меньшого цілого числа. random - це метод Math, котрий допомагає знайти випадкове число в конкретному діапазоні.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/random', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random'}, type: 'method', code: 
`function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min) 
} 

console.log(randomNumber(0, 10)) 
console.log(randomNumber(12, 99))`},
{media: 'none', caption: {en: 'Filtering empty strings from the array', ua: 'Фільтрація порожніх рядків із масиву'}, text: {en: 'This is a function that finds all false values ​​using the filter method and a Boolean value.', ua: 'Це функція, що знаходить усі неправильні (false) значення за допомогою методу filter та значення Boolean.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`const dirtyArray = ['JS', '', 'TS', '', '', 'PHP'] 
const clearArray = dirtyArray.filter(Boolean) 

console.log(clearArray)`},
{media: 'none', caption: {en: 'Filtering of unique values ​​in the array', ua: 'Фільтрація унікальних значень в масиві'}, text:{en: 'This is a function that filters values ​​using the filter and Set methods.', ua: 'Це функція, що фільтрує значення за допомогою метода filter та Set.'} , link: {en: '#', ua: '#'}, type: 'task', code: 
`const dirtyArray = ['JS', 'TS', 'TS', 'PHP', 'PYTHON', 'TS'] 
let arrayWithUniqueValues = [... new Set(dirtyArray)] 

console.log(arrayWithUniqueValues)`},
{media: 'none', caption: {en: 'Shuffling elements in an array', ua: 'Переміщення елементів у масиві'}, text: {en: 'This is a function that shuffles all the values ​​in an array through the sort method.', ua: 'Це функція, що перемішує усі значення у масиві через метод sort.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`const array = ['JS', 'TS', 'PHP', 'PYTHON', 'Java'] 
const shuffledArray = array.sort( 
    () => Math.random() - 0.5 
) 

console.log(shuffledArray)`},
{media: 'none', caption: {en: 'Falsy values', ua: 'Хибні значення'}, text: {en: 'Invalid values ​​that correspond to false in Boolean format.', ua: 'Невірні значення, що у Boolean форматі відповідають false.'}, link: {en: 'https://developer.mozilla.org/en/docs/Glossary/Falsy', ua: 'https://developer.mozilla.org/ru/docs/Glossary/Falsy'}, type: 'task', code: 
`const falsyValues = [
    '', 0, null, undefined, NaN, false
]`},
{media: 'none', caption: {en: 'Fibonaccio cycle', ua: 'Цикл Фібоначчі'}, text: {en: 'This is a cycle in which two previous numbers form the next.', ua: 'Це цикл у якому два попередніх числа утворюють наступне.'}, link: {en: 'https://www.programiz.com/javascript/examples/fibonacci-series', ua: 'https://www.programiz.com/javascript/examples/fibonacci-series'}, type: 'task', code: 
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
{media: 'none', caption: {en: 'Finding the largest number in an array', ua: 'Знаходження найбільшого числа в масиві'}, text: {en: 'This is a function that finds the largest number in an array using a loop.', ua: 'Це функція, що знаходить найбільше число у масиві за допомогою цикла.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`const numberArray = [1, 7, 26, 4, 82, 19] 
function findMaxNumber(array) { 
    let maxNumber = array[0] 

    for (const number of array) { 
        if (maxNumber < number) maxNumber = number 
    } 
    return maxNumber 
} 

console.log(findMaxNumber(numberArray))`},
{media: 'none', caption: {en: 'Finding multiples', ua: 'Пошук кратних'}, text: {en: 'This is a function that finds numbers that are multiples of 3, 5 and 3 and 5 at once.', ua: 'Це функціі, що знаходиь числа кратним 3, 5 та 3 і 5 одразу.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
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
{media: 'none', caption: {en: 'Search for a letter in a word', ua: 'Пошук букви в слові'}, text: {en: 'This function searches for letters in a word.', ua: 'Ця функція шукає букви у слові.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
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
{media: 'none', caption: {en: 'Checking the object for emptiness', ua: "Перевірка об'єкта на порожнечу"}, text: {en: 'This function checks the object for void via Object.keys() + .length.', ua: 'Ця функція перевіряє об`єкт на порожнечу через Object.keys() + .length.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`function isEmptyObject(object) { 
    return Object.keys(object).length === 0 
} 

let schedule = {} 
console.log(isEmptyObject(schedule)) 

schedule['8:30'] = 'get up' 
console.log(isEmptyObject(schedule))`}, 
{media: 'none', caption: {en: 'Class', ua: 'Клас'}, text: {en: 'A class is syntactic sugar over JavaScript`s existing prototype inheritance mechanism.', ua: 'Клас - це синтаксичний цукор над існуючим у JavaScript механізмом прототипного наслідування.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes'}, type: 'OOP', code: 
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
{media: 'none', caption: {en: 'Filtering ban words', ua: 'Фільтрування заборонених слів'}, text: {en: 'This function filters out ban words using the includes method.', ua: 'Ця функція фільтрує бан-слова за допомогою метода includes.'}, link: {en: '#', ua: '#'}, type: 'lifehack', code: 
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
{media: 'none', caption: {en: 'Promise', ua: 'Promise'}, text: {en: 'The Promise object is used for deferred and asynchronous requests.', ua: 'Об`єкт Promise використовується для відкладених і ансинхронних запитів.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise'}, type: 'request', code: 
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
{media: 'none', caption: {en: 'Fibonaccio cycle v2.0', ua: 'Цикл Фібоначчі v2.0'}, text: {en: 'This is a cycle in which two previous numbers form the next.', ua: 'Це цикл у якому два попередніх числа утворюють наступне.'}, link: {en: 'https://www.programiz.com/javascript/examples/fibonacci-series', ua: 'https://www.programiz.com/javascript/examples/fibonacci-series'}, type: 'task', code: 
`function fibonaccioCycle(amount) { 
    return new Array(amount).fill(0).reduce( 
        (accumulator, zero, index) => [...accumulator, index < 2 
        ? 1 
        : accumulator[index - 1] + accumulator[index -2]], []).join(' ') 
} 

console.log(fibonaccioCycle(10))`},
{media: 'none', caption: {en: 'Filtering of unique values ​​in the array v2.0', ua: 'Фільтрація унікальних значень в масиві v2.0'}, text: {en: 'This is a function that filters values ​​using the filter and indexOf methods.', ua: 'Це функція, що фільтрує значення за допомогою метода filter та indexOf.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
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
{media: 'none', caption: {en: 'Filtering of unique values ​​in the array v3.0', ua: 'Фільтрація унікальних значень в масиві v3.0'}, text: {en: 'This is a function that filters values ​​using the reduce and includes method.', ua: 'Це функція, що фільтрує значення за допомогою метода reduce та includes.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
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
{media: 'none', caption: {en: 'Euclid`s algorithm', ua: 'Алгоритм Евкліда'}, text: {en: 'This is a function that finds the lowest common multiple for two numbers.', ua: 'Це функція, що знаходить НСК для двух чисел.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
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
{media: 'none', caption: {en: 'Isogram check', ua: 'Перевірка ізограми'}, text: {en: 'This is a function that checks a word for an isogram. That is, whether there are repeated letters in the word.', ua: 'Це функція, що перевіряє слово на ізограму. Тобто чи є у слові повторювальні літери.'}, link: {en: '#', ua: '#'}, type: 'task', code: 
`function isIsogram(word) { 
    let separatedWord = word.split('') 
    let settedWord = [...new Set(separatedWord)] 

    return separatedWord.length === settedWord.length 
} 

console.log(isIsogram('Dermatoglyphics')) 
console.log(isIsogram('moose')) 
console.log(isIsogram('aba'))`},  
{media: 'none', caption: {en: 'Digital clock', ua: 'Цифровий годинник'}, text: {en: 'An interactive clock made using setInterval().', ua: 'Інтерактивний годинник, котрий зроблений за допомогою setInterval().'}, link: {en: '#', ua: '#'}, type: 'task', code: 
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
{media: 'none', caption: {en: 'switch', ua: 'switch'}, text: {en: 'switch is a loop that compares expressions with the cases listed in its environment and then issues the corresponding statement.', ua: 'switch - це цикл, що зрівнює вирази з випадками, перерахованими у середені її, а потім випонює відповідне інструкції.'}, link: {en: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch'}, type: 'cycle', code: 
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
{media: 'none', caption: {en: 'React Search Pattern', ua: 'Зразок (паттерн) Пошуковику у Реакт'}, text: {en: 'This design pattern provides a search input where an event is passed through the onChange() attribute, i.e. the letters to search for. Next, these letters go to useState(), which is used to process the search query.', ua: 'Цей паттерн проєктування передбачає пошуковий інпут куди через атрибут onChange() передається подію, тобто літери для пошуку. Далі ці літери переходять до useState() з допомогою якого і робиться оброблення пошукового запиту.'}, link: {en: '#', ua: '#'}, type: 'React', code: 
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
{media: 'none', caption: {en: 'React Categories Pattern', ua: 'Зарозок (паттерн) Категорій у Реакт'}, text: {en: 'This design pattern provides a set of various buttons that can change categories. This is all done using useState(), where the initial index of the standard category is written.', ua: 'Цей паттерн проєктування передабачає набір різноманітних кнопок, що можуть змінювати категорії. Це все проходить за допомогою useState(), куди записуються початковий індекс стандартної катергорії.'}, link: {en: '#', ua: '#'}, type: 'React', code: 
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

{media: 'none', caption: {en: 'All about useEffect()', ua: 'Все про UseEffect()'}, text: {en: 'An effect hook allows you to perform side effects in a functional component.', ua: 'Хук ефектів дозволяє виконувати побічні ефекти у функціональному компоненті.'}, link: {en: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/', ua: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/'}, type: 'React', code: 
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

{media: 'none', caption: {en: 'Getting info from API', ua: 'Отримуємо інформацію з API серверу'}, text: {en: 'UseState() and useEffect() can be used to retrieve information from the API and record its state for future use.', ua: 'За допомогою useState() та useEffect() можно отримати інформацію з API та записати її state для майбутнього використовування.'}, link: {en: '#', ua: '#'}, type: 'React', code: 
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

{media: 'none', caption: {en: 'Getting info from API by KY.js library', ua: 'Отримуємо інформацію з API серверу за допомогою KY.js бібліотеки'}, text: {en: 'UseState() and useEffect() can be used to retrieve information from the API and record its state for future use. And the information itself can be taken using the KY.js library.', ua: 'За допомогою useState() та useEffect() можно отримати інформацію з API та записати її state для майбутнього використовування. А саму інформацію можно взяти за допомогою бібліотеки KY.js.'}, link: {en: 'https://github.com/sindresorhus/ky', ua: 'https://github.com/sindresorhus/ky'}, type: 'React', code: 
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

{media: 'none', caption: {en: 'React Redux-Toolkit mini form app', ua: 'Робимо міні проект Форми за допомогою біліотеки Реакт Redux-Toolkit'}, text: {en: 'This is a small project that uses Redux-Toolkit technology. This project represents input (where something is written) with output (where something is output).', ua: 'Це маленький проект, де використовується технологія Redux-Toolkit. Цей проект представляє input (куди пишуть щось) з output (куди виводять щось).'}, link: {en: 'https://redux.js.org/', ua: 'https://redux.js.org/'}, type: 'React', code: [
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

{media: 'none', caption: {en: 'React props destructurization', ua: "Деструктурізація props об'єктів у Реакті"}, text: {en: 'Destructuring props objects in React is a very important part. Destructuring is used to make the code easier to read.', ua: "Деструктурізація props об'єктів у Реакті дуже важлива частина. Щоб полегшити читабельність коду застосовують деструктурізацію."}, link: {en: 'https://reactpatterns.com/', ua: 'https://reactpatterns.com/'}, type: 'React', code: 
`// <Destructurization skills={['Frontend', 'DevOps', 'Project Manager]} id='1' name='Alex' />
const Destructurization = ({skills, ...userInfo}) => {
return <ul><li>{userInfo.id}. {userInfo.name} is a {skills.join(', ')} developer</li></ul>
}

export default Destructurization`
},

{media: 'none', caption: {en: 'Conditional rendering', ua: 'Умовний рендеринг'}, text: {en: 'Conditional rendering is a special syntax in React, where there are conditions under which it is possible to adjust the rendering of individual parts of the code.', ua: 'Умовний рендеринг - це спеціальний синтаксис у Реакті, де є умови при яких можливо регулювати рендеринг окремих частин коду.'}, link: {en: 'https://reactpatterns.com/', ua: 'https://reactpatterns.com/'}, type: 'React', code: 
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

{media: 'none', caption: {en: 'Discriminant Formula', ua: 'Формула Дискримінанту'}, text: {en: 'The function for finding the roots of a quadratic equation using the Discriminant Formula is made using the methods of the Math class. Namely Math.pow() - power (numbers), Math.sqrt() - root (numbers).', ua: 'Функція для знаходження коренів квадратного рівняння за допомогою Формула Дискримінанту зробленна за допомогою методів класа Math. А саме Math.pow() - степінь(числа), Math.sqrt() - корінь(числа).'}, link: {en: 'https://en.wikipedia.org/wiki/Discriminant', ua: 'https://uk.wikipedia.org/wiki/%D0%94%D0%B8%D1%81%D0%BA%D1%80%D0%B8%D0%BC%D1%96%D0%BD%D0%B0%D0%BD%D1%82'}, type: 'task', code: 
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

{media: 'none', caption: {en: 'Email sender on Node.js', ua: 'Відправник на електронну пошту на Node.js'}, text: {en: 'This program uses the nodemailer library, which helps to easily send information to e-mail.', ua: 'Ця програма застосовую бібліотеку nodemailer, котра допомогає легко відсилати інформацію на електронну пошту.'}, link: {en: 'https://github.com/nodemailer/nodemailer', ua: 'https://github.com/nodemailer/nodemailer'}, type: 'Node.js', code: 
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

{media: 'none', caption: {en: 'Array.prototype.includes()', ua: 'Array.prototype.includes()'}, text: {en: 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.', ua: 'Метод includes() визначає, чи містить масив певне значення серед своїх записів, повертаючи true або false відповідно.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes'}, type: 'method', code: 
`const array = [1, 4, 'hello', 77, 'WoRld']

console.log(array.includes(4))
console.log(array.includes('hello'))
console.log(array.includes('hello', 3))
console.log(array.includes('WoRld'))

const string = 'helloWorld'

console.log(array.includes('hello'))
console.log(array.includes('world'))`},

{media: 'none', caption: {en: 'Destructuring assignment', ua: 'Деструктуризаційне завдавання'}, text: {en: 'The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.', ua: 'Синтаксис присвоєння деструктуризації — це вираз JavaScript, який дає змогу розпаковувати значення з масивів або властивості з об’єктів у окремі змінні.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'}, type: 'operator', code: 
`const person = {
name: 'Alex',
age: 25,
city: 'Kyiv'
}

const {name, age} = person

console.log(name)
console.log(age)`},
{media: 'none', caption: {en: 'Array.prototype.push()', ua: 'Array.prototype.push()'}, text: {en: 'The push() method adds one or more elements to the end of the array and returns the new length of the array.', ua: 'Метод push() додає один або більше елементів до кінця масиву і повертає нову довжину масиву.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push'}, type: 'method', code:
`let array = [1, 1, 2, 3, 5, 8]

array.push(13)
console.log(array)

array.push(21, 34, 55)
console.log(array)

console.log(array.push())`},
{media: 'none', caption: {en: 'Array.prototype.pop()', ua: 'Array.prototype.pop()'}, text: {en: 'The pop() method removes the last element from the array and returns its value. The last element of the array, or undefined if the array is empty.', ua: 'Метод pop() видаляє останній елемент з масиву та повертає його значення. Останній елемент масиву або undefined, якщо масив порожній.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop#%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D0%BC%D0%BE%D0%B5_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop#%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D0%BC%D0%BE%D0%B5_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5'}, type: 'method', code:
`let array = [1, 1, 2, 3, 5, 8]

array.pop()
console.log(array)

console.log(array.pop())
console.log(array)`},

{media: 'none', caption: {en: 'Children props in React', ua: 'Children props у Реакті'}, text: {en: 'Children lets you manipulate and transform the JSX you received as the children prop.', ua: 'Children дозволяють вам маніпулювати та перетворювати JSX, який ви отримали як дочірню props.'}, link: {en: 'https://react.dev/reference/react/Children', ua: 'https://react.dev/reference/react/Children'}, type: 'React', code:
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
{media: 'none', caption: {en: 'Rerender props in React', ua: 'Ререндер props у Реакті'}, text: {en: 'The term "render-prop" refers to a technique in which React components share one code (function) among themselves by passing it through a prop. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.', ua: 'Термін “рендер-проп” відноситься до техніки, в якій React-компоненти розділяють між собою один код (функцію) передаючи її через проп. Компонент з рендер-пропом приймає функцію, яка повертає React-елемент, і викликає її замість реалізації власної рендер-логіки.'}, link: {en: 'https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop', ua: 'https://uk.legacy.reactjs.org/docs/render-props.html'}, type: 'React', code:
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
{media: 'none', caption: {en: 'Array.isArray()', ua: 'Array.isArray()'}, text: {en: 'The Array.isArray() static method determines whether the passed value is an Array.', ua: 'Статичний метод Array.isArray() визначає, чи є передане значення масивом.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray', ua: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray'}, type: 'method', code:
`const list1 = ['banana', 'apple', 'orange']
const list2 = 'banana, apple, orange'

console.log(Array.isArray(list1))
console.log(Array.isArray(list2))`},
{media: 'none', caption: {en: 'Hunger Games app', ua: 'Додаток Голодні ігри'}, text: {en: 'This application is an analogue of the Hunger Games game, where you drive in participants and with each passed circle of participants, with a random probability, it becomes less and less.', ua: 'Цей додаток є аналогом гри Голодні ігри, де ви заганяєте учасників і з кожним пройденим колом учасників, з випадковою ймовірністю, стає все менше і менше.'}, link: {en: '#', ua: '#'}, type: 'React', code:
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
{media: 'none', caption: {en: 'Spinner in React', ua: 'Spinner в Реакт'}, text: {en: 'Spinner in React is a very important thing. When information comes with a delay from the API, then some kind of stub is needed so that the user does not see an empty page.', ua: 'Spinner у React — це дуже важлива річ. Коли інформація надходить із затримкою від API, то потрібна якась заглушка, щоб користувач не бачив порожню сторінку.'}, link: {en: '#', ua: '#'}, type: 'React', code:
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
{media: 'none', caption: {en: 'A small React + Redux.js Todo app', ua: 'Невеликий Todo додаток з Реакт + Redux.js'}, text: {en: 'This small app is made using React + Redux.js toolkit. NewTodoForm.js takes the data and passes it to the store and then TodoList.js takes it and renders it in TodoItem.js.', ua: 'Цей невеликий додаток зроблений за допомогою React + Redux.js toolkit. NewTodoForm.js приймає данні та передає їх у store а потім TodoList.js приймає їх й рендерить у TodoItem.js.'}, link: {en: 'https://redux.js.org/', ua: 'https://redux.js.org/'}, type: 'React', code:[
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
{media: 'none', caption: {en: 'All about useState()', ua: 'Все про useState()'}, text: {en: 'The useState() hook is a function in React used to add state to functional components. It takes an initial state value and returns an array containing the current state value and a function to update it. When this function is called, the component is re-rendered with the new state value, and state changes can be tracked and handled in the component.', ua: 'Хук useState() — це функція в React, яка використовується для додавання стану до функціональних компонентів. Він приймає початкове значення стану та повертає масив, що містить поточне значення стану та функцію для його оновлення. Коли ця функція викликається, компонент повторно візуалізується з новим значенням стану, і зміни стану можна відстежувати та обробляти в компоненті.'}, link: {en: 'https://legacy.reactjs.org/docs/hooks-state.html', ua: 'https://legacy.reactjs.org/docs/hooks-state.html'}, type: 'React', code:
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
{media: 'none', caption: {en: 'Portals in React', ua: 'Портали у Реакті'}, text: {en: 'Portals let your components render some of their children into a different place in the DOM. This lets a part of your component “escape” from whatever containers it may be in. For example, a component can display a modal dialog or a tooltip that appears above and outside of the rest of the page.', ua: 'Портали дозволяють вашим компонентам відтворювати деякі їхні дочірні елементи в іншому місці в DOM. Це дозволяє частині вашого компонента «втекти» з будь-яких контейнерів, у яких він може знаходитися. Наприклад, компонент може відображати модальне діалогове вікно або спливаючу підказку, яка з’являється над і поза межами решти сторінки.'}, link: {en: 'https://react.dev/reference/react-dom/createPortal', ua: 'https://habr.com/ru/companies/smartprogress/articles/306096/'}, type: 'React', code:
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
{media: responsiveBreakpoints, caption: {en: 'Responsive Screen Size Breakpoints', ua: 'Точки зупинки розміру адаптивного екрана'}, text: {en: 'Here is a nice illustration of setting breakpoints for your application.', ua: 'Ось гарна ілюстрація з встановленням брєйкпоінтів для вашого застосунку.'}, link: {en: '#', ua: '#'}, type: 'markdown', code: ``},
{media: [markdown1, markdown2, markdown3, markdown4], caption: {en: 'Markdown tips', ua: 'Поради щодо верстки'}, text: {en: 'Here are a bunch of markdown tips for people looking to improve their experience.', ua: 'Ось багато порад щодо ведення верстки для людей, що прагунть покращити свій досвід.'}, link: {en: '#', ua: '#'}, type: 'markdown', code: [``, ``, ``, ``]},
{media: 'none', caption: {en: 'Guard clause example', ua: 'Приклад вкорочення коду'}, text: {en: 'Here is an easy example for applying code shortening via an empty return.', ua: 'Ось легкий приклад для застосування вкорочення коду через порожній return.'}, link: {en: '#', ua: '#'}, type: 'function', code: 
`// Guard clause example
function(list) {
    if(list == null) return
    list.update()
}`},
{media: 'none', caption: {en: 'Fullscreen background image wrapper', ua: 'Обгортка фонового зображення на весь екран'}, text: {en: 'Here`s a custom-built layout for a full-screen background.', ua: 'Ось спеціально зібраний макет для повноекранного фону. '}, link: {en: '#', ua: '#'}, type: 'markdown', code: 
[`<!DOCTYPE html>
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
                <div class="fullscreen__text">Don't Give Up</div>
                <button class="fullscreen__button">Go</button>
            </div>
        </section>
        <div class="content"></div>
        <div class="content__body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nesciunt vitae nemo minus adipisci sunt, praesentium possimus iusto, nam ipsum quae beatae hic, maxime saepe iure laboriosam odio eligendi reiciendis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nesciunt vitae nemo minus adipisci sunt, praesentium possimus iusto, nam ipsum quae beatae hic, maxime saepe iure laboriosam odio eligendi reiciendis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nesciunt vitae nemo minus adipisci sunt, praesentium possimus iusto, nam ipsum quae beatae hic, maxime saepe iure laboriosam odio eligendi reiciendis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nesciunt vitae nemo minus adipisci sunt, praesentium possimus iusto, nam ipsum quae beatae hic, maxime saepe iure laboriosam odio eligendi reiciendis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nesciunt vitae nemo minus adipisci sunt, praesentium possimus iusto, nam ipsum quae beatae hic, maxime saepe iure laboriosam odio eligendi reiciendis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nesciunt vitae nemo minus adipisci sunt, praesentium possimus iusto, nam ipsum quae beatae hic, maxime saepe iure laboriosam odio eligendi reiciendis.
        </div>
        <footer class="footer">
            <div class="footer_body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores animi excepturi cumque inventore repellat. In magni similique maxime dolor asperiores a dolores molestiae quae! Ipsum quae recusandae beatae at commodi.
            </div>
        </footer>
    </div>
    
    <script src="index.js"></script>
</body>
</html>
`,
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
    background-color: #1e1e1e;
    color: white;
    display: flex;
    min-height: 100vh;
}`]},
{media: gapstyle, caption: {en: 'gap in CSS3', ua: 'gap у CSS3'}, text: {en: 'The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.', ua: 'Властивість CSS gap встановлює проміжки (жолоби) між рядками та стовпцями. Це скорочення для row-gap і column-gap.'}, link: {en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gap', ua: 'https://developer.mozilla.org/ru/docs/Web/CSS/gap'}, type: 'markdown', code: ``},
{media: [arraymethods_01, arraymethods_02, arraymethods_03], caption: {en: 'Simplifying array methods', ua: 'Спрощення методів масивів'}, text: {en: 'Principles of operation of the array method on simple examples.', ua: 'Принципи роботи методі масивів на простих прикладах.'}, link: {en: '', ua: ''}, type: 'markdown', code: [``, ``, ``]},
{media: 'none', caption: {en: 'Zoom on hover effect', ua: 'Ефект приближення (зуму)'}, text: {en: 'This zoom effect is made using the hover pseudo-class and transition scale.', ua: 'Цей ефект приближення (зуму) зроблений за допомогою псевдокласу hover та transition scale.'}, link: {en: '#', ua: '#'}, type: 'markdown', code: 
[`<!DOCTYPE html>
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
        <img src="image.jpg" alt="image">
    </div>
    <script src="index.js"></script>
</body>
</html>`,
`.wrapper {
    overflow: hidden;
}

.wrapper img {
    width: 100%;
    height: 100%;
    transition: scale 400ms;
}

.wrapper:hover img {
    scale: 120%;
}`]},
]

export default content