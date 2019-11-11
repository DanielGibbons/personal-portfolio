const baseUrl = 'https://dangibbons.io';

async function getUrls() {

	return await [
		{
			url: '/',
			lastMod: new Date().toISOString(),
			changeFreq: 'weekly'
		},
		{
			url: '/projects',
			lastMod: new Date().toISOString(),
			changeFreq: 'weekly'
		},
		{
			url: '/playground',
			lastMod: new Date().toISOString(),
			changeFreq: 'weekly'
		},
		{
			url: '/blog',
			lastMod: new Date().toISOString(),
			changeFreq: 'weekly'
		},
		{
			url: '/blog/BP_2019_10_26_00',
			lastMod: new Date().toISOString(),
			changeFreq: 'weekly'
		},
		{
			url: '/blog/BP_2019_11_01_00',
			lastMod: new Date().toISOString(),
			changeFreq: 'weekly'
		}
	];

}

module.exports.baseUrl = baseUrl;
module.exports.getUrls = getUrls;
