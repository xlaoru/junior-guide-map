import HTMLshower from '../HTMLshower/HTMLshower'
import CSSshower from '../CSSshower/CSSshower'
import JSshower from '../JSshower/JSshower'
import Caption from '../../App/Caption/Caption'


import './ArticleOut.css'

function ArticleOut(props) {
    return (
        <div className="ArticleOut">
            <Caption data={props.title}/>
            <HTMLshower data={props.code} />
            <CSSshower data={props.code} />
            <JSshower data={props.code} />
        </div>
    )
}

export default ArticleOut