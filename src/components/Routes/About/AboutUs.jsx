import {Link} from 'react-router-dom'
import Tag from '../../ui/Tag/Tag'
import Button from '../../ui/buttons/Button/Button'
import styles from './About.module.css'

const AboutUs = () => {
	return (
		<div className={styles.aboutUs}>
			<div className={styles.inside}>
				<div className={styles.imgBoard}></div>
				<div className={styles.inInside}>
					<Tag name={'About Us'} />
					<h3 className={styles.text}>Our Company Overview</h3>

					<p className={styles.text2}>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
					<div className={styles.buttons}>
						<Button showCircle={false} color="yellow">
							<p className={styles.buttonText}>Our Approch</p>
						</Button>
						<Button showCircle={false} color="white">
							<p className={styles.buttonText}>Our Approch</p>
						</Button>
						<Button showCircle={false} color="white">
							<p className={styles.buttonText}>Our Approch</p>
						</Button>
					</div>
					<p className={styles.text3}>
						Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
					</p>
					<Link className={styles.button}>
						<Button color="blue">Learn More</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default AboutUs
