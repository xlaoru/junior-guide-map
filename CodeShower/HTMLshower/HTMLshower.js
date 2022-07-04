import './HTMLshower.css'

function HTMLshower(props) {
    let data = ''
    for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].type === 'html') {
            data += props.data[i].code
        }
    }
    
    return (
        <div className="HTMLshower">
            <code lang="html">
                &lt;!DOCTYPE html&gt;
                <br/>
                    &lt;html lang="en"&gt;
                    <br/>
                    &lt;head&gt;
                    <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;titlet&lt;Document&lt;/title&gt;
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;link rel="stylesheet" href="your-file.css"&gt;
                        <br/>
                        &lt;/head&gt;
                        <br/>
                        &lt;body&gt;
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data}
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src="your-file.js"&gt;&lt;/script&gt;
                        <br/>
                    &lt;/body&gt;
                    <br/>
                    &lt;/html&gt;
            </code>
        </div>
    )
}

export default HTMLshower