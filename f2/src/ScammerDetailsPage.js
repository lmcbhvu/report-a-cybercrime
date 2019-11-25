/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { Steps } from './components/stepper'
import { TrackPageViews } from './TrackPageViews'
import { ScammerDetailsForm } from './forms/ScammerDetailsForm'
import { Layout } from './components/layout'
import { getDoneForms } from './utils/queriesAndMutations'
import { BackButton } from './components/backbutton'
import { Stack, Box } from '@chakra-ui/core'

export const ScammerDetailsPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />
        <Stack spacing={10} shouldWrapChildren>
          <BackButton route="/whathappened">
            <Trans id="scammerDetail.backButton" />
          </BackButton>

          <Stack spacing={4}>
            <Steps activeStep={3} totalSteps={6} />

            <H1>
              <Trans id="scammerDetail.title" />
            </H1>
          </Stack>
          <Box>
            <P>
              <Trans id="scammerDetail.intro" />
            </P>
            <P>
              <Trans id="scammerDetail.details" />
            </P>
            <Ul>
              <Li>
                <Trans id="scammerDetail.detail1" />
              </Li>{' '}
              <Li>
                <Trans id="scammerDetail.detail2" />
              </Li>
              <Li>
                <Trans id="scammerDetail.detail3" />
              </Li>
              <Li>
                <Trans id="scammerDetail.detail4" />
              </Li>
            </Ul>
          </Box>

          <ScammerDetailsForm
            onSubmit={(client, data) => {
              client.writeData({
                data: { scammerDetails: JSON.stringify(data) },
              })
              history.push(getDoneForms(client) ? '/confirmation' : '/impact')
            }}
          />
        </Stack>
      </Layout>
    )}
  />
)
