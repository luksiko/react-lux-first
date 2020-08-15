import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';
import './style.css';

const Render = () => {
	const [count, setCount] = useState(5);
	return (
		<>
			<h3>Пример использования useState()</h3>
			<div className='operation__btns'>
				<button className='operation__btn operation__btn-add' onClick={() => setCount(count + 5)}>
					{count}
				</button>
				<button className='operation__btn operation__btn-subtract' onClick={() => setCount(0)}>
					Сброс
				</button>
			</div>
		</>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Render />
	</React.StrictMode>,
	document.getElementById('root'),
);
