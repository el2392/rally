const express = require('express');
const router = express.Router();

// @route    GET api/rally/test
// @desc     Test rally route
// @access   Public

router.get('/test', (req, res) => res.json({msg: "Rally  works"}));

module.exports = router;