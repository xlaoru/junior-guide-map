import './Caption.css'

function Caption(props) {
    return (
        <div className="Caption">
            {props.data[0].article}
        </div>
    )
}

export default Caption