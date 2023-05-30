import {Link} from 'react-router-dom'
import PageName from '../ui/PageName/PageName'
import './Title.css'
import YellowButton from '../ui/Button/YellowButton/YellowButton'

const Title = ({isHome}) => (
	<div className={isHome ? 'photo home' : 'photo'}>
		<div className={isHome ? 'home' : 'gradient'}>
			<div className="inside">
				<div className={isHome ? 'inside-block-home' : 'inside-block'}>
					<PageName />
					<h1 className="highText">Your Gateway to any Destination in the World</h1>
					<p className="lowText">In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
					<YellowButton className="buttonn">
						<Link to={'/projects'}>
						</Link>
                        Explore More
					</YellowButton>
				</div>
			</div>
		</div>
	</div>
)

export default Title
