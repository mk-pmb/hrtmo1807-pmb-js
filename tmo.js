/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var ptd = require('parse-human-timeout-duration'),
  ctf = require('callback-timeout-flexible');

function startTimeoutTimer(opt) {
  if (!opt) { throw new Error('Need at least opt.limit'); }
  var limitHuman = opt.limit, cfgKey = '', tmo;
  if (opt.cfgDict) {
    cfgKey = limitHuman + (opt.cfgSuffix || '');
    limitHuman = opt.cfgDict[cfgKey];
  }
  tmo = ptd(limitHuman, opt);
  if (tmo === false) { return tmo; }
  tmo = Object.assign({}, opt, { limitSec: tmo });
  delete tmo.limit;
  return ctf(tmo);
}

module.exports = startTimeoutTimer;
