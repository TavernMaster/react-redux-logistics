import './Header.css'
import logo from './assets/Logo.png'
import time from './assets/TimeIcon.png'
import email from './assets/EmailIcon.png'
import phone from './assets/PhoneIcon.png'
import instagram from './assets/Instagram.png'
import facebook from './assets/Facebook.png'
import twitter from './assets/Twitter.png'
import linkdin from './assets/Linkdin.png'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
	return (
		<>
			<InfoPanel />
			<NavMenu />
		</>
	)
}

export default Header

const InfoPanel = () => (
	<header className="header">
		<div className="headerInside">
			<div className="logo">
				<img src={logo} alt="Logo" />
				<h1 className="logoName">TransitFlow</h1>
			</div>
			<ul className="infoList">
				<InfoItem img={time} imgInfo="Work time" info="Mon - Sat 9.00 - 18.00" info2="Sunday Closed" />
				<InfoItem img={email} imgInfo="Email" info="Email" info2="contact@logistics.com" />
				<InfoItem img={phone} imgInfo="Phone number" info="Call Us" info2="(00) 112 365 489" />
			</ul>
		</div>
	</header>
)

const InfoItem = ({img, imgAlt, info, info2}) => (
	<li className="infoItem">
		<img className="icon" src={img} alt={imgAlt} />
		<div className="infoText">
			<p>{info}</p>
			<p>{info2}</p>
		</div>
	</li>
)

const NavMenu = () => (
	<nav className="nav">
		<div className="navInside">
			<ul className="routes">
				<NavLink className="route" to="/">
					Home
				</NavLink>
				<hr />
				<NavLink className="route" to="/about">
					About
				</NavLink>
				<hr />
				<NavLink className="route" to="/projects">
					Projects
				</NavLink>
				<hr />
				<NavLink className="route" to="/price">
					Price
				</NavLink>
				<hr />
				<NavLink className="route" to="/contact">
					Contact
				</NavLink>
			</ul>
			<div className="linksAndButton">
				<ul className="links">
					<Link to="">
						<img src={instagram} alt="instagram" />
					</Link>
					<Link to="">
						<img src={facebook} alt="facebook" />
					</Link>
					<Link to="">
						<img src={twitter} alt="twitter" />
					</Link>
					<Link to="">
						<img src={linkdin} alt="linkdin" />
					</Link>
				</ul>
				<Link className="requestLink" to="/price">
					Request Quote
				</Link>
			</div>
		</div>
	</nav>
)
