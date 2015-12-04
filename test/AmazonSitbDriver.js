'use strict'

import {ProgrammableJsonServer} from './ProgrammableJsonServer'

export class AmazonSitbDriver {
	constructor({port}) {
		this._server = new ProgrammableJsonServer({port})
	}
	
	start() {
		this._server.start()
	}
	
	stop() {
		this._server.stop()
	}
	
	reset() {
		this._server.reset()
	}
	
	getBookData({asin}) {
		return {
			returns: ({bookData, delay = 0}) => {
				this._server.addRule({
					resource: '/',
					params: {
						method: 'getBookData',
						asin
					},
					delay: delay,
					responseText: JSON.stringify(bookData)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					params: {
						method: 'getBookData',
						asin
					},
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
	
	goToLitbPage({asin, page}) {
		return {
			returns: ({bookPages, delay = 0}) => {
				this._server.addRule({
					resource: '/',
					params: {
						method: 'goToLitbPage',
						asin,
						page
					},
					delay: delay,
					responseText: JSON.stringify(bookPages)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					params: {
						method: 'goToLitbPage',
						asin,
						page
					},
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
}
