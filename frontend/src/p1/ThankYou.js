/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { A } from '../components/link'
import { TrackPageViews } from '../TrackPageViews'
import { ButtonsContainer } from '../components/buttons-container'
import { Layout } from '../components/layout'

export const ThankYou = () => (
  <Layout>
    <TrackPageViews />
    <H1>
      <Trans>Thank you for reporting</Trans>
    </H1>
    <P>
      <Trans>
        The{' '}
        <A href="http://www.rcmp-grc.gc.ca/en/the-national-cybercrime-coordination-unit-nc3">
          RCMP&apos;s National Cybercrime Coordination Unit
        </A>{' '}
        will assess the information and combine it with other reports to help
        police catch scammers.
      </Trans>
    </P>
    <P>
      <Trans>
        Your reference number is <strong>#NC300234234</strong>. Keep this number
        for your records or to add more information later.
      </Trans>
    </P>
    <ButtonsContainer buttonLink={true} cancel={false} route="/p1/scaminfo" />
  </Layout>
)
