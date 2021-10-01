const { date } = require('handlebars-helpers/lib');
const Moment = require('moment')
class Paper {
	constructor(
		id,
		openPrice = 0,
		closePrice = 0,
		maxPrice = 0,
		minPrice = 0,
		medPrice = 0,
		date = new Date().toISOString()
	) {
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

	setMaxPrice = (maxPrice) => {
		this.maxPrice = maxPrice;
	}

	get getMaxPrice() {
		return this.maxPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	}

	setMinPrice = (minPrice) => {
		this.minPrice = minPrice;
	}

	get getMinPrice() {
		return this.minPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	}

	setMedPrice = (medPrice) => {
		this.medPrice = medPrice;
	}

	get getMedPrice() {
		return this.medPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	}

	setDate = (date) => {
		this.date = date
	}

	get getDateFormatted () {
		return Moment(this.date).format('DD/MM')
	}
}

module.exports = Paper