'use strict'

import querystring from 'query-string'

export class AmazonSitbClient {
	constructor({XMLHttpRequest, endpoint = 'https://www.amazon.com/gp/search-inside/service-data', timeout = 0, authCookie}) {
		this._XMLHttpRequest = XMLHttpRequest
		this._endpoint = endpoint
		this._timeout = timeout
	}
	
	getBookData({asin}) {
		return this._fetchJson({
			params: {
				method: 'getBookData',
				asin
			}
		})
	}
	
	goToLitbPage({asin, page}) {
		return this._fetchJson({
			params: {
				method: 'goToLitbPage',
				asin,
				page
			}
		})
	}
	
	getSearchResults({asin, pageNumber, pageSize, query}) {
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
	
	goToSitbPage({asin, page, token}) {
		return this._fetchJson({
			params: {
				method: 'goToSitbPage',
				asin,
				page,
				token
			}
		})
	}
	
	goToPage({asin, page, token}) {
		return this._fetchJson({
			params: {
				method: 'goToPage',
				asin,
				page,
				token
			}
		})
	}
	
	_fetchJson({params, authCookie}) {
		return new Promise((resolve, reject) => {
			const xhr = new this._XMLHttpRequest()
			xhr.ontimeout = () => {
				reject({
					code: 'timeout',
					description: 'request timed out'
				})
			}
			xhr.onerror = () => {
				reject({
					code: 'network_down',
					description: 'network is down'
				})
			}
			xhr.onload = () => {
				try {
					const response = JSON.parse(xhr.response)
					resolve(response)
				} catch (e) {
					reject({
						code: 'protocol',
						description: 'unexpected response format'
					})
				}
			}
			
			const url = `${this._endpoint}${params ? '?' + querystring.stringify(params) : ''}`
			xhr.open('GET', url, true)
			xhr.timeout = this._timeout
			
			// Not setting the 'Accept' header results in HTTP status 500
			//  > To discuss automated access to Amazon data please contact api-services-support@amazon.com.
			xhr.setRequestHeader('Accept', '*/*')
			
			if (authCookie) {
				xhr.setRequestHeader('Cookie', `x-main=${authCookie}`)
			}
			xhr.send()
		})
	}
}
