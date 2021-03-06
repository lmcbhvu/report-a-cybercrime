/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { Icon } from '@chakra-ui/core'
import { Link } from '../link'
import PropTypes from 'prop-types'
import { Link as RoutedLink } from 'react-router-dom'

export const BackButton = ({ route = '', children }) => (
  <Link
    as={RoutedLink}
    to={route}
    textAlign="left"
    d="flex"
    alignItems="center"
  >
    <Icon name="chevron-left" />
    {children}
  </Link>
)

BackButton.propTypes = {
  route: PropTypes.string,
  children: PropTypes.any,
}
