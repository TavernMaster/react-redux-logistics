import styles from './Footer.module.css'
import InfoItem from '../Header/InfoItem'
import Button from '../ui/buttons/Button/Button'
import email from '../Header/assets/EmailIcon.png'
import phone from '../Header/assets/PhoneIcon.png'

import linkdin from '../../assets/Linkdin.png'
import facebook from '../../assets/Facebook.png'
import twitter from '../../assets/Twitter.png'

const СenterFooter = () => (
	<footer className={styles.footer}>
		<div className={styles.insideFooter}>
			<div className={styles.mainInfo}>
				<p>Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.</p>

				<div className={styles.infoItem}>
					<InfoItem img={email} imgInfo="Email" info="Email" info2="contact@logistics.com" />
				</div>

				<div className={styles.infoItem}>
					<InfoItem img={phone} imgInfo="Phone number" info="Call Us" info2="(00) 112 365 489" />
				</div>
			</div>

			<div className={styles.pagesInfo}>
				<p>About Us</p>
				<p>Our Team</p>
				<p>Our Project</p>
				<p>Pricing</p>
				<p>Contact</p>
			</div>

			<div className={styles.utilityInfo}>
				<p>Style Guide</p>
				<p>Changelog</p>
				<p>Licenses</p>
				<p>Protected</p>
				<p>Not Found</p>
			</div>

			<form className={styles.subscribeForm}>
				<input autoComplete='email' name='email' type="email" placeholder="Email here*" className={styles.input} />
				<div className={styles.buttonAndLinks}>
					<Button
						onClick={() => {
							console.log('Send Now :)')
						}}
					>
						Send Now
					</Button>
					<img className={styles.img} src={linkdin} alt="linkdin" />
					<img className={styles.img} src={twitter} alt="linkdin" />
					<img className={styles.img} src={facebook} alt="linkdin" />
				</div>
			</form>
		</div>
	</footer>
)

export default СenterFooter
