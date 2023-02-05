import { Link } from 'react-router-dom'
import { routes } from '../../router/Root'

interface Props {}

const Login: React.FC<Props> = () => {
	return (
		<div>
			<h1>Login</h1>
			<Link to={routes.home}> Home</Link>
		</div>
	)
}

export default Login
