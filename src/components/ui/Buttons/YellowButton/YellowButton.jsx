import styles from './YellowButton.module.css'

const YellowButton = ({children, onClick}) => (
	<div onClick={() =>onClick && onClick()} className={styles.button}>
		{children}
		<div className={styles.circle}></div>
	</div>
)

export default YellowButton
