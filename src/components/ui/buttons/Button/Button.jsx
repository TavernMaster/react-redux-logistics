import styles from './Button.module.css'

const Button = ({children, onClick, color = 'yellow', showCircle = true}) => (
	<div onClick={() => onClick && onClick()} className={`${styles.button} ${styles[color]}`}>
		{children}
		{showCircle && <div className={`${styles.circle} ${color == 'blue' && styles.blueCircle} `}></div>}
	</div>
)

export default Button
