import {AmazonSitbClient} from '../src/AmazonSitbClient'
import {AmazonSitbDriver} from './AmazonSitbDriver'
import {expect, assert} from 'chai'

describe('AmazonSitbClient', () => {
	const sitbServicePort = 10000
	const driver = new AmazonSitbDriver({
		port: sitbServicePort
	})
	const endpoint = `http://localhost:${sitbServicePort}/`
	const invalidEndpoint = 'http://thisisanonexistentdomain.thisdoesntexist/'
	
	const sitbClient = new AmazonSitbClient({endpoint})

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

		it ('returns valid book data for valid asins', async () => {
			driver.getBookData({
				asin: someAsin
			}).returns({
				bookData: someBookData
			})
			
			const bookData = await sitbClient.getBookData({
				asin: someAsin
			})
			expect(bookData).to.deep.equal(someBookData)
		})
		
		it ('returns empty book data for invalid asins', async () => {
			driver.getBookData({
				asin: someInvalidAsin
			}).returns({
				bookData: someInvalidBookData
			})
			
			const bookData = await sitbClient.getBookData({
				asin: someInvalidAsin
			})
			expect(bookData).to.deep.equal(someInvalidBookData)
		})
		
		it ('gracefully fails on timeout', async () => {
			driver.getBookData({
				asin: someAsin
			}).returns({
				bookData: someBookData,
				delay: 100
			})
			
			const sitbClientWithTimeout = new AmazonSitbClient({
				endpoint,
				timeout: 10
			})
			
			try {
				const bookData = await sitbClientWithTimeout.getBookData({
					asin: someAsin
				})

				// Unexpected success
				assert.ok(false, `getBookData should have timed out, but returned ${JSON.stringify(bookData)}`)
			} catch (error) {
				expect(error.code).to.equal('timeout')
				expect(error.description).to.not.be.empty
			}
		})
		
		it ('gracefully fails when network is down', async () => {
			const sitbClientWithInvalidEndpoint = new AmazonSitbClient({
				endpoint: invalidEndpoint
			})
			
			try {
				const bookData = await sitbClientWithInvalidEndpoint.getBookData({
					asin: someAsin
				})

				// Unexpected success
				assert.ok(false, `Network should be down, but request returned ${JSON.stringify(bookData)}`)
			} catch (error) {
				expect(error.code).to.equal('network_down')
				expect(error.description).to.not.be.empty
			}
		})
		
		it ('gracefully fails on protocol error', async () => {
			driver.getBookData({
				asin: someAsin
			}).errors()
			
			try {
				const bookData = await sitbClient.getBookData({
					asin: someAsin
				})

				// Unexpected success
				assert.ok(false, `Expected protocol error, but request returned ${JSON.stringify(bookData)}`)
			} catch (error) {
				expect(error.code).to.equal('protocol')
				expect(error.description).to.not.be.empty
			}
		})
	})

	describe('goToLitbPage', () => {
		const someAsin = '0818407271'
		const somePage = '1'
		const someBookPages = {"jumboImageUrls":{"25":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00P.JUMBOXXX.jpg?Expires=1449347936&Signature=Cb9u7jukBsvXsLRK7iRfQDEsh5qy/nkGMpZWGOIc8K1qLFyon84xD3to2NC8DbIMlvttOEplTklCwZG5dvQze0edmZux1dWqE2iRyZmLoei4xktZitXiQ98H/RLwMZEPQFCFgpvKmrGo2dz2Et1aYfLfnw7WzWpKsQ9vCSBgk+I=&Key-Pair-Id=APKAIUO27P366FGALUMQ","21":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00L.JUMBOXXX.jpg?Expires=1449347936&Signature=e7DrEN6mpbOZVqukdPYPOT5Xpc99g1CYm7+rSmstb4K+bz+w9o4WooYvyx19efrDvINXO/JQ1x+pn+fqG+qdzmFZkD8t/UpT7C13dpyhaJGIX/EeYZ1HIb5H1Bm+LQ5Slpn73qYj9zrIKwB632uo/bsWFhmUUlyQfwlMYSvOeSo=&Key-Pair-Id=APKAIUO27P366FGALUMQ","9":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S009.JUMBOXXX.jpg?Expires=1449347936&Signature=S2aTChLoLq41CLw38R5h4cBbNMV2+VXrqVJvfPtPAsqhpxtXMJi4SCBuBAKsdktsB+nA8PjgYb0wZYQUrvC8zO5IBG4s1lgHYbtJU7b3jPzSqdhzQbcriDHvOvw58wvDOpR5SrrZlxQyZmmFIWvPkfxibB8Xrbi2KtIPXWDeKXw=&Key-Pair-Id=APKAIUO27P366FGALUMQ","20":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00K.JUMBOXXX.jpg?Expires=1449347936&Signature=ML7r5uYZy61t9J14KitN2+tyzoOM1a0cHDWxVv6c1XCckr/iVwfXz7A7XBHpQSfONMVimY7cOGcWBCOByeOKb0CFsISOxkKdk9Wy0AAfZJEIXNZ0u0FGrVl0P0oRCBARjdVcNi6rkMwjgAVTa0+NmOVJcke5B4r+SH3hAtpqLD4=&Key-Pair-Id=APKAIUO27P366FGALUMQ","8":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S008.JUMBOXXX.jpg?Expires=1449347936&Signature=Xatp2hOCu3YUD8kmI2lyT9zsXVEPu0H/OSvMcW7EauDiJhFjTFWs7EuTuiRfgCuoqvIThSMPwA3ritLRtRBo/6/33yfyLsg0JEAs+cqdSPSBkEFxsVpQy0ZXHlu4iEn0E8zdqgRirmpJWLG13xNhovqFVdO/KtG2+9vMuYcSVBU=&Key-Pair-Id=APKAIUO27P366FGALUMQ","22":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00M.JUMBOXXX.jpg?Expires=1449347936&Signature=b3uojYRF/f60sY8xyy7p0TvpaR4G/a5kxZuX+qNO6qp8Rq8iGUZYkdjKvnh1gcsam9UFRKVET6RdPfd15qPwhGdhUqMmGhHxpsrfs/rFKOPSRHadDGnXZBWAYHlClOzUFQ3kL0fVBw7K/WwEIrqigKCSS+FoJiT8qCEgFJv2Dww=&Key-Pair-Id=APKAIUO27P366FGALUMQ","1":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S001.JUMBOXXX.jpg?Expires=1449347936&Signature=O9FsR4XF7EM7w13jwb4w/5z/ii9Hd5ED5S+DCs4KkXsdsc/wMEZNK6JdXisixzTAN/gMpA4PdJqK5n6SmQPh3Y1VhSmfY3fPdeaRRDwCV5Bh5PBH3+gIp78445Zf8sj43oZyp2HNEby+VrJf8o+WtBO7+oTBg0gRffAGwCAPe+Q=&Key-Pair-Id=APKAIUO27P366FGALUMQ","24":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00O.JUMBOXXX.jpg?Expires=1449347936&Signature=Ehl5pwNJDcNAV9ftg5qedv3uRgC5AdZZoiQ6o2RGDd+GYjwcJaci20tLVnW2DwsJX32EvAtAhTAlbVCgRfiTSavU3OPZKdI3cwuWHi+LTzPh5pAGWWcdDhAVGsKFpBbFG/V2Xz4YCuqtEH36TtQTw9tthMx9fdu28GTAUvwiKho=&Key-Pair-Id=APKAIUO27P366FGALUMQ","23":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00N.JUMBOXXX.jpg?Expires=1449347936&Signature=A1FG/I6UXh9tMtmL0+VdbI7FxFQjT+nFyVDWC4Xt5GhiKP3lWV/OwgSGeEMNRjNGOH5QM/nABVcEcdIAMvjR5m9b8Iro6/azqluOd58iTL+KpHiGeZq/DKqPzbvUq6gWOLrsO5RUyYfbyoW81OSGkq2A9YBv0Wx+9RNPbVUQHEM=&Key-Pair-Id=APKAIUO27P366FGALUMQ","5":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S005.JUMBOXXX.jpg?Expires=1449347936&Signature=AKoM9+0ZptOM5yjevpYJPQO+dhpSklpd9IhpU5Ms8SRWH3XzK+XtVPZqPdmAzOf+GYCwcXVtP+id8RYOLAqMnr/rtBJg8RLAaQVvVEdCOtyS/rznWLaB+JD73+dQN2CK1Vu6StDD/rbocwjs9PVGVXdnb51ZMPcVXf9q/vp2Ftw=&Key-Pair-Id=APKAIUO27P366FGALUMQ"},"largeImageUrls":{"25":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00P.LXXXXXXX.jpg?Expires=1449347936&Signature=M+4tRVNiRJTNZyIqL8Ht1HuFrh0PEG5I1Bf7YszoumoNgIMPiCVamRRPLdpVDDOgP0Pl4D96Pvtu2e0gmrZ5Y3F28rr4UJgERREj6g4R/wsERV2C1ryV8ilfiZ8RyOeFsKIa7QTW35v6yenB2i20jxw0RAypQPSstkDy/LTiqvY=&Key-Pair-Id=APKAIUO27P366FGALUMQ","21":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00L.LXXXXXXX.jpg?Expires=1449347936&Signature=an5cD8nss9GaWrtPinSn8rJOHmqfoO26QkXX15T5TJTGOVoXecWVaPnPwdZdooVKk41X/lW/V2J1QuqbWRpDAr33bE/sRhN7HsoaBO0MWSTILzDCNKjd/vP0BK8dRwnw10Hid9hF6taBkfGXd8/fzvH2WVdlsFuBvESybu852zE=&Key-Pair-Id=APKAIUO27P366FGALUMQ","9":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S009.LXXXXXXX.jpg?Expires=1449347936&Signature=bHu/G6gKoXnS9UqDYKZDo+x12W2T11BvLXnbbMNod99mQJjRe0STq7xzJD1+gfkvm3OTPNM2g/c36/FV5RF8AW9Y3VYisHWYRLzLkY85zPRba002SIasrm2WzUHogZaiJO29jcBkahdn8q99s6v48ihyJu+LXJZ9i8PEOg5yuoo=&Key-Pair-Id=APKAIUO27P366FGALUMQ","20":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00K.LXXXXXXX.jpg?Expires=1449347936&Signature=ZSFFEZ8+JD+fgKUzoTEtk8wA4w5Vqcyp0I7yYfNFi9icHnOWlYTVhWETzmtgB/htKRpuyYnLxIEvcQBwAOMEIE7EhkrIpMXStY7HEtK2oWZiBr19UN+IDJtzpeygvGEOrDcz1hoV0BqQB7w9DBTlv29zYp5whnJgBt/04Sei1UE=&Key-Pair-Id=APKAIUO27P366FGALUMQ","8":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S008.LXXXXXXX.jpg?Expires=1449347936&Signature=Rdgv7KpdHQycwejC8BJJsKM5lCGm3GCt4qG/ApF8Rlv4akHL4rkkiyBMeDsYpWgi7t9T3thXuLFMk9JvWcKlu1Utd1b787hb90vAvhNAt74EBuUJ9zE9Uc68z4qrP2+a8uB14Ty2w1MRvzL3VUZnUQEqaq5mpGEJRJKxxYOgar4=&Key-Pair-Id=APKAIUO27P366FGALUMQ","22":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00M.LXXXXXXX.jpg?Expires=1449347936&Signature=HiUs3q+0nh2D+vODHMa3VoC3MOzSG3PEF2ZY3I+eeY47m6qt+3oJxWDcDLaNjJ2AcE+DQjOpC0KP021L43hKAcLHSQiY8wsJI1P8KWFtDOpY4wugoApHndW+vySUN9l5R89e+oqoKyPE6lr9H/kl8DFNLb8wv3SxupnPNoVEbyg=&Key-Pair-Id=APKAIUO27P366FGALUMQ","1":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S001.LXXXXXXX.jpg?Expires=1449347936&Signature=W2srCcBTz/UmJUZ3giG/sUDobdNpQrMV21r6dvQyrXkSJ4UaSdnUJlwK5Q8NsytXp7MZLBs13MDXWy/cCZT7wn1K6rgdsROp1tgBXHiud2avW3en8zens5f3yiQmHLfvhWZwmR/KClHKJ6hlDjrxlGhOZTVk6wc1CqM18+OrAkI=&Key-Pair-Id=APKAIUO27P366FGALUMQ","24":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00O.LXXXXXXX.jpg?Expires=1449347936&Signature=XIrxCcLrN3NZ8QCigoEcquOHKdp4ejY605CI/EVDDOLqrB6yn7+ZmZcjmnVNvlv/3ApV28YavPoqFl17uarRJ4S9n0IwVJ0sBVX2WDEDJEiuk7Lm3PtC/SfcrvF+Xj1IQRzgG2GQeT5o5/CQU5eHT9xcYocP1GGigWVBW0MtYzs=&Key-Pair-Id=APKAIUO27P366FGALUMQ","23":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S00N.LXXXXXXX.jpg?Expires=1449347936&Signature=YBwubt9vTjOurrec24OAZOfwLqheqQkoyy9so8qP16QMpg4zDL2ypC2z4MEu30AXCY0IwL/tspSQE1LiwZF6Twe8KegDiYybaxUmRe4xzlvicu0S5DqS9QpQDy8/c7ujvX/bOmvmpRBj0GUVmlzuhzwGX4qVZpQUNnXXm3pQbuo=&Key-Pair-Id=APKAIUO27P366FGALUMQ","5":"https://d1b14unh5d6w7g.cloudfront.net/0818407271.01.S005.LXXXXXXX.jpg?Expires=1449347936&Signature=YdNPwD1BMB5NRpIZ02aZIaLgC2M8bm/IiuxCdHnaQxP3Df4dMSP/4WGMgR4tFGFfCPJ6puDEeGOcK7weRAidmmLNsxXI7J559IzeLJNO7mjQXUwHB7ktar/+YmW80nyNRKcUEfH41xjxzS/5bVtqJNLJU6VojoqDVJVra8w6zrw=&Key-Pair-Id=APKAIUO27P366FGALUMQ"}}
		
		const someInvalidPage = '155'
		const someInvalidBookPages = {"error":{"text":{"key":"PAGE_NOT_AVAILABLE_TEXT"},"title":{"key":"PAGE_NOT_AVAILABLE_TITLE"},"reftag":"rdr_bar_view"}}

		it ('returns valid book pages for a valid page', async () => {
			driver.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).returns({
				bookPages: someBookPages
			})
			
			const bookPages = await sitbClient.goToLitbPage({
				asin: someAsin,
				page: somePage
			})
			expect(bookPages).to.deep.equal(someBookPages)
		})
		
		it ('returns empty book pages for an invalid page', async () => {
			driver.goToLitbPage({
				asin: someAsin,
				page: someInvalidPage
			}).returns({
				bookPages: someInvalidBookPages
			})
			
			const bookPages = await sitbClient.goToLitbPage({
				asin: someAsin,
				page: someInvalidPage
			})
			expect(bookPages).to.deep.equal(someInvalidBookPages)
		})
		
		it ('gracefully fails on timeout', async () => {
			driver.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).returns({
				bookPages: someBookPages,
				delay: 100
			})
			
			const sitbClientWithTimeout = new AmazonSitbClient({
				endpoint,
				timeout: 10
			})
			
			try {
				const bookPages = await sitbClientWithTimeout.goToLitbPage({
					asin: someAsin,
					page: somePage
				})

				// Unexpected success
				assert.ok(false, `goToLitbPage should have timed out, but returned ${JSON.stringify(bookPages)}`)
			} catch (error) {
				expect(error.code).to.equal('timeout')
				expect(error.description).to.not.be.empty
			}
		})
		
		it ('gracefully fails when network is down', async () => {
			const sitbClientWithInvalidEndpoint = new AmazonSitbClient({
				endpoint: invalidEndpoint
			})
			
			try {
				const bookPages = await sitbClientWithInvalidEndpoint.goToLitbPage({
					asin: someAsin,
					page: somePage
				})

				// Unexpected success
				assert.ok(false, `Network should be down, but request returned ${JSON.stringify(bookPages)}`)
			} catch (error) {
				expect(error.code).to.equal('network_down')
				expect(error.description).to.not.be.empty
			}
		})
		
		it ('gracefully fails on protocol error', async () => {
			driver.goToLitbPage({
				asin: someAsin,
				page: somePage
			}).errors()
			
			try {
				const bookPages = await sitbClient.goToLitbPage({
					asin: someAsin,
					page: somePage
				})
	
				// Unexpected success
				assert.ok(false, `Expected protocol error, but request returned ${JSON.stringify(bookPages)}`)
			} catch (error) {
				expect(error.code).to.equal('protocol')
				expect(error.description).to.not.be.empty
			}
		})
	})
	
	describe('getSearchResults', () => {
		const someAsin = '0818407271'
		const somePageNumber = '1'
		const somePageSize = '5'
		const someQuery = 'river'
		const someBookSearchResults = {"error":{"text":{"args":{"LOGIN_RETURN_ARGS":"asin=0818407271&query=river"},"key":"PLEASE_SIGN_IN_TEXT"},"title":{"key":"PLEASE_SIGN_IN_TITLE"},"reftag":"rdr_bar_login"},"cause":"no customer ID","totalResults":87,"results":[[33,"Page 14","... Again Kathy calls without a lot of hesitation. A King or a Queen on the <b>river</b> would be nice. ...","gAACIrUUUogOKxQAAwthcIVREMDnEwmKICxCHug+ou9T9hGBlJzniQ=="],[39,"Page 20","... The <b>river</b> blanked out&mdash;24&mdash;and I doubled up into the 30k range.  Great fold, strange call, weird hand! ...","gAACIrUUUoi1oFi5FKQrnuGY/3wCh7M2rF+UBWpfwOuzy8qr3N4UlA=="],[41,"Page 22","... seem a bit odd with what is knowingly the best hand, but there are a couple of good reasons why. Upside: Avoid going broke on the hand if the board pairs on the <b>river</b> ...","gAACIrUUUojZpTejjU7xmInI6OAooqGmjkHkavavRtz/IXXYBlnrxw=="],[42,"Page 23","... 9% 42,220* Equity 44,350 41,727 41,727 *My opponent calls a 8,000 value bet on the <b>river</b>   So my average chip stack after the all-in move would be 41 ...","gAACIrUUUojfU5O6bXEXg/dVSL5cH4b5jJFClJOH9ib17t6l33UJUw=="],[43,"Page 24","... He calls, shows a set of nines, and we are down to the skill-card. The <b>river</b> is the:   A beautiful card ...","gAACIrUUUoht7cCiMK3bVAFZUu2FPHPNekmghT30h8UCbB1TXHxa2A=="]]}
		
		const someInvalidQuery = 'fkjsdhfjkdshfjkkdsfsdffsfsdfds'
		const someInvalidBookSearchResults = {"totalResults":0}

		it ('returns valid search results for a valid query', async () => {
			driver.getSearchResults({
				asin: someAsin,
				pageNumber: somePageNumber,
				pageSize: somePageSize,
				query: someQuery
			}).returns({
				bookSearchResults: someBookSearchResults
			})
			
			const bookSearchResults = await sitbClient.getSearchResults({
				asin: someAsin,
				pageNumber: somePageNumber,
				pageSize: somePageSize,
				query: someQuery
			})
			expect(bookSearchResults).to.deep.equal(someBookSearchResults)
		})
		
		it ('returns empty search results for an invalid query', async () => {
			driver.getSearchResults({
				asin: someAsin,
				pageNumber: somePageNumber,
				pageSize: somePageSize,
				query: someInvalidQuery
			}).returns({
				bookSearchResults: someInvalidBookSearchResults
			})
			
			const bookSearchResults = await sitbClient.getSearchResults({
				asin: someAsin,
				pageNumber: somePageNumber,
				pageSize: somePageSize,
				query: someInvalidQuery
			})
			expect(bookSearchResults).to.deep.equal(someInvalidBookSearchResults)
		})
		
		it ('gracefully fails on timeout', async () => {
			driver.getSearchResults({
				asin: someAsin,
				pageNumber: somePageNumber,
				pageSize: somePageSize,
				query: someQuery
			}).returns({
				bookSearchResults: someBookSearchResults,
				delay: 100
			})
			
			const sitbClientWithTimeout = new AmazonSitbClient({
				endpoint,
				timeout: 10
			})
			
			try {
				const bookSearchResults = await sitbClientWithTimeout.getSearchResults({
					asin: someAsin,
					pageNumber: somePageNumber,
					pageSize: somePageSize,
					query: someQuery
				})
				
				// Unexpected success
				assert.ok(false, `getSearchResults should have timed out, but returned ${JSON.stringify(bookSearchResults)}`)
			} catch (error) {
				expect(error.code).to.equal('timeout')
				expect(error.description).to.not.be.empty
			}
		})
		
		it ('gracefully fails when network is down', async () => {
			const sitbClientWithInvalidEndpoint = new AmazonSitbClient({
				endpoint: invalidEndpoint
			})
			
			try {
				const bookSearchResults = await sitbClientWithInvalidEndpoint.getSearchResults({
					asin: someAsin,
					pageNumber: somePageNumber,
					pageSize: somePageSize,
					query: someQuery
				})
				
				// Unexpected success
				assert.ok(false, `Network should be down, but request returned ${JSON.stringify(bookSearchResults)}`)
			} catch (error) {
				expect(error.code).to.equal('network_down')
				expect(error.description).to.not.be.empty
			}
		})
		
		it ('gracefully fails on protocol error', async () => {
			driver.getSearchResults({
				asin: someAsin,
				pageNumber: somePageNumber,
				pageSize: somePageSize,
				query: someQuery
			}).errors()
			
			try {
				const bookSearchResult = await sitbClient.getSearchResults({
					asin: someAsin,
					pageNumber: somePageNumber,
					pageSize: somePageSize,
					query: someQuery
				})
	
				// Unexpected success
				assert.ok(false, `Expected protocol error, but request returned ${JSON.stringify(bookSearchResults)}`)
			} catch (error) {
				expect(error.code).to.equal('protocol')
				expect(error.description).to.not.be.empty
			}
		})
	})
	
	describe('goToPage', () => {
		const someAsin = '0439136369'
		const somePage = '16'
		const someToken = 'VZksmIes02Uf3lXwkOGfH5ZwrP5zmZLdq7OU1HuneycSWEcwRJDgYQ=='
		const someAuth = {xMain: 'someXMain', ubidMain: 'someUbidMain'}
		const someBookPages = {"jumboImageUrls":{"35":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00Z.JUMBOXXX.jpg?Expires=1449413625&Signature=O0oHDqQzQtFMzCqYR1YAdNHa7/9YihaZDjDjaT0el+xchIH6+LLZ+hxAK6KThCjn87QDDuSsW4saP7/aUV1lMSi6yVaj3fDJxIbE0of8F5aUKKUy6p0YsjwqU4GrGZCeyIxZrFjSUHHWxCFsK64RMxrqDdmQUtQ9pmMXTwwaVwI=&Key-Pair-Id=APKAIUO27P366FGALUMQ","33":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00X.JUMBOXXX.jpg?Expires=1449413625&Signature=IxiPzNOV+188VwF9bC/xSBdgoTQtW8wb78RLpglbf/xqciCz+cigJ4Ybwad+/g5ekRveVBNM+1kJ1tfABnuEwK2HUxfsLGSEAKYwnkWCHMUBlmQjNaPj2jShCjKz1YC5nrf+XRwuQDrL1ZXmKfq3A70JEQocqkFK8oQYiA/eHK8=&Key-Pair-Id=APKAIUO27P366FGALUMQ","32":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00W.JUMBOXXX.jpg?Expires=1449413625&Signature=IBUKRi6MGsnPg5sT2XKVuEIocD30IcY9SrjBaJM7LzrAQRdIc/JO4SZmq5dZHbKpzpu/YN724823mvwSb+9RURJtGg9k4NkMktSaVzWna2OW5Pb2pJc6C05Lq9otJiI3UhPyXG0LMMpCCSA2FQBoFH3mjZOKtvRXEqncAlmJQUA=&Key-Pair-Id=APKAIUO27P366FGALUMQ","21":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00L.JUMBOXXX.jpg?Expires=1449413625&Signature=MBULKba2gyLBsX80Rmykxb7v5Y5N/9wGgaKUkRfAbmZcTJdHFQBXHMb0wDYbbQUS90Pook3Jas9vHWF5eYH0Om2g4+YzuILKuQZee2wggfPvBM4X9x1lemKeKu6tQvvRyCRlz64TimMPwZgF+KeX+l1Mh/BNkuxyG/UvSbewNUU=&Key-Pair-Id=APKAIUO27P366FGALUMQ","452":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S0CK.JUMBOXXX.jpg?Expires=1449413625&Signature=SjA4rYe0aAD0Ynsxjo9Vc74lNdHSV85tKCwAJL1OjsKSgy1NDjbiI0eQeNgHIcbyirgT1hnQ4P0lJG8Ed5LDXYjHFzaqp7YIImF3oQu/udRxLXrFrD2/zC+iD2Y3rJn7BtbZrHCJmmyJhbvpdsnPpq4wKXMnVWLm8rXUJY6ySas=&Key-Pair-Id=APKAIUO27P366FGALUMQ","26":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00Q.JUMBOXXX.jpg?Expires=1449413625&Signature=Z/2AxNadI/EpCzi6ZdReSZsc8bajebLdYG7ZUlvdOFUzQBwIsOZAwHlr3RjeRwr+uSGoT9409dqTY5n9eHYUKbqLq81QejDfWx6QUVtd977AXCct18Z9HyybzyDavaa7/qBrD9L0fX7aj6HRzSPwfjd0tZmKkoOdqp2FjioELfA=&Key-Pair-Id=APKAIUO27P366FGALUMQ","17":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00H.JUMBOXXX.jpg?Expires=1449413625&Signature=F9+rnnl3FWrgUReDh6OK/OSus5eUA7r7I1ryXAHBlRrHL0sG5Ujxy/yTFf8MOXKTbwLOSRn9vxTwvcHC94J7LVnOd+ulzYd8PUF+ml413rA1AwULw1A62Qb/PgYwgxFR1gimGwdBzJJRS4+7VBvQOGUkXPW3x7STchq9I9Dt64I=&Key-Pair-Id=APKAIUO27P366FGALUMQ","22":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00M.JUMBOXXX.jpg?Expires=1449413625&Signature=VyJ8vxf8BY5YU3QS43znEYB26pq4jKm1exhKYSvRD8orQt1qV2yaz0bKILDMRcO8YJJOKz94TMdcFB1/Qh80hYU3PcLDQCm5LccfZ+VtJYLFfqIc5Y/eXL9CXlw2S1XXy6nF8mj051GouyweQenIOxA3LuoF8EHHtLfTBbzFHGg=&Key-Pair-Id=APKAIUO27P366FGALUMQ","18":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00I.JUMBOXXX.jpg?Expires=1449413625&Signature=R9TEL5DqAYxw6LSoanFkDjfx/YDvHVxco971g3d47LVv5kJ4dulpMLAh6x7HOzprvqYZN9h5vX78bSza2G76UEATSFdLQ9mveRzZvv/ezKZnBUo5YHUolzEqh3PLFyLF1W83LLO6JcwZK9pgdsAUHadZ071ey7iBDUQ6ZmApTX0=&Key-Pair-Id=APKAIUO27P366FGALUMQ","30":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00U.JUMBOXXX.jpg?Expires=1449413625&Signature=KhVdeCDqetCEdCXivpmIM0Ial5pKimEP4sErPeZmWi9R7R/ge8htkpqMoSS/iHcjPI/7lEmZcHs/FYIMlkmkd8Ms0pHHoPLva7pYMsDIJyeg62ySYEQFLbngq4exdi/kWAptGk3KoHBkbqyc8XT2xIW+jqBpvjMtpWfYkFp9iA8=&Key-Pair-Id=APKAIUO27P366FGALUMQ","16":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00G.JUMBOXXX.jpg?Expires=1449413625&Signature=gd1XXGJSiJkKzQVWzAAx0Xy6s1WHOxUSb0ubSi1sme/DkVy1l5MiW6P8rwuXbUtOe+mkA1NXBmzilXOG6LNhtyVZXdBUhM5jrjk2cdVhIbxi/Y4sGb4d+9Wp53IKePSB1fmUBm9+CFvlEQA40SJ8VeOqZaka2zsN4BU+6dVLZUw=&Key-Pair-Id=APKAIUO27P366FGALUMQ","23":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00N.JUMBOXXX.jpg?Expires=1449413625&Signature=QgFrWTZVmsfgT4G4zmuADxP6jLjUcj8jO67iOe3hrlpxaWVSpohA/z5N6kCNH18tZbFq6K7aYvBAmUXMNV4GFQB8TIq8sqLC9xw1Esqv2aEOV9+a2wyeiCS/VumjbgyjLNfkQYyk/fRw3iJ7ErZg+fpa/O/8ywh77QLAgsgAb4M=&Key-Pair-Id=APKAIUO27P366FGALUMQ","29":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00T.JUMBOXXX.jpg?Expires=1449413625&Signature=X9h0PG4RgUtx03MbUE8Cxx3HmkNcAvPSujtYB15ZA8Hw2D/FP1tCT59TZRwxq+VCO4UfdW8DP2yMlGGTG4PzZEeGrRVDGi/gI15BMIFa3pVH4r6VitRiM0JRZFEtGN9U4W1G2h8rkoxxAO9er619KcM2m6+g4LpmkPbIUmHWI6I=&Key-Pair-Id=APKAIUO27P366FGALUMQ","25":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00P.JUMBOXXX.jpg?Expires=1449413625&Signature=IA2e5H2EVmTakxgjgjQ1uSdYm5d1j2ZVmA2YQmw0vHhWGvXpGkspjxwuA6jKScRUjKtFW6n8QttaJ5WhsD2Y6KZZXbXmgWtvf3l7LO/no4QHi6AAVGw7FvnViQ/9NigDIK/R0hEPvbIot0LB7wTlQzyKQnLU/BFwquRp4yCqF1I=&Key-Pair-Id=APKAIUO27P366FGALUMQ","27":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00R.JUMBOXXX.jpg?Expires=1449413625&Signature=eOhv4idX9gZ6mjDR7HkPVX6x1ud1dZu6ijnn5dyUVH/dBd/gTzBAV9qm4y6bf0UWn7EX9QEMY4xb9SOV26HQx3fXstvbt1WTjnHebWbMW7m0ZqR0BADZd5WMPXsgD/Xi2CZAjPP8lGZpOd2eud5Z5SXzJ8ASL6Vq3LZzugmQHF0=&Key-Pair-Id=APKAIUO27P366FGALUMQ","28":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00S.JUMBOXXX.jpg?Expires=1449413625&Signature=cEd42Rw7j9yeto2jSVxsWLF1ZnlgGQTXHQs1+CRTnKZ+YphB4BMF8mfppW5PF5qg0sqLXNhbcPFOPFR4kQcK7irYdjDkZgiu6mUHROQC6TmcbYwvxI/jv+tPmq900HmK+8ehOflDoAouGOIkCR+/JuWM1g4RokcPRjNT630HpLE=&Key-Pair-Id=APKAIUO27P366FGALUMQ","20":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00K.JUMBOXXX.jpg?Expires=1449413625&Signature=edVyZVGNSCg+nGqcx8bXzlKPRZRNE5GmqSJ0USFuVzkqQmcvKaPf06b/2c9bpDZAHAuLLrUa8+w32HllfnNC5gqn2XU712sAyQr8Gb/YmAH2YiZWM6U7OVG5gkwkRn9x4oZY5e52ChmONQs+VbzwdurgmDXy7JMY5p3+azns8gQ=&Key-Pair-Id=APKAIUO27P366FGALUMQ","34":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00Y.JUMBOXXX.jpg?Expires=1449413625&Signature=fGyAb5j5a2DYBeNKxIJj3MVHQZRCWhGEOe7uS7YQvE7k4nRUgZ7Rqn4Xe6u6W6zLzxq7yDPkrRGcnYsYqUj76+ZWqgJViW7Vsn7TVEpoFytUzPqHk3m3DqcD+Lau/zAS1Ql+wzPZ676FZmvUzju0XjOrWF6C+niYtA8qrIlWfh0=&Key-Pair-Id=APKAIUO27P366FGALUMQ","24":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00O.JUMBOXXX.jpg?Expires=1449413625&Signature=E7mC8E4R9sK0yX8FHun5Lr3afqRTPbf3KzByJg7At7l2fV7GefhqOxtHxfVdW16LZkB/HBZm6FUNagmVLF7nE+B3Yw6/seb5nlP+ds/Bi1cHMka3Ia4jQHlLGs7m97xR85Xxm3YnbTUI2nKG2FGJLZKFPOdmulP/sAWU1NSTOOI=&Key-Pair-Id=APKAIUO27P366FGALUMQ","19":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00J.JUMBOXXX.jpg?Expires=1449413625&Signature=LK0zE0Mxvd6AG4AMV0iu2iEXs09HobXBw/esdWvD1Fvp+FZJ5s/FLFoS1paKBc+z97pzOSyCvWqJwS7eCaPHViZydbiEqZsxHbFdQ1Ju5reCOnnc3Fpkh0hxSeOuZwFSF6b5rFYAFTpA2XS2e2oZLVutlZqCXcFJhu7RvpLMxX8=&Key-Pair-Id=APKAIUO27P366FGALUMQ","31":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00V.JUMBOXXX.jpg?Expires=1449413625&Signature=axzGjjwwgVQx9+GeejcCYaM88EdULfakdw9yotqlJC75M/7+hqAEABpwXq7wZHW8KutIrd+7h/8cB+8c87xpv5qRcA4VQZyGgn1VABo1Sg8tA/Wpp/VCgJ5z7wrZubKM5sbu0atM6+ymCU6bCfYtIL2hSh2GlaFNzvubx+sUGNk=&Key-Pair-Id=APKAIUO27P366FGALUMQ"},"largeImageUrls":{"35":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00Z.LXXXXXXX.jpg?Expires=1449413625&Signature=dG7Z8pqMWt/iTjdQ2ep8m0H+pcABNk7ErKZoGlo7J+2+1y7s0E72jFw5T98U0MsxLjeXIZmmRAAaMVECf8o21xsHOVLnhfj8xGFy3Hs+CoxceUiTPDof7E7hIYkT4Fk7tNrSTmP7D29u+5FKIuWX853PRvmueCYtvP/zxL7QnLA=&Key-Pair-Id=APKAIUO27P366FGALUMQ","33":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00X.LXXXXXXX.jpg?Expires=1449413625&Signature=K8/ErqZ18JgAyEpkMxrfaQuOjS6V6y9Yx8M0PpiRmQeNC53jn+XI7Ed4QhZ3IXshd4XbJwS33ryq6wkl4NUkKLOK0UCyo+ohg5iwlgLUCBru/Rdr49NF95yvfjd8NY5gycPIj3u0Q1Jr8MjGMnKzxRIfaGubeRiI+lsf3QqEpiE=&Key-Pair-Id=APKAIUO27P366FGALUMQ","32":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00W.LXXXXXXX.jpg?Expires=1449413625&Signature=QqA6ZRkaEdukJ2gpg1tzWWhFdvsqbMLsR1lJVa56GaxroYbdrUBU9vR6jJsJOb48NlddZbNT5bFfAQxvBdhnEnc48IbtxCmDE+w7xLjQnXqFUCGLlqFZgV18Msj1IcRjMIlfWxQaiz0icsI9Ke7KytbNedTaLBbId+54Z1pERsk=&Key-Pair-Id=APKAIUO27P366FGALUMQ","21":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00L.LXXXXXXX.jpg?Expires=1449413625&Signature=PNXD5CmyLr1xfL0WiYU37DEp7+S5Ta9Yi3ozvcLGHHHJNg0Gyc7mQB9St/TuSOzEKIN6UVa3rmpMujdmYA5uyK3wScwo5ttQRKZ5/DxSmX/yzvhDvEEi50GsdX46uYEJSpNNbxhkcA4J/ZFOpX2tjWXfGzu2DJYhmWYW5aLTPSQ=&Key-Pair-Id=APKAIUO27P366FGALUMQ","452":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S0CK.LXXXXXXX.jpg?Expires=1449413625&Signature=GecLpLiWzsIuKEHEIgDGWJUxz0tgSeXb+n904xx8afLaT9tiuBzVsyojWo+LYxZJ8U+dRaGzxyVO9Nb2IPUc1MLTwHRLcfwuimtxXEzGwTAWQBFmaZcxbtKFUdxtpYo9FjJp2jtG4ndIAAQOGb1TGwWQkqpl67NSlTBA/vMFnv4=&Key-Pair-Id=APKAIUO27P366FGALUMQ","26":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00Q.LXXXXXXX.jpg?Expires=1449413625&Signature=KSlN4D1zEHVedPGA5AGhekF9HOjZ+VbqYTO8I+/RZ3YVXexmFuP1jF/ZoB4pqZ1nqyqLJi31NkbJBliRsjRZTF2L1/KdpPrj5Aq9sA9LQ6RvWkhRtPu8bGcmo0vpV2RV2BQ9femKgLg6Mj9khXXFoXTYnfvLKIFtU2CiHZ/mRQs=&Key-Pair-Id=APKAIUO27P366FGALUMQ","17":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00H.LXXXXXXX.jpg?Expires=1449413625&Signature=dt3iIysNcY1Ko0V+oVi8ylXQ30BzU4bKQEkCCVqOvGZw1FawyvPozxVG+Qde/fjNMXldSxgtESYdtCdzNnHBraUaYoe2o6VH4udFblsmey3uP6JHuQuVp+HpsVNS56vqeq668G7LK1JC+UezHdGvV3bdmCJ/vPOwalPK977TfQM=&Key-Pair-Id=APKAIUO27P366FGALUMQ","22":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00M.LXXXXXXX.jpg?Expires=1449413625&Signature=NTEyoQuOPXYlYwKNkO5rWRGRLOxuWTlU+g6lCcyE14h1vOokYLZ0kaSuItgX8pj9RkvW/aotIRhXmWt/WZwCsmRH1HniUeJQNchlwGTwZQhh5LLeYHHms/4m3BmLvXb7dWjUQX9yrH60E8nkoyS+1TLS4kZlCkJj4hOGAWQBcJ8=&Key-Pair-Id=APKAIUO27P366FGALUMQ","18":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00I.LXXXXXXX.jpg?Expires=1449413625&Signature=getVxxdCaScAAZk5y25MSA8TxT4VGiW/4b2JzGmZnHsvkc6uy0vmZ/J4297+uBI6j2GhBvTQXHuW5FO1HY6PEnC2SzYe8d+RzQldYbAyTz/pdi+qFAqDUgKpNRtDZB6125zJlxfMPYQBSJwjhMmIKo2pgT2S75s+2irNVPgJ5iQ=&Key-Pair-Id=APKAIUO27P366FGALUMQ","30":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00U.LXXXXXXX.jpg?Expires=1449413625&Signature=NF1eZfc94GQvRCAO9qw0Zg32Lh+cu8+5byNjt+2bgfyL0+MObusOgYDmECODlXH6VgK5UPqgsME47bmpKh8KgUY96PyB3zIJYuqibsYJw4AQTRrtQf2DEBRneTet1i7SQuOnL46U7O7M19tOROJTNv/TeOLACASKSW1TxEpneN0=&Key-Pair-Id=APKAIUO27P366FGALUMQ","16":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00G.LXXXXXXX.jpg?Expires=1449413625&Signature=OjavnZjiu1bNag33gbOx9jrdsTWcm3/GgbHHRKNJ8YEg98Llzplf4cx9ay5H5wiakueIgUH+gah7z7qmImW1VN6FzZ3oQLQwD8Sa56vqb50bi5/hZHrDTiJSrt1M0PCA9x0l7+nSLlBmF2e/ajmzKdOg047IlrjzVgCvQcouJx8=&Key-Pair-Id=APKAIUO27P366FGALUMQ","23":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00N.LXXXXXXX.jpg?Expires=1449413625&Signature=TWb3HD3s5y/nZNGaQqbgOaQUosKEmme0YNKhGcUyQQLbWsE0BVdfvCIFj74aux0vb3fYxT95kSNmO9I05ekfTiyfWSbBouZJJDl17aFLloQyYAHvgcapGBo4mNUMHZ5u6JbX9/cZBiWREywq6ab81+qtXRA56MMWjBaiWMmdkrY=&Key-Pair-Id=APKAIUO27P366FGALUMQ","29":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00T.LXXXXXXX.jpg?Expires=1449413625&Signature=KMT6pCPVgG6U9mvGtyBVnYUd+7m43rANd7VCVOw6ExRG8rTGfePiBX5x27FFYX/igIUbzezfwlyOddqu1ugXM41QJOkQW884gOLaPqRKCnCTL79RYmLniOxz76cydtc6JWmUELr4ptdKbKBH6uRElkafNXcSGevsAmZUFn/AcuA=&Key-Pair-Id=APKAIUO27P366FGALUMQ","25":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00P.LXXXXXXX.jpg?Expires=1449413625&Signature=FM2etbY7TzTnVNDOLBAtGqEyC/NnHHlAGnHZ/ZLVmIW5b25j0WefXPccnnUdFKkyI4zLHZsQZCP0RpWHa6x3rZNRCIEH969OolbIJq8qhiq+FIRUCb8hWa2eU28dTRXxA94WXnfpdnyOCWCqfrX8OAtem+g1/mz2MPEBIoiUyq8=&Key-Pair-Id=APKAIUO27P366FGALUMQ","27":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00R.LXXXXXXX.jpg?Expires=1449413625&Signature=Ajh3ggIag8bF7pczALiT1/9Nc1bUPBHBu2j2eIy/s5O8P6pnz5hy2HKc/o44WKr/r302ybR8KH4UMgVcBj63tHAc5sAEprZZsgU0qMamMYkbgblwvqFFj2lBnir0cOLmtfmiQ6G4E23jAiezS5po8sgv3ugYQCQQ6uhMp3Z5AVc=&Key-Pair-Id=APKAIUO27P366FGALUMQ","28":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00S.LXXXXXXX.jpg?Expires=1449413625&Signature=hSRarv3Dl5ThAmqix9R2tQMBeF54b7Lsq+X+L6hwpiDiTdd4E7V9Aan7/Cl90iCPja9puuCJYvyl7FZpTiUKXmP+Dr9LfNOE+we5DxXxHH7WPQ6ceU3/+HL841bGfLgZp/eHeO1fX3N9p6D1JKjlHpYFGLsplyHhNaviyBNCUk0=&Key-Pair-Id=APKAIUO27P366FGALUMQ","20":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00K.LXXXXXXX.jpg?Expires=1449413625&Signature=QjXN6jDKCP6ks81ckZsOjeyk9D7OzE1P8zd1JvCIlWgCJ5h+T1VjkS5QdMlbp/ZHZbuuiSKEp5udX5dagaVZ34tJbBYubkj1JMMRl2BWUs/0i6MrAKxr8rAqniaOMmP/IobWS8WuqaTBTVyNPg+83F5Z+nzBm0Ce4LnEt/5fzHo=&Key-Pair-Id=APKAIUO27P366FGALUMQ","34":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00Y.LXXXXXXX.jpg?Expires=1449413625&Signature=dxpmn7OOyrycWTisQrQXv5M502ULDuH1ljgAdTtny1QLqDfzcXzHy+K8wXuBOuOo3iCxBIeFSIXxkYg7PnXKLazIN1CMr+h/FSrjBAG2NqfFzOBQi2bv/XEpvogKZHbdmsEKgXfQ85X75aS/igSRMiT/nrtKchjJKQ9i/DhLsSk=&Key-Pair-Id=APKAIUO27P366FGALUMQ","24":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00O.LXXXXXXX.jpg?Expires=1449413625&Signature=C7yokp5UMEaKQjMHlNf/c4kZIXhr+XSswijdRTgVLEPvaSVRYA7Muc/593buyH1/+JB6rC8LuOeSfZpkjEeoN8E7yAcv1KYIngpOO4SMYhzicqbV6obMsahNj+GTlH1cY5zly9Dhq2XZv+5NOE23HNqs5PvaxJu1pOY/zjPsXTY=&Key-Pair-Id=APKAIUO27P366FGALUMQ","19":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00J.LXXXXXXX.jpg?Expires=1449413625&Signature=ABoZLfQSZB8j/SwOqaVQZfV8019LSKmw/zhIA6wQBbOXPeWcafYNy1W44cxVHbZTmgn7yxNAx6O1Q0TyJ3aRAzTU+FXIS7nlPdMaq8StunoopDqR8UcsmgLcYfOCayJKZqHVkK0POoE8GkeyljWGU6B2j7po0bx8vays2HA5qwk=&Key-Pair-Id=APKAIUO27P366FGALUMQ","31":"https://d1b14unh5d6w7g.cloudfront.net/0439136369.01.S00V.LXXXXXXX.jpg?Expires=1449413625&Signature=RiGIOKRAtnFDSFJI21YpswCv1zD1kQtLH2kfBcI+U586PVmLRm8bNv+g3LpAcfymPWHJUMwapKGklSTzxXrW6I+fCL3ksaB3pw1QR8U23IkVusiXMlb2+upSH1jUOL4ayTEktc8rITKXP9C0qsS0Tmy3Wd5szsrXqyUT2Ap3vMg=&Key-Pair-Id=APKAIUO27P366FGALUMQ"}}
		
		const someInvalidToken = 'someInvalidToken'
		const someInvalidBookPages = {"error":{"text":{"key":"PAGE_NOT_AVAILABLE_TEXT"},"title":{"key":"PAGE_NOT_AVAILABLE_TITLE"},"reftag":"rdr_bar_view"},"cause":"suppressed page"}

		it ('returns valid book pages for a valid token', async () => {
			driver.goToPage({
				asin: someAsin,
				page: somePage,
				token: someToken,
				auth: someAuth
			}).returns({
				bookPages: someBookPages
			})
			
			const bookPages = await sitbClient.goToPage({
				asin: someAsin,
				page: somePage,
				token: someToken,
				auth: someAuth
			})
			expect(bookPages).to.deep.equal(someBookPages)
		})
		
		it ('returns empty book pages for an invalid token', async () => {
			driver.goToPage({
				asin: someAsin,
				page: somePage,
				token: someInvalidToken,
				auth: someAuth
			}).returns({
				bookPages: someInvalidBookPages
			})
			
			const bookPages = await sitbClient.goToPage({
				asin: someAsin,
				page: somePage,
				token: someInvalidToken,
				auth: someAuth
			})
			expect(bookPages).to.deep.equal(someInvalidBookPages)
		})
		
		it ('gracefully fails on timeout', async () => {
			driver.goToPage({
				asin: someAsin,
				page: somePage,
				token: someToken,
				auth: someAuth
			}).returns({
				bookPages: someBookPages,
				delay: 100
			})
			
			const sitbClientWithTimeout = new AmazonSitbClient({
				endpoint,
				timeout: 10
			})
			
			try {
				const bookPages = await sitbClientWithTimeout.goToPage({
					asin: someAsin,
					page: somePage,
					token: someToken,
					auth: someAuth
				})
				
				// Unexpected success
				assert.ok(false, `goToPage should have timed out, but returned ${JSON.stringify(bookPages)}`)
			} catch (error) {
				expect(error.code).to.equal('timeout')
				expect(error.description).to.not.be.empty
			}
		})
		
		it ('gracefully fails when network is down', async () => {
			const sitbClientWithInvalidEndpoint = new AmazonSitbClient({
				endpoint: invalidEndpoint
			})
			
			try {
				const bookPages = await sitbClientWithInvalidEndpoint.goToPage({
					asin: someAsin,
					page: somePage,
					token: someToken,
					auth: someAuth
				})
	
				// Unexpected success
				assert.ok(false, `Network should be down, but request returned ${JSON.stringify(bookPages)}`)
			} catch (error) {
				expect(error.code).to.equal('network_down')
				expect(error.description).to.not.be.empty
			}
		})
		
		it ('gracefully fails on protocol error', async () => {
			driver.goToPage({
				asin: someAsin,
				page: somePage,
				token: someToken,
				auth: someAuth
			}).errors()
			
			try {
				const bookPages = await sitbClient.goToPage({
					asin: someAsin,
					page: somePage,
					token: someToken,
					auth: someAuth
				})
				
				// Unexpected success
				assert.ok(false, `Expected protocol error, but request returned ${JSON.stringify(bookPages)}`)
			} catch (error) {
				expect(error.code).to.equal('protocol')
				expect(error.description).to.not.be.empty
			}
		})
	})
})
