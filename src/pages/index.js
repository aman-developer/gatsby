import React from 'react'
import { Link } from 'gatsby'
import shape from '../images/shape.svg';
import fabric from '../images/fabric.svg';
import segment from '../images/segment.svg';
import formidable from '../images/formidable.svg';
import flower_2 from '../images/square.svg';
import square from '../images/square.svg';
import g_logo from '../images/g-logo.svg';
import blog_1 from '../images/square.svg';
import blog from '../images/square.svg';

 
import Layout from '../components/layout'
import Banner from '../components/banner'

const IndexPage = () => (

  <Layout>
    
   <div className="wrapper">
	<Banner />

	<div className="container">
		<div className="bring-data-section">
			<div className="modern-web-tech">
				<h1>Modern web tech without the headache</h1> 
				<p>Enjoy the power of the latest web technologies - React.js<img alt="" src={flower_2} /> , Webpack<img alt="" src={square} /> , modern JavaScript
				and CSS and more - all setup and waiting for you to start building.</p>
			</div>
			<div className="modern-web-tech">
				<h1>Bring your own data</h1>
				<p>Gatsby's rich data plugin ecosystem lets you build sites with the data you want - from one or many sources: Pull data from headless CMSs, SaaS services, APIs, databases, your file system & more directly into your pages using GraphQL<img alt="" src={shape} /></p>
			</div>
			<div className="modern-web-tech">
				<h1>Scale to the entire internet</h1>
				<p>Gatsby.js is Internet Scale. Forget complicated deploys with databases
				and servers and their expensive, time-consuming setup costs, maintenance,
				and scaling fears. Gatsby.js builds your site as "static" files which can
				be deployed easily on dozens of services.</p>
			</div>
			<div className="modern-web-tech modern-border">
				<h1>Future-proof your website</h1>
				<p>Don't build a website with last decade's tech. The future of the web is
				mobile, JavaScript and APIs-the <span>JAMstack</span>. Every website is a
				web app and every web app is a website. Gatsby.js is the universal
				JavaScript framework you've been waiting for.</p>
			</div>
			<div className="modern-web-tech modern-border">
				<h1><div className="static-color">Static</div> Progressive Web Apps</h1>
				<p>Gatsby.js is a static PWA (Progressive Web App) generator. You get code
				and data splitting out-of-the-box. Gatsby loads only the critical HTML,
				CSS, data, and JavaScript so your site loads as fast as possible. Once
				loaded, Gatsby prefetches resources for other pages so clicking around the
				site feels incredibly fast.</p>
			</div>
			<div className="modern-web-tech modern-border">
				<h1>Speed past the competition</h1>
				<p>Gatsby.js builds the fastest possible website. Instead of waiting to
				generate pages when requested, pre-build pages and lift them into a global
				cloud of servers - ready to be delivered instantly to your users wherever
				they are.</p>
			</div>
		</div>
		<div className="how-works">
			<h1>How Gatsby works</h1>
			<p>Gatsby lets you build blazing-fast sites with your data, whatever
			the<br />
			source. Liberate your sites from legacy CMSs and fly into the future.</p>
		</div>
	</div>
	<div className="container">
		<div className="bg-white">
			<div className="data-source-section gatsby-works-data-section">
				<div className="source-btn source-btn-color">
					<Link to="/">data sources</Link>
				</div>
				<div className="cms-markdown-section">
					<div className="cms-box">
						<h1>CMSs</h1>
						<p>Contentful, Drupal,<br />WordPress, etc.</p>
					</div>
					<div className="cms-box">
						<h1>Markdown</h1>
						<p>Documentation, Posts, etc.</p>
					</div>
					<div className="cms-box">
						<h1>Data</h1>
						<p>APIs, Databases, YAML,<br />	JSON, CSV, etc.</p>
					</div>
				</div>
			</div>
			<div className="data-source-section">
				<div className="source-btn source-btn-color">
					<Link to="/">build</Link>
				</div>
				<div className="cms-markdown-section">
					<div className="powered-graph-section">
						<div className="graph-box">
							<img alt="" className="g-icon" src={g_logo} />
							<p>powered by</p>
							<h1>GraphQl<img alt="" src={shape} /></h1>
						</div>
					</div>
					<div className="html-css-react">
						<div className="react-html-css-box">
							<h1>HTML . CSS . React<img alt="" src={flower_2} /></h1>
						</div>
					</div>
				</div>
			</div>
			<div className="data-source-section deploy-design-section">
				<div className="source-btn source-btn-color">
					<Link to="/">deploy</Link>
				</div>
				<div className="cms-markdown-section">
					<div className="static-webhost-section">
						<h1>static web host</h1>
						<p>Amazon S3, Netlify, GitHub Pages, Surge.sh, Aerobatic, Now.sh, &
						many more</p>
					</div>
				</div>
			</div>
			<div className="curious-section">
				<h1>Curious yet?</h1>
				<p>It only takes a few minutes to get up and running!</p>
				<Link to="/">get	started</Link>
			</div>
			<div className="border-section"></div>

			<div className="data-source-section deploy-design-sectioned">
				<p>Want to keep up to date with the latest posts on our blog? Subscribe
				to our newsletter!</p>
				<div className="cms-markdown-sectioned">
					<div className="subscribe-input-form">
						<label>email<span className="star-red">*</span></label> 
						<input name="email" type="text" /> <Link to="/">subscribe</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="container article-section-bottom">
		<div className="bg-white">
			<div className="inner-wide">
				<div className="blog-head">
					<div className="blog-header">
						<h1>Latest from the Gatsby blog</h1>
					</div>
					<div className="blog-news-box">
						<h1>Using Decoupled Drupal with Gatsby</h1>
						<p>Why use Drupal + Gatsby together? Kyle Mathews is presenting on “Gatsby + Drupal” at Decoupled Drupal Days NYC this Saturday; for those…</p>
						<ul>
							<li><Link to="/"><img alt="" src={blog_1} /></Link></li>
							<li><Link to="/"><h2>Shannon Soper</h2></Link></li>
							<li><Link to="/"><h3>on August 13th 2018</h3></Link></li>
						</ul>
					</div>

					<div className="blog-news-box">
						<h1>My experience doing pair programming with the Gatsby team and why you should do it</h1>
						<p>I love pair programming. This is one of the practices we do in our trainings at ReactJS Academy , and we do it regularly at LeanJS . A…</p>
						<ul>
							<li><Link to="/"><img alt="" src={blog} /></Link></li>
							<li><Link to="/"><h2>Horacio Herrera</h2></Link></li>
							<li><Link to="/"><h3>on August 11th 2018</h3></Link></li>
						</ul>
					</div>

					<div className="blog-news-box last-news-design">
						<h1>Free Swag for Gatsby Contributors</h1>
						<p>Today, we’re so excited to announce the launch of the Gatsby Swag Store ! If you’ve been following along on Twitter , you may have seen…</p>
						<ul>
							<li><Link to="/"><img alt="" src={blog_1} /></Link></li>
							<li><Link to="/"><h2>Jason Lengstorf</h2></Link></li>
							<li><Link to="/"><h3>on August 9th 2018</h3></Link></li>
						</ul>
					</div>
				</div> 
				<div className="about-us-btn">
					<Link to="/">read more</Link>
				</div>
			</div>
		</div>
	</div>




</div>


  </Layout>
)

export default IndexPage
