'use strict'

import http from 'http'
import querystring from 'query-string'
import _ from 'lodash'

export class ProgrammableJsonServer {
	constructor({port}) {
		this._server = http.createServer(this._handler.bind(this))
		this._port = port
		this.reset()
	}
	
	start() {
		this._server.listen(this._port, '127.0.0.1')
	}
	
	stop() {
		this._server.close()
	}
	
	reset() {
		this._rules = []
	}
	
	addRule({resource, params = {}, cookies = {}, delay = 0, responseText}) {
		this._rules.push({resource, params, cookies, delay, responseText})
	}
	
	_handler(req, res) {
		const query = querystring.extract(req.url)
		const resource = (query.length > 0) ? req.url.substr(0, req.url.length - query.length - 1) : req.url
		const params = querystring.parse(query)
		
		const cookieValue = req.headers['cookie'] || ''
		const cookieValues = cookieValue.split('; ')
		const cookies = _(cookieValues).map((value) => {
			return value.split('=')
		}).zipObject().value()
		
		const rule = _.find(this._rules, (rule) => {
			return (rule.resource === resource) && _.isEqual(rule.params, params) && _.matches(rule.cookies)(cookies)
		})
		
		if (rule) {
			_.delay(() => {
				res.writeHead(200)
				res.end(rule.responseText)
			}, rule.delay)
		} else {
			res.writeHead(404)
			res.end()
		}
	}
}
