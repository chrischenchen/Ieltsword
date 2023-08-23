// // importing packages
// const express = require('express');
// const router = express.Router();
// router.get(`/`, function (req, res) {
// 	res.status(200).json({msg: `Howdy, you! It's a GET request.`});
// });
// router.post(`/`, function (req, res) {
// 	res.status(200).json({msg: `Howdy, you! It's a POST request.`});
// });
// router.put(`/`, function (req, res) {
// 	res.status(200).json({msg: `Howdy, you! It's a PUT request.`});
// });
// router.delete(`/`, function (req, res) {
// 	res.status(200).json({msg: `Howdy, you! It's a DELETE request.`});
// });
// module.exports = router;

const express = require('express');
const router = express.Router();

// 导入json数据
const data = require('./data.json'); 

router.get('/', function(req, res) {
  res.status(200).json(data);
})

// 其他路由...

module.exports = router;