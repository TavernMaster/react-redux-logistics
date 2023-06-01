import {Link} from 'react-router-dom'
import styles from './Footer.module.css'

const DownFooter = () => (
	<div className={styles.copyright}>
		<small className={styles.insideCopyright}>
			<p>Copyright ©2023 TransitFlow | Developed by Tavern_Master - Powered by React.</p>

			<div className={styles.links}>
				<Link to="/styles" className={styles.link}>
					<p className={styles.link}>Style Guide</p>
				</Link>

				<Link to="/licenses" className={styles.link}>
					<p className={styles.link}>Licenses</p>
				</Link>

				<Link to="/changelog" className={styles.link}>
					<p className={styles.link}>Changelog</p>
				</Link>

				<Link to="/password" className={styles.link}>
					<p className={styles.link}>Password</p>
				</Link>
			</div>
		</small>
	</div>
)

export default DownFooter
