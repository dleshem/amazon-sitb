# amazon-sitb

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

JavaScript client for Amazon's private search-inside-the-book API.

Implementation relies on an undocumented Amazon API and may break without notice. The code is provided for educational purposes only. Actual usage of this library is strongly discouraged, and may violate Amazon's terms of service. 

### Usage
Install the library with `npm install amazon-sitb`

```javascript
import {AmazonSitbClient} from 'amazon-sitb';

const sitb = new AmazonSitbClient();

const bookData = await sitb.getBookData({
  asin: '0439136369' // Harry Potter and the Prisoner of Azkaban
});

console.log(`${bookData.title} (${bookData.numPages} pages, ${bookData.sitbAsin})`);
// <- Harry Potter and the Prisoner of Azkaban (453 pages, 0439136369)

console.log(`Got ${bookData.litbPages.length} Litb pages: ${bookData.litbPages}`);
// <- Got 28 Litb pages: 1,6,9,10,11,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,452

const bookSearchResults = await sitb.getSearchResults({
  asin: bookData.sitbAsin,
  pageNumber: '1',
  pageSize: '10000',
  query: 'harry'
});

console.log(`Got ${bookSearchResults.totalResults} search results`);
// <- Got 48 search results
```

[downloads-image]: https://img.shields.io/npm/dm/amazon-sitb.svg

[npm-url]: https://npmjs.org/package/amazon-sitb
[npm-image]: https://img.shields.io/npm/v/amazon-sitb.svg
