import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component {
	state = {
		transactions: [],
		description: '',
		amount: '',
	};

	addTransaction = (add) => {
		const transactions = [...this.state.transactions,
			{
				id: `cmr${(+new Date()).toString(16)}`,
				description: this.state.description,
				amount: this.state.amount,
				add,
			}
		];

		this.setState({ transactions });
	};

	addAmount = (e) => {
		this.setState({ amount: e.target.value });
		console.log(this.state);
	};

	addDescription = (e) => {
		this.setState({ description: e.target.value });
		console.log(this.state);
	};
	render() {
		return (
			<>
				<header>
					<h1>Кошелек</h1>
					<h2>Калькулятор расходов</h2>
				</header>

				<main>
					<div className='container'>
						<Total />
						<History />
						<Operation
							addTransaction={this.addTransaction}
							addAmount={this.addAmount}
							addDescription={this.addDescription}
						/>
					</div>
				</main>
			</>
		);
	}
}

export default App;
