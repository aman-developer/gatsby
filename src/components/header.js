import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.svg';
import cat from '../images/cat.svg';
import punch from '../images/punch.svg';
import twitter from '../images/twitter.svg';

const Header = ({ siteTitle }) => (
<div>
  <div className="fixed-header">
      <div className="announcement-bar">
        <div className="container">
          <div className="ann-head">
            <p>These are the docs for v2 beta. <u>View the v1 docs instead.</u></p>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header">
            <div className="logo">
              <Link to="/"><img alt="" src={logo} /></Link>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">docs</Link>
                </li>
                <li>
                  <Link to="/">tutorial</Link>
                </li>
                <li>
                  <Link to="/">plugins</Link>
                </li>
                <li>
                  <Link to="/">features</Link>
                </li>
                <li>
                 <Link to="/">blog</Link>
                </li>
                <li>
                  <Link to="/">showcase</Link>
                </li>
              </ul>
           </div>
           <div class="search-icon">
            <form>
              <input name="search" placeholder="Search.." type="text" />
            </form>
            <ul>
              <li>
                <Link to="/"><img alt="" src={cat} /></Link>
              </li>
              <li>
                <Link to="/"><img alt="" src={punch} /></Link>
              </li>
              <li>
                <Link to="/"><img alt="" src={twitter} /></Link>
              </li>
              <li>
               <Link to="/">.com</Link>
              </li>
            </ul>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
