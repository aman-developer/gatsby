import React from 'react'
import { Link } from 'gatsby'
import bg_left from '../images/masthead-bg-left.svg';
import bg_right from '../images/masthead-bg-right.svg';
import fabric from '../images/fabric.svg';
import segment from '../images/segment.svg';
import formidable from '../images/formidable.svg';

const Banner = ({ siteTitle }) => (
  <div>
    <div className="masthead-bg">
      <div className="inner-masthead-wrap">
        <div className="masthead-bg-left-fill"></div>
        <img alt="" src={bg_left} className="masthead-bg-left css-1efpva0" />
        <img alt="" src={bg_right} className="masthead-bg-right css-n1gfm1" />
      </div>
    </div>
    <div className="container">
      <div className="banner-section-font">
        <h1>Build<br />websites with React</h1>
        <Link to="/">get started</Link>
      </div>
    </div>
    
    <div className="banner-image">
      <div className="container">
        <p>used by</p>
        <ul>
          <li> 
            <Link to="/"><img alt="" src={fabric} /></Link>
          </li>
          <li>
            <Link to="/"><img alt="" src={segment} /></Link>
          </li>
          <li>
            <Link to="/"><img alt="" src={formidable} /> </Link>
          </li>
        </ul>
      </div>
    </div> 
  </div>
)

export default Banner