import gql from 'graphql-tag'

export const GET_LANGUAGE_QUERY = gql`
  query GetLanguage {
    language @client
  }
`
export const FLAGGINGS_WITHIN = gql`
  query($identifier: String!, $startDate: DateTime!, $endDate: DateTime!) {
    stats {
      flaggingsWithin(
        identifier: $identifier
        startDate: $startDate
        endDate: $endDate
      ) {
        identifier
        summary {
          date
          total
        }
      }
    }
  }
`

export const GET_STATS_QUERY = gql`
  query GetStats {
    stats {
      reportCount
    }
  }
`

export const FLAG_IDENTIFIER_MUTATION = gql`
  mutation flagIdentifier($identifier: String) {
    flagIdentifier(identifier: $identifier) {
      identifier
    }
  }
`
