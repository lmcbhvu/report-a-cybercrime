/**@jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1, H2, H3 } from './components/header'
import { P } from './components/paragraph'
import { A } from './components/link'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
export const ThankYou = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 fontSize={[5, null, 6]}>
      <Trans>Thank you!</Trans>
    </H1>

    <P>
      <Trans>Your report has been submitted</Trans>
    </P>
    <H2>
      <Trans>What happens next?</Trans>
    </H2>
    <P>
      <Trans>
        If your complaint becomes an investigation, an officer will be in touch
      </Trans>
    </P>
    <H3>
      <Trans>Helpful Links</Trans>
    </H3>
    <P fontSize={[4, null, 5]}>
      <Trans>
        <strong>Your report number is ###-###</strong>
      </Trans>
    </P>
    <P>
      <Trans>
        The RCMP has recieved the report and will analyze the information you
        submitted
      </Trans>
    </P>
    <P>
      <Trans>
        If your complaint becomes an investigation, a police officer will be in
        touch
      </Trans>
    </P>
    <H2 fontSize={[4, null, 5]}>
      <Trans>You may also want to contact the following other services:</Trans>
    </H2>
    <P>Description of how these links can help</P>
    <A href="https://www.consumer.equifax.ca/personal/">Equifax</A>
    <br /> <br />
    <A href="https://www.transunion.ca/">TransUnion</A>
  </CenterContent>
)
