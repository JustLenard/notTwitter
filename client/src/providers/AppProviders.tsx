import { Provider } from 'react-redux'
import { store } from '../store/store'

interface Props {
	children: React.ReactNode
}

const AppProviders: React.FC<Props> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default AppProviders
