/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { ScamInfoForm } from './forms/ScamInfoForm'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/suspectinfoquestion')
}

export const ScamInfoPage = () => (
  <CenterContent>
    <H1>
      <Trans>Describe the scam</Trans>
    </H1>
    <P>
      Getting an understanding of how the scam took place could help link your
      report to other similar reports and build a stronger case for an
      investigation.
    </P>
    <TrackPageViews />
    <ScamInfoForm onSubmit={submitAndNavigate} />
  </CenterContent>
)
