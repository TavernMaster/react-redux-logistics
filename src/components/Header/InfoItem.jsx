import styles from './Header.module.css'

const InfoItem = ({img, imgAlt, info, info2}) => (
	<li className={styles.infoItem}>
		<img className={styles.icon} src={img} alt={imgAlt} />
		<div className={styles.infoText}>
			<p>{info}</p>
			<p>{info2}</p>
		</div>
	</li>
)

export default InfoItem
