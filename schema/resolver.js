
langs = [
{"name": "sample name", "code": "SMN"}
]


const resolvers = {
	Query: {
		allLanguages(_, args, {dataSources}) {
			// console.log(args)
			// console.log(dataSources)
			return dataSources.vachanAPI.getAllLanguages()
		},
		searchLanguages(_, { searchPhrase }, { dataSources}) {
			return dataSources.vachanAPI.searchLanguages(searchPhrase)
		},
		searchLanguagesByLanguageCode(_, { searchPhrase }, { dataSources}) {
			return dataSources.vachanAPI.searchLanguagesByLanguageCode(searchPhrase)
		},
		// languages: () => langs

		allUsers(_, args, {dataSources}){
			return dataSources.catalogNext.getAllUsers();
		},
		allRepos(_, args, {dataSources}){
			return dataSources.catalogNext.getAllRepos();
		},
		allCatalogs(_, args, {dataSources}){
			return dataSources.catalogNext.getAllCatalogs();
		}
	},
	Mutation: {
		addLanguage(parent, args){
			let newLang = args['lang']
			const data = JSON.stringify(newLang)
			const options = {
			  hostname: 'api.vachanengine.org',
			  // port: 443,
			  path: '/v2/languages',
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			    'Content-Length': data.length
			  }
			}
			const req = https.request(options, res => {
			  console.log(`statusCode: ${res.statusCode}`)

			  newLang = res.json()['data']
			})

			req.on('error', error => {
			  console.error(error)
			})

			req.end()
			return newLang

		}
	}
}

module.exports.resolvers = resolvers
