import React from 'react'
import SortLink from '../containers/SortLink'
import { SortingDirections } from '../actions'

const Header = () => (
  <div>
    <span>Sort my doges: </span>
    <SortLink direction={SortingDirections.ASCENDING}>A-Z</SortLink>
    <SortLink direction={SortingDirections.DESCENDING}>Z-A</SortLink>
  </div>
)

export default Header
