const { gql } = require('apollo-server');

const typeDefs = gql`

  type Language {
    language: String!
    code: String!
    region: String
    suppressScript: String
    scriptDirection: String
    description: String
  }

  #enum Direction{
  #	left-to-right
  #	right-to-left
  #}

  input LanguageCreate {
  	name: String!
  	code: String!
  	scriptDirection: String
  }

  # Queries
  type Query {
  	allLanguages: [Language]
    searchLanguages(searchPhrase: String): [Language]
  }


  # Mutations
  type Mutation {
	  addLanguage(lang: LanguageCreate): Language
  }

`;

module.exports.typeDefs = typeDefs
