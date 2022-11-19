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

const content = [
  {image: filterMethod, caption: 'filter', text: 'Filter - создание нового массива + выбор / фильтрация элемента и удаление его (с разной длинной)', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter', type: 'method'},
  {image: mapMethod, caption: 'map', text: 'Map - создание нового массива на основе выбранного (с одинаковой длинной)', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map', type: 'method'},
  {image: reduceMethod, caption: 'reduce', text: 'Reduce - метод, который применяет функцию reducer() к каждому элементу массива, возвращая одно результирующее значение ', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce', type: 'method'},
  {image: forEachMethod, caption: 'forEach', text: 'ForEach - метод, который выполняет указанную функцию один раз для каждого элемента в массиве', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach', type: 'method'},
  {image: indexOfMethod, caption: 'indexOf', text: 'indexOf - метод, который ищет ближайший индекс item`а, который вы ищете', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf', type: 'method'},
  {image: keysMethod, caption: 'keys', text: 'Keys - метод, который показывает все ключи объекта или массива', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys', type: 'method'},
  {image: splitMethod, caption: 'split', text: 'Split - метод, который превращает строку в массив', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split', type: 'method'},
  {image: spreadOperator, caption: 'spread', text: 'Spread - синтаксис, который позволяет расширять доступные для итерации элементы', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax', type: 'operator'},
  {image: callbackFunction, caption: 'callback', text: 'Callback-функция - функция, которую передают в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия', link: 'https://developer.mozilla.org/ru/docs/Glossary/Callback_function', type: 'function'},
  {image: closureFunction, caption: 'closure', text: 'Замыкание - создание функции внутри другой функции для дальнейших манипуляций ею с локальными данными (из "внешний" функции)', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures#:~:text=%D0%97%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B8,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%2C%20%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%20%D0%B5%D1%91%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.', type: 'function'},
  {image: recursionFunction, caption: 'recursion', text: 'Рекурсия - вызов функции в себе же', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Errors/Too_much_recursion', type: 'function'},
  {image: doWhileCycle, caption: 'do while', text: 'Do... While - почти тот же самый цикл While, но с другим синтаксисом', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while', type: 'cycle'},
  {image: forInForOfCycle, caption: 'for in / for of', text: 'Разница между "for in" и "for of". for in => индексы. for of => значения', link: '#', type: 'cycle'},
  {image: whileCycle, caption: 'while', text: 'While - цикл, который делает действие до того момента, пока условие остаётся FALSE', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while', type: 'cycle'},
  {image: ternaryExpressions, caption: 'Тернарые выражения', text: 'Условный (тернарный) оператор - краткая замена if/else, которая часто встречается в React. Пример: условие ? выражение1 : выражение2', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator', type: 'operator'},
  {image: isEqualLength, caption: 'length', text: 'Length - метод, который показывает длину массива', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length', type: 'method'},
  {image: fetchRequest, caption: 'fetch', text: 'Fetch - это запрос на сервер', link: 'https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch', type: 'request'},
  {image: randomNumber, caption: 'Math.floor + Math.random', text: 'Math.floor - это метод, который округляет число до ближайшего меньшего целого числа. Math.random - это метод, который позволяет легко найти случайное число в определенном диапазоне', link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random', type: 'request'},
  {image: arrayWithoutEmptyStrings, caption: 'Фильтрация пустых строк из массива', text: '', link: '#', type: 'lifehack'},
  {image: arrayWithUniqueValues, caption: 'Фильтрация уникальных значений в массиве', text: '', link: '#', type: 'lifehack'},
  {image: shuffledArray, caption: 'Перемешивание элементов в массиве', text: '', link: '#', type: 'lifehack'},
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
