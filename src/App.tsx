import useCounter from './hooks/use-counter';

export default function App() {
	const { count, increment } = useCounter();

	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => increment()}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}
