import styles from './Tag.module.css'

const Tag = ({name}) => (
	<div className={styles.tag}>
		<div className={styles.line}></div>
		<h6 className={styles.text}>{name}</h6>
	</div>
)

export default Tag
