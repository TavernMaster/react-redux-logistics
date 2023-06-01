import styles from './YellowButton.module.css'

const YellowButton = ({children}) => (
    <div className={styles.button}>{children}</div>
)

export default YellowButton