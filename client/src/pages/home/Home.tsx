import { Link } from 'react-router-dom'
import { routes } from '../../router/Root'

interface Props {}

const Home: React.FC<Props> = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to={routes.login}> Home</Link>
		</div>
	)
}

export default Home
