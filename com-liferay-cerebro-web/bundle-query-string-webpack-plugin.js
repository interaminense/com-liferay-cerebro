const DEFINE_QUERY_PARAMS = `
var queryParams = '';

if (window.cerebroConstants && window.cerebroConstants.locale) {
	queryParams = '?languageId=' + encodeURIComponent(window.cerebroConstants.locale);
}
`;

function BundleQueryStringPlugin() {}

BundleQueryStringPlugin.prototype.apply = function(compiler) {
	compiler.plugin('compilation', function(compilation) {
		compilation.mainTemplate.plugin('jsonp-script', function(result) {
			return DEFINE_QUERY_PARAMS + result.replace(/(script\.src.*);/g, '$1 + queryParams;');
		});
	});
}

module.exports = BundleQueryStringPlugin;