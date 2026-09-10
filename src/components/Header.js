import { useState,useEffect } from "react";
import { Link } from "react-router";
import {  useOnlineStatus } from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () =>{

    const [btnName,setBtnName] = useState('Login')
    //  const [status,setStatus] = useState(true)
    
    //     //Check status whether it is online or offline
    //     useEffect(()=>{
    //     window.addEventListener('offline',()=>{
    //         console.log('offline')
    //         setStatus(false)
    //     })
    //     },[])
    const checkOnlineStatus = useOnlineStatus
    const status = checkOnlineStatus()

    // Selector is a hook which is use to subscribe to the store using a selector(fetching the date from the store)
    const cartItems = useSelector((store)=> store.abcnitin.items)
    return (
        <div className="flex justify-between border border-solid border-black-500 p-4 box-shadow-lg">
            <div className="w-24">
                <img src="https://images.deliveryhero.io/image/fd-op/LH/doxy-listing.jpg"></img>
            </div>
            <div className="flex justify-between items-center gap-4">
                <ul className="flex justify-between gap-3">
                    <li>Status:{status === true ? 'online' :'offline'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li className="text-xl font-bold"><Link to="/cart">Cart ({cartItems.length} items) </Link></li>
                </ul>
                <button className="mr-4"  onClick={()=>{
                  btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                    }} >
                {btnName}
                </button>
            </div>
        </div>
    )
}

export default Header;
