import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show,handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, []);


    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                     alt="Netflix Image"
                />

                <img className="nav_avatar" src="https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg?w=300"
                     alt="Profile"
                />
            </div>
        </div>
    )
}

export default Nav