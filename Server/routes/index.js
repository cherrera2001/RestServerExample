var express = require('express');
var bodyParser = require("body-parser");

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.use(express.static('public'))

router.post('/hello',function(req,res){
    var first_name = req.body.formly_1_input_first_name_0;
    var last_name = req.body.formly_1_input_last_name_1;
    console.log("First Name = "+ first_name +", Last Name "+ last_name);
    res.end("yes");
});

module.exports = router;
