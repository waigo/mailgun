"use strict";

/** 
 * @fileOverview Mailgun mailer.
 */

var nodemailerMailgunTransport = require('nodemailer-mailgun-transport');

var waigo = require('waigo'),
  _ = waigo._;


var Mailer = waigo.load('support/mailer/base');


class Mailgun extends Mailer {
  constructor (app, config) {
    super(app, config, app.logger.create('Mailgun'));
  }

  * send (options) {
    yield this._send(options);
  }
}



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


