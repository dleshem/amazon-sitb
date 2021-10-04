import querystring from 'query-string'
import _ from 'lodash'
import request from 'request'

export class AmazonSitbClient {
	constructor({endpoint = 'https://read.amazon.com/', timeout = 0} = {}) {
		this._endpoint = endpoint
		this._timeout = timeout
	}
	
	async getBookData({asin}) {
		return this._fetchJson({
			resource: 'api/litb/book-data',
			params: {
				asin
			}
		})
	}
	
	async goToPage({asin, buyingAsin = null, page, token = null, auth = null}) {
		const cookies = token ? {
			'x-main': auth.xMain,
			'ubid-main': auth.ubidMain
		} : null;
		return this._fetchJson({
			resource: 'api/litb/go-to-page',
			params: {
				asin,
				buyingAsin,
				page,
				token
			},
			cookies
		})
	}
	
	async getSearchResults({asin, buyingAsin = null, pageNumber, pageSize, query}) {
		return this._fetchJson({
			resource: 'api/litb/search-results',
			params: {
				asin,
				buyingAsin,
				pageNumber,
				pageSize,
				query
			}
		})
	}
	
	async _fetchJson({resource = '/', params, cookies}) {
		return new Promise((resolve, reject) => {
			const url = `${this._endpoint}${resource}${params ? '?' + querystring.stringify(params) : ''}`
			
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
