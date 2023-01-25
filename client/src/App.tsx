import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { incrementByAmount } from './store/conterSlice'

const App = () => {
	const count = useAppSelector((state) => state.counter.value)
	const dispatch = useAppDispatch()

	return (
		<div>
			<div>fsd</div>
			<button onClick={() => dispatch(incrementByAmount(5))}>Click</button>

			<div>{count}</div>
		</div>
	)
}

export default App
