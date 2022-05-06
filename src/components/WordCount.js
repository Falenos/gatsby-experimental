import React from 'react'
import PropTypes from 'prop-types'

const WordCount = ({ text }) => {
  return (
    <div>{text ? text.trim().split(' ').length : 0}</div>
  )
}

WordCount.propTypes = {
  text: PropTypes.string,
}

WordCount.defaultProp = {
  text: '',
}

export default WordCount