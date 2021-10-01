const { date } = require('handlebars-helpers/lib');
const Moment = require('moment')
class Paper {
	constructor(id, openPrice = 0, closePrice = 0, date = new Date().toISOString()) {
		this.id = id;
		this.openPrice = openPrice;
		this.closePrice = closePrice;
		this.date = date;
	}

	get getId() {
		return this.id.toLocaleUpperCase()
	}

	setOpenPrice = (openPrice) => {
		this.openPrice = openPrice
	}

	get getOpenPrice() {
		return this.openPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	}

	setClosePrice = (closePrice) => {
		this.closePrice = closePrice;
	}

	get getClosePrice() {
		return this.closePrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	}

	setDate = (date) => {
		this.date = date
	}

	get getDateFormatted () {
		return Moment(this.date).format('DD/MM')
	}
}

module.exports = Paper