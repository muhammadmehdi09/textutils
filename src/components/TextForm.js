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
    const [text, setText] = useState('Enter text here')
    const words = text.split(" ").length
    const charachters = text.length
    const readingTime = timeConverter(charachters / 200)

    const toUpper = () => {
        setText(text.toUpperCase())
    }

    const toLower = () => {
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    return (
        <div className="w-fit mx-auto p-5 space-y-3 mt-5">
            <div className="form">
                <h1 className="font-semibold text-3xl mb-2">{props.heading}</h1>
                <textarea id="myBox" value={text} rows="8" className="w-[700px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" onChange={handleOnChange}></textarea>
            </div>
            <div className="buttons">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mr-3" onClick={toUpper}>Convert To Uppercase</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" onClick={toLower}>Convert To Lowercase</button>
            </div>
            <div className='summary'>
                <h1 className="mt-4 font-semibold text-2xl">Your Text Summary</h1>
                <div><span>{words} words</span>, <span>{charachters} charachters</span></div>
                <div>Reading Time: {readingTime}</div>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    title: PropTypes.string.isRequired
}