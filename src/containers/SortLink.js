import { connect } from 'react-redux'
import { setSortingDirection } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.direction === state.sorting
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSortingDirection(ownProps.direction))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link)
