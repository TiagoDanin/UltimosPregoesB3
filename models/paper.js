class Paper {
	constructor(id) {
		this.id = id;
	}

	get getId() {
		return this.id
	}
}

module.exports = Paper
/*
{
	id: '',
	openPrice: 0,
	closePrice: 0,
	date: ''
}*/