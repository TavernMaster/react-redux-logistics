import PageName from '../ui/PageName/PageName'
import './Title.css'

const Title = ({isHome}) => (
	<div className={isHome ? 'photo home' : 'photo'}>
		<div className={isHome ? 'home' : 'gradient'}>
			<div className="inside">
				<PageName />
			</div>
		</div>
	</div>
)

export default Title
