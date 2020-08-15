import React from 'react';

const TotalItem = ({ transaction }) => (
	
   			<div className={`total__main-item total__${transaction.add ? 'income' : 'expenses'}`}>
					<h4>Доходы</h4>
					<p className={`total__money total__money-${transaction.add ? 'income' : 'expenses'}`}>+0 ₽</p>
				</div>
				
);

export default TotalItem;