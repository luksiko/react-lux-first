import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component {
	// формируем состояние в котором храним данные.
	state = {
		transactions: JSON.parse(localStorage.getItem('caclMoney')) || [],
		description: '',
		amount: '',
		resultIncome: 0,
		resultExpenses: 0,
		totalBalance: 0,
	};
	// перед тем как смонтировать наш компонент на страницу нужно посчитать totalBalance из localStorage
	componentWillMount() {
		this.getTotalBalance();
	}
	componentDidUpdate() {
		// this.getTotalBalance();
		this.addStorage();
	}

	addTransaction = (add) => {
		const transactions = [
			...this.state.transactions,
			{
				id: `cmr${(+new Date()).toString(16)}`,
				description: this.state.description,
				amount: this.state.amount,
				add,
			},
		];

		this.setState({
			transactions,
			description: '', // обновляем состояние полей на пустое
			amount: '', // обновляем состояние полей на пустое
		}, this.getTotalBalance);
	};

	addAmount = (e) => this.setState({ amount: e.target.value });

	addDescription = (e) => this.setState({ description: e.target.value });

	getTotalBalance() {
		const resultIncome = this.getIncoeme();
		const resultExpenses = this.getExpenses();

		const totalBalance = resultIncome - resultExpenses;

		this.setState({
			resultIncome,
			resultExpenses,
			totalBalance,
		});
	}
	addStorage() {
		localStorage.setItem('caclMoney', JSON.stringify(this.state.transactions));
	}

	getIncoeme = () =>
		this.state.transactions.reduce((acc, item) => (item.add ? +item.amount + acc : acc), 0);

	getExpenses = () =>
		this.state.transactions.reduce((acc, item) => (!item.add ? +item.amount + acc : acc), 0);

	delTransaction = (key) => {
		const transactions = this.state.transactions.filter((item) => item.id !== key);
		this.setState({ transactions }, this.getTotalBalance);
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
						<Total
							resultExpenses={this.state.resultExpenses}
							resultIncome={this.state.resultIncome}
							totalBalance={this.state.totalBalance}
						/>
						<History transactions={this.state.transactions} delTransaction={this.delTransaction} />
						<Operation
							addTransaction={this.addTransaction}
							addAmount={this.addAmount}
							addDescription={this.addDescription}
							description={this.state.description}
							amount={this.state.amount} // обновляем состояние полей на пустое
						/>
					</div>
				</main>
			</>
		);
	}
}

export default App;
