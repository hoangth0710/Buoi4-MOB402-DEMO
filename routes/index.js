var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
    name : 'HSAKLGSDLNGN'});

});

router.get('/news', function (req, res){
  var name = 'skgsdfoigfdl'
  var tuoi = 22;

  var mang = [4,5,6,7,8,9];
  var mangten = ['huy','hoang','tien'];


  res.render('news',{
    ten : name,
    year : tuoi,
    arr1 : mang,
    arr2 : mangten
  });
})


module.exports = router;
