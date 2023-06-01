import styles from './Footer.module.css'

import UpFooter from './UpFooter'
import CenterFooter from './CenterFooter'
import DownFooter from './DownFooter'

const Footer = () => (
	<>
		<UpFooter />
		<CenterFooter />
		<hr className={styles.hr} />
		<DownFooter />
	</>
)

export default Footer
