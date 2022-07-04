import ArticleOut from './ArticleOutput/ArticleOut'
import helloWorldTitle from '../CodeData/HelloWorld/ArticleHelloWorld.json'
import helloWorldCode from '../CodeData/HelloWorld/HelloWorld.json'
import testtitle from '../CodeData/TEST/TestTitle.json'
import testcode from '../CodeData/TEST/TestCode.json'

import './CodeShower.css'

function CodeShower() {
    return (
        <div className="CodeShower">
            <ArticleOut title={helloWorldTitle} code={helloWorldCode}/>
            <ArticleOut title={testtitle} code={testcode}/>
        </div>
    )
}

export default CodeShower