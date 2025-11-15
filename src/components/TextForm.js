import PropTypes from 'prop-types'
import { useState } from 'react'

const timeConverter = (minutes) => {
    const totalSeconds = Math.floor(minutes * 60);
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    let result = "";
    if (hours > 0) result += `${hours} hr `;
    if (mins > 0) result += `${mins} min `;
    if (secs > 0 || result === "") result += `${secs} sec`;

    return result.trim();
}

export default function TextForm(props) {
    const [text, setText] = useState('')

    const toUpper = () => {
        setText(text.toUpperCase())
    }

    const toLower = () => {
        setText(text.toLowerCase())
    }

    const clearText = () => {
        setText("")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className="w-[100vw] px-10 max-[1280px]:space-y-20 mt-16 min-[1280px]:flex min-[1280px]:justify-between">
            <div className="left max-[1280px]:w-fit max-[1280px]:mx-auto">
                <div className="form">
                    <h1 className="font-semibold text-3xl mb-2">{props.heading}</h1>
                    <textarea id="myBox"  placeholder='Enter text here' value={text} rows="10" className={`lg:w-[700px] w-[500px] bg-[${props.color2}] rounded-md px-3 py-2 focus:outline-none`} onChange={handleOnChange}></textarea>
                </div>
                <div className="buttons mt-4">
                    <button className={`bg-${props.color}-500 text-white px-4 py-2 rounded hover:bg-${props.color}-600 focus:outline-none focus:ring-2 focus:ring-${props.color}-400 transition mr-3`} onClick={toUpper}>Convert To Uppercase</button>
                    <button className={`bg-${props.color}-500 text-white px-4 py-2 rounded hover:bg-${props.color}-600 focus:outline-none focus:ring-2 focus:ring-${props.color}-400 transition mr-3`} onClick={toLower}>Convert To Lowercase</button>
                    <button className={`bg-${props.color}-500 text-white px-4 py-2 rounded hover:bg-${props.color}-600 focus:outline-none focus:ring-2 focus:ring-${props.color}-400 transition max-[600px]:mt-3`} onClick={clearText}>Clear Text</button>
                </div>
            </div>
            <div className='max-[1280px]:mx-auto right bg-gray-500 w-[350px] text-gray-200 rounded-xl text-[1.1rem] min-h-[450px]'>
                <h1 className="mt-4 font-semibold text-3xl text-center">Your Text Summary</h1>
                <div className="summary mt-6 mx-12">
                    <div>Sentences:- {text.split(".").length - 1}</div>
                    <div>Words:- {text.split(" ").length - 1}</div>
                    <div>Charachters:- {text.length}</div>
                    <div>Reading Time:- {timeConverter(text.length / 600)}</div>
                </div>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    title: PropTypes.string.isRequired
}