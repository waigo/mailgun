"use strict";

/** 
 * @fileOverview Mailgun mailer.
 */

var util = require('util'),
  nodemailerMailgunTransport = require('nodemailer-mailgun-transport');

var waigo = require('waigo'),
  _ = waigo._;


var Mailer = waigo.load('support/mailer/base').Mailer;


var Mailgun = function(app, config) {
  Mailgun.super_.call(this, app, config, app.logger.create('Mailgun'));
};
util.inherits(Mailgun, Mailer);



Mailgun.prototype.send = function*(options) {
  yield this._send(options);
};


exports.create = function*(app, config) {
  var c = new Mailgun(app, config);
  
  yield c._init(nodemailerMailgunTransport({
    auth: {
      api_key: config.mailgun.apiKey,
      domain: config.mailgun.domain,
    }
  }));

  return c;
};
