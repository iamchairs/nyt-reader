var NYTReader = require('./index');
var toMarkdown = require('./markdown');
var reader = new NYTReader();

var sampleDom = '<p>test text node <a href="http://google.com"><p>this whole 2 par is link</p><p>im serious</p></a></p>';

var xmldom = new require('xmldom');
DOMParser = new xmldom.DOMParser({
   errorHandler: {
      warning: function() {/* Ignore */},
      error: function() {/* Ignore */}
   }
});
var dom = DOMParser.parseFromString(sampleDom);

reader.read('http://www.nytimes.com/2015/11/01/world/middleeast/russian-plane-crashes-in-egypt-sinai-peninsula.html?hp&action=click&pgtype=Homepage&module=first-column-region&region=top-news&WT.nav=top-news');