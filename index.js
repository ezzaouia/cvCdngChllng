'use strict'

const
  express = require('express'),
  app = express(),
  config = require('./config'),
  util = require('util')


let allowCrossDomain = function (req, res, next) {
  res.append('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.append('Access-Control-Allow-Credentials', 'true');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next()
}

app.use(allowCrossDomain)

app.use(express.static(__dirname + '/ngClient'))

app.listen(config.port)
util.log('listening on port ' + config.port)