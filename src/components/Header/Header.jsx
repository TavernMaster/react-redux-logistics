import styles from './Header.module.css'
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
	<header className={styles.header}>
		<div className={styles.headerInside}>
			<div className={styles.logo}>
				<img src={logo} alt="Logo" />
				<h1 className={styles.logoName}>TransitFlow</h1>
			</div>
			<ul className={styles.infoList}>
				<InfoItem img={time} imgInfo="Work time" info="Mon - Sat 9.00 - 18.00" info2="Sunday Closed" />
				<InfoItem img={email} imgInfo="Email" info="Email" info2="contact@logistics.com" />
				<InfoItem img={phone} imgInfo="Phone number" info="Call Us" info2="(00) 112 365 489" />
			</ul>
		</div>
	</header>
)

const InfoItem = ({img, imgAlt, info, info2}) => (
	<li className={styles.infoItem}>
		<img className={styles.icon} src={img} alt={imgAlt} />
		<div className={styles.infoText}>
			<p>{info}</p>
			<p>{info2}</p>
		</div>
	</li>
)

const NavMenu = () => (
	<nav className={styles.nav}>
		<div className={styles.navInside}>
			<ul className={styles.routes}>
				<NavLink className={styles.route} to="/">
					Home
				</NavLink>
				<hr />
				<NavLink className={styles.route} to="/about">
					About
				</NavLink>
				<hr />
				<NavLink className={styles.route} to="/projects">
					Projects
				</NavLink>
				<hr />
				<NavLink className={styles.route} to="/price">
					Price
				</NavLink>
				<hr />
				<NavLink className={styles.route} to="/contact">
					Contact
				</NavLink>
			</ul>
			<div className={styles.linksAndButton}>
				<ul className={styles.links}>
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
				<Link className={styles.requestLink} to="/price">
					Request Quote
				</Link>
			</div>
		</div>
	</nav>
)
