import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import ContentItem from './ContentItem';

const List = ({content}) => {
    
    const codeOfCards = {
        filter: "const array = ['JS', 'TS', 'C#', 'Java'] let filteredArray = array.filter(language => {if (language.length === 2) return true}) console.log(filteredArray)",
        map: "const array = ['JS', 'TS', 'C#', 'Java'] let mappedArray = array.map( language => { return language + ':)' } ) console.log(mappedArray)",
        reduce: "const array = [1, 2, 3, 4, 5] const total = array.reduce( (accumulator, element) => { return accumulator + element }) console.log(total)",
        forEach: "const array = ['JS', 'TS', 'C#', 'Java'] let forEachedArray = array.forEach( language => console.log(language + ' :)') ) console.log(forEachedArray)",
        indexOf: "const fiboArray = [1, 1, 2, 3, 5, 8] console.log(fiboArray.indexOf(2, 0))",
        keys: "const array = ['JS', 'TS', 'C#', 'Java'] const object = { 1: 'JS', 2: 'TS', 3: 'C#', 4: 'Java' } console.log(Object.keys(array)) console.log(Object.keys(object))",
        split: "let string = 'Hello World' let splitedString = string.split(' ') console.log(splitedString)",
        spread: "const array = [1, 1, 2, 3, 5, 8] const object = {name: 'Alex', age: '20'} const string = 'Hello World' const newArray = [...array, 13, 21, 34, 55] const newObject = {...object, skills: ['Dev']} const newStringArray = [...string] function multiply(a, b) { return a * b } let numbers = [2, 3] console.log(newArray) console.log(newObject) console.log(newStringArray) console.log(multiply(...numbers))",
        callback: "function: getUsers(callback) { fetch('https://jsonplaceholder.typicode.com/users')  .then((response) => { return response.json() })  .then((data) => { callback(data) }) } function showUsers(data) { data.forEach(user => console.log(user.name)) } getUsers(showUsers)",
        closure: "function init() { let name = 'Name' function showName() { console.log(name) } showName() } init()",
        recursion: "let num = 0 function init() { num ++  console.log(num)  if (num === 100) return  init() } init()",
        dowhile: "let result = '' let i = 0 do { i++ result = result = i } while (i < 5) console.log(result)",
        forinforof: "const array = ['JS', 'TS', 'C#', 'Java'] for (const index in array) { console.log(index) } for (const value of array) { console.log(value) }",
        while: "let i = 0 while (i <= 3) { console.log(i) i++ }",
        ternary: "function isEqual(string1, string2) { let out = '' string1.length === string2.length ? out = 'strings are equal' : out = 'strings are not equal' return out } console.log(isEqual('hello', 'world')) console.log(isEqual('bye', 'world'))",
        length: "function isBigger(string1, string2) { return string1.length === string2.length } console.log(isBigger('hello', 'world')) console.log(isBigger('bye', 'world'))",
        fetch: "function getUsers() { fetch('https://jsonplaceholder.typicode.com/users').then((response) => { return response.json() }).then(data => data.forEach(user => console.log((user.name))) ) } getUsers()",
        mathrandom: "function randomNumber(min, max) { return Math.floor(Math.random() * (max - min) + min) } console.log(randomNumber(0, 10)) console.log(randomNumber(12, 99))",
        arraywithoutemptystrings: "const dirtyArray = ['JS', '', 'TS', '', '', 'PHP'] const clearArray = dirtyArray.filter(Boolean) console.log(clearArray)",
        filterofrepeatedvalues: "const dirtyArray = ['JS', 'TS', 'TS', 'PHP', 'PYTHON', 'TS'] let arrayWithUniqueValues = [... new Set(array)] console.log(arrayWithUniqueValues)",
        shuffledarray: "const array = ['JS', 'TS', 'PHP', 'PYTHON', 'Java'] const shuffledArray = array.sort( () => Math.random() - 0.5 ) console.log(shuffledArray)",
        falsyvalues: "const falsyValues = ['', 0, null, undefined, NaN, false]",
        fibonaccio: "function fibonaccioCycle(limit) { let a = 0 let b = 1 let result = b let out = '' while (result < limit) { out += result + ' ' result = a + b a = b b = result } return out } console.log(fibonaccioCycle(100))",
        maxvalue: "const numberArray = [1, 7, 26, 4, 82, 19] function findMaxNumber(array) { let maxNumber = array[0] for (const number of array) { if (maxNumber < number) maxNumber = number } return maxNumber } console.log(findMaxNumber(numberArray))",
        fizzbuzz: "const fizzBuzz = (limit) => { let out = '' for (let i = 0; i < limit; i++) { if (i % 3 === 0) out += ' fizz' else if (i % 5 === 0) out += ' buzz' else if (i % 3 === 0 && i % 5 === 0) out += ' fizzbuzz' else out += ' ' = i } return out } console.log(fizzBuzz(11)) console.log(fizzBuzz(22))",
        letterfinder: "function letterFinder(word, letter) { let firstCondition = typeof word === 'string' && word.length >= 2 let secondCondition = typeof word === 'string' && letter.length === 2 if (firstCondition && secondCondition) { for (let i = 0; i < word.length; i++) { if (word[i] == letter) return `Letter '${letter}' found at index ${i}` else return `Letter '${letter}' not found` } } else return 'Please pass correct arguments to the function' }",
        isemptyobject: "function isEmptyObject(object) { return Object.keys(object).length === 0 } let schedule = {} console.log(isEmptyObject(schedule)) schedule['8:30'] = 'get up' console.log(isEmptyObject(schedule))", 
    }

    function onCopy(item) {
        for (const key in codeOfCards) {
            if (key === item) {
              navigator.clipboard.writeText(codeOfCards[key])
            }
        }
    }

    return (
        <Container className='mt-5 mb-5'>
            <Row className='mt-5 mb-5'>
                {content.map((item, index) => <Col style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}  key={index} className='mt-2 mb-2'><ContentItem image={item.image} caption={item.caption} text={item.text} link={item.link} onCopy={onCopy} classOfCard={item.classOfCard}/></Col>)}
            </Row>
        </Container>
    );
};

export default List;