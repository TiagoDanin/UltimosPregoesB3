const express = require('express')
const jsonfile = require('jsonfile')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const router = express.Router();

const file = 'data.json'
const ids = jsonfile.readFileSync(file)

const save = () => {
	jsonfile.writeFileSync(file, ids, {
		replacer: true,
		spaces: '\t'
	})
}

const Paper = require('../../models/paper');

const dashboard = async (req, res) => {
	const id = req.body?.id

	const result = []

	if (id) {
		ids.push(id)
		save()
	}

	for (idPaper of ids) {
		const paper = new Paper(idPaper)

		const response = await fetch(`https://www.okanebox.com.br/api/acoes/ultima/${paper.getId}/`)
		const data = await response.json()
		if (!Array.isArray(data)) {
			paper.setOpenPrice(data.PREABE)
			paper.setClosePrice(data.PREULT)
			paper.setDate(data.DATPRG)
			paper.setMaxPrice(data.PREMAX)
			paper.setMinPrice(data.PREMIN)
			paper.setMedPrice(data.PREMED)
			result.push(paper)
		}
	}

	return res.render('dashboard', {
		result,
		path: '/'
	})
}

router.post('/', dashboard)
router.get('/', dashboard)

module.exports = router;