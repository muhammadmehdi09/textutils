import PropTypes from 'prop-types'

export default function Navbar(props) {
    console.log(props.color[2])
    return (
        <nav style={{backgroundColor: props.color.color3}} className={`py-1 pt-[6px]`}>
            <div className="flex space-x-4 my-auto justify-between px-4">
                <div className="right flex">
                    <a className="m-2 ml-0 font-semibold text-xl" href="/">{props.title}</a>
                    <ul className="flex space-x-3 m-2 my-auto">
                        <li className="">
                            <a className="" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="">
                            <a className="" aria-current="page" href="/">About</a>
                        </li>
                    </ul>
                </div>
                <div className="left my-auto">
                    <form className="space-x-2" role="search">
                        <input className={`p-[6px] rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-[2px] focus:ring-${props.color.color1}-500 focus:ring-offset-1 focus:ring-offset-${props.color.color1}-200 transition duration-200`} type="search" placeholder="Search" aria-label="Search" />
                        <button className={`text-${props.color.color1}-700 border border-${props.color.color1}-700 py-[6px] px-3 rounded-md hover:text-white hover:bg-${props.color.color1}-700 transition duration-500 hover:text-current`} type="submit">Search</button>
                    </form>
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