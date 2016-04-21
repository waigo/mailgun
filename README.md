This [waigo](http://waigojs.com) plugin provides:

* 'mailgun' mailer to allow emails to be sent through Mailgun's API.

## Installation

```bash
$ npm install waigo-mailgun
```

## Usage

Enable it inside your Waigo configuration file:

```js
module.exports = function(config) {
  ...
  config.mailer = {
    ...
    type: 'mailgun',
    mailgun: {
      apiKey: 'key-124bc480ae14cd600d545a60367a7e33',
      domain: 'sandbox9e581fe43f2244ca868905be6d1f53c1.mailgun.org',
    },
    ...
  };

  config.sitemapPath = '/custom_sitemap.xml';  // relative to baseURL

  ...
}
```


## License

MIT - see LICENSE.md