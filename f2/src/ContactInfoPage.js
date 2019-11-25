/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Steps } from './components/stepper'
import { TrackPageViews } from './TrackPageViews'
import { ContactInfoForm } from './forms/ContactInfoForm'
import { Layout } from './components/layout'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'

export const ContactInfoPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />
        <Stack spacing={10} shouldWrapChildren>
          <BackButton route="/impact">
            <Trans id="contactinfoPage.backButton" />
          </BackButton>

          <Stack spacing={4}>
            <Steps activeStep={5} totalSteps={6} />
            <H1>
              <Trans id="contactinfoPage.title" />
            </H1>
          </Stack>

          <P>
            <Trans id="contactinfoPage.intro" />
          </P>

          <ContactInfoForm
            onSubmit={(client, data) => {
              client.writeData({ data: { contactInfo: JSON.stringify(data) } })
              history.push('/confirmation')
            }}
          />
        </Stack>
      </Layout>
    )}
  />
)
