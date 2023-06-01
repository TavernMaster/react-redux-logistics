import {Link} from 'react-router-dom'
import Tag from '../ui/Tag/Tag'
import styles from './Title.module.css'
import YellowButton from '../ui/Buttons/YellowButton/YellowButton'

const Title = ({isHome}) => (
	<div className={isHome ? `${styles.photo} ${styles.home}` : styles.photo}>
		<div className={isHome ? styles.home : styles.gradient}></div>

		<div className={styles.inside}>
			<div className={isHome ? styles.insideBlockHome : styles.insideBlock}>
				<Tag name={isHome ? 'Logistics & Supply Chain Solutions' : false}/>
				<h1 className={styles.highText}>Your Gateway to any Destination in the World</h1>
				<p className={styles.lowText}>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
				<Link to={'/projects'} className={styles.button}>
					<YellowButton>Explore More</YellowButton>
				</Link>
			</div>
		</div>
	</div>
)

export default Title
