import {Link} from 'react-router-dom'
import Tag from '../ui/Tag/Tag'
import styles from './Title.module.css'
import YellowButton from '../ui/Buttons/YellowButton/YellowButton'

const Title = ({isHome = false, tag, title, text}) => (
	<div className={isHome ? `${styles.photo} ${styles.home}` : styles.photo}>
		<div className={isHome ? styles.home : styles.gradient}></div>

		<div className={styles.inside}>
			<div className={isHome ? styles.insideBlockHome : styles.insideBlock}>
				<Tag name={tag} />
				<h1 className={styles.highText}>{title}</h1>
				<p className={styles.lowText}>{text}</p>
				{isHome && (
					<Link to={'/projects'} className={styles.button}>
						<YellowButton>Explore More</YellowButton>
					</Link>
				)}
			</div>
		</div>
	</div>
)

export default Title
