const express = require('express')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const router = express.Router();

const Paper = require('../../models/paper');

const result = []

const dashboard = async (req, res) => {
	const id = req.body?.id

	if (id) {
		const paper = new Paper(id)

		const response = await fetch(`https://www.okanebox.com.br/api/acoes/ultima/${paper.getId}/`)
		const data = await response.json()
		if (!Array.isArray(data)) {
			paper.setOpenPrice(data.PREABE)
			paper.setClosePrice(data.PREULT)
			paper.setDate(data.DATPRG)
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