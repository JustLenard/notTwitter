import { lazy, Suspense } from 'react'
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'

const LogIn = lazy(() => import('../pages/login/Login'))
const Home = lazy(() => import('../pages/home/Home'))

interface Props {}

export const routes = {
	// Side menu
	home: '/',

	// Login
	login: '/login',
}

const router = createBrowserRouter([
	{
		path: routes.home,
		element: <Home />,
	},
	{
		path: routes.login,
		element: <LogIn />,
	},
])

const Root: React.FC<Props> = () => {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<RouterProvider router={router} />
		</Suspense>
	)
}

export default Root
