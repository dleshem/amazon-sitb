import {ProgrammableJsonServer} from './ProgrammableJsonServer'

// Not setting the 'Accept-Encoding' header to support gzip results in HTTP status 500
//  > To discuss automated access to Amazon data please contact api-services-support@amazon.com.
const headers = {
	'accept-encoding': 'gzip, deflate'
}

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
					headers,
					params,
					delay: delay,
					responseText: JSON.stringify(bookData)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					headers,
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
					headers,
					params,
					delay: delay,
					responseText: JSON.stringify(bookPages)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					headers,
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
					headers,
					params,
					delay,
					responseText: JSON.stringify(bookSearchResults)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					headers,
					params,
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
	
	goToPage({asin, page, token, auth}) {
		const params = {
			method: 'goToPage',
			asin,
			page,
			token
		}
		const cookies = {
			'x-main': auth.xMain,
			'ubid-main': auth.ubidMain
		}
		
		return {
			returns: ({bookPages, delay = 0}) => {
				this._server.addRule({
					resource: '/',
					headers,
					params,
					cookies,
					delay: delay,
					responseText: JSON.stringify(bookPages)
				})
			},
			errors: () => {
				this._server.addRule({
					resource: '/',
					headers,
					params,
					cookies,
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
}
