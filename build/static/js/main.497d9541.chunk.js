(this["webpackJsonpreact-lux-first"]=this["webpackJsonpreact-lux-first"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),s=a(5),l=a(3),i=a(4),u=a(7),m=a(6),d=function(e){var t=e.resultExpenses,a=e.resultIncome,n=e.totalBalance;return r.a.createElement("section",{className:"total"},r.a.createElement("header",{className:"total__header"},r.a.createElement("h3",null,"\u0411\u0430\u043b\u0430\u043d\u0441"),r.a.createElement("p",{className:"total__balance"},n," \u20bd")),r.a.createElement("div",{className:"total__main"},r.a.createElement("div",{className:"total__main-item total__income"},r.a.createElement("h4",null,"\u0414\u043e\u0445\u043e\u0434\u044b"),r.a.createElement("p",{className:"total__money total__money-income"},"+",a," \u20bd")),r.a.createElement("div",{className:"total__main-item total__expenses"},r.a.createElement("h4",null,"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"),r.a.createElement("p",{className:"total__money total__money-expenses"},"-",t," \u20bd"))))},p=function(e){var t=e.transaction,a=e.delTransaction;return r.a.createElement("li",{className:"history__item history__item-\n   history__item-".concat(t.add?"plus":"minus")},t.description,r.a.createElement("span",{className:"history__money"},t.amount," \u20bd"),r.a.createElement("button",{className:"history__delete",onClick:function(){return a(t.id)}},"x"))},_=function(e){var t=e.transactions,a=e.delTransaction;return r.a.createElement("section",{className:"history"},r.a.createElement("h3",null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"),r.a.createElement("ul",{className:"history__list"},t.map((function(e){return r.a.createElement(p,{key:e.id,transaction:e,delTransaction:a})}))))},E=function(e){var t=e.addTransaction,a=e.addDescription,n=e.addAmount,o=e.description,c=e.amount;return r.a.createElement("section",{className:"operation"},r.a.createElement("h3",null,"\u041d\u043e\u0432\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{id:"form"},r.a.createElement("label",null,r.a.createElement("input",{type:"text",className:"operation__fields operation__name",placeholder:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",onChange:a,value:o})),r.a.createElement("label",null,r.a.createElement("input",{type:"number",className:"operation__fields operation__amount",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",onChange:n,value:c})),r.a.createElement("div",{className:"operation__btns"},r.a.createElement("button",{onClick:function(){return t(!1)},type:"button",className:"operation__btn operation__btn-subtract"},"\u0420\u0410\u0421\u0425\u041e\u0414"),r.a.createElement("button",{onClick:function(){return t(!0)},type:"button",className:"operation__btn operation__btn-add"},"\u0414\u041e\u0425\u041e\u0414"))))},h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={transactions:JSON.parse(localStorage.getItem("caclMoney"))||[],description:"",amount:"",resultIncome:0,resultExpenses:0,totalBalance:0},e.addTransaction=function(t){var a=[].concat(Object(s.a)(e.state.transactions),[{id:"cmr".concat((+new Date).toString(16)),description:e.state.description,amount:e.state.amount,add:t}]);e.setState({transactions:a,description:"",amount:""},e.getTotalBalance)},e.addAmount=function(t){return e.setState({amount:t.target.value})},e.addDescription=function(t){return e.setState({description:t.target.value})},e.getIncoeme=function(){return e.state.transactions.reduce((function(e,t){return t.add?+t.amount+e:e}),0)},e.getExpenses=function(){return e.state.transactions.reduce((function(e,t){return t.add?e:+t.amount+e}),0)},e.delTransaction=function(t){var a=e.state.transactions.filter((function(e){return e.id!==t}));e.setState({transactions:a},e.getTotalBalance)},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.getTotalBalance()}},{key:"componentDidUpdate",value:function(){this.addStorage()}},{key:"getTotalBalance",value:function(){var e=this.getIncoeme(),t=this.getExpenses(),a=e-t;this.setState({resultIncome:e,resultExpenses:t,totalBalance:a})}},{key:"addStorage",value:function(){localStorage.setItem("caclMoney",JSON.stringify(this.state.transactions))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"\u041a\u043e\u0448\u0435\u043b\u0435\u043a"),r.a.createElement("h2",null,"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432")),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(d,{resultExpenses:this.state.resultExpenses,resultIncome:this.state.resultIncome,totalBalance:this.state.totalBalance}),r.a.createElement(_,{transactions:this.state.transactions,delTransaction:this.delTransaction}),r.a.createElement(E,{addTransaction:this.addTransaction,addAmount:this.addAmount,addDescription:this.addDescription,description:this.state.description,amount:this.state.amount}))))}}]),a}(n.Component);a(13),a(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.497d9541.chunk.js.map