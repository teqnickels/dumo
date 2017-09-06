var express = require('express');
var router = express.Router();
const {app, BrowserWindow} = require('electron') 

app.on('ready', () => {
  var mainWindow = new BrowserWindow({
    width: 800,
    height:600
  })
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
