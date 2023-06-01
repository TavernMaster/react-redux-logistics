import styles from './Footer.module.css'

import Logo from '../ui/Logo/Logo'

const UpFooter = () => (
	<nav className={styles.nav}>
		<div className={styles.insideNav}>
			<div className={styles.logoDiv}>
				<Logo />
			</div>
			<h5 className={styles.pages}>Pages</h5>
			<h5 className={styles.utility}>Utility</h5>
			<h5 className={styles.subscribe}>Subscribe</h5>
		</div>
	</nav>
)

export default UpFooter
