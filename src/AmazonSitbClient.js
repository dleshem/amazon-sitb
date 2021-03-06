import querystring from 'query-string'
import _ from 'lodash'
import request from 'request'

export class AmazonSitbClient {
	constructor({endpoint = 'https://www.amazon.com/gp/search-inside/service-data', timeout = 0} = {}) {
		this._endpoint = endpoint
		this._timeout = timeout
	}
	
	async getBookData({asin}) {
		return this._fetchJson({
			params: {
				method: 'getBookData',
				asin
			}
		})
	}
	
	async goToLitbPage({asin, page}) {
		return this._fetchJson({
			params: {
				method: 'goToLitbPage',
				asin,
				page
			}
		})
	}
	
	async getSearchResults({asin, pageNumber, pageSize, query}) {
		return this._fetchJson({
			params: {
				method: 'getSearchResults',
				asin,
				pageNumber,
				pageSize,
				query
			}
		})
	}
	
	/*
	async goToSitbPage({asin, page, token, auth}) {
		return this._fetchJson({
			params: {
				method: 'goToSitbPage',
				asin,
				page,
				token
			},
			cookies: {
				'x-main': auth.xMain,
				'ubid-main': auth.ubidMain
			}
		})
	}*/
	
	async goToPage({asin, page, token, auth}) {
		return this._fetchJson({
			params: {
				method: 'goToPage',
				asin,
				page,
				token
			},
			cookies: {
				'x-main': auth.xMain,
				'ubid-main': auth.ubidMain
			}
		})
	}
	
	async _fetchJson({params, cookies}) {
		return new Promise((resolve, reject) => {
			const url = `${this._endpoint}${params ? '?' + querystring.stringify(params) : ''}`
			
			const jar = request.jar()
			_.each(cookies, (value, key) => {
				const cookie = request.cookie(`${key}=${value}`)
				jar.setCookie(cookie, url)
			})
			
			// Not setting the 'Accept-Encoding' header to support gzip results in HTTP status 500
			//  > To discuss automated access to Amazon data please contact api-services-support@amazon.com.
			request.get(url, {timeout: this._timeout, jar, gzip: true}, (error, response, body) => {
				if (error) {
					switch (error.code) {
						case 'ETIMEDOUT': // fall through
						case 'ESOCKETTIMEDOUT':
							reject({
								code: 'timeout',
								description: 'request timed out'
							})
							break
						default:
							reject({
								code: 'network_down',
								description: 'network is down'
							})
							break
					}
				} else {
					try {
						const response = JSON.parse(body)
						resolve(response)
					} catch (e) {
						reject({
							code: 'protocol',
							description: 'unexpected response format'
						})
					}
				}
			})
		})
	}
}
