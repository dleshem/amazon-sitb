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
		const resource = '/api/litb/book-data';
		const params = { asin };

		return {
			returns: ({bookData, delay = 0}) => {
				this._server.addRule({
					resource,
					headers,
					params,
					delay: delay,
					responseText: JSON.stringify(bookData)
				})
			},
			errors: () => {
				this._server.addRule({
					resource,
					headers,
					params,
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
	
	getSearchResults({asin, buyingAsin = null, pageNumber, pageSize, query}) {
		const resource = '/api/litb/search-results';
		const params = {
			asin,
			buyingAsin,
			pageNumber,
			pageSize,
			query
		};
		
		return {
			returns: ({bookSearchResults, delay = 0}) => {
				this._server.addRule({
					resource,
					headers,
					params,
					delay,
					responseText: JSON.stringify(bookSearchResults)
				})
			},
			errors: () => {
				this._server.addRule({
					resource,
					headers,
					params,
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
	
	goToPage({asin, buyingAsin = null, page, token = null, auth}) {
		const resource = '/api/litb/go-to-page';
		const params = {
			asin,
			buyingAsin,
			page,
			token
		}
		const cookies = auth ? {
			'x-main': auth.xMain,
			'ubid-main': auth.ubidMain
		} : {};
		
		return {
			returns: ({bookPages, delay = 0}) => {
				this._server.addRule({
					resource,
					headers,
					params,
					cookies,
					delay: delay,
					responseText: JSON.stringify(bookPages)
				})
			},
			errors: () => {
				this._server.addRule({
					resource,
					headers,
					params,
					cookies,
					responseText: '<html><head><title>Error 500</title></head></html>'
				})
			}
		}
	}
}
