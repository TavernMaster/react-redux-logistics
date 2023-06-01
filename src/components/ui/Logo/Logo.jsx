import styles from './Logo.module.css'
import logo from './assets/Logo.png'

const Logo = () => {
	return (
		<div className={styles.logo}>
			<img src={logo} alt="Logo" />
			<h3 className={styles.logoName}>TransitFlow</h3>
		</div>
	)
}
export default Logo
