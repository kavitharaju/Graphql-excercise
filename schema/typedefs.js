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

  type User {
    fullName: String
    email: String
  }

  type Repo {
    name: String
    htmlUrl: String
    language: String
    description: String
  }

  type Catalog {
    name: String
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
    searchLanguagesByLanguageCode(searchPhrase: String): [Language]
    allUsers: [User]
    allRepos: [Repo]
    allCatalogs: [Catalog]
  }


  # Mutations
  type Mutation {
	  addLanguage(lang: LanguageCreate): Language
  }

`;

module.exports.typeDefs = typeDefs
