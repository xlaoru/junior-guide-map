import CodeShower from '../CodeShower/CodeShower'
import Prompt from './Prompt/Prompt'

import './Main.css'

function Main() {
    return (
        <div className="Main">
            <Prompt />
            <CodeShower />
        </div>
    )
}

export default Main