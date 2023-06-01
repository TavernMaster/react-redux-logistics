import styles from './Header.module.css'
import time from './assets/TimeIcon.png'
import email from './assets/EmailIcon.png'
import phone from './assets/PhoneIcon.png'
import instagram from '../../assets/Instagram.png'
import facebook from '../../assets/Facebook.png'
import twitter from '../../assets/Twitter.png'
import linkdin from '../../assets/Linkdin.png'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../ui/Logo/Logo'
import InfoItem from './InfoItem'

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
			<Logo />
			<ul className={styles.infoList}>
				<InfoItem img={time} imgInfo="Work time" info="Mon - Sat 9.00 - 18.00" info2="Sunday Closed" />
				<InfoItem img={email} imgInfo="Email" info="Email" info2="contact@logistics.com" />
				<InfoItem img={phone} imgInfo="Phone number" info="Call Us" info2="(00) 112 365 489" />
			</ul>
		</div>
	</header>
)

const NavMenu = () => (
	<nav className={styles.nav}>
		<div className={styles.navInside}>
			<ul className={styles.routes}>
				<NavLink className={({isActive}) => (isActive ? styles.active + ' ' + styles.route : styles.route)} to="/">
					Home
				</NavLink>
				<hr />
				<NavLink className={({isActive}) => (isActive ? styles.active + ' ' + styles.route : styles.route)} to="/about">
					About
				</NavLink>
				<hr />
				<NavLink className={({isActive}) => (isActive ? styles.active + ' ' + styles.route : styles.route)} to="/projects">
					Projects
				</NavLink>
				<hr />
				<NavLink className={({isActive}) => (isActive ? styles.active + ' ' + styles.route : styles.route)} to="/price">
					Price
				</NavLink>
				<hr />
				<NavLink className={({isActive}) => (isActive ? styles.active + ' ' + styles.route : styles.route)} to="/contact">
					Contact
				</NavLink>
				<hr />
				<NavLink className={({isActive}) => (isActive ? styles.active + ' ' + styles.route : styles.route)} to="/blog">
					Blog
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
				<Link to="/price" className={styles.button}>
					<p className={styles.requestText}>Request Quote</p>
				</Link>
			</div>
		</div>
	</nav>
)
