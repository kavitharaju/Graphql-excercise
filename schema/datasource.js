const { RESTDataSource } = require('apollo-datasource-rest');
const { SQLDataSource } = require("datasource-sql");
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

const MINUTE = 60;

class CatalogNext extends SQLDataSource {

  queryDB(query){
    return query.then(function(rows){
            return rows;
        })
  }

  async getAllUsers() {
    const qry = this.knex
      .select("*")
      .from("users")
      .cache(MINUTE)
    const res = await this.queryDB(qry)
    return camelcaseKeys(res, { deep: true })
  }

  async getAllRepos() {
    const qry = this.knex
      .select("*")
      .from("repositories")
      .cache(MINUTE)
    const res = await this.queryDB(qry)
    return camelcaseKeys(res, { deep: true })
  }

  async getAllCatalogs() {
    const qry = this.knex
      .select("*")
      .from("catalogs")
      .cache(MINUTE)
    const res = await this.queryDB(qry)
    return camelcaseKeys(res, { deep: true })
   }

   async getUserById(id) {
    const qry = this.knex
      .select('*')
      .from("users")
      .where({"id" : id})
      .first()
      .cache(MINUTE)
    const res = await this.queryDB(qry)
    return camelcaseKeys(res, { deep: true })
   }

   async getRepoById(id) {
    const qry = this.knex
      .select("*")
      .from('repositories')
      .where({"id" : id})
      .first()
      .cache(MINUTE)
    const res = await this.queryDB(qry)
    return camelcaseKeys(res, { deep: true })
   }

}
module.exports.VachanAPI = VachanAPI
module.exports.CatalogNext = CatalogNext

