import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppProviders from './providers/AppProviders'
import Root from './router/Root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProviders>
			<Root />
		</AppProviders>
	</React.StrictMode>,
)
