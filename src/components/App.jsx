import {useDispatch, useSelector} from 'react-redux'
import {addCount, reduceCount} from '../store/reducers/CounterSlice'

function App() {
	const count = useSelector(state => state.counter.count)
	const dispatch = useDispatch()
	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={() => dispatch(addCount(10))}>Добавить</button>
			<button onClick={() => dispatch(reduceCount())}>Убавить</button>
		</div>
	)
}

export default App
