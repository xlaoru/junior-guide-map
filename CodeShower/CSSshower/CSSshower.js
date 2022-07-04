import './CSSshower.css'

function CSSshower(props) {
    let data = ''
    for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].type === 'css') {
            data += props.data[i].code
        }
    }

    return (
        <div className="CSSshower">
            <code lang="css">
                {data}
            </code>
        </div>
    )
}

export default CSSshower