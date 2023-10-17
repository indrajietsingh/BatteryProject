import React from 'react'
import "./Header.css";
function Icon() {
  return (
    <>
      <div className='nav'>
        <div className='nav-bar'>
          <div className='nav-list'>
            <li><a className="support-contactus" href="https://www.website.com/contact-us/?source=SC&country=IN" title="Contact Us" style={{ color: "#000" }}>Contact Us</a></li>
            <li> <a className="support-contactus" href="https://www.website.com/webmail/sign-in/?source=SC&country=IN" style={{ color: "#000" }}>Webmail</a></li>
            <li><a className="support-contactus" href="https://www.website.com/sign-in/?source=SC&country=IN" style={{ color: "#000" }}>Log In</a></li>
            <li><a className="support-contactus text" href="https://www.website.com/sign-up/?source=SC&country=IN">Sign Up</a></li>
          </div>
        </div>
      </div>


    </>
  )
}

export default Icon;
