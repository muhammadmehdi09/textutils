import PropTypes from 'prop-types'
import logo from "../assets/logo.png";

export default function Navbar(props) {
    return (
        <nav style={{ backgroundColor: props.color }} className={`py-1 pt-[6px]`}>
            <div className="flex space-x-4 my-auto justify-between px-4">
                <div className="right flex">
                    {/* <a className="m-2 ml-0 font-semibold text-xl" href="/">{props.title}</a> */}
                    <img src={logo} alt="TextUtils" className="w-[120px] h-8" />
                </div>
                <div className="left my-auto">
                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                        <input type="checkbox" className="sr-only peer" onChange={props.toggleMode} />
                        <div className="w-12 h-6 bg-gray-400 rounded-full peer-checked:bg-green-600 transition-colors duration-300"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6"></div>
                        <div className="ml-1" >{props.toggleText} Dark Mode</div>
                    </label>
                </div>
            </div>
        </nav>
    )
}



Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Title"
}