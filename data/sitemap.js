const baseUrl = 'https://dangibbons.io';

function findUrls() {

	return [
		'/',
		'/projects',
		'/playground',
		'/blog',
		'/blog/BP_2019_10_26_00',
		'/blog/BP_2019_11_01_00'
	]

}

async function getUrls() {

	var urls = findUrls();
	var sitemap = [];
	var date = new Date().toISOString();

	urls.forEach( (url, index) => {
		sitemap[index] = {
			url: url,
			lastMod: date,
			changeFreq: 'weekly'
		}
	});

	return await sitemap;

}

module.exports.baseUrl = baseUrl;
module.exports.getUrls = getUrls;
