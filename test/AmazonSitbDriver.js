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
		const params = {
			method: 'getBookData',
			asin
		}
		
		return {
			returns: ({bookData, delay = 0}) => {
				this._server.addRule({
					resource: '/',
					params,
					delay: delay,
					responseText: JSON.stringify(bookData)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					params,
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
	
	goToLitbPage({asin, page}) {
		const params = {
			method: 'goToLitbPage',
			asin,
			page
		}
		
		return {
			returns: ({bookPages, delay = 0}) => {
				this._server.addRule({
					resource: '/',
					params,
					delay: delay,
					responseText: JSON.stringify(bookPages)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					params,
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
	
	getSearchResults({asin, pageNumber, pageSize, query}) {
		const params = {
			method: 'getSearchResults',
			asin,
			pageNumber,
			pageSize,
			query
		}
		
		return {
			returns: ({bookSearchResults, delay = 0}) => {
				this._server.addRule({
					resource: '/',
					params,
					delay,
					responseText: JSON.stringify(bookSearchResults)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					params,
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
	
	goToPage({asin, page, token, authCookie}) {
		const params = {
			method: 'goToPage',
			asin,
			page,
			token
		}
		const cookies = {
			'x-main': authCookie
		}
		
		return {
			returns: ({bookPages, delay = 0}) => {
				this._server.addRule({
					resource: '/',
					params,
					cookies,
					delay: delay,
					responseText: JSON.stringify(bookPages)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					params,
					cookies,
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
}
