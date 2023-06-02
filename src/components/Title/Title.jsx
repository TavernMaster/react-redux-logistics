import {Link, useLocation} from 'react-router-dom'
import Tag from '../ui/Tag/Tag'
import styles from './Title.module.css'
import Button from '../ui/buttons/Button/Button'

import homePhoto from './assets/home.png'
import aboutPhoto from './assets/about.png'
import projectsPhoto from './assets/projects.png'
import pricePhoto from './assets/price.png'
import contactPhoto from './assets/contact.png'
import blogPhoto from './assets/blog.png'

const photos = {
	'/': homePhoto,
	'/about': aboutPhoto,
	'/projects': projectsPhoto,
	'/price': pricePhoto,
	'/contact': contactPhoto,
	'/blog': blogPhoto,
}

const Title = ({tag, title, text}) => {
	const {pathname} = useLocation()

	return (
		<div className={`${styles.title} ${pathname === '/' && styles.home}`} style={{backgroundImage:`url(${photos[pathname]})`}}>
			{pathname !== '/' && <div className={styles.gradient}></div>}

			<div className={styles.inside}>
				<div className={pathname === '/' ? styles.insideBlockHome : styles.insideBlock}>
					<Tag name={tag} />

					<h1 className={styles.highText}>{title}</h1>

					<p className={styles.lowText}>{text}</p>

					{pathname === '/' && (
						<Link to={'/projects'} className={styles.button}>
							<Button>Explore More</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default Title
