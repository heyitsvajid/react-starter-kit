import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SampleComponent extends React.Component {
  componentDidMount() {
    console.log('Component did mount.')
  }

  render() {
    return (
      <p>
        Redux connection in sample component:{' '}
        {this.props.SAMPLE_REDUX_KEY ? this.props.SAMPLE_REDUX_KEY : ''}
      </p>
    )
  }
}

const mapStateToProps = (state) => ({
  SAMPLE_REDUX_KEY: state.SAMPLE_REDUX_KEY,
})

SampleComponent.propTypes = {
  SAMPLE_REDUX_KEY: PropTypes.string,
}

export default connect(mapStateToProps)(SampleComponent)
