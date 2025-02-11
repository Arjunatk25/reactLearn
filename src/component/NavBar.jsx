import React from 'react'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <div>
        <div className="navbar">
            <di className="navItem">
              <img src="./images/react-logo.png" alt="React Logo" />

              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Course</li>
                <li>FeedBack</li>
              </ul>
            </di>
            <div className="btnPDF">
                <button>PDF</button>
            </div>
        </div>

    </div>
  )
}

export default NavBar