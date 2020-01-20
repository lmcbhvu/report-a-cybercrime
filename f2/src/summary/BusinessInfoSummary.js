/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'

export const BusinessInfoSummary = props => {
  const [data] = useStateValue()

  const businessInfo = {
    ...testdata.formData.businessInfo,
    ...data.formData.businessInfo,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.businessInfo.business" />
        </div>
      ) : null}

      <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
        <Flex align="baseline">
          <H2>
            <Trans id="confirmationPage.businessInfo.title" />
          </H2>
          <EditButton path="/business" label="Edit affected business assets" />
        </Flex>

        <Stack as="dl" spacing={4} shouldWrapChildren>
          <DescriptionListItem
            descriptionTitle="confirmationPage.businessInfo.business"
            description={businessInfo.business}
          />
        </Stack>
      </Stack>
    </React.Fragment>
  )
}