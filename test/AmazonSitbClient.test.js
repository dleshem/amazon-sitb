'use strict'

import {AmazonSitbClient} from '../src/AmazonSitbClient'
import {AmazonSitbDriver} from './AmazonSitbDriver'
import {expect, assert} from 'chai'
import {XMLHttpRequest} from 'xhr2'

describe('AmazonSitbClient', () => {
	const sitbServicePort = 10000
	const driver = new AmazonSitbDriver({
		port: sitbServicePort
	})
	const endpoint = `http://localhost:${sitbServicePort}/`
	const invalidEndpoint = 'http://thisisanonexistentdomain.thisdoesntexist/'
	
	const sitbClient = new AmazonSitbClient({XMLHttpRequest, endpoint})

	before(() => {
		driver.start()
	})
	
	after(() => {
		driver.stop()
	})
	
	beforeEach(() => {
		driver.reset()
	})
	
	describe('getBookData', () => {
		const someAsin = '0818407271'
		const someBookData = {"pt":"366","buyingAsin":"0818407271","original_book_type":"print","binding":"Paperback","authorNameList":["Gus Hansen"],"intlField":"","sessionId":"000-0000000-0000000","reviewStarsImageTag":"<span class=\"crAvgStars\" style=\"white-space:no-wrap;\"><span class=\"asinReviewsSummary\" name=\"0818407271\" ref=\"rdr_ext_cr_cm_cr_acr_pop_\" >\n             <a href=\"https://www.amazon.com/Every-Hand-Revealed-Gus-Hansen/product-reviews/0818407271\" ><img src=\"https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/customer-reviews/ratings/stars-4-5._CB192238104_.gif\" width=\"55\" alt=\"4.5 out of 5 stars\" align=\"absbottom\" title=\"4.5 out of 5 stars\" height=\"12\" border=\"0\" /></a>&nbsp;</span>(<a href=\"https://www.amazon.com/Every-Hand-Revealed-Gus-Hansen/product-reviews/0818407271\" >278</a>)</span>","sampleSearches":["everybody folds","chip stack","continuation bet"],"pageLabelSet":null,"xPages":"3,7,15","requestId":"X4WGGDP2DP85FVH6QZ50","shouldPreorder":0,"sitbAsin":"0818407271","st":"20","buyingPrice":12.23,"level":0,"bookmarks":[["Front Cover",1,1],["Copyright",5,1],["Table of Contents",8,2],["First Pages",20,6]],"type":"print","title":"Every Hand Revealed","thumbnailImage":"https://images-na.ssl-images-amazon.com/images/I/418HVyEXKSL._SL75_PIsitb-sticker-arrow-st,TopRight,8,-14_OU01_.jpg","kindleAsin":"B002TWIVQM","orientation":"lrtb","largeImageUrls":{"8":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S008.LXXXXXXX.jpg?Expires=1449347509&Signature=GjeSWYijMH0zT5+vexUyNzJdjx8BcBKdOI5EebyieII38AW3AjKpRnz+IwkhPqQd5eyGovnID+U2Rq7fXzptmZXOLa1gr33TJaxVkwFzGM7SXidB8GfEKsaxtq81xvqUG2zqTET7hcFb1lYtdk6TwNwjHSB08KvyaSwo7tkTHgE=&Key-Pair-Id=APKAIUO27P366FGALUMQ","1":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S001.LXXXXXXX.jpg?Expires=1449347509&Signature=FGtPygDx1QtW2AlAGFHha0r1rnTlJOC7Rr4C+XdkOGRcA1tNE9Jq6Yoh8o12zL0Nde5H9cbExAPZ7WEBy3nlhDjrpVUXyvv2HfwE60CJUn1NyDFUy5hKnf3Pll4paMOlmJT/XE1JUlunLpzhCdk8d0jjvnbvJaCfoSORq9+ON/4=&Key-Pair-Id=APKAIUO27P366FGALUMQ","20":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00K.LXXXXXXX.jpg?Expires=1449347509&Signature=bSnbYGRorZELLinAKm24Sb1pHgq4cH+lUikniYj6SEqBkwcau3znqdMbawVazCOOgvTLEUW+wyRExPZup4NFm1YrUzErXEQwqZvIlhAcnhDSwUSy+6Ib84D+cuM8fmo/grfEQdgJKcH6CD/WNz8pP5LpyKjrj9KGX3TQaVhRj34=&Key-Pair-Id=APKAIUO27P366FGALUMQ","5":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S005.LXXXXXXX.jpg?Expires=1449347509&Signature=bOMr1tc8WFajUUmgzEQoqiWGDzvqgr7150znOjrdRGGylbrtW1Vv2p7AY8FIAHvW2RrkCHNNIOtm1lOl5a7cYKp2xb+AwEn4fvHt1agh6nUtErtUYDzpu8BBz7Ju7eMH3IDFLU7yJs82PudiOIpzjrqQSSgBAhISC20YbyPt16w=&Key-Pair-Id=APKAIUO27P366FGALUMQ"},"usedBookDisabled":false,"usedAndNewLowestPrice":3.2,"zoomable":true,"ASIN":"0818407271","oneClick":false,"showUsedAndNew":true,"numPages":385,"litbPages":[1,5,8,9,20,21,22,23,24,25],"fastTrack":"<span><span id=\"fastTrackMessage0818407271144926110915287\">\n  Want it <b>Monday, Dec. 7</b>?&nbsp;Order within <span id='ftCountdown0818407271144926110915287' style='color:#009900'></span> and choose <b>One-Day Shipping</b>.\n  \n    \n\n\n\n\n\n\n<script language=\"Javascript1.2\" type=\"text/javascript\">\n<!--\n\nfunction ftCountdownTimer() {\n    this.currentDisplayMin;\n    this.initSecondsLeftToOrder;\n\n    \n\n\n\n\nfunction getTimeRemainingString( hours, minutes ) \n{\n  var hourString   =  ( hours == 1 ? \"hr\" : \"hrs\" );\n  var minuteString =  ( minutes  == 1 ? \"min\" : \"mins\" );\n\n    if (hours == 0) {\n      return minutes + \" \" + minuteString;\n    }\n    if (minutes == 0) {\n      return hours + \" \" + hourString;\n    }\n  return hours + \" \" + hourString + \" \"  + minutes + \" \" + minuteString;\n  return hours + \" \" + hourString + \"  \" + minutes + \" \" + minuteString;\n}\n\n\n\n\n    this.init = function(secondsLeftToOrder, countdownElementID)\n    {\n      var FT_currentTime = new Date();\n      var FT_currentHours = FT_currentTime.getHours();\n      var FT_currentMins = FT_currentTime.getMinutes();\n      var FT_currentSecs = FT_currentTime.getSeconds();\n      this.initSecondsLeftToOrder = FT_currentHours * 3600 + FT_currentMins * 60 + FT_currentSecs;\n      var FT_secondsFromCat = secondsLeftToOrder;\n\n      this.initSecondsLeftToOrder += FT_secondsFromCat;\n      this.refresh(countdownElementID);\n    }\n\n    this.refresh = function(countdownElementID)\n    {\n      var FT_newCurrentTime = new Date();\n      var FT_actualHours = FT_newCurrentTime.getHours();\n      var FT_actualMins = FT_newCurrentTime.getMinutes();\n      var FT_actualSecs = FT_newCurrentTime.getSeconds();\n      FT_actualSeconds = FT_actualHours * 3600 + FT_actualMins * 60 + FT_actualSecs;\n\n      this.displayCountdown(countdownElementID);\n    }\n\n    this.displayCountdown = function(countdownElementID)\n    {\n      if (!document.layers && !document.all && !document.getElementById) {\n        return;\n      }\n\n      var FT_remainSeconds = this.initSecondsLeftToOrder - FT_actualSeconds;\n\n      if (FT_remainSeconds < 1) {\n        return;  \n      }\n\t  \n      var FT_secondsPerDay = 24 * 60 * 60;\n      var FT_daysLong = FT_remainSeconds / FT_secondsPerDay;\n      var FT_days = Math.floor(FT_daysLong);\n      var FT_hoursLong = (FT_daysLong - FT_days) * 24;\n      var FT_hours = Math.floor(FT_hoursLong);\n      var FT_minsLong = (FT_hoursLong - FT_hours) * 60;\n      var FT_mins = Math.floor(FT_minsLong);\n      var FT_secsLong = (FT_minsLong - FT_mins) * 60;\n      var FT_secs = Math.floor(FT_secsLong);\n\n      if (FT_days > 0) {\n        FT_hours = (FT_days * 24) + FT_hours;\n      }\n\n      window.setTimeout('ftCountdown_' + countdownElementID + '.refresh(\"' + countdownElementID + '\")', 1000);\n\n      var ftCountdown = getTimeRemainingString( FT_hours, FT_mins );\n\n      var countdownElement = document.getElementById(countdownElementID);\n      if (countdownElement) {\n        if (this.currentDisplayMin != FT_mins || countdownElement.innerHTML == \"\" ) {\n          countdownElement.innerHTML = ftCountdown;\n          this.currentDisplayMin = FT_mins;\n        }\n      }\n    }\n\n}\n\n//-->\n</script>\n\n\n<script language=\"Javascript1.2\" type=\"text/javascript\">\n<!--\n    var ftCountdown_ftCountdown0818407271144926110915287 = new ftCountdownTimer();\n    ftCountdown_ftCountdown0818407271144926110915287.init(71891, 'ftCountdown0818407271144926110915287');\n//-->\n</script>\n\n\n  </span></span>","searchable":true,"hasKindleEdition":true,"jumboImageUrls":{"8":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S008.JUMBOXXX.jpg?Expires=1449347509&Signature=U1b1Tj1IEzo+DiIddzPmiuU7qcjAeLDu/JGEpx/ZbI8SQ1Lp/Fbsj+URmjn//tUlAf1OkASXEr+JXm3ylXClXCAJtvLWKILz7kcMCGGkgrOOn3Z4OFzExVWMcfWEFssS9GNNcKN5r8rC/UZCPE7ElW7Wql/zTZRY3mme12B4rcg=&Key-Pair-Id=APKAIUO27P366FGALUMQ","1":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S001.JUMBOXXX.jpg?Expires=1449347509&Signature=TibDPdzJ0qoKD1WN+KGbCxS73feJk5DHk7rDT6mY5II3epDtrfILacIwW24bbsjl3WxmmWrCrLd6ozgFnpKgCtILa7Ko3mcCb9E6qPcWJsBw8zs2UdAwi9E/7TbuIqaa2GP1BL8DbyRC0vkRuilO8kHtI+AEYwR6ozRlE5AwE7s=&Key-Pair-Id=APKAIUO27P366FGALUMQ","20":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00K.JUMBOXXX.jpg?Expires=1449347509&Signature=VqD6QraBRVzX4g5NP5ry0NCvixYoh3f9p2Ix1EdSfT9eFuFpp+20DdrMxDbo4zBsTZMfNrsh0m9fPoSpIJELlTCCUDDtbX6vvsmb++XHY34EMymx8YfZ9n1NpkH0beAYHcpfhVVVqsGzvKPLY8aJ0O4y+rJKAfWt9K+2MxiBxuo=&Key-Pair-Id=APKAIUO27P366FGALUMQ","5":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S005.JUMBOXXX.jpg?Expires=1449347509&Signature=PEIObjxKCJ5ugMiRQbwXHDjMHzVJF5a+93/orKFfxzN4Z9PYz9HYFhujFUBT6ksOTX7D4fCHI5QO7hlvEl1oaurTkuJ++CXzBC1K9WIS6jO+mzyuu3gezY7LndLPPPvKaAP63xY7OcIMoSr3U2F6hEWCvSZwViV2Evo7mW2VtWk=&Key-Pair-Id=APKAIUO27P366FGALUMQ"},"isFPS":"","kcpAppWidget":{"fDocLink":"http://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000493771"},"usedAndNewCount":"132"}
		
		const someInvalidAsin = '1'
		const someInvalidBookData = {"usedBookDisabled":false,"requestId":"MFDN7E5VCV06BAPJ6AA6","kindleAsin":null,"sitbAsin":null,"reviewStarsImageTag":null,"showUsedAndNew":true,"error":{"text":{"key":"FEATURE_UNAVAILABLE_TEXT"},"title":{"key":"FEATURE_UNAVAILABLE_TITLE"},"reftag":"rdr_bar_unav"},"kcpAppWidget":{"fDocLink":"http://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000493771"}}

		it ('returns valid book data for valid asins', () => {
			driver.getBookData({
				asin: someAsin
			}).returns({
				bookData: someBookData
			})
			
			return sitbClient.getBookData({
				asin: someAsin
			}).then((bookData) => {
				expect(bookData).to.deep.equal(someBookData)
			}, (error) => {
				assert.ok(false, `getBookData returned ${JSON.stringify(error)}`)
			})
		})
		
		it ('returns empty book data for invalid asins', () => {
			driver.getBookData({
				asin: someInvalidAsin
			}).returns({
				bookData: someInvalidBookData
			})
			
			return sitbClient.getBookData({
				asin: someInvalidAsin
			}).then((bookData) => {
				expect(bookData).to.deep.equal(someInvalidBookData)
			}, (error) => {
				assert.ok(false, `getBookData returned ${JSON.stringify(error)}`)
			})
		})
		
		it ('gracefully fails on timeout', () => {
			driver.getBookData({
				asin: someAsin
			}).returns({
				bookData: someBookData,
				delay: 100
			})
			
			const sitbClientWithTimeout = new AmazonSitbClient({
				XMLHttpRequest,
				endpoint,
				timeout: 10
			})
			
			return sitbClientWithTimeout.getBookData({
				asin: someAsin
			}).then((bookData) => {
				// Unexpected success
				assert.ok(false, `getBookData should have timed out, but returned ${JSON.stringify(bookData)}`)
			}, (error) => {
				expect(error.code).to.equal('timeout')
				expect(error.description).to.not.be.empty
			})
		})
		
		it ('gracefully fails when network is down', () => {
			const sitbClientWithInvalidEndpoint = new AmazonSitbClient({
				XMLHttpRequest,
				endpoint: invalidEndpoint
			})
			
			return sitbClientWithInvalidEndpoint.getBookData({
				asin: someAsin
			}).then((bookData) => {
				// Unexpected success
				assert.ok(false, `Network should be down, but request returned ${JSON.stringify(bookData)}`)
			}, (error) => {
				expect(error.code).to.equal('network_down')
				expect(error.description).to.not.be.empty
			})
		})
		
		it ('gracefully fails on protocol error', () => {
			driver.getBookData({
				asin: someAsin
			}).errors()
			
			return sitbClient.getBookData({
				asin: someAsin
			}).then((bookData) => {
				// Unexpected success
				assert.ok(false, `Expected protocol error, but request returned ${JSON.stringify(bookData)}`)
			}, (error) => {
				expect(error.code).to.equal('protocol')
				expect(error.description).to.not.be.empty
			})
		})
	})
	
	describe('goToLitbPage', () => {
		const someAsin = '0818407271'
		const somePage = '1'
		const someBookPages = {"jumboImageUrls":{"25":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00P.JUMBOXXX.jpg?Expires=1449347936&Signature=Cb9u7jukBsvXsLRK7iRfQDEsh5qy/nkGMpZWGOIc8K1qLFyon84xD3to2NC8DbIMlvttOEplTklCwZG5dvQze0edmZux1dWqE2iRyZmLoei4xktZitXiQ98H/RLwMZEPQFCFgpvKmrGo2dz2Et1aYfLfnw7WzWpKsQ9vCSBgk+I=&Key-Pair-Id=APKAIUO27P366FGALUMQ","21":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00L.JUMBOXXX.jpg?Expires=1449347936&Signature=e7DrEN6mpbOZVqukdPYPOT5Xpc99g1CYm7+rSmstb4K+bz+w9o4WooYvyx19efrDvINXO/JQ1x+pn+fqG+qdzmFZkD8t/UpT7C13dpyhaJGIX/EeYZ1HIb5H1Bm+LQ5Slpn73qYj9zrIKwB632uo/bsWFhmUUlyQfwlMYSvOeSo=&Key-Pair-Id=APKAIUO27P366FGALUMQ","9":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S009.JUMBOXXX.jpg?Expires=1449347936&Signature=S2aTChLoLq41CLw38R5h4cBbNMV2+VXrqVJvfPtPAsqhpxtXMJi4SCBuBAKsdktsB+nA8PjgYb0wZYQUrvC8zO5IBG4s1lgHYbtJU7b3jPzSqdhzQbcriDHvOvw58wvDOpR5SrrZlxQyZmmFIWvPkfxibB8Xrbi2KtIPXWDeKXw=&Key-Pair-Id=APKAIUO27P366FGALUMQ","20":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00K.JUMBOXXX.jpg?Expires=1449347936&Signature=ML7r5uYZy61t9J14KitN2+tyzoOM1a0cHDWxVv6c1XCckr/iVwfXz7A7XBHpQSfONMVimY7cOGcWBCOByeOKb0CFsISOxkKdk9Wy0AAfZJEIXNZ0u0FGrVl0P0oRCBARjdVcNi6rkMwjgAVTa0+NmOVJcke5B4r+SH3hAtpqLD4=&Key-Pair-Id=APKAIUO27P366FGALUMQ","8":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S008.JUMBOXXX.jpg?Expires=1449347936&Signature=Xatp2hOCu3YUD8kmI2lyT9zsXVEPu0H/OSvMcW7EauDiJhFjTFWs7EuTuiRfgCuoqvIThSMPwA3ritLRtRBo/6/33yfyLsg0JEAs+cqdSPSBkEFxsVpQy0ZXHlu4iEn0E8zdqgRirmpJWLG13xNhovqFVdO/KtG2+9vMuYcSVBU=&Key-Pair-Id=APKAIUO27P366FGALUMQ","22":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00M.JUMBOXXX.jpg?Expires=1449347936&Signature=b3uojYRF/f60sY8xyy7p0TvpaR4G/a5kxZuX+qNO6qp8Rq8iGUZYkdjKvnh1gcsam9UFRKVET6RdPfd15qPwhGdhUqMmGhHxpsrfs/rFKOPSRHadDGnXZBWAYHlClOzUFQ3kL0fVBw7K/WwEIrqigKCSS+FoJiT8qCEgFJv2Dww=&Key-Pair-Id=APKAIUO27P366FGALUMQ","1":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S001.JUMBOXXX.jpg?Expires=1449347936&Signature=O9FsR4XF7EM7w13jwb4w/5z/ii9Hd5ED5S+DCs4KkXsdsc/wMEZNK6JdXisixzTAN/gMpA4PdJqK5n6SmQPh3Y1VhSmfY3fPdeaRRDwCV5Bh5PBH3+gIp78445Zf8sj43oZyp2HNEby+VrJf8o+WtBO7+oTBg0gRffAGwCAPe+Q=&Key-Pair-Id=APKAIUO27P366FGALUMQ","24":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00O.JUMBOXXX.jpg?Expires=1449347936&Signature=Ehl5pwNJDcNAV9ftg5qedv3uRgC5AdZZoiQ6o2RGDd+GYjwcJaci20tLVnW2DwsJX32EvAtAhTAlbVCgRfiTSavU3OPZKdI3cwuWHi+LTzPh5pAGWWcdDhAVGsKFpBbFG/V2Xz4YCuqtEH36TtQTw9tthMx9fdu28GTAUvwiKho=&Key-Pair-Id=APKAIUO27P366FGALUMQ","23":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00N.JUMBOXXX.jpg?Expires=1449347936&Signature=A1FG/I6UXh9tMtmL0+VdbI7FxFQjT+nFyVDWC4Xt5GhiKP3lWV/OwgSGeEMNRjNGOH5QM/nABVcEcdIAMvjR5m9b8Iro6/azqluOd58iTL+KpHiGeZq/DKqPzbvUq6gWOLrsO5RUyYfbyoW81OSGkq2A9YBv0Wx+9RNPbVUQHEM=&Key-Pair-Id=APKAIUO27P366FGALUMQ","5":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S005.JUMBOXXX.jpg?Expires=1449347936&Signature=AKoM9+0ZptOM5yjevpYJPQO+dhpSklpd9IhpU5Ms8SRWH3XzK+XtVPZqPdmAzOf+GYCwcXVtP+id8RYOLAqMnr/rtBJg8RLAaQVvVEdCOtyS/rznWLaB+JD73+dQN2CK1Vu6StDD/rbocwjs9PVGVXdnb51ZMPcVXf9q/vp2Ftw=&Key-Pair-Id=APKAIUO27P366FGALUMQ"},"largeImageUrls":{"25":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00P.LXXXXXXX.jpg?Expires=1449347936&Signature=M+4tRVNiRJTNZyIqL8Ht1HuFrh0PEG5I1Bf7YszoumoNgIMPiCVamRRPLdpVDDOgP0Pl4D96Pvtu2e0gmrZ5Y3F28rr4UJgERREj6g4R/wsERV2C1ryV8ilfiZ8RyOeFsKIa7QTW35v6yenB2i20jxw0RAypQPSstkDy/LTiqvY=&Key-Pair-Id=APKAIUO27P366FGALUMQ","21":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00L.LXXXXXXX.jpg?Expires=1449347936&Signature=an5cD8nss9GaWrtPinSn8rJOHmqfoO26QkXX15T5TJTGOVoXecWVaPnPwdZdooVKk41X/lW/V2J1QuqbWRpDAr33bE/sRhN7HsoaBO0MWSTILzDCNKjd/vP0BK8dRwnw10Hid9hF6taBkfGXd8/fzvH2WVdlsFuBvESybu852zE=&Key-Pair-Id=APKAIUO27P366FGALUMQ","9":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S009.LXXXXXXX.jpg?Expires=1449347936&Signature=bHu/G6gKoXnS9UqDYKZDo+x12W2T11BvLXnbbMNod99mQJjRe0STq7xzJD1+gfkvm3OTPNM2g/c36/FV5RF8AW9Y3VYisHWYRLzLkY85zPRba002SIasrm2WzUHogZaiJO29jcBkahdn8q99s6v48ihyJu+LXJZ9i8PEOg5yuoo=&Key-Pair-Id=APKAIUO27P366FGALUMQ","20":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00K.LXXXXXXX.jpg?Expires=1449347936&Signature=ZSFFEZ8+JD+fgKUzoTEtk8wA4w5Vqcyp0I7yYfNFi9icHnOWlYTVhWETzmtgB/htKRpuyYnLxIEvcQBwAOMEIE7EhkrIpMXStY7HEtK2oWZiBr19UN+IDJtzpeygvGEOrDcz1hoV0BqQB7w9DBTlv29zYp5whnJgBt/04Sei1UE=&Key-Pair-Id=APKAIUO27P366FGALUMQ","8":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S008.LXXXXXXX.jpg?Expires=1449347936&Signature=Rdgv7KpdHQycwejC8BJJsKM5lCGm3GCt4qG/ApF8Rlv4akHL4rkkiyBMeDsYpWgi7t9T3thXuLFMk9JvWcKlu1Utd1b787hb90vAvhNAt74EBuUJ9zE9Uc68z4qrP2+a8uB14Ty2w1MRvzL3VUZnUQEqaq5mpGEJRJKxxYOgar4=&Key-Pair-Id=APKAIUO27P366FGALUMQ","22":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00M.LXXXXXXX.jpg?Expires=1449347936&Signature=HiUs3q+0nh2D+vODHMa3VoC3MOzSG3PEF2ZY3I+eeY47m6qt+3oJxWDcDLaNjJ2AcE+DQjOpC0KP021L43hKAcLHSQiY8wsJI1P8KWFtDOpY4wugoApHndW+vySUN9l5R89e+oqoKyPE6lr9H/kl8DFNLb8wv3SxupnPNoVEbyg=&Key-Pair-Id=APKAIUO27P366FGALUMQ","1":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S001.LXXXXXXX.jpg?Expires=1449347936&Signature=W2srCcBTz/UmJUZ3giG/sUDobdNpQrMV21r6dvQyrXkSJ4UaSdnUJlwK5Q8NsytXp7MZLBs13MDXWy/cCZT7wn1K6rgdsROp1tgBXHiud2avW3en8zens5f3yiQmHLfvhWZwmR/KClHKJ6hlDjrxlGhOZTVk6wc1CqM18+OrAkI=&Key-Pair-Id=APKAIUO27P366FGALUMQ","24":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00O.LXXXXXXX.jpg?Expires=1449347936&Signature=XIrxCcLrN3NZ8QCigoEcquOHKdp4ejY605CI/EVDDOLqrB6yn7+ZmZcjmnVNvlv/3ApV28YavPoqFl17uarRJ4S9n0IwVJ0sBVX2WDEDJEiuk7Lm3PtC/SfcrvF+Xj1IQRzgG2GQeT5o5/CQU5eHT9xcYocP1GGigWVBW0MtYzs=&Key-Pair-Id=APKAIUO27P366FGALUMQ","23":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00N.LXXXXXXX.jpg?Expires=1449347936&Signature=YBwubt9vTjOurrec24OAZOfwLqheqQkoyy9so8qP16QMpg4zDL2ypC2z4MEu30AXCY0IwL/tspSQE1LiwZF6Twe8KegDiYybaxUmRe4xzlvicu0S5DqS9QpQDy8/c7ujvX/bOmvmpRBj0GUVmlzuhzwGX4qVZpQUNnXXm3pQbuo=&Key-Pair-Id=APKAIUO27P366FGALUMQ","5":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S005.LXXXXXXX.jpg?Expires=1449347936&Signature=YdNPwD1BMB5NRpIZ02aZIaLgC2M8bm/IiuxCdHnaQxP3Df4dMSP/4WGMgR4tFGFfCPJ6puDEeGOcK7weRAidmmLNsxXI7J559IzeLJNO7mjQXUwHB7ktar/+YmW80nyNRKcUEfH41xjxzS/5bVtqJNLJU6VojoqDVJVra8w6zrw=&Key-Pair-Id=APKAIUO27P366FGALUMQ"}}
		
		const someInvalidPage = '155'
		const someInvalidBookPages = {"error":{"text":{"key":"PAGE_NOT_AVAILABLE_TEXT"},"title":{"key":"PAGE_NOT_AVAILABLE_TITLE"},"reftag":"rdr_bar_view"}}

		it ('returns valid book pages for a valid page', () => {
			driver.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).returns({
				bookPages: someBookPages
			})
			
			return sitbClient.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).then((bookPages) => {
				expect(bookPages).to.deep.equal(someBookPages)
			}, (error) => {
				assert.ok(false, `goToLitbPage returned ${JSON.stringify(error)}`)
			})
		})
		
		it ('returns empty book pages for an invalid page', () => {
			driver.goToLitbPage({
				asin: someAsin,
				page: someInvalidPage
			}).returns({
				bookPages: someInvalidBookPages
			})
			
			return sitbClient.goToLitbPage({
				asin: someAsin,
				page: someInvalidPage
			}).then((bookPages) => {
				expect(bookPages).to.deep.equal(someInvalidBookPages)
			}, (error) => {
				assert.ok(false, `goToLitbPage returned ${JSON.stringify(error)}`)
			})
		})
		
		it ('gracefully fails on timeout', () => {
			driver.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).returns({
				bookPages: someBookPages,
				delay: 100
			})
			
			const sitbClientWithTimeout = new AmazonSitbClient({
				XMLHttpRequest,
				endpoint,
				timeout: 10
			})
			
			return sitbClientWithTimeout.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).then((bookPages) => {
				// Unexpected success
				assert.ok(false, `goToLitbPage should have timed out, but returned ${JSON.stringify(bookPages)}`)
			}, (error) => {
				expect(error.code).to.equal('timeout')
				expect(error.description).to.not.be.empty
			})
		})
		
		it ('gracefully fails when network is down', () => {
			const sitbClientWithInvalidEndpoint = new AmazonSitbClient({
				XMLHttpRequest,
				endpoint: invalidEndpoint
			})
			
			return sitbClientWithInvalidEndpoint.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).then((bookPages) => {
				// Unexpected success
				assert.ok(false, `Network should be down, but request returned ${JSON.stringify(bookPages)}`)
			}, (error) => {
				expect(error.code).to.equal('network_down')
				expect(error.description).to.not.be.empty
			})
		})
		
		it ('gracefully fails on protocol error', () => {
			driver.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).errors()
			
			return sitbClient.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).then((bookPages) => {
				// Unexpected success
				assert.ok(false, `Expected protocol error, but request returned ${JSON.stringify(bookPages)}`)
			}, (error) => {
				expect(error.code).to.equal('protocol')
				expect(error.description).to.not.be.empty
			})
		})
	})
})
