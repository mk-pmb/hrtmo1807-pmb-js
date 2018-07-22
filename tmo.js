/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var parseHumanDuration = require('../'),
  ctf = require('callback-timeout-flexible');

function startTimeoutTimer(opt) {
  if (!opt) { throw new Error('Need at least opt.limit'); }
  var limitHuman = opt.limit, cfgKey = '', tmo;
  if (opt.cfgDict) {
    cfgKey = limitHuman + (opt.cfgSuffix || '');
    limitHuman = opt.cfgDict[cfgKey];
  }
  if (limitHuman === false) { return false; }
  if (limitHuman === 'off') { return false; }
  if (limitHuman === 'never') { return false; }
  tmo = parseHumanDuration(limitHuman);
  tmo = Object.assign({}, opt, { limitSec: tmo });
  delete tmo.limit;
  return ctf(opt);
}

module.exports = startTimeoutTimer;
