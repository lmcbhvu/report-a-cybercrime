import React from 'react'
import { H3 } from './utils/headers'
import { Query } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { GET_STATS_QUERY } from './utils/queriesAndMutations'

export const Stats = () => (
  <Query query={GET_STATS_QUERY} errorPolicy="all">
    {({ loading, error, data }) => {
      if (loading) return ''
      if (error)
        return (
          <P color="crimson" fontWeight="bolder">
            Error! ${error.message}
          </P>
        )

      let { stats } = data
      return (
        <H3>
          <Trans>
            You are the {stats ? stats.reportCount : ''}th person to use this
            tool to share a cybercrime story.
          </Trans>
        </H3>
      )
    }}
  </Query>
)
