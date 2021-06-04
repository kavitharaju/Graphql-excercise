const { RESTDataSource } = require('apollo-datasource-rest');
const camelcaseKeys = require('camelcase-keys');

class VachanAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://api.vachanengine.org/';
  }

  async getAllLanguages() {
    // Send a GET request to the specified endpoint
    let langs = await this.get('v2/languages');
    for (var i = langs.length - 1; i >= 0; i--) {
	    for (const [key, value] of Object.entries(langs[i].metaData)) {
		  langs[i][key] = value;
		}
    }
    return camelcaseKeys(langs, { deep: true })
  }

  async searchLanguages(query) {
  	let langs = await this.get(`v2/languages?search_word=${query}`)
    for (var i = langs.length - 1; i >= 0; i--) {
	    for (const [key, value] of Object.entries(langs[i].metaData)) {
		  langs[i][key] = value;
		}
    }
  	return camelcaseKeys(langs, { deep: true })
  }

  async searchLanguagesByLanguageCode(query) {
    let langs = await this.get(`v2/languages?language_code=${query}`)
    for (var i = langs.length - 1; i >= 0; i--) {
      for (const [key, value] of Object.entries(langs[i].metaData)) {
      langs[i][key] = value;
    }
    }
    return camelcaseKeys(langs, { deep: true })
  }  

  // async addLanguage
}

module.exports.VachanAPI = VachanAPI
