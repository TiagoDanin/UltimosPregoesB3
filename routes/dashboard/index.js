const express = require('express');
const router = express.Router();

const dashboard = async (req, res) => {
	/*
	const {
		query
	} = req.body
	if (query) {
		// TODO
	}
	*/

	let result = []

	return res.render('dashboard', {
		result,
		path: '/'
	})
}

router.post('/', dashboard)
router.get('/', dashboard)

module.exports = router;