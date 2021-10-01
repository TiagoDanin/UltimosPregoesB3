const express = require('express');
const router = express.Router();

const Paper = require('../../models/paper');

const dashboard = async (req, res) => {
	const id = req.body?.id
	let result = []

	if (id) {
		const paper = new Paper(id)
		result.push(paper)
	}

	return res.render('dashboard', {
		result,
		path: '/'
	})
}

router.post('/', dashboard)
router.get('/', dashboard)

module.exports = router;