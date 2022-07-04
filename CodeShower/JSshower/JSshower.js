import './JSshower.css'

function JSshower(props) {
    let data = ''
    for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].type === 'js') {
            data += props.data[i].code
        }
    }

    return (
        <div className="JSshower">
            <code lang="js">
                {data}
            </code>
        </div>
    )
}

export default JSshower