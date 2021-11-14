const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="nav-content">
                <div className="logo">
                    <span>NT</span>
                </div>
                <ul className="tabs">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;