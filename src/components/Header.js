import { useState } from "react";
import { Link } from "react-router";

const Header = () =>{

    const [btnName,setBtnName] = useState('Login')
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://images.deliveryhero.io/image/fd-op/LH/doxy-listing.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
                <button onClick={()=>{
                  btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                    }} className="btn">
                {btnName}
                </button>
            </div>
        </div>
    )
}

export default Header;
